import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { COLORS } from '../../constants';

export function NanoBanana() {
    const meshRef = useRef<THREE.Mesh>(null);

    // Memoize curve creation to prevent re-calculation on every render
    const curve = useMemo(() => new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1.5, -0.5, 0),
        new THREE.Vector3(-0.5, 0, 0),
        new THREE.Vector3(0.5, -0.2, 0),
        new THREE.Vector3(1.5, -1, 0),
    ]), []);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
        }
    });

    return (
        <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
            <mesh ref={meshRef} position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]}>
                <tubeGeometry args={[curve, 64, 0.4, 8, false]} />
                {/* Nano Tech Material */}
                <MeshDistortMaterial
                    color={COLORS.dark}
                    emissive={COLORS.primary}
                    emissiveIntensity={0.5}
                    roughness={0.2}
                    metalness={1}
                    wireframe={true}
                    distort={0.3}
                    speed={2}
                />
            </mesh>

            {/* Inner glowing core (the "fruit") */}
            <mesh position={[0, -0.2, 0]} scale={[1.4, 1.4, 1.4]} rotation={[0, 0, -0.2]}>
                <tubeGeometry args={[curve, 32, 0.2, 8, false]} />
                <meshBasicMaterial color={COLORS.primary} transparent opacity={0.6} />
            </mesh>
        </Float>
    );
}
