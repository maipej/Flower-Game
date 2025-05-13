/**
 * game/gameUI.js
 * Handles all user interface elements for the game
 *
 * This file:
 * - Creates the target card showing which shape to find
 * - Displays the score/time counter
 * - Manages loading overlay and messages
 * - Handles win message display
 * - Shows error messages when needed
 */

export class GameUI {
  constructor() {
    this.targetCard = document.createElement('div');
    this.targetContainer = document.createElement('div');
    this.scoreDisplay = document.createElement('div');
    this.loadingOverlay = document.createElement('div');
    this.uiContainer = document.createElement('div');
    this.initialize();
    this.createLoadingOverlay();
  }

  initialize() {
    // Create UI container
    this.uiContainer = document.createElement('div');
    this.uiContainer.style.position = 'fixed';
    this.uiContainer.style.top = '0';
    this.uiContainer.style.left = '0';
    this.uiContainer.style.width = '100%';
    this.uiContainer.style.height = '100%';
    this.uiContainer.style.zIndex = '10000';
    this.uiContainer.style.pointerEvents = 'none';
    document.body.appendChild(this.uiContainer);

    // Create score display
    this.scoreDisplay = document.createElement('div');
    this.scoreDisplay.className = 'score-display';
    this.uiContainer.appendChild(this.scoreDisplay);
  }

  createLoadingOverlay() {
    // AI-Generated: Complex loading overlay implementation with dynamic styling and animation
    // Create a loading overlay
    this.loadingOverlay = document.createElement('div');
    this.loadingOverlay.id = 'loading-overlay';
    this.loadingOverlay.style.position = 'fixed';
    this.loadingOverlay.style.top = '0';
    this.loadingOverlay.style.left = '0';
    this.loadingOverlay.style.width = '100%';
    this.loadingOverlay.style.height = '100%';
    this.loadingOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    this.loadingOverlay.style.display = 'flex';
    this.loadingOverlay.style.alignItems = 'center';
    this.loadingOverlay.style.justifyContent = 'center';
    this.loadingOverlay.style.zIndex = '9999';
    this.loadingOverlay.style.flexDirection = 'column';
    this.loadingOverlay.style.color = 'white';
    this.loadingOverlay.style.fontFamily = "'EB Garamond', serif";
    this.loadingOverlay.style.fontSize = '24px';

    // Add a loading spinner
    const spinner = document.createElement('div');
    spinner.id = 'loading-spinner';
    spinner.style.width = '50px';
    spinner.style.height = '50px';
    spinner.style.border = '5px solid rgba(255, 255, 255, 0.3)';
    spinner.style.borderTop = '5px solid white';
    spinner.style.borderRadius = '50%';
    spinner.style.marginBottom = '20px';
    spinner.style.animation = 'spin 1s linear infinite';

    // Add spinner animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);

    this.loadingOverlay.appendChild(spinner);

    // Add message container
    const messageContainer = document.createElement('div');
    messageContainer.id = 'loading-message';
    messageContainer.textContent = 'Loading...';
    this.loadingOverlay.appendChild(messageContainer);

    // Hide by default
    this.loadingOverlay.style.display = 'none';

    document.body.appendChild(this.loadingOverlay);
  }

  displayTargetPng(pngUrl) {
    // AI-Generated: Sophisticated image display logic with error handling and loading states
    console.log('Displaying target PNG:', pngUrl);
    console.log('Target container exists:', this.targetContainer);
    console.log('Target container in DOM:', document.body.contains(this.targetContainer));

    // Clear existing content
    this.targetContainer.innerHTML = '';

    // Create a wrapper div for the image
    const imageWrapper = document.createElement('div');
    imageWrapper.style.width = '100%';
    imageWrapper.style.height = '100%';
    imageWrapper.style.display = 'flex';
    imageWrapper.style.alignItems = 'center';
    imageWrapper.style.justifyContent = 'center';
    imageWrapper.style.position = 'relative';
    imageWrapper.style.overflow = 'hidden';
    imageWrapper.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    imageWrapper.style.borderRadius = '4px';
    imageWrapper.style.pointerEvents = 'auto'; // Enable pointer events for the image container

    // Create an image element
    const img = document.createElement('img');
    img.src = pngUrl;

    // Set image styles
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.width = 'auto';
    img.style.height = 'auto';
    img.style.display = 'block';
    img.style.position = 'absolute';
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%, -50%)';
    img.style.objectFit = 'contain';
    img.style.visibility = 'visible';
    img.style.opacity = '1';
    img.style.backgroundColor = 'transparent';
    img.style.border = 'none';
    img.style.padding = '0';
    img.style.margin = '0';
    img.style.pointerEvents = 'auto'; // Enable pointer events for the image

    // Add error handling
    img.onerror = (error) => {
      console.error('Failed to load target PNG:', pngUrl, error);
      imageWrapper.innerHTML = '<div style="color: red; text-align: center;">Failed to load image</div>';
    };

    // Add loading indicator
    const loadingText = document.createElement('div');
    loadingText.textContent = 'Loading...';
    loadingText.style.color = '#666';
    loadingText.style.position = 'absolute';
    loadingText.style.top = '50%';
    loadingText.style.left = '50%';
    loadingText.style.transform = 'translate(-50%, -50%)';
    imageWrapper.appendChild(loadingText);

    // Add to the container
    img.onload = () => {
      console.log('Image loaded successfully');
      console.log('Image dimensions:', img.naturalWidth, img.naturalHeight);
      imageWrapper.innerHTML = '';
      imageWrapper.appendChild(img);
      console.log('Image added to wrapper:', imageWrapper.contains(img));
    };

    // Add wrapper to container
    this.targetContainer.appendChild(imageWrapper);
    console.log('Wrapper added to container:', this.targetContainer.contains(imageWrapper));

    // Add image to wrapper immediately to start loading
    imageWrapper.appendChild(img);
    console.log('Image element added to wrapper:', imageWrapper.contains(img));
  }

  updateScore(elapsedTime) {
    this.scoreDisplay.textContent = `Time: ${elapsedTime.toFixed(1)}s`;
  }

  updateMisses() {
    // Removed the code that creates and appends the misses display box
  }

  showWinMessage(elapsedTime) {
    const winTime = elapsedTime.toFixed(1);

    // Create a win message overlay
    const winOverlay = document.createElement('div');
    winOverlay.style.position = 'fixed';
    winOverlay.style.top = '0';
    winOverlay.style.left = '0';
    winOverlay.style.width = '100%';
    winOverlay.style.height = '100%';
    winOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    winOverlay.style.display = 'flex';
    winOverlay.style.alignItems = 'center';
    winOverlay.style.justifyContent = 'center';
    winOverlay.style.zIndex = '9999';
    winOverlay.style.flexDirection = 'column';

    // Win message
    const messageContainer = document.createElement('div');
    messageContainer.style.backgroundColor = 'white';
    messageContainer.style.padding = '30px';
    messageContainer.style.borderRadius = '10px';
    messageContainer.style.textAlign = 'center';
    messageContainer.style.maxWidth = '80%';
    messageContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

    const message = document.createElement('h2');
    message.textContent = `Congratulations!`;
    message.style.marginBottom = '10px';
    message.style.color = '#333';
    messageContainer.appendChild(message);

    const timeMessage = document.createElement('p');
    timeMessage.textContent = `You found the target shape in ${winTime} seconds!`;
    timeMessage.style.fontSize = '18px';
    timeMessage.style.marginBottom = '20px';
    timeMessage.style.color = '#333';
    messageContainer.appendChild(timeMessage);

    // Play again button
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.style.padding = '10px 20px';
    playAgainButton.style.fontSize = '16px';
    playAgainButton.style.backgroundColor = '#4CAF50';
    playAgainButton.style.color = 'white';
    playAgainButton.style.border = 'none';
    playAgainButton.style.borderRadius = '5px';
    playAgainButton.style.cursor = 'pointer';
    playAgainButton.onclick = () => {
      // Find the intro screen and call reverse transition
      const introScreen = document.querySelector('.intro-screen');
      if (introScreen) {
        const introCard = introScreen.querySelector('.intro-card');
        if (introCard) {
          introCard.classList.remove('transitioning');
        }
      }
      location.reload();
    };
    messageContainer.appendChild(playAgainButton);

    winOverlay.appendChild(messageContainer);
    document.body.appendChild(winOverlay);
  }

  showLoadingMessage(message = 'Loading...') {
    const messageContainer = this.loadingOverlay.querySelector('#loading-message');
    if (messageContainer) {
      messageContainer.textContent = message;
    }
    this.loadingOverlay.style.display = 'flex';
  }

  hideLoadingMessage() {
    this.loadingOverlay.style.display = 'none';
  }

  showErrorMessage(message) {
    const errorOverlay = document.createElement('div');
    errorOverlay.style.position = 'fixed';
    errorOverlay.style.top = '0';
    errorOverlay.style.left = '0';
    errorOverlay.style.width = '100%';
    errorOverlay.style.height = '100%';
    errorOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    errorOverlay.style.display = 'flex';
    errorOverlay.style.alignItems = 'center';
    errorOverlay.style.justifyContent = 'center';
    errorOverlay.style.zIndex = '9999';

    const errorContainer = document.createElement('div');
    errorContainer.style.backgroundColor = 'white';
    errorContainer.style.padding = '20px';
    errorContainer.style.borderRadius = '5px';
    errorContainer.style.textAlign = 'center';
    errorContainer.style.maxWidth = '80%';

    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.style.color = 'red';
    errorMessage.style.marginBottom = '20px';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.padding = '10px 20px';
    closeButton.style.backgroundColor = '#f44336';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '5px';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = () => {
      document.body.removeChild(errorOverlay);
    };

    errorContainer.appendChild(errorMessage);
    errorContainer.appendChild(closeButton);
    errorOverlay.appendChild(errorContainer);
    document.body.appendChild(errorOverlay);
  }
}