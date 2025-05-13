/**
 * renderer/animation.js
 * Manages the animation loop and sprite movement
 *
 * This file:
 * - Runs the requestAnimationFrame loop
 * - Updates sprite positions and velocities
 * - Handles bouncing off boundaries
 * - Applies rotation to sprites
 * - Makes target sprite pulse when found
 */

import * as THREE from 'three';
import { SceneManager } from './sceneManager.js';

export class Animation {
  constructor(
    sceneManager,
    gameState,
    shapes,
    boundarySizeX,
    boundarySizeY,
    updateTimerCallback
  ) {
    this.sceneManager = sceneManager;
    this.gameState = gameState;
    this.shapes = shapes;
    this.boundarySizeX = boundarySizeX;
    this.boundarySizeY = boundarySizeY;
    this.updateTimerCallback = updateTimerCallback;
    this.isStarted = false;

    // Bind the animate method to this instance
    this.animate = this.animate.bind(this);
  }

  // Public getter for animation state
  get isAnimationStarted() {
    return this.isStarted;
  }

  start() {
    console.log('Starting animation...');
    console.log('Number of shapes:', this.shapes.length);
    console.log('First shape velocity:', this.shapes[0]?.velocity);
    console.log('First shape position:', this.shapes[0]?.sprite.position);

    if (this.isStarted) {
      console.warn('Animation already started');
      return;
    }
    console.log('Starting animation loop');
    this.isStarted = true;
    this.animate();
    console.log('Animation started successfully');
  }

  stop() {
    console.log('Stopping animation loop');
    this.isStarted = false;
  }

  animate() {
    if (!this.isStarted) {
      console.log('Animation stopped');
      return;
    }

    // Update timer
    this.updateTimerCallback();

    // Update shape positions
    this.updateShapes();

    // Render the scene
    this.sceneManager.render();

    // Request next frame
    requestAnimationFrame(this.animate.bind(this));
  }

  updateShapes() {
    // AI-Generated: Complex physics-based animation system with boundary collision and visual effects
    this.shapes.forEach((shape, index) => {
      const { sprite, velocity } = shape;

      // Skip movement of target sprite if game is won
      if (this.gameState.gameWon && sprite === this.gameState.targetSprite) {
        // Make target sprite pulse when found
        const pulseFactor = 1 + 0.1 * Math.sin(Date.now() * 0.005);
        sprite.scale.set(
          this.gameState.targetScale * pulseFactor,
          this.gameState.targetScale * pulseFactor,
          1
        );
        return;
      }

      // Log position before update
      const oldPosition = sprite.position.clone();

      // Update position
      sprite.position.add(velocity);

      // Log position changes for debugging
      // console.log(`Sprite ${index} position update:`, {
      //   old: { x: oldPosition.x, y: oldPosition.y },
      //   new: { x: sprite.position.x, y: sprite.position.y },
      //   velocity: { x: velocity.x, y: velocity.y }
      // });

      // Bounce off boundaries
      const halfBoundaryX = this.boundarySizeX / 2;
      const halfBoundaryY = this.boundarySizeY / 2;

      if (Math.abs(sprite.position.x) > halfBoundaryX) {
        velocity.x *= -1;
        sprite.position.x = Math.sign(sprite.position.x) * halfBoundaryX;
        // console.log(`Sprite ${index} bounced off X boundary`);
      }

      if (Math.abs(sprite.position.y) > halfBoundaryY) {
        velocity.y *= -1;
        sprite.position.y = Math.sign(sprite.position.y) * halfBoundaryY;
        // console.log(`Sprite ${index} bounced off Y boundary`);
      }

      // Add slight rotation for visual interest
      if (sprite.material instanceof THREE.SpriteMaterial) {
        const rotationDirection = index % 2 === 0 ? 1 : -1;
        sprite.material.rotation += 0.005 * rotationDirection;
      }
    });
  }
}