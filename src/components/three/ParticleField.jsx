import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 420;

function buildSeedData(count) {
  const positions = new Float32Array(count * 3);
  const speeds = new Float32Array(count);
  const driftX = new Float32Array(count);
  const driftZ = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = Math.random() * 14 - 7;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    speeds[i] = 0.08 + Math.random() * 0.28;
    driftX[i] = (Math.random() - 0.5) * 0.35;
    driftZ[i] = (Math.random() - 0.5) * 0.35;
  }
  return { positions, speeds, driftX, driftZ };
}

function Seeds() {
  const mesh = useRef(null);
  const data = useMemo(() => buildSeedData(COUNT), []);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    const attr = mesh.current.geometry.attributes.position;
    const arr = attr.array;
    const t = state.clock.getElapsedTime();
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3 + 1] += data.speeds[i] * delta;
      arr[i * 3] += Math.sin(t * 0.3 + i * 0.7) * data.driftX[i] * delta;
      arr[i * 3 + 2] += Math.cos(t * 0.25 + i * 0.5) * data.driftZ[i] * delta;
      if (arr[i * 3 + 1] > 8) {
        arr[i * 3 + 1] = -8;
        arr[i * 3] = (Math.random() - 0.5) * 20;
        arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
      }
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[data.positions, 3]}
          count={COUNT}
        />
      </bufferGeometry>
      <pointsMaterial
        color={new THREE.Color("#d4a24c")}
        size={0.09}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingWisp({ position, color, size }) {
  const ref = useRef(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t * 0.5 + position[0]) * 0.8;
    ref.current.position.x = position[0] + Math.sin(t * 0.3 + position[2]) * 0.3;
    ref.current.rotation.z = Math.sin(t * 0.4) * 0.3;
  });

  return (
    <mesh ref={ref} position={position}>
      <circleGeometry args={[size, 6]} />
      <meshBasicMaterial color={color} transparent opacity={0.15} side={THREE.DoubleSide} />
    </mesh>
  );
}

function AmbientGlow() {
  const group = useRef(null);
  useFrame(({ clock }) => {
    if (group.current)
      group.current.rotation.y = clock.getElapsedTime() * 0.03;
  });
  return (
    <group ref={group}>
      <mesh position={[0, 0, -5]}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshBasicMaterial color="#1b4131" transparent opacity={0.1} />
      </mesh>
      <mesh position={[3, 2, -3]}>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshBasicMaterial color="#d4a24c" transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

const WISPS = [
  { position: [-4, 2, -2], color: "#d4a24c", size: 0.18 },
  { position: [3, -1, -3], color: "#2d6a4f", size: 0.22 },
  { position: [-2, -3, -1], color: "#d4a24c", size: 0.14 },
  { position: [5, 3, -4], color: "#3f8e5c", size: 0.16 },
  { position: [-5, 0, -2], color: "#d4a24c", size: 0.2 },
  { position: [1, 4, -3], color: "#6aae82", size: 0.12 },
];

export default function ParticleField({ className = "" }) {
  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 8, 5]} intensity={0.7} color="#d4a24c" />
        <pointLight position={[-4, -3, 3]} intensity={0.3} color="#2d6a4f" />
        <AmbientGlow />
        <Seeds />
        {WISPS.map((w, i) => (
          <FloatingWisp key={i} {...w} />
        ))}
      </Canvas>
    </div>
  );
}
