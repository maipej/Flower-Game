/**
 * shapes/pngImports.js
 * Direct imports of all PNG files using Vite's import system
 *
 * This file:
 * - Imports all PNG files individually
 * - Stores PNGs in arrays and maps for easy access
 * - Provides utility functions to get PNGs by index
 * - Implements random PNG selection
 */

// Import all PNGs directly - Vite will handle these properly
// import png1 from '../assets/flower-cuts/1.png';
import png2 from '../assets/flower-cuts/3_2.png';
import png3 from '../assets/flower-cuts/4.png';
import png4 from '../assets/flower-cuts/9.png';
import png5 from '../assets/flower-cuts/10.png';
import png6 from '../assets/flower-cuts/11.png';
import png7 from '../assets/flower-cuts/12.png';
import png8 from '../assets/flower-cuts/15.png';
import png9 from '../assets/flower-cuts/16.png';
import png10 from '../assets/flower-cuts/18.png';
import png11 from '../assets/flower-cuts/19.png';
import png12 from '../assets/flower-cuts/25.png';
import png13 from '../assets/flower-cuts/27.png';
import png14 from '../assets/flower-cuts/29.png';
import png15 from '../assets/flower-cuts/30.png';
import png16 from '../assets/flower-cuts/31.png';
import png17 from '../assets/flower-cuts/33.png';
import png18 from '../assets/flower-cuts/38.png';
import png19 from '../assets/flower-cuts/43.png';
import png20 from '../assets/flower-cuts/P1.png';
import png21 from '../assets/flower-cuts/P2.png';
import png22 from '../assets/flower-cuts/R1.png';
import png23 from '../assets/flower-cuts/R2.png';
import png24 from '../assets/flower-cuts/R3.png';
import png25 from '../assets/flower-cuts/W3.png';
import png26 from '../assets/flower-cuts/W4.png';
import png27 from '../assets/flower-cuts/W5.png';
import png28 from '../assets/flower-cuts/W6.png';
import png29 from '../assets/flower-cuts/W7.png';
import png30 from '../assets/flower-cuts/W8.png';
import png31 from '../assets/flower-cuts/W9.png';
import png32 from '../assets/flower-cuts/Y1.png';
import png33 from '../assets/flower-cuts/Y2.png';
import png34 from '../assets/flower-cuts/Y3.png';
import png35 from '../assets/flower-cuts/Y4.png';
import png36 from '../assets/flower-cuts/Y5.png';
import png37 from '../assets/flower-cuts/Y6.png';
import png38 from '../assets/flower-cuts/Y8.png';
import png39 from '../assets/flower-cuts/Y9.png';

// Map each flower to its corresponding text
export const flowerTextMap = {
  '/src/assets/flower-cuts/P1.png': {
    name: "Tulip",
    bloomPeriod: "Spring",
    growingConditions: "Full sun, well-drained soil, cold winter dormancy",
    pngUrl: png20
  },
  '/src/assets/flower-cuts/3_2.png': {
    name: "Bougainvillea",
    bloomPeriod: "Year-round in warm climates",
    growingConditions: "Full sun, drought tolerant, warm temperatures",
    pngUrl: png2
  },
  '/src/assets/flower-cuts/4.png': {
    name: "Tulip",
    bloomPeriod: "Spring",
    growingConditions: "Full sun, well-drained soil, cold winter dormancy",
    pngUrl: png3
  },
  '/src/assets/flower-cuts/R3.png': {
    name: "Anemone",
    bloomPeriod: "Spring/Fall",
    growingConditions: "Full to partial sun, moist well-drained soil",
    pngUrl: png24
  },
  '/src/assets/flower-cuts/P2.png': {
    name: "Cyclamen",
    bloomPeriod: "Winter-Spring",
    growingConditions: "Partial shade, well-drained soil, cool temperatures",
    pngUrl: png21
  },
  '/src/assets/flower-cuts/R2.png': {
    name: "Poppy",
    bloomPeriod: "Spring-Summer",
    growingConditions: "Full sun, well-drained soil, drought tolerant once established",
    pngUrl: png23
  },
  '/src/assets/flower-cuts/Y1.png': {
    name: "Tulip",
    bloomPeriod: "Late Spring",
    growingConditions: "Full sun, well-drained soil, cold winter dormancy",
    pngUrl: png32
  },
  '/src/assets/flower-cuts/W9.png': {
    name: "Blue Star",
    bloomPeriod: "Spring",
    growingConditions: "Full to partial sun, well-drained soil",
    pngUrl: png31
  },
  '/src/assets/flower-cuts/10.png': {
    name: "Daffodil stem end",
    bloomPeriod: "Spring",
    growingConditions: "Full to partial sun, well-drained soil",
    pngUrl: png5
  },
  '/src/assets/flower-cuts/11.png': {
    name: "Camellia",
    bloomPeriod: "Winter-Spring",
    growingConditions: "Partial shade, acidic soil, protection from harsh sun",
    pngUrl: png6
  },
  '/src/assets/flower-cuts/12.png': {
    name: "Dogwood",
    bloomPeriod: "Spring",
    growingConditions: "Partial shade, moist well-drained soil",
    pngUrl: png7
  },
  '/src/assets/flower-cuts/13.png': {
    name: "Camellia",
    bloomPeriod: "Winter-Spring",
    growingConditions: "Partial shade, acidic soil, protection from harsh sun",
    pngUrl: png7
  },
  '/src/assets/flower-cuts/Y2.png': {
    name: "Tulip",
    bloomPeriod: "Spring",
    growingConditions: "Full sun, well-drained soil, cold winter dormancy",
    pngUrl: png33
  },
  '/src/assets/flower-cuts/15.png': {
    name: "Hyacinth",
    bloomPeriod: "Early Spring",
    growingConditions: "Full sun, well-drained soil, cold winter required",
    pngUrl: png8
  },
  '/src/assets/flower-cuts/16.png': {
    name: "Lilac",
    bloomPeriod: "Spring",
    growingConditions: "Full sun, well-drained alkaline soil",
    pngUrl: png9
  },
  '/src/assets/flower-cuts/17.png': {
    name: "Cherry Blossom",
    bloomPeriod: "Spring",
    growingConditions: "Full sun, well-drained soil",
    pngUrl: png9
  },
  '/src/assets/flower-cuts/18.png': {
    name: "Hyacinth",
    bloomPeriod: "Early Spring",
    growingConditions: "Full sun, well-drained soil, cold winter required",
    pngUrl: png10
  },
  '/src/assets/flower-cuts/19.png': {
    name: "Cherry Blossom",
    bloomPeriod: "Spring",
    growingConditions: "Full sun, well-drained soil",
    pngUrl: png11
  },
  '/src/assets/flower-cuts/Y8.png': {
    name: "Yellow Tulip",
    bloomPeriod: "Spring",
    growingConditions: "Full sun, well-drained soil, requires cold dormancy period",
    pngUrl: png38
  },
  '/src/assets/flower-cuts/Y9.png': {
    name: "Double Tulip",
    bloomPeriod: "Mid-Late Spring",
    growingConditions: "Full sun, well-drained soil, requires cold winter, plant bulbs in fall",
    pngUrl: png39
  },
  '/src/assets/flower-cuts/23.png': {
    name: "Daffodil",
    bloomPeriod: "Early-Mid Spring",
    growingConditions: "Full to partial sun, well-drained soil, plant bulbs in fall",
    pngUrl: png12
  },
  '/src/assets/flower-cuts/W4.png': {
    name: "Bearded Iris",
    bloomPeriod: "Late Spring-Early Summer",
    growingConditions: "Full sun, well-drained soil, rhizomes planted shallowly",
    pngUrl: png26
  },
  '/src/assets/flower-cuts/25.png': {
    name: "Camellia",
    bloomPeriod: "Winter-Early Spring",
    growingConditions: "Partial shade, acidic soil, sheltered from harsh sun and wind",
    pngUrl: png12
  },
  '/src/assets/flower-cuts/W3.png': {
    name: "White Camellia",
    bloomPeriod: "Winter-Early Spring",
    growingConditions: "Partial shade, acidic soil, protection from harsh conditions",
    pngUrl: png25
  },
  '/src/assets/flower-cuts/27.png': {
    name: "Japanese Quince",
    bloomPeriod: "Early Spring",
    growingConditions: "Full sun to partial shade, adaptable to various soil types",
    pngUrl: png13
  },
  '/src/assets/flower-cuts/W5.png': {
    name: "Dandelion Seed Head",
    bloomPeriod: "Spring-Fall",
    growingConditions: "Highly adaptable, grows in most conditions, considered a weed",
    pngUrl: png27
  },
  '/src/assets/flower-cuts/29.png': {
    name: "Trumpet Flower",
    bloomPeriod: "Summer-Fall",
    growingConditions: "Full sun, fertile well-drained soil, protection from frost",
    pngUrl: png14
  },
  '/src/assets/flower-cuts/30.png': {
    name: "Star Magnolia",
    bloomPeriod: "Early Spring",
    growingConditions: "Full sun to partial shade, rich moist acidic soil",
    pngUrl: png15
  },
  '/src/assets/flower-cuts/31.png': {
    name: "Magnolia",
    bloomPeriod: "Early Spring",
    growingConditions: "Full sun to partial shade, rich moist acidic soil",
    pngUrl: png16
  },
  '/src/assets/flower-cuts/W8.png': {
    name: "Star Magnolia",
    bloomPeriod: "Early Spring",
    growingConditions: "Full sun to partial shade, rich moist acidic soil",
    pngUrl: png30
  },
  '/src/assets/flower-cuts/33.png': {
    name: "Lotus",
    bloomPeriod: "Summer",
    growingConditions: "Full sun, aquatic plant grown in water/mud, tropical to warm temperate",
    pngUrl: png17
  },
  '/src/assets/flower-cuts/P1.png': {
    name: "Asiatic Lily",
    bloomPeriod: "Summer",
    growingConditions: "Full sun to partial shade, well-drained rich soil",
    pngUrl: png20
  },
  '/src/assets/flower-cuts/W6.png': {
    name: "White Hydrangea",
    bloomPeriod: "Summer-Fall",
    growingConditions: "Morning sun/afternoon shade, moist rich well-drained soil",
    pngUrl: png28
  },
  '/src/assets/flower-cuts/36.png': {
    name: "Bird of Paradise",
    bloomPeriod: "Year-round in tropics, Summer in temperate zones",
    growingConditions: "Full sun, rich well-drained soil, warm temperatures",
    pngUrl: png36
  },
  '/src/assets/flower-cuts/W7.png': {
    name: "Magnolia",
    bloomPeriod: "Early Spring",
    growingConditions: "Full sun to partial shade, rich moist acidic soil",
    pngUrl: png29
  },
  '/src/assets/flower-cuts/38.png': {
    name: "Blanket Flower",
    bloomPeriod: "Summer-Fall",
    growingConditions: "Full sun, well-drained soil, drought tolerant",
    pngUrl: png18
  },
  '/src/assets/flower-cuts/Y6.png': {
    name: "Double Daffodil",
    bloomPeriod: "Early-Mid Spring",
    growingConditions: "Full to partial sun, well-drained soil, plant bulbs in fall",
    pngUrl: png37
  },
  '/src/assets/flower-cuts/Y5.png': {
    name: "Daffodil",
    bloomPeriod: "Early-Mid Spring",
    growingConditions: "Full to partial sun, well-drained soil, plant bulbs in fall",
    pngUrl: png36
  },
  '/src/assets/flower-cuts/Y3.png': {
    name: "Yellow Asiatic Lily",
    bloomPeriod: "Summer",
    growingConditions: "Full sun to partial shade, well-drained rich soil",
    pngUrl: png34
  },
  '/src/assets/flower-cuts/Y4.png': {
    name: "Sunflower",
    bloomPeriod: "Summer-Fall",
    growingConditions: "Full sun, well-drained fertile soil, regular watering",
    pngUrl: png35
  },
  '/src/assets/flower-cuts/43.png': {
    name: "Wild Rose",
    bloomPeriod: "Summer",
    growingConditions: "Full sun to partial shade, well-drained soil, moderate water",
    pngUrl: png19
  },
  '/src/assets/flower-cuts/R1.png': {
    name: "Pansy",
    bloomPeriod: "Spring, Fall (cool seasons)",
    growingConditions: "Partial sun, rich moist well-drained soil, regular watering",
    pngUrl: png22
  },
  '/src/assets/flower-cuts/9.png': {
    name: "Hyacinth",
    bloomPeriod: "Early-Mid Spring",
    growingConditions: "Full sun to partial shade, well-drained soil, planted bulbs need cold winter",
    pngUrl: png4
  }
};

// The file paths as an array
export const pngFilePaths = Object.keys(flowerTextMap);

// Function to normalize image URLs for both development and production
export function normalizeImageUrl(url) {
  // If the URL is already in the flowerTextMap format, return it
  if (flowerTextMap[url]) {
    return url;
  }

  // Extract the base filename from the production URL
  const baseFilename = url.split('/').pop().split('-')[0];

  // Find the matching key in flowerTextMap
  const matchingKey = Object.keys(flowerTextMap).find(key =>
    key.includes(baseFilename)
  );

  return matchingKey || url;
}

// New function to get the correct image URL in both development and production
export function getImageUrl(path) {
  // If we're in development, return the imported PNG directly
  if (typeof window === 'undefined' || window.location.hostname === 'localhost') {
    return flowerTextMap[path]?.pngUrl;
  }

  // In production, construct the correct URL
  const baseUrl = window.location.origin;
  const normalizedPath = normalizeImageUrl(path);
  const filename = normalizedPath.split('/').pop();
  
  // Return the full URL for production
  return `${baseUrl}/assets/flower-cuts/${filename}`;
}

// Update getPngByIndex to use the new getImageUrl function
export function getPngByIndex(index) {
  const keys = Object.keys(flowerTextMap);
  if (index >= 0 && index < keys.length) {
    const path = keys[index];
    return getImageUrl(path);
  }
  console.error(`PNG index out of range: ${index}`);
  return getImageUrl(keys[0]); // Return first PNG as fallback
}

// Update getRandomPng to use the new getImageUrl function
export function getRandomPng() {
  const keys = Object.keys(flowerTextMap);
  const index = Math.floor(Math.random() * keys.length);
  const randomKey = keys[index];
  const flowerInfo = flowerTextMap[randomKey];
  
  // Create a new flowerInfo object with the correct URL
  const updatedFlowerInfo = {
    ...flowerInfo,
    pngUrl: getImageUrl(randomKey)
  };
  
  console.log("Selected flower info:", { png: randomKey, index, flowerInfo: updatedFlowerInfo });
  return { png: randomKey, index, flowerInfo: updatedFlowerInfo };
}

console.log("flowerTextMap :: ", flowerTextMap);
