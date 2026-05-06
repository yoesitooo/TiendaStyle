import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

const Scene = () => {
  const mesh = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = time * 0.2;
    mesh.current.rotation.y = time * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial
          color="#D4AF37"
          speed={2}
          distort={0.4}
          radius={1}
        />
      </mesh>
    </Float>
  );
};

const FloatingLogo = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} color="#D4AF37" />
        <Scene />
      </Canvas>
    </div>
  );
};

export default FloatingLogo;
