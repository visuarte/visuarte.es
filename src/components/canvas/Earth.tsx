import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { COLORS } from '../../constants';

export function Earth() {
    const earthRef = useRef<THREE.Group>(null);
    const satellitesRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (earthRef.current) {
            earthRef.current.rotation.y = t * 0.1;
        }
        if (satellitesRef.current) {
            satellitesRef.current.rotation.y = t * 0.2;
            satellitesRef.current.rotation.z = t * 0.05;
        }
    });

    return (
        <group ref={earthRef}>
            {/* Wireframe Earth */}
            <Sphere args={[2, 32, 32]}>
                <meshBasicMaterial
                    color={COLORS.primary}
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </Sphere>

            {/* Inner Core (Solid Black to block stars behind) */}
            <Sphere args={[1.95, 32, 32]}>
                <meshBasicMaterial color="#000000" />
            </Sphere>

            {/* Satellites */}
            <group ref={satellitesRef}>
                {Array.from({ length: 8 }).map((_, i) => (
                    <mesh
                        key={i}
                        position={[
                            Math.sin(i * (Math.PI / 4)) * 3.5,
                            Math.cos(i * (Math.PI / 4) * 0.5) * 1,
                            Math.cos(i * (Math.PI / 4)) * 3.5
                        ]}
                    >
                        <boxGeometry args={[0.05, 0.05, 0.05]} />
                        <meshBasicMaterial color="#FFFFFF" />
                    </mesh>
                ))}
                {/* Orbital Rings */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[3.5, 0.01, 16, 100]} />
                    <meshBasicMaterial color={COLORS.primary} transparent opacity={0.2} />
                </mesh>
            </group>
        </group>
    );
}
