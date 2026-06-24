import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import { getWebGLSettings } from '../../lib/deviceDetection';
import { PLANETS, LOOP_DISTANCE, TRON_GOLD } from '../../constants';

const settings = getWebGLSettings();

function TronGridFloor() {
    const gridRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!gridRef.current) return;
        gridRef.current.position.z = (state.clock.elapsedTime * 2) % 10;
    });

    const gridSize = 50;
    const divisions = settings.gridDivisions;
    const step = gridSize / divisions;

    const { positions, color } = useMemo(() => {
        const points = [];
        for (let i = -divisions; i <= divisions; i++) {
            points.push(-gridSize, 0, i * step, gridSize, 0, i * step);
            points.push(i * step, 0, -gridSize, i * step, 0, gridSize);
        }
        return {
            positions: new Float32Array(points),
            color: new THREE.Color(TRON_GOLD)
        };
    }, [divisions, step]);

    return (
        <group ref={gridRef} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -8, -15]}>
            <lineSegments>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                </bufferGeometry>
                <lineBasicMaterial color={color} transparent opacity={0.25} blending={THREE.AdditiveBlending} />
            </lineSegments>
        </group>
    );
}

function WarpLines() {
    const count = settings.warpLineCount;
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const lines = useMemo(() => {
        return Array.from({ length: count }).map(() => ({
            pos: new THREE.Vector3(
                (Math.random() - 0.5) * 40,
                (Math.random() - 0.5) * 40,
                -Math.random() * LOOP_DISTANCE
            ),
        }));
    }, [count]);

    useFrame(() => {
        if (!meshRef.current) return;
        lines.forEach((line, i) => {
            line.pos.z += 1.5;
            if (line.pos.z > 5) line.pos.z = -LOOP_DISTANCE;
            dummy.position.copy(line.pos);
            dummy.updateMatrix();
            meshRef.current?.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            <boxGeometry args={[0.02, 0.02, 4]} />
            <meshBasicMaterial color={TRON_GOLD} transparent opacity={0.3} blending={THREE.AdditiveBlending} />
        </instancedMesh>
    );
}

interface PlanetSystemProps {
    setActivePlanet: (name: string | null) => void;
    activePlanetName: string | null;
}

function PlanetSystem({ setActivePlanet, activePlanetName }: PlanetSystemProps) {
    const isLowTier = settings.starCount <= 1000 && settings.starCount > 0;
    const isBarebones = settings.isBarebones;
    const sceneZ = useRef(5);

    useFrame((state) => {
        sceneZ.current -= 0.3;
        if (sceneZ.current < -LOOP_DISTANCE) sceneZ.current = 5;
        state.camera.position.z = sceneZ.current;

        const currentZ = state.camera.position.z;
        const active = PLANETS.find(p => Math.abs(currentZ - p.z) < 4);
        const nextPlanetName = active ? active.name : null;

        if (nextPlanetName !== activePlanetName) {
            setActivePlanet(nextPlanetName);
        }
    });

    return (
        <group>
            {PLANETS.map((p) => (
                <group key={p.name} position={[0.5, -0.2, p.z]}>
                    <mesh onClick={() => setActivePlanet(p.name)}>
                        <sphereGeometry args={[p.size, isBarebones ? 6 : (isLowTier ? 8 : 16), isBarebones ? 6 : (isLowTier ? 8 : 16)]} />
                        {isBarebones ? (
                            <meshBasicMaterial color={p.color} />
                        ) : (
                            <meshStandardMaterial
                                color={p.color}
                                emissive={p.color}
                                emissiveIntensity={isLowTier ? 0.8 : 1.0}
                                roughness={0.2}
                                metalness={0.8}
                            />
                        )}
                    </mesh>
                    {!isBarebones && (!isLowTier || p.name === 'SUN') && (
                        <pointLight color={p.color} intensity={isLowTier ? 6 : 4} distance={isLowTier ? 25 : 15} />
                    )}
                    {!isLowTier && !isBarebones && (
                        <mesh rotation={[Math.PI / 2, 0, 0]}>
                            <ringGeometry args={[p.size * 1.2, p.size * 1.25, 24]} />
                            <meshBasicMaterial color={TRON_GOLD} transparent opacity={0.2} side={THREE.DoubleSide} />
                        </mesh>
                    )}
                </group>
            ))}
        </group>
    );
}

export function SolarSystemTravelContent({ setActivePlanet, activePlanetName }: PlanetSystemProps) {
    return (
        <group>
            {!settings.isBarebones && (
                <>
                    <Stars radius={100} depth={50} count={settings.starCount} factor={4} saturation={0} fade speed={1} />
                    <TronGridFloor />
                    <WarpLines />
                    <ambientLight intensity={0.3} />
                </>
            )}
            <PlanetSystem setActivePlanet={setActivePlanet} activePlanetName={activePlanetName} />
        </group>
    );
}
