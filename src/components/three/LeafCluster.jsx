import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PALETTE = ["#2d6a4f", "#3f8e5c", "#6aae82", "#d4a24c", "#9cc9ac"];

const LEAVES = Array.from({ length: 18 }, (_, i) => ({
  angle: (i / 18) * Math.PI * 2,
  radius: 0.9 + Math.random() * 0.7,
  tilt: Math.random() * Math.PI,
  color: PALETTE[i % PALETTE.length],
  size: 0.3 + Math.random() * 0.3,
  speed: 0.18 + Math.random() * 0.2,
  yOffset: (Math.random() - 0.5) * 0.8,
}));

function Leaf({ angle, radius, tilt, color, size, speed, yOffset }) {
  const ref = useRef(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.position.x = Math.cos(angle + t * speed) * radius;
    ref.current.position.z = Math.sin(angle + t * speed) * radius;
    ref.current.position.y = yOffset + Math.sin(t * speed * 1.3 + angle) * 0.35;
    ref.current.rotation.y = angle + t * speed;
    ref.current.rotation.z = tilt + Math.sin(t * speed * 0.8) * 0.25;
    ref.current.rotation.x = Math.cos(t * speed * 0.6) * 0.15;
  });
  return (
    <mesh ref={ref}>
      <coneGeometry args={[size * 0.3, size, 4]} />
      <meshStandardMaterial
        color={color}
        roughness={0.45}
        metalness={0.05}
        flatShading
      />
    </mesh>
  );
}

function Petal({ angle, radius, color, speed }) {
  const ref = useRef(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.position.x = Math.cos(angle + t * speed * 0.7) * radius * 1.4;
    ref.current.position.z = Math.sin(angle + t * speed * 0.7) * radius * 1.4;
    ref.current.position.y = Math.sin(t * speed + angle * 2) * 0.5;
    ref.current.rotation.x = Math.sin(t * 0.4 + angle) * 0.4;
    ref.current.rotation.y = t * speed * 0.5;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  );
}

const PETALS = Array.from({ length: 12 }, (_, i) => ({
  angle: (i / 12) * Math.PI * 2,
  radius: 1.2 + Math.random() * 0.5,
  color: PALETTE[i % PALETTE.length],
  speed: 0.15 + Math.random() * 0.15,
}));

function Cluster() {
  const core = useRef(null);
  useFrame((_, delta) => {
    if (core.current) core.current.rotation.y += delta * 0.35;
  });

  return (
    <group>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial
          color="#1b4131"
          flatShading
          emissive="#2d6a4f"
          emissiveIntensity={0.3}
        />
      </mesh>
      {LEAVES.map((l, i) => (
        <Leaf key={i} {...l} />
      ))}
      {PETALS.map((p, i) => (
        <Petal key={`p${i}`} {...p} />
      ))}
      <mesh>
        <sphereGeometry args={[2.4, 32, 32]} />
        <meshBasicMaterial
          color="#d4a24c"
          transparent
          opacity={0.04}
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
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 3]} intensity={1.0} />
        <pointLight position={[-3, 2, 2]} intensity={0.4} color="#d4a24c" />
        <pointLight position={[2, -1, 3]} intensity={0.3} color="#3f8e5c" />
        <Cluster />
      </Canvas>
    </div>
  );
}
