import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { COLORS } from '../../constants';

export function Sun() {
    const sunRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (sunRef.current) {
            // Subtle rotation
            sunRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <group position={[0, 0, -20]}> {/* Position way in the back */}
            {/* Core Sun */}
            <Sphere args={[5, 64, 64]} ref={sunRef}>
                <MeshDistortMaterial
                    color={COLORS.primary}
                    emissive="#FF4500" // Orange-red emissive for heat
                    emissiveIntensity={2}
                    roughness={0.1}
                    metalness={0.5}
                    distort={0.3} // Solar flares effect
                    speed={2}
                />
            </Sphere>

            {/* Outer Glow (Atmosphere) */}
            <mesh scale={[1.2, 1.2, 1.2]}>
                <sphereGeometry args={[5, 64, 64]} />
                <meshBasicMaterial
                    color={COLORS.primary}
                    transparent
                    opacity={0.1}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* God Rays / Corona (Simulated with simple planes or sprites if needed, but glow is good for now) */}
            <pointLight intensity={5} distance={100} decay={2} color="#FFD700" />
        </group>
    );
}
