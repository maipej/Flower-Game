import './introScreen.css';
import { flowerTextMap, normalizeImageUrl } from '../shapes/pngImports';

export class IntroScreen {
  constructor(onStartGame, targetPngUrl, flowerInfo) {
    this.onStartGame = onStartGame;
    this.targetPngUrl = targetPngUrl;
    this.flowerInfo = flowerInfo;
    this.container = document.createElement('div');
    this.container.className = 'intro-screen';
    document.body.appendChild(this.container);
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="intro-card">
        <span class="intro-text">I've lost myself. Could you help me out? </span>
        <p class="intro-text">I look like this:</p>
        <span class="intro-text-after">Find me </span>
        <div class="flower-container">
          <img src="${this.targetPngUrl}" alt="Target flower" class="flower-image flower-image-transition" />
        </div>
        <button class="start-button">Yes, Silly Flower, I'll help you.</button>
      </div>
    `;

    const startButton = this.container.querySelector('.start-button');
    if (startButton) {
      startButton.addEventListener('click', () => {
        console.log('Start button clicked');
        this.startTransition();
      });
    } else {
      console.error('Start button not found');
    }
  }

  startTransition() {
    // Start the game immediately
    this.onStartGame();

    const introCard = this.container.querySelector('.intro-card');
    if (!introCard) return;

    // Add the transitioning class to trigger the animation
    introCard.classList.add('transitioning');
    introCard.style.gap = '0px';

    // Change the background to transparent
    this.container.style.backgroundColor = 'transparent';

    // Make the container non-interactive
    this.container.style.pointerEvents = 'none';

    // Hide all intro-text elements
    const introTextElements = this.container.querySelectorAll('.intro-text');
    introTextElements.forEach((element) => {
      element.style.display = 'none';
    });

    // Show the intro-text-after element
    const introTextAfter = this.container.querySelector('.intro-text-after');
    if (introTextAfter) {
      introTextAfter.style.display = 'inline';
    }
  }

  reverseTransition() {
    const introCard = this.container.querySelector('.intro-card');
    if (!introCard) return;

    // Remove the transitioning class to trigger the reverse animation
    introCard.classList.remove('transitioning');

    // Restore the background
    this.container.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

    // Make the container interactive again
    this.container.style.pointerEvents = 'auto';

    // Get the flower-specific text
    console.log("flower info :: ", this.flowerInfo);
    const flowerText = this.flowerInfo ? "Thank you for finding me!" : "Thank you for finding me!";

    // Create a container for the flower text
    const flowerTextContainer = document.createElement('div');
    flowerTextContainer.className = 'flower-text-container';
    flowerTextContainer.style.marginTop = '20px';
    flowerTextContainer.style.fontSize = '24px';
    flowerTextContainer.style.color = 'white';
    flowerTextContainer.style.fontFamily = "'EB Garamond', serif";
    flowerTextContainer.style.textAlign = 'center';
    flowerTextContainer.style.padding = '0 20px';
    flowerTextContainer.textContent = flowerText;

    // Update the intro-text-after element's text
    const introTextAfter = this.container.querySelector('.intro-text-after');
    if (introTextAfter) {
      introTextAfter.textContent = 'OMG THANK YOU SO MUCH AAAA';
      introTextAfter.style.display = 'inline';
    }

    // Add the flower text container after the flower image
    const flowerContainer = this.container.querySelector('.flower-container');
    if (flowerContainer) {
      flowerContainer.style.border = '4px solid #FFF49F';
      flowerContainer.style.borderRadius = '10px';
      flowerContainer.style.width = 'auto';
      flowerContainer.style.padding = '32px 16px 32px 16px';
      flowerContainer.style.margin = '32px';
      flowerContainer.innerHTML = `
          <div class="about-me-title">ABOUT ME</div>
          <img src="${this.targetPngUrl}" alt="Target flower" class="flower-image flower-image-transition" />
          <div class="flower-name"><u><b>${this.flowerInfo.name}</b></u></div>
          <div class="flower-description">
            Bloom Period: ${this.flowerInfo.bloomPeriod}<br>
            Growing Conditions: ${this.flowerInfo.growingConditions}
          </div>
      `;
    }

    // Add reload button
    const reloadButton = document.createElement('button');
    reloadButton.textContent = 'Play Again';
    reloadButton.className = 'reload-button';
    reloadButton.style.marginTop = '20px';
    reloadButton.style.padding = '10px 20px';
    reloadButton.style.fontSize = '24px';
    reloadButton.style.backgroundColor = '#FFF49F';
    reloadButton.style.color = 'black';
    reloadButton.style.border = 'none';
    reloadButton.style.borderRadius = '5px';
    reloadButton.style.cursor = 'pointer';
    reloadButton.style.fontFamily = "'EB Garamond', serif";
    reloadButton.style.fontWeight = '700';
    reloadButton.onclick = () => {
      location.reload();
    };
    introCard.appendChild(reloadButton);

    // Hide the start button
    const startButton = this.container.querySelector('.start-button');
    if (startButton) {
      startButton.style.display = 'none';
    }
  }
}