/**
 * shapes/svgImports.js
 * Direct imports of all SVG files using Vite's import system
 *
 * This file:
 * - Imports all SVG files individually with ?raw parameter
 * - Stores SVGs in arrays and maps for easy access
 * - Provides utility functions to get SVGs by index
 * - Implements random SVG selection
 * - Logs debug information about SVG loading
 */

// Import all SVGs directly - Vite will handle these properly
import svg1 from '../assets/SVGs/1 13.svg?raw';
import svg2 from '../assets/SVGs/10 2.svg?raw';
import svg3 from '../assets/SVGs/11 1.svg?raw';
import svg4 from '../assets/SVGs/12 2.svg?raw';
import svg5 from '../assets/SVGs/13 1.svg?raw';
import svg6 from '../assets/SVGs/130.svg?raw';
import svg7 from '../assets/SVGs/135.svg?raw';
import svg8 from '../assets/SVGs/136.svg?raw';
import svg9 from '../assets/SVGs/137.svg?raw';
import svg10 from '../assets/SVGs/139.svg?raw';
import svg11 from '../assets/SVGs/15 1.svg?raw';
import svg12 from '../assets/SVGs/17.svg?raw';
import svg13 from '../assets/SVGs/18.svg?raw';
import svg14 from '../assets/SVGs/23 1.svg?raw';
import svg15 from '../assets/SVGs/24.svg?raw';
import svg16 from '../assets/SVGs/25 3.svg?raw';
import svg17 from '../assets/SVGs/26.svg?raw';
import svg18 from '../assets/SVGs/27 1.svg?raw';
import svg19 from '../assets/SVGs/28.svg?raw';
import svg20 from '../assets/SVGs/29.svg?raw';
import svg21 from '../assets/SVGs/3 10.svg?raw';
import svg22 from '../assets/SVGs/31.svg?raw';
import svg23 from '../assets/SVGs/32.svg?raw';
import svg24 from '../assets/SVGs/33.svg?raw';
import svg25 from '../assets/SVGs/34.svg?raw';
import svg26 from '../assets/SVGs/35.svg?raw';
import svg27 from '../assets/SVGs/36.svg?raw';
import svg28 from '../assets/SVGs/37.svg?raw';
import svg29 from '../assets/SVGs/38.svg?raw';
import svg30 from '../assets/SVGs/39.svg?raw';
import svg31 from '../assets/SVGs/4.svg?raw';
import svg32 from '../assets/SVGs/40.svg?raw';
import svg33 from '../assets/SVGs/41 1.svg?raw';
import svg34 from '../assets/SVGs/42.svg?raw';
import svg35 from '../assets/SVGs/43 1.svg?raw';
import svg36 from '../assets/SVGs/44 1.svg?raw';
import svg37 from '../assets/SVGs/8 1.svg?raw';

// Store all SVGs in an array for easy access
export const svgStrings = [
  svg1, svg2, svg3, svg4, svg5, svg6, svg7, svg8, svg9, svg10,
  svg11, svg12, svg13, svg14, svg15, svg16, svg17, svg18, svg19, svg20,
  svg21, svg22, svg23, svg24, svg25, svg26, svg27, svg28, svg29, svg30,
  svg31, svg32, svg33, svg34, svg35, svg36, svg37
];

// Map each imported SVG to its path for reference
export const svgPathMap = {
  '../assets/SVGs/1 13.svg': svg1,
  '../assets/SVGs/10 2.svg': svg2,
  '../assets/SVGs/11 1.svg': svg3,
  '../assets/SVGs/12 2.svg': svg4,
  '../assets/SVGs/13 1.svg': svg5,
  '../assets/SVGs/130.svg': svg6,
  '../assets/SVGs/135.svg': svg7,
  '../assets/SVGs/136.svg': svg8,
  '../assets/SVGs/137.svg': svg9,
  '../assets/SVGs/139.svg': svg10,
  '../assets/SVGs/15 1.svg': svg11,
  '../assets/SVGs/17.svg': svg12,
  '../assets/SVGs/18.svg': svg13,
  '../assets/SVGs/23 1.svg': svg14,
  '../assets/SVGs/24.svg': svg15,
  '../assets/SVGs/25 3.svg': svg16,
  '../assets/SVGs/26.svg': svg17,
  '../assets/SVGs/27 1.svg': svg18,
  '../assets/SVGs/28.svg': svg19,
  '../assets/SVGs/29.svg': svg20,
  '../assets/SVGs/3 10.svg': svg21,
  '../assets/SVGs/31.svg': svg22,
  '../assets/SVGs/32.svg': svg23,
  '../assets/SVGs/33.svg': svg24,
  '../assets/SVGs/34.svg': svg25,
  '../assets/SVGs/35.svg': svg26,
  '../assets/SVGs/36.svg': svg27,
  '../assets/SVGs/37.svg': svg28,
  '../assets/SVGs/38.svg': svg29,
  '../assets/SVGs/39.svg': svg30,
  '../assets/SVGs/4.svg': svg31,
  '../assets/SVGs/40.svg': svg32,
  '../assets/SVGs/41 1.svg': svg33,
  '../assets/SVGs/42.svg': svg34,
  '../assets/SVGs/43 1.svg': svg35,
  '../assets/SVGs/44 1.svg': svg36,
  '../assets/SVGs/8 1.svg': svg37
};

// The file paths as an array
export const svgFilePaths = Object.keys(svgPathMap);

// Get an SVG string by index
export function getSvgByIndex(index) {
  if (index >= 0 && index < svgStrings.length) {
    return svgStrings[index];
  }
  console.error(`SVG index out of range: ${index}`);
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="red" stroke="white" stroke-width="2" /></svg>';
}

// Get a random SVG
export function getRandomSvg() {
  const index = Math.floor(Math.random() * svgStrings.length);
  return { svg: svgStrings[index], index };
}