import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";

const ICONS = [
  { name: "React", src: "/assets/react.png", position: [4, 2, 0] },
  { name: "TypeScript", src: "/assets/typescript.png", position: [-4, 3, 1] },
  { name: "Java", src: "/assets/java.png", position: [5, -2, -1] },
  { name: "Python", src: "/assets/python.png", position: [-5, -1, 0] },
  { name: "Node.js", src: "/assets/node.png", position: [2, 4, -2] },
  { name: "C#", src: "/assets/csharp.png", position: [-3, -4, 1] },
  { name: "Azure", src: "/assets/azure.png", position: [0, -3, 3] },
  { name: "Docker", src: "/assets/docker.png", position: [3, 0, 3] },
  { name: "Git", src: "/assets/git.png", position: [-2, 2, 2] },
  { name: "TailwindCSS", src: "/assets/tailwind.png", position: [1, -4, -2] },
];

function getRandomValues() {
  return {
    speed: 1.5 + Math.random() * 1.5,
    rotationIntensity: 0.5 + Math.random(),
    floatIntensity: 1 + Math.random(),
  };
}

function FloatingIcon({ src, name, position }: { src: string; name: string; position: [number, number, number] }) {
  // Use random float speeds for variation
  const [{ speed, rotationIntensity, floatIntensity }] = useState(() => getRandomValues());

  return (
    <Float speed={speed} rotationIntensity={rotationIntensity} floatIntensity={floatIntensity} position={new THREE.Vector3(...position)}>
      <Html transform distanceFactor={15} center zIndexRange={[100, 0]}>
        <div className="flex flex-col items-center justify-center p-2 group transition-transform duration-300 hover:scale-125">
          <div className="w-16 h-16 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-xl">
            {/* The user will place PNGs in the public/assets/ folder */}
            <img 
              src={src} 
              alt={name} 
              className="w-10 h-10 object-contain drop-shadow-md opacity-80 group-hover:opacity-100 transition-opacity" 
              onError={(e) => {
                // Fallback if image doesn't exist yet
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `<span class="text-xs font-bold text-foreground opacity-50">${name}</span>`;
              }}
            />
          </div>
        </div>
      </Html>
    </Float>
  );
}

export function TechIconCloud() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      // Extremely slow rotation of the entire cloud
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {ICONS.map((icon, i) => (
        <FloatingIcon key={i} src={icon.src} name={icon.name} position={icon.position as [number, number, number]} />
      ))}
    </group>
  );
}
