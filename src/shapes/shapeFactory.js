/**
 * shapes/shapeFactory.js
 * Creates Three.js sprites from PNG files with intelligent selection
 *
 * This file:
 * - Tracks which PNGs have been used to avoid duplicates
 * - Creates Three.js sprites with proper positioning and scaling
 * - Manages the cycling through all PNGs before duplicating
 * - Adds velocity to sprites
 */

import * as THREE from 'three';
import { getPngByIndex, flowerTextMap } from './pngImports.js';

export class ShapeFactory {
  constructor(targetPngIndex, targetPngUrl) {
    this.targetPngIndex = targetPngIndex;
    this.targetPngUrl = targetPngUrl;
    this.usedPngIndices = new Set();

    // Mark the target PNG as used
    this.usedPngIndices.add(targetPngIndex);
  }

  // Get a random unused PNG index, different from the target
  getRandomUnusedPngIndex() {
    const totalPngs = Object.keys(flowerTextMap).length;

    // If we've used all PNGs, reset the used set (keeping only the target)
    if (this.usedPngIndices.size >= totalPngs) {
      const targetIndex = this.targetPngIndex;
      this.usedPngIndices.clear();
      this.usedPngIndices.add(targetIndex);
      console.log('All PNGs have been used, resetting used PNG tracking');
    }

    // Find an unused PNG
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * totalPngs);
    } while (
      randomIndex === this.targetPngIndex ||
      this.usedPngIndices.has(randomIndex)
    );

    // Mark it as used
    this.usedPngIndices.add(randomIndex);
    return randomIndex;
  }

  // Get PNG by index
  getPngByIndex(index) {
    return getPngByIndex(index);
  }

  // Create a sprite using a PNG
  async createSprite(isTarget, boundarySizeX, scaleFactor) {
    // AI-Generated: Complex sprite creation system with dynamic scaling, texture handling, and position management
    // Determine which PNG to use
    let pngUrl;

    if (isTarget) {
      // Use the target PNG
      pngUrl = this.targetPngUrl;
    } else {
      // Get an unused PNG index
      const randomIndex = this.getRandomUnusedPngIndex();
      pngUrl = this.getPngByIndex(randomIndex);

      // Log for debugging
      console.log(
        `Using PNG #${randomIndex}, unused PNGs remaining: ${
          Object.keys(flowerTextMap).length - this.usedPngIndices.size
        }`
      );
    }

    // Create texture from PNG
    const textureLoader = new THREE.TextureLoader();
    const texture = await textureLoader.loadAsync(pngUrl);
    // console.log('Texture loaded:', { url: pngUrl, width: texture.image.width, height: texture.image.height });

    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 1.0,
      depthTest: false,
      depthWrite: false
    });

    const sprite = new THREE.Sprite(material);
    sprite.renderOrder = 1;
    sprite.visible = true;

    // Random position within boundaries
    const x = (Math.random() - 0.5) * boundarySizeX;
    const y = (Math.random() - 0.5) * boundarySizeX;
    sprite.position.set(x, y, 0);
    // console.log('Sprite positioned:', { x, y, isTarget });

    // Use provided scale factor or default
    let scale;

    if (scaleFactor !== undefined) {
      // Use the provided scale factor
      scale = scaleFactor;
    } else {
      // Use default random scaling as fallback
      scale = 0.5 + Math.random() * 0.5;
    }

    // Add slight variation for non-targets to make them less uniform
    if (!isTarget && scaleFactor !== undefined) {
      // Add up to 20% random variation to non-target shapes
      const variation = 1.0 + (Math.random() * 0.4 - 0.2);
      scale *= variation;
    }

    // Adjust scale based on texture size
    const textureAspect = texture.image.width / texture.image.height;
    const baseScale = 0.5; // Increased base scale factor
    scale *= baseScale;

    // Set sprite scale
    sprite.scale.set(scale * textureAspect, scale, 1);
    // console.log('Sprite scaled:', { scale, textureAspect, isTarget });

    return sprite;
  }

  // Create random velocity
  createVelocity() {
    // Create random velocity with reduced speed
    const speed = 0.05; // Reduced speed for slower movement
    const x = (Math.random() - 0.5) * speed;
    const y = (Math.random() - 0.5) * speed;
    const velocity = new THREE.Vector3(x, y, 0);
    // console.log('Created velocity:', { x, y });
    return velocity;
  }
}