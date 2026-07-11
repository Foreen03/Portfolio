import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useState, useRef, Suspense } from "react";
import { TechIconCloud } from "./TechIconCloud";
import { useTheme } from "./ThemeProvider";
import * as THREE from "three";

// Generate points in a sphere
function generateSpherePoints(count: number, radius: number) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = Math.cbrt(Math.random()) * radius;

    const sinPhi = Math.sin(phi);
    const x = r * sinPhi * Math.cos(theta);
    const y = r * sinPhi * Math.sin(theta);
    const z = r * Math.cos(phi);

    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
}

function Particles({ isDark }: { isDark: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => generateSpherePoints(3000, 12));
  
  useFrame(( _ , delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30;
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial 
          transparent 
          color={isDark ? "#aaaaaa" : "#444444"} 
          size={0.03} 
          sizeAttenuation={true} 
          depthWrite={false} 
        />
      </Points>
    </group>
  );
}

// Subtle camera movement responsive to mouse
function CameraRig() {
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Base slight movement
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, (state.mouse.x * 2) + Math.sin(t / 4), 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (state.mouse.y * 2) + Math.sin(t / 4), 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export function ThreeScene() {
  const { theme } = useTheme();
  
  // Safe fallback if window is undefined (e.g. SSR, although this is Vite)
  const isDark = typeof window !== 'undefined' 
    ? theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    : true;

  return (
    <div className="fixed inset-0 -z-10 bg-background transition-colors duration-500">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={isDark ? 0.3 : 0.8} />
        <directionalLight position={[10, 10, 10]} intensity={isDark ? 1 : 2} />
        <Suspense fallback={null}>
          <Particles isDark={isDark} />
          <TechIconCloud />
          {/* Note: The user can download a specific 3D model and place it here */}
          {/* Example: <Model /> */}
        </Suspense>
        <CameraRig />
      </Canvas>
    </div>
  );
}
