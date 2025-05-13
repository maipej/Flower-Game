/**
 * shapes/svgHelper.js
 * Utility functions for processing SVG files
 *
 * This file:
 * - Normalizes SVG strings to ensure proper format
 * - Extracts viewBox and content from SVG strings
 * - Converts SVGs to data URLs and images
 * - Provides functions to convert SVGs to canvas elements
 * - Handles random fill color application to SVGs
 */

// Convert SVG string to a standardized format
export function normalizeSvgString(svgString) {
  // Check if the string already has SVG tags
  if (svgString.trim().toLowerCase().startsWith('<svg')) {
    return svgString;
  }

  // Add SVG tags if they're missing
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${svgString}</svg>`;
}

// Extract viewBox from SVG string
export function extractViewBox(svgString) {
  const defaultViewBox = '0 0 100 100';

  // Try to find viewBox attribute
  const viewBoxMatch = svgString.match(/viewBox=["']([^"']*)["']/i);
  if (viewBoxMatch && viewBoxMatch[1]) {
    return viewBoxMatch[1];
  }

  // Try to find width/height attributes as fallback
  const widthMatch = svgString.match(/width=["']([^"']*)["']/i);
  const heightMatch = svgString.match(/height=["']([^"']*)["']/i);

  if (widthMatch && widthMatch[1] && heightMatch && heightMatch[1]) {
    const width = parseFloat(widthMatch[1]);
    const height = parseFloat(heightMatch[1]);

    if (!isNaN(width) && !isNaN(height)) {
      return `0 0 ${width} ${height}`;
    }
  }

  return defaultViewBox;
}

// Extract content between SVG tags
export function extractSvgContent(svgString) {
  if (!svgString.includes('<svg')) {
    return svgString;
  }

  const openingTagEnd = svgString.indexOf('>', svgString.indexOf('<svg')) + 1;
  const closingTagStart = svgString.lastIndexOf('</svg>');

  if (closingTagStart > openingTagEnd) {
    return svgString.substring(openingTagEnd, closingTagStart);
  }

  return svgString;
}

// Create an SVG element with proper attributes
export function createSvgElement(svgString, width, height) {
  const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgElement.setAttribute('width', width.toString());
  svgElement.setAttribute('height', height.toString());

  // Get viewBox
  const viewBox = extractViewBox(svgString);
  svgElement.setAttribute('viewBox', viewBox);

  // Get content
  const content = extractSvgContent(svgString);
  svgElement.innerHTML = content;

  return svgElement;
}

// Convert SVG string to data URL for images
export function svgToDataUrl(svgString) {
  // Normalize SVG string
  const normalizedSvg = normalizeSvgString(svgString);

  // Create a Blob from the SVG string
  const blob = new Blob([normalizedSvg], { type: 'image/svg+xml' });

  // Create a data URL
  return URL.createObjectURL(blob);
}

// Create an image element from SVG string
export function svgToImage(svgString) {
  return new Promise((resolve, reject) => {
    const dataUrl = svgToDataUrl(svgString);

    const img = new Image();
    img.onload = () => {
      resolve(img);
      URL.revokeObjectURL(dataUrl);
    };
    img.onerror = (error) => {
      reject(error);
      URL.revokeObjectURL(dataUrl);
    };

    img.src = dataUrl;
  });
}

// Set random fill color for an SVG
export function setRandomSvgFill(svgElement) {
  // Array of bright colors
  const colors = [
    '#FF5252', // Red
    '#FF4081', // Pink
    '#7C4DFF', // Purple
    '#536DFE', // Indigo
    '#448AFF', // Blue
    '#40C4FF', // Light Blue
    '#18FFFF', // Cyan
    '#64FFDA', // Teal
    '#69F0AE', // Green
    '#B2FF59', // Light Green
    '#EEFF41', // Lime
    '#FFFF00', // Yellow
    '#FFD740', // Amber
    '#FFAB40', // Orange
    '#FF6E40'  // Deep Orange
  ];

  // Select a random color
  const color = colors[Math.floor(Math.random() * colors.length)];

  // Find all elements with fill attributes and change them
  const elements = svgElement.querySelectorAll('[fill]');
  elements.forEach(el => {
    el.setAttribute('fill', color);
  });

  // If no elements had fill, try to add fill to paths, circles, rects, etc.
  if (elements.length === 0) {
    const shapes = svgElement.querySelectorAll('path, circle, rect, polygon, ellipse');
    shapes.forEach(shape => {
      shape.setAttribute('fill', color);
    });
  }
}

// Create a canvas from SVG
export async function svgToCanvas(svgString, width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Could not get canvas context');
  }

  try {
    const img = await svgToImage(svgString);
    ctx.drawImage(img, 0, 0, width, height);
    return canvas;
  } catch (error) {
    console.error('Error converting SVG to canvas:', error);

    // Fall back to a simple colored circle
    ctx.fillStyle = '#FF5252';
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, width / 2 - 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.stroke();

    return canvas;
  }
}