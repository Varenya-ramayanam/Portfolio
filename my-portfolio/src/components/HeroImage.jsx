import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

const Laptop = () => {
  const { scene } = useGLTF("/models/Desk.glb"); // Load 3D laptop model
  const laptopRef = useRef();

  // useFrame(() => {
  //   if (laptopRef.current) {
  //     laptopRef.current.rotation.y += 0.01; // Rotate the laptop
  //   }
  // });

  return <primitive ref={laptopRef} object={scene} scale={1.5} />;
};

const HeroImage = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <Laptop />
      <OrbitControls />
    </Canvas>
  );
};

export default HeroImage;
