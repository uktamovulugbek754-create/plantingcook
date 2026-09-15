/**
 * Three.js Interactive 3D Ambient Scene
 * Floating biological nodes, wellness energy orbs, and parallax reaction
 */

(function () {
  'use strict';

  const canvas = document.getElementById('webgl-canvas');
  if (!canvas || typeof THREE === 'undefined') {
    return;
  }

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 30;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Lighting
  const ambientLight = new THREE.AmbientLight(0x064e3b, 1.8);
  scene.add(ambientLight);

  const pointLight1 = new THREE.PointLight(0x10b981, 3.5, 60);
  pointLight1.position.set(15, 15, 15);
  scene.add(pointLight1);

  const pointLight2 = new THREE.PointLight(0xf59e0b, 2.8, 50);
  pointLight2.position.set(-15, -10, 10);
  scene.add(pointLight2);

  // Group for floating objects
  const floatingGroup = new THREE.Group();
  scene.add(floatingGroup);

  // Create floating organic wellness orbs (Glass-like material)
  const orbCount = 22;
  const orbs = [];
  const sphereGeo = new THREE.SphereGeometry(1, 24, 24);

  const materialEmerald = new THREE.MeshPhysicalMaterial({
    color: 0x10b981,
    emissive: 0x064e3b,
    roughness: 0.2,
    metalness: 0.1,
    clearcoat: 0.8,
    clearcoatRoughness: 0.2,
    transmission: 0.7,
    opacity: 0.6,
    transparent: true
  });

  const materialGold = new THREE.MeshPhysicalMaterial({
    color: 0xfbbf24,
    emissive: 0x78350f,
    roughness: 0.25,
    metalness: 0.2,
    clearcoat: 0.9,
    transmission: 0.65,
    opacity: 0.55,
    transparent: true
  });

  for (let i = 0; i < orbCount; i++) {
    const isGold = i % 3 === 0;
    const mesh = new THREE.Mesh(sphereGeo, isGold ? materialGold : materialEmerald);

    const scale = 0.4 + Math.random() * 1.6;
    mesh.scale.set(scale, scale, scale);

    mesh.position.x = (Math.random() - 0.5) * 55;
    mesh.position.y = (Math.random() - 0.5) * 45;
    mesh.position.z = (Math.random() - 0.5) * 30 - 5;

    mesh.userData = {
      speedX: (Math.random() - 0.5) * 0.004,
      speedY: 0.003 + Math.random() * 0.005,
      speedRot: (Math.random() - 0.5) * 0.01,
      initY: mesh.position.y
    };

    orbs.push(mesh);
    floatingGroup.add(mesh);
  }

  // Particle dust field (stars/energy spores)
  const particleCount = 250;
  const posArray = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i += 3) {
    posArray[i] = (Math.random() - 0.5) * 70;
    posArray[i + 1] = (Math.random() - 0.5) * 70;
    posArray[i + 2] = (Math.random() - 0.5) * 50;
  }

  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 0.25,
    color: 0x34d399,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending
  });

  const particleMesh = new THREE.Points(particleGeo, particleMat);
  scene.add(particleMesh);

  // Mouse & Scroll Parallax Tracking
  let targetMouseX = 0;
  let targetMouseY = 0;
  let currentMouseX = 0;
  let currentMouseY = 0;

  window.addEventListener('mousemove', function (e) {
    targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  // Touch parallax for smartphones
  window.addEventListener('touchmove', function (e) {
    if (e.touches.length > 0) {
      targetMouseX = (e.touches[0].clientX / window.innerWidth - 0.5) * 1.5;
      targetMouseY = (e.touches[0].clientY / window.innerHeight - 0.5) * 1.5;
    }
  }, { passive: true });

  // Orientation support for mobile gyro
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function (e) {
      if (e.gamma !== null && e.beta !== null) {
        targetMouseX = Math.min(Math.max(e.gamma / 30, -1.5), 1.5);
        targetMouseY = Math.min(Math.max(e.beta / 40, -1.5), 1.5);
      }
    }, { passive: true });
  }

  // Animation Loop with Performance Throttling
  let lastTime = 0;
  function animate(time) {
    requestAnimationFrame(animate);

    // Smooth camera inertia
    currentMouseX += (targetMouseX - currentMouseX) * 0.04;
    currentMouseY += (targetMouseY - currentMouseY) * 0.04;

    camera.position.x = currentMouseX * 3.5;
    camera.position.y = -currentMouseY * 3.5;
    camera.lookAt(scene.position);

    // Animate orbs
    orbs.forEach(function (orb) {
      orb.position.y += orb.userData.speedY;
      orb.position.x += Math.sin(time * 0.001 + orb.position.y) * 0.01;
      orb.rotation.x += orb.userData.speedRot;
      orb.rotation.y += orb.userData.speedRot;

      // Wrap around top/bottom
      if (orb.position.y > 25) {
        orb.position.y = -25;
      }
    });

    // Rotate particle system slowly
    particleMesh.rotation.y = time * 0.00015;
    particleMesh.rotation.x = time * 0.00008;

    renderer.render(scene, camera);
  }

  animate(0);

  // Resize Handler
  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }, { passive: true });
})();
