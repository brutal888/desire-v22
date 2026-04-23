import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PINS = Array.from({ length: 18 }, () => ({
  theta: Math.random() * Math.PI * 2,
  phi: Math.acos(2 * Math.random() - 1),
}));

function ImpactPin({ theta, phi, radius = 1.02 }) {
  const ref = useRef(null);
  const [x, y, z] = useMemo(() => {
    const xv = radius * Math.sin(phi) * Math.cos(theta);
    const yv = radius * Math.cos(phi);
    const zv = radius * Math.sin(phi) * Math.sin(theta);
    return [xv, yv, zv];
  }, [theta, phi, radius]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const scale = 1 + Math.sin(t * 2 + theta * 5) * 0.3;
    ref.current.scale.setScalar(scale);
  });

  return (
    <mesh ref={ref} position={[x, y, z]}>
      <sphereGeometry args={[0.035, 12, 12]} />
      <meshBasicMaterial color="#D97706" />
    </mesh>
  );
}

function Globe() {
  const group = useRef(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={group} rotation={[0.35, 0, 0]}>
      <mesh>
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial
          color="#064E3B"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.985, 2]} />
        <meshStandardMaterial
          color="#03261D"
          transparent
          opacity={0.92}
          flatShading
        />
      </mesh>
      {PINS.map((p, i) => (
        <ImpactPin key={i} theta={p.theta} phi={p.phi} />
      ))}
      <mesh>
        <sphereGeometry args={[1.15, 32, 32]} />
        <meshBasicMaterial
          color="#D97706"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

export default function ImpactGlobe({ className = "" }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 3.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 5, 3]} intensity={1.1} />
        <pointLight position={[-3, -2, 3]} intensity={0.6} color="#D97706" />
        <Globe />
      </Canvas>
    </div>
  );
}
