/**
 * game/levels.js
 * Defines game levels and their configurations
 *
 * This file:
 * - Defines level configurations with number of shapes and scale factors
 * - Provides progressively more challenging levels
 * - Adjusts scale factors to make the game harder
 */

export const LEVELS = [
  {
    numShapes: 50,
    targetScaleFactor: 5,
    nonTargetScaleFactor: 5,
  },
  {
    numShapes: 75,
    targetScaleFactor: 4.5,
    nonTargetScaleFactor: 4.5,
  },
  {
    numShapes: 100,
    targetScaleFactor: 4,
    nonTargetScaleFactor: 4,
  },
  {
    numShapes: 125,
    targetScaleFactor: 3.5,
    nonTargetScaleFactor: 3.5,
  },
  {
    numShapes: 150,
    targetScaleFactor: 3,
    nonTargetScaleFactor: 3,
  },
];