import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PALETTE = ["#064E3B", "#34D399", "#6EE7B7", "#D97706"];

const LEAVES = Array.from({ length: 14 }, (_, i) => ({
  angle: (i / 14) * Math.PI * 2,
  radius: 1.1 + Math.random() * 0.6,
  tilt: Math.random() * Math.PI,
  color: PALETTE[i % PALETTE.length],
  size: 0.35 + Math.random() * 0.25,
  speed: 0.25 + Math.random() * 0.25,
}));

function Leaf({ angle, radius, tilt, color, size, speed }) {
  const ref = useRef(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.position.x = Math.cos(angle + t * speed) * radius;
    ref.current.position.z = Math.sin(angle + t * speed) * radius;
    ref.current.position.y = Math.sin(t * speed + angle) * 0.4;
    ref.current.rotation.y = angle + t * speed;
    ref.current.rotation.z = tilt + Math.sin(t * speed) * 0.2;
  });
  return (
    <mesh ref={ref}>
      <coneGeometry args={[size * 0.35, size, 4]} />
      <meshStandardMaterial
        color={color}
        roughness={0.5}
        metalness={0.05}
        flatShading
      />
    </mesh>
  );
}

function Cluster() {
  const core = useRef(null);
  useFrame((_, delta) => {
    if (core.current) core.current.rotation.y += delta * 0.4;
  });

  return (
    <group>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshStandardMaterial
          color="#03261D"
          flatShading
          emissive="#064E3B"
          emissiveIntensity={0.25}
        />
      </mesh>
      {LEAVES.map((l, i) => (
        <Leaf key={i} {...l} />
      ))}
      <mesh>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshBasicMaterial
          color="#D97706"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

export default function LeafCluster({ className = "" }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 1.2, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 5, 3]} intensity={1.2} />
        <pointLight position={[-3, 2, 2]} intensity={0.5} color="#D97706" />
        <Cluster />
      </Canvas>
    </div>
  );
}
