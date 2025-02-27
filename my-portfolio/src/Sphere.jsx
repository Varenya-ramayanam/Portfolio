import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function Sphere() {
  const sphereRef = useRef();

  useFrame(() => {
    sphereRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}
