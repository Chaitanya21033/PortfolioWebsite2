import React, { useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ChessAnimation = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const chessboardRef = useRef(null);
  const chessPiecesRef = useRef(null);

  const animate = () => {
    requestAnimationFrame(animate);

    // Rotate the chessboard and chess pieces
    if (chessboardRef.current && chessPiecesRef.current) {
      chessboardRef.current.rotation.y += 0.01;
      chessPiecesRef.current.rotation.y -= 0.01;
    }

    rendererRef.current.render(sceneRef.current, cameraRef.current);
  };

  const loadChessboardAndPieces = () => {
    const loader = new GLTFLoader();

    // Load the chessboard model
    loader.load('/path/to/chessboard.gltf', (gltf) => {
      const chessboard = gltf.scene;
      chessboard.scale.set(1, 1, 1);
      chessboard.position.set(0, 0, 0);
      chessboardRef.current = chessboard;
      sceneRef.current.add(chessboard);
    });

    // Load the chess pieces model
    loader.load('/path/to/chesspieces.gltf', (gltf) => {
      const chessPieces = gltf.scene;
      chessPieces.scale.set(1, 1, 1);
      chessPieces.position.set(0, 0, 0);
      chessPiecesRef.current = chessPieces;
      sceneRef.current.add(chessPieces);
    });
  };

  const setupScene = () => {
    const canvas = canvasRef.current;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    camera.position.set(0, 10, 20);

    renderer.setSize(width, height);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    scene.add(new THREE.DirectionalLight(0xffffff, 0.8));

    sceneRef.current = scene;
    cameraRef.current = camera;

    canvas.appendChild(renderer.domElement);
    loadChessboardAndPieces();
    animate();
  };

  React.useEffect(() => {
    setupScene();
  }, []);

  return <div ref={canvasRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ChessAnimation;
