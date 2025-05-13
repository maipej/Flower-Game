/**
 * renderer/sceneManager.js
 * Manages the Three.js scene, camera, and renderer
 *
 * This file:
 * - Creates and configures the Three.js scene
 * - Sets up the camera and renderer
 * - Handles window resizing
 * - Manages raycasting for click detection
 * - Provides methods to add objects to the scene
 */

import * as THREE from 'three';

export class SceneManager {
  constructor() {
    // Create scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    console.log('Scene created with black background');

    // Create camera with wider field of view
    this.camera = new THREE.PerspectiveCamera(
      60, // Wider field of view
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 10; // Move camera back a bit more
    console.log('Camera created and positioned:', this.camera.position);

    // Create renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true // Allow transparency
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.domElement.style.position = 'fixed';
    this.renderer.domElement.style.top = '0';
    this.renderer.domElement.style.left = '0';
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.renderer.domElement.style.zIndex = '0';
    this.renderer.domElement.style.pointerEvents = 'auto'; // Enable pointer events for the renderer
    document.body.appendChild(this.renderer.domElement);
    console.log('Renderer created and added to DOM');

    // Setup raycaster for click detection
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();

    // Handle window resize
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  addToScene(object) {
    this.scene.add(object);
    // console.log('Object added to scene:', {
    //   type: object.type,
    //   position: object.position,
    //   scale: object.scale,
    //   visible: object.visible
    // });
  }

  removeFromScene(object) {
    this.scene.remove(object);
  }

  updatePointer(event) {
    // Calculate pointer position in normalized device coordinates
    // (-1 to +1) for both components
    this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    console.log('Pointer updated:', { x: this.pointer.x, y: this.pointer.y });
  }

  checkIntersection(objects) {
    // Update the picking ray with the camera and pointer position
    this.raycaster.setFromCamera(this.pointer, this.camera);

    // Calculate objects intersecting the picking ray
    const intersects = this.raycaster.intersectObjects(objects);
    console.log('Intersections found:', intersects.length);

    return intersects;
  }

  render() {
    // console.log('Rendering scene...');
    this.renderer.render(this.scene, this.camera);
    // console.log('Scene rendered');
    // Log scene contents periodically
    // if (Math.random() < 0.01) { // Log roughly every 100 frames
    //   console.log('Scene contents:', {
    //     children: this.scene.children.length,
    //     visible: this.scene.children.filter(child => child.visible).length,
    //     cameraPosition: this.camera.position,
    //     cameraFOV: this.camera.fov
    //   });
    // }
  }

  addClickEventListener(callback) {
    this.renderer.domElement.addEventListener('click', callback);
  }
}