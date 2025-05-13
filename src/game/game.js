/**
 * game/game.js
 * Main game class that orchestrates the flower finding game
 *
 * This file:
 * - Manages the game initialization process
 * - Handles PNG loading and target selection
 * - Creates sprites using the ShapeFactory
 * - Sets up the game state and animation loop
 * - Manages click detection and win conditions
 */

import * as THREE from 'three';
import { SceneManager } from '../renderer/sceneManager.js';
import { Animation } from '../renderer/animation.js';
import { ShapeFactory } from '../shapes/shapeFactory.js';
import { GameState } from './gameState.js';
import { GameUI } from './gameUI.js';
import { IntroScreen } from './introScreen.js';

export class Game {
  constructor(
    config = {
      numShapes: 1000,
      boundarySizeX: 8,
      boundarySizeY: 6,
      targetScaleFactor: 1,
      nonTargetScaleFactor: 0.7,
    },
    targetPngUrl,
    targetPngIndex,
    introScreen
  ) {
    this.config = config;
    this.targetPngUrl = targetPngUrl;
    this.targetPngIndex = targetPngIndex;
    this.introScreen = introScreen;
    this.sceneManager = new SceneManager();
    this.gameUI = new GameUI();
    this.shapes = [];
    this.isInitialized = false;
    this.isStarted = false;
    this.targetSpriteId = '';

    // Start initialization
    this.initializeGame().catch(error => {
      console.error('Failed to initialize game:', error);
      this.gameUI.showErrorMessage('Failed to initialize game. Please refresh the page.');
    });
  }

  start() {
    if (!this.isInitialized) {
      console.warn('Game not initialized yet');
      return;
    }

    if (this.isStarted) {
      console.warn('Game already started');
      return;
    }

    console.log('Starting game animation');
    this.isStarted = true;
    this.gameState.startGame();

    // Log animation state before starting
    console.log('Animation state before start:', {
      isStarted: this.animation.isAnimationStarted,
      shapes: this.shapes.length,
      hasVelocities: this.shapes.every(shape => shape.velocity.length() > 0)
    });

    this.animation.start();

    // Log animation state after starting
    console.log('Animation state after start:', {
      isStarted: this.animation.isAnimationStarted,
      shapes: this.shapes.length,
      hasVelocities: this.shapes.every(shape => shape.velocity.length() > 0)
    });
  }

  async initializeGame() {
    console.log('Initializing game...');

    // Initialize UI first
    this.gameUI.initialize();
    console.log('UI initialized');

    // Create sprites
    await this.createSprites();
    console.log('Sprites created:', this.shapes.length);

    // Initialize game state
    this.gameState = new GameState(this.shapes[0].sprite, this.config.targetScaleFactor);
    console.log('Game state initialized');

    // Initialize animation
    this.animation = new Animation(
      this.sceneManager,
      this.gameState,
      this.shapes,
      this.config.boundarySizeX,
      this.config.boundarySizeY,
      this.updateTimer.bind(this)
    );
    console.log('Animation initialized');

    // Add click event listener
    this.sceneManager.addClickEventListener(this.handleClick.bind(this));
    console.log('Click event listener added');

    // Mark as initialized
    this.isInitialized = true;
    console.log('Game initialization complete');
  }

  async createSprites() {
    // Show loading message
    this.gameUI.showLoadingMessage('Loading flowers...');

    try {
      // Find the index of the target PNG
      if (this.targetPngIndex === -1) {
        throw new Error('Target PNG not found in available PNGs');
      }

      // Display target PNG in UI
      this.gameUI.displayTargetPng(this.targetPngUrl);

      // Create shape factory
      this.shapeFactory = new ShapeFactory(
        this.targetPngIndex,
        this.targetPngUrl
      );

      // Create target sprite
      const targetSprite = await this.shapeFactory.createSprite(
        true,
        this.config.boundarySizeX,
        this.config.targetScaleFactor
      );

      // Store target sprite ID
      this.targetSpriteId = targetSprite.uuid;

      // Create velocity for target sprite
      const targetVelocity = this.shapeFactory.createVelocity();
      console.log('Target sprite velocity:', targetVelocity);

      // Add target sprite to shapes array
      this.shapes.push({
        sprite: targetSprite,
        velocity: targetVelocity,
        isTarget: true,
      });

      // Add target sprite to scene
      this.sceneManager.addToScene(targetSprite);

      // Create non-target sprites
      for (let i = 0; i < this.config.numShapes; i++) {
        await this.createNonTargetSprite(i);
      }

      // Log all velocities
      console.log('All sprite velocities:', this.shapes.map(shape => ({
        isTarget: shape.isTarget,
        velocity: shape.velocity
      })));

      // Hide loading message
      this.gameUI.hideLoadingMessage();

      // Force initial render
      this.sceneManager.render();
    } catch (error) {
      console.error('Error initializing game:', error);
      this.gameUI.showErrorMessage(
        'Failed to initialize game. Please refresh the page.'
      );
    }
  }

  async createNonTargetSprite(index) {
    try {
      const sprite = await this.shapeFactory.createSprite(
        false,
        this.config.boundarySizeX,
        this.config.nonTargetScaleFactor
      );

      // Create velocity for non-target sprite
      const velocity = this.shapeFactory.createVelocity();
      // console.log(`Non-target sprite ${index} velocity:`, velocity);

      // Add sprite to shapes array
      this.shapes.push({
        sprite,
        velocity,
        isTarget: false,
      });

      // Add sprite to scene
      this.sceneManager.addToScene(sprite);
    } catch (error) {
      console.error(`Error creating non-target sprite ${index}:`, error);
    }
  }

  updateTimer() {
    this.gameState.updateElapsedTime();
    this.gameUI.updateScore(this.gameState.elapsedTime);
  }

  handleClick(event) {
    // AI-Generated: Complex click detection and collision handling with sprite boundaries
    if (!this.isInitialized || !this.isStarted) return;

    // Get mouse position in normalized device coordinates
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Check if any sprite was clicked
    const clickedSprite = this.shapes.find((shape) => {
      const sprite = shape.sprite;
      const position = sprite.position.clone();
      const scale = sprite.scale.clone();

      // Convert sprite position to screen coordinates
      position.project(this.sceneManager.camera);
      const screenX = (position.x * 0.5 + 0.5) * window.innerWidth;
      const screenY = (-position.y * 0.5 + 0.5) * window.innerHeight;

      // Check if click is within sprite bounds
      const spriteWidth = scale.x * 100; // Approximate sprite width
      const spriteHeight = scale.y * 100; // Approximate sprite height

      return (
        event.clientX >= screenX - spriteWidth / 2 &&
        event.clientX <= screenX + spriteWidth / 2 &&
        event.clientY >= screenY - spriteHeight / 2 &&
        event.clientY <= screenY + spriteHeight / 2
      );
    });

    if (clickedSprite) {
      if (clickedSprite.isTarget) {
        this.handleWin();
      } else {
        this.handleWrongClick();
      }
    }
  }

  handleWin() {
    this.gameState.markAsWon();
    // this.gameState.reverseTransition();
    this.animation.stop();
    this.introScreen.reverseTransition();
    // this.gameUI.showWinMessage(this.gameState.elapsedTime);
  }

  handleWrongClick() {
    this.gameState.incrementWrongClicks();
    this.gameUI.updateWrongClicks(this.gameState.wrongClicks);
  }
}