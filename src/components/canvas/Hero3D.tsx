import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom, Glitch, Noise, ChromaticAberration } from '@react-three/postprocessing';
import * as THREE from 'three';
import { Vector2 } from 'three';
import { getWebGLSettings } from '../../lib/deviceDetection';

const PLANETS = [
    { name: 'SUN', color: '#FFD700', size: 2.5, z: 0 },
    { name: 'MERCURY', color: '#888888', size: 0.4, z: -10 },
    { name: 'VENUS', color: '#E3BB76', size: 0.8, z: -20 },
    { name: 'EARTH', color: '#2277FF', size: 0.85, z: -35 },
    { name: 'MARS', color: '#FF4422', size: 0.6, z: -50 },
    { name: 'JUPITER', color: '#D39C7E', size: 1.8, z: -75 },
    { name: 'SATURN', color: '#C5AB6E', size: 1.5, z: -105 },
    { name: 'URANUS', color: '#BBE1E4', size: 1.1, z: -135 },
    { name: 'NEPTUNE', color: '#6081FF', size: 1.1, z: -165 },
    { name: 'PLUTO', color: '#D0C3C3', size: 0.3, z: -190 },
];

const LOOP_DISTANCE = 220;
const TRON_GOLD = '#FFD700';

// Get device-specific settings
const settings = getWebGLSettings();

// TRON Grid Floor
function TronGridFloor() {
    const gridRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!gridRef.current) return;
        gridRef.current.position.z = (state.clock.elapsedTime * 2) % 10;
    });

    const gridLines = useMemo(() => {
        const lines = [];
        const gridSize = 50;
        const divisions = settings.gridDivisions; // Adaptive grid density
        const step = gridSize / divisions;

        for (let i = -divisions; i <= divisions; i++) {
            const points = [];
            points.push(new THREE.Vector3(-gridSize, 0, i * step));
            points.push(new THREE.Vector3(gridSize, 0, i * step));
            lines.push(points);
        }

        for (let i = -divisions; i <= divisions; i++) {
            const points = [];
            points.push(new THREE.Vector3(i * step, 0, -gridSize));
            points.push(new THREE.Vector3(i * step, 0, gridSize));
            lines.push(points);
        }
        return lines;
    }, []);

    return (
        <group ref={gridRef} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -8, -15]}>
            {gridLines.map((points, i) => (
                <line key={i}>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            args={[new Float32Array(points.flatMap(p => [p.x, p.y, p.z])), 3]}
                        />
                    </bufferGeometry>
                    <lineBasicMaterial
                        color={TRON_GOLD}
                        transparent
                        opacity={0.25}
                        blending={THREE.AdditiveBlending}
                    />
                </line>
            ))}
        </group>
    );
}

function WarpLines() {
    const lines = useMemo(() => {
        return Array.from({ length: settings.warpLineCount }).map(() => ({ // Adaptive warp line count
            pos: [
                (Math.random() - 0.5) * 40,
                (Math.random() - 0.5) * 40,
                -Math.random() * LOOP_DISTANCE
            ] as [number, number, number],
        }));
    }, []);

    const linesRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (!linesRef.current) return;
        linesRef.current.children.forEach((child) => {
            child.position.z += 1.5;
            if (child.position.z > 5) child.position.z = -LOOP_DISTANCE;
        });
    });

    return (
        <group ref={linesRef}>
            {lines.map((l, i) => (
                <mesh key={i} position={l.pos}>
                    <boxGeometry args={[0.02, 0.02, 4]} />
                    <meshBasicMaterial color={TRON_GOLD} transparent opacity={0.3} blending={THREE.AdditiveBlending} />
                </mesh>
            ))}
        </group>
    );
}

function PlanetSystem() {
    const sceneZ = useRef(5);

    useFrame((state) => {
        sceneZ.current -= 0.3;
        if (sceneZ.current < -LOOP_DISTANCE) sceneZ.current = 5;
        state.camera.position.z = sceneZ.current;
    });

    return (
        <>
            {PLANETS.map((p) => (
                <group key={p.name} position={[0.5, -0.2, p.z]}>
                    <mesh>
                        <sphereGeometry args={[p.size, 32, 32]} />
                        <meshStandardMaterial
                            color={p.color}
                            emissive={p.color}
                            emissiveIntensity={1.5}
                            roughness={0.1}
                            metalness={0.9}
                        />
                    </mesh>
                    <pointLight color={p.color} intensity={8} distance={20} />
                    {/* TRON glow ring */}
                    <mesh rotation={[Math.PI / 2, 0, 0]}>
                        <ringGeometry args={[p.size * 1.2, p.size * 1.3, 32]} />
                        <meshBasicMaterial
                            color={TRON_GOLD}
                            transparent
                            opacity={0.3}
                            side={THREE.DoubleSide}
                        />
                    </mesh>
                </group>
            ))}
        </>
    );
}

export function Hero3D() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
            <fog attach="fog" args={['#000000', 10, 60]} />

            <Stars
                radius={100}
                depth={50}
                count={settings.starCount} // Adaptive star count
                factor={4}
                saturation={0}
                fade
                speed={1}
            />
            <TronGridFloor />
            <WarpLines />

            <ambientLight intensity={0.3} />
            <PlanetSystem />

            {settings.enablePostProcessing && (
                settings.enableAdvancedEffects ? (
                    <EffectComposer>
                        <Bloom intensity={2.0} luminanceThreshold={0.1} mipmapBlur />
                        <Noise opacity={0.15} />
                        <Glitch ratio={0.1} strength={new Vector2(0.1, 0.2)} />
                        <ChromaticAberration offset={new Vector2(0.002, 0.002)} />
                    </EffectComposer>
                ) : (
                    <EffectComposer>
                        <Bloom intensity={2.0} luminanceThreshold={0.1} mipmapBlur />
                    </EffectComposer>
                )
            )}
        </>
    );
}
