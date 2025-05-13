/**
 * main.js
 * Entry point for the Flower Finder game
 *
 * This file:
 * - Initializes the game with configuration settings
 * - Calculates optimal number of shapes based on available PNGs
 * - Sets scale factors for target and non-target shapes
 * - Starts the game application
 */

import './style.css';
import { Game } from './game/game.js';
import { IntroScreen } from './game/introScreen.js';
import { getRandomPng } from './shapes/pngImports.js';

// Get the target PNG first
const { png: targetPng, index: targetPngIndex, flowerInfo } = getRandomPng();

// Calculate boundary size based on window size and aspect ratio
function getBoundarySizes() {
  const aspect = window.innerWidth / window.innerHeight;
  // Choose a base size (e.g., 12 units for width)
  const baseWidth = 20;
  return {
    boundarySizeX: baseWidth,
    boundarySizeY: baseWidth / aspect,
  };
}

let { boundarySizeX, boundarySizeY } = getBoundarySizes();

// Create intro screen and start game when button is clicked
const introScreen = new IntroScreen(() => {
  console.log('Intro screen callback triggered');
  // Start the game animation
  game.start();
  console.log('Game started: Find the target flower shown in the top-left card');
}, flowerInfo.pngUrl, flowerInfo);

// Create game instance with configuration, passing introScreen
const game = new Game(
  {
    numShapes: 100, // Number of non-target shapes
    boundarySizeX,
    boundarySizeY,
    targetScaleFactor: 5, // Scale factor for the target shape
    nonTargetScaleFactor: 5, // Scale factor for non-target shapes
  },
  flowerInfo.pngUrl,
  targetPngIndex,
  introScreen
);

// Update boundaries on window resize
dispatchEvent(new Event('resize'));
window.addEventListener('resize', () => {
  const sizes = getBoundarySizes();
  game.config.boundarySizeX = sizes.boundarySizeX;
  game.config.boundarySizeY = sizes.boundarySizeY;
});