# Where's Waldo - Flower Edition 🌸

A delightful and interactive game where you help a lost flower find its way home! This game combines beautiful flower imagery with engaging gameplay to create a fun and educational experience.

## How to Play 🎮

1. When you start the game, you'll see an introduction screen with a flower asking for your help
2. The flower will show you what it looks like - this is your target flower to find
3. Click the "Yes, Silly Flower, I'll help you" button to begin
4. You'll be taken to a scene filled with many different flowers
5. Your goal is to find the exact flower that was shown to you at the start
6. Click on flowers to check if they're the one you're looking for
7. If you click the wrong flower, don't worry - just keep looking!
8. When you find the correct flower, you'll win the game and learn some interesting facts about the flower you found

## Game Features 🌟

### Beautiful Flower Collection
- The game features a diverse collection of real flowers
- Each flower is carefully selected and includes:
  - The flower's name
  - When it blooms
  - How to grow it
  - A beautiful image of the flower

### Interactive Gameplay
- Flowers move around the screen in a natural way
- The target flower is hidden among many other flowers
- Click detection is precise and responsive
- The game keeps track of how long it takes you to find the flower

### Educational Value
- Learn about different types of flowers
- Discover when flowers bloom
- Understand what conditions flowers need to grow
- Get to know flower names and characteristics

### User-Friendly Interface
- Clear instructions at the start
- Easy-to-use controls (just click!)
- Beautiful transitions and animations
- Helpful feedback when you find the right flower

## Technical Details (For Demo Purposes) 🔧

### Game Flow
1. The game starts by showing an introduction screen with the target flower
2. When you click the start button, the game loads all the flowers
3. The target flower is placed somewhere in the scene
4. Other flowers are added to create a challenging search
5. All flowers move around naturally
6. When you click a flower, the game checks if it's the target
7. If you find the target, you win and learn about the flower!

### Flower Management
- The game has a collection of different flower images
- Each flower is loaded as a sprite (a movable image)
- Flowers are positioned randomly in the game area
- The target flower is slightly larger than the others to make it more visible
- All flowers move around to create an engaging experience

### Win Condition
- The game is won when you click on the target flower
- When you win:
  - The target flower is highlighted
  - You see information about the flower
  - You can choose to play again with a different flower

## Tips for Demo 🎯

1. Start by explaining the game's concept - helping a lost flower find its way home
2. Show the introduction screen and explain how to start
3. Point out the target flower card in the top-left corner
4. Demonstrate how to click on flowers
5. When the game is won, highlight the educational information about the flower
6. Show how to start a new game with a different flower

## Project Structure 📁

Here's what each file in the project does:

### Main Files
- `main.js`: The starting point of the game. It sets up the game window size and starts everything up.
- `style.css`: Makes the game look beautiful by handling all the visual styling and animations.

### Game Logic
- `game/game.js`: The brain of the game. It manages how flowers move, handles your clicks, and keeps track of whether you've won.
- `game/gameState.js`: Keeps track of important game information like how long you've been playing and whether you've found the target flower.
- `game/gameUI.js`: Creates and manages all the visual elements you see on screen, like the target flower card and score display.
- `game/introScreen.js`: Creates the welcoming introduction screen that shows you the flower you need to find.

### Flower Management
- `shapes/shapeFactory.js`: Creates and manages all the flower images in the game, making sure they look right and move properly.
- `shapes/pngImports.js`: Contains all the flower images and their information (like names and growing conditions).

### Visual Effects
- `renderer/sceneManager.js`: Handles how everything is displayed on screen, making sure all the flowers are visible and properly positioned.
- `renderer/animation.js`: Creates smooth movements for the flowers, making them float around naturally.

### Utilities
- `utils/`: Contains helper functions that make different parts of the game work together smoothly.

## Credits 🙏

This game was created as a fun and educational way to learn about different types of flowers. The flower images and information are carefully curated to provide an accurate and engaging experience. Gen AI (Claude, Cursor) has been used for assistance and code correction.

Enjoy helping these lovely flowers find their way home! 🌸