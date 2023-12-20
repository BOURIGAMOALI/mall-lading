import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Model } from './MallProject';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';

const My3DScene = () => {
  
  return (
    <div style={{ height: '90vh' }} id='home'>
      <Canvas
        dpr={window.devicePixelRatio}
        shadows
        style={{ background: '#81AEC9', height: '100%' }}
        camera={{ position: [0, 0, 0] }}
      >
      
        <ambientLight />
        <pointLight position={[0, 0, 0]} />
        <OrbitControls />
        <Model />
      </Canvas>
    </div>
  );
};

export default My3DScene;
