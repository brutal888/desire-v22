import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PINS = Array.from({ length: 22 }, () => ({
  theta: Math.random() * Math.PI * 2,
  phi: Math.acos(2 * Math.random() - 1),
  pulseOffset: Math.random() * Math.PI * 2,
}));

function ImpactPin({ theta, phi, radius = 1.02, pulseOffset }) {
  const ref = useRef(null);
  const ringRef = useRef(null);
  const [x, y, z] = useMemo(() => {
    const xv = radius * Math.sin(phi) * Math.cos(theta);
    const yv = radius * Math.cos(phi);
    const zv = radius * Math.sin(phi) * Math.sin(theta);
    return [xv, yv, zv];
  }, [theta, phi, radius]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const scale = 1 + Math.sin(t * 2.5 + pulseOffset) * 0.4;
    ref.current.scale.setScalar(scale);
    if (ringRef.current) {
      const ringScale = 1 + Math.sin(t * 1.5 + pulseOffset) * 0.6;
      ringRef.current.scale.setScalar(ringScale);
      ringRef.current.material.opacity = 0.3 - Math.sin(t * 1.5 + pulseOffset) * 0.2;
    }
  });

  return (
    <group position={[x, y, z]}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.03, 12, 12]} />
        <meshBasicMaterial color="#d4a24c" />
      </mesh>
      <mesh ref={ringRef}>
        <ringGeometry args={[0.04, 0.06, 16]} />
        <meshBasicMaterial color="#d4a24c" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function Globe() {
  const group = useRef(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.1;
  });

  return (
    <group ref={group} rotation={[0.35, 0, 0.1]}>
      <mesh>
        <icosahedronGeometry args={[1, 5]} />
        <meshStandardMaterial
          color="#2d6a4f"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.985, 2]} />
        <meshStandardMaterial
          color="#1b4131"
          transparent
          opacity={0.92}
          flatShading
        />
      </mesh>
      {PINS.map((p, i) => (
        <ImpactPin key={i} theta={p.theta} phi={p.phi} pulseOffset={p.pulseOffset} />
      ))}
      <mesh>
        <sphereGeometry args={[1.18, 32, 32]} />
        <meshBasicMaterial
          color="#d4a24c"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.25, 32, 32]} />
        <meshBasicMaterial
          color="#2d6a4f"
          transparent
          opacity={0.04}
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
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 5, 3]} intensity={1.0} />
        <pointLight position={[-3, -2, 3]} intensity={0.5} color="#d4a24c" />
        <pointLight position={[2, 3, -2]} intensity={0.3} color="#3f8e5c" />
        <Globe />
      </Canvas>
    </div>
  );
}
