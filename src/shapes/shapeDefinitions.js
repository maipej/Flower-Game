/**
 * shapes/shapeDefinitions.js
 * Provides interface to the SVG imports and utility functions
 *
 * This file:
 * - Re-exports SVG strings and functions from svgImports
 * - Provides color palette for the game
 * - Offers utility functions for getting SVGs by index
 * - Implements preloading functionality (now a no-op)
 */

// Import directly from our svgImports file
import {
  svgStrings as importedSvgStrings,
  getSvgByIndex as getImportedSvg,
  getRandomSvg as getRandomImportedSvg,
} from './svgImports.js';

// Re-export svgStrings
export const svgStrings = importedSvgStrings;

// Cache for loaded SVGs - we won't need this as much since we're importing directly
export const svgCache = {};

// Re-export the functions
export const getSvgByIndex = getImportedSvg;
export const getRandomSvg = getRandomImportedSvg;

// Preload all SVGs - this is now a no-op since all SVGs are imported directly
export async function preloadAllSvgs() {
  console.log(
    `SVGs are already preloaded as imports - ${svgStrings.length} SVGs available`
  );
  return Promise.resolve();
}