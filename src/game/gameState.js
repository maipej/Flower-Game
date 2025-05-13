/**
 * game/gameState.js
 * Manages the state of the game including timing, win condition, and target sprite
 *
 * This file:
 * - Tracks whether the game has been won
 * - Manages elapsed time since game start
 * - Keeps reference to the target sprite
 * - Handles marking the game as won (highlighting target)
 */

import * as THREE from 'three';

export class GameState {
  constructor(targetSprite, targetScale) {
    this.gameWon = false;
    this.startTime = 0;
    this.elapsedTime = 0;
    this.targetSprite = targetSprite;
    this.targetScale = targetScale;
    this.misses = 0;
  }

  startGame() {
    this.startTime = Date.now();
  }

  updateElapsedTime() {
    if (!this.gameWon && this.startTime > 0) {
      this.elapsedTime = (Date.now() - this.startTime) / 1000;
    }
  }

  markAsWon() {
    this.gameWon = true;

    // Highlight the target sprite
    if (this.targetSprite.material instanceof THREE.SpriteMaterial) {
      this.targetSprite.material.color.set(0xffff00); // Yellow highlight
    }

    // Make it larger so it's more visible
    this.targetSprite.scale.set(
      this.targetScale * 1.2,
      this.targetScale * 1.2,
      1
    );
  }

  incrementMisses() {
    this.misses++;
  }

  getMisses() {
    return this.misses;
  }
}