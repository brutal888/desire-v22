import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 380;

function buildSeedData(count) {
  const positions = new Float32Array(count * 3);
  const speeds = new Float32Array(count);
  const driftX = new Float32Array(count);
  const driftZ = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = Math.random() * 12 - 6;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    speeds[i] = 0.15 + Math.random() * 0.35;
    driftX[i] = (Math.random() - 0.5) * 0.3;
    driftZ[i] = (Math.random() - 0.5) * 0.3;
  }
  return { positions, speeds, driftX, driftZ };
}

const SEED_DATA = buildSeedData(COUNT);

function Seeds() {
  const mesh = useRef(null);
  const { positions, speeds, driftX, driftZ } = SEED_DATA;

  useFrame((_, delta) => {
    if (!mesh.current) return;
    const attr = mesh.current.geometry.attributes.position;
    const arr = attr.array;
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3 + 1] += speeds[i] * delta;
      arr[i * 3] += Math.sin(arr[i * 3 + 1] * 0.5) * driftX[i] * delta;
      arr[i * 3 + 2] += Math.cos(arr[i * 3 + 1] * 0.5) * driftZ[i] * delta;
      if (arr[i * 3 + 1] > 7) {
        arr[i * 3 + 1] = -7;
      }
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={COUNT}
        />
      </bufferGeometry>
      <pointsMaterial
        color={new THREE.Color("#D97706")}
        size={0.08}
        sizeAttenuation
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
}

function AmbientGlow() {
  const group = useRef(null);
  useFrame(({ clock }) => {
    if (group.current)
      group.current.rotation.y = clock.getElapsedTime() * 0.04;
  });
  return (
    <group ref={group}>
      <mesh position={[0, 0, -4]}>
        <sphereGeometry args={[3.5, 32, 32]} />
        <meshBasicMaterial color="#03261D" transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

export default function ParticleField({ className = "" }) {
  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 8, 5]} intensity={0.8} color="#D97706" />
        <AmbientGlow />
        <Seeds />
      </Canvas>
    </div>
  );
}
