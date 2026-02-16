import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom, Glitch, Noise, ChromaticAberration } from '@react-three/postprocessing';
import * as THREE from 'three';
import { Vector2 } from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { getWebGLSettings } from '../../lib/deviceDetection';

const PLANETS = [
    { name: 'SUN', color: '#FFD700', size: 2.5, z: 0, coord: '0.00.00.00', info: 'CORE_STAR [G2V]' },
    { name: 'MERCURY', color: '#888888', size: 0.4, z: -10, coord: '0.39.00.01', info: 'FE_CORE [HEAVILY_CRATERED]' },
    { name: 'VENUS', color: '#E3BB76', size: 0.8, z: -20, coord: '0.72.10.45', info: 'H2SO4_ATMOS [VOLCANIC]' },
    { name: 'EARTH', color: '#2277FF', size: 0.85, z: -35, coord: '1.00.00.00', info: 'BIOSPHERE_DETECTED [HOME]' },
    { name: 'MARS', color: '#FF4422', size: 0.6, z: -50, coord: '1.52.44.12', info: 'IRON_OXIDE [TERRAFORM_PROJECT]' },
    { name: 'JUPITER', color: '#D39C7E', size: 1.8, z: -75, coord: '5.20.12.89', info: 'GAS_GIANT [GREAT_RED_SPOT]' },
    { name: 'SATURN', color: '#C5AB6E', size: 1.5, z: -105, coord: '9.58.55.32', info: 'RING_SYSTEM [LOW_DENSITY]' },
    { name: 'URANUS', color: '#BBE1E4', size: 1.1, z: -135, coord: '19.22.41.01', info: 'ICE_GIANT [TILTED_AXIS]' },
    { name: 'NEPTUNE', color: '#6081FF', size: 1.1, z: -165, coord: '30.07.12.44', info: 'WIND_PEAKS [DEEP_BLUE]' },
    { name: 'PLUTO', color: '#D0C3C3', size: 0.3, z: -190, coord: '39.48.99.11', info: 'KUIPER_BELT [DWARF]' },
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
            speed: 0.5 + Math.random() * 2
        }));
    }, []);

    const linesRef = useRef<THREE.Group>(null);

    useFrame((_state, _delta) => {
        if (!linesRef.current) return;
        linesRef.current.children.forEach((child) => {
            child.position.z += 1.5; // High speed
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

function PlanetSystem({ setActivePlanet, activePlanetName }: { setActivePlanet: (name: string | null) => void, activePlanetName: string | null }) {
    const sceneZ = useRef(5);

    useFrame((state, _delta) => {
        // Light speed travel logic
        sceneZ.current -= 0.3; // Speed control
        if (sceneZ.current < -LOOP_DISTANCE) sceneZ.current = 5;

        state.camera.position.z = sceneZ.current;

        // Check proximity for HUD
        const currentZ = state.camera.position.z;
        const active = PLANETS.find(p => Math.abs(currentZ - p.z) < 4);
        const nextPlanetName = active ? active.name : null;

        if (nextPlanetName !== activePlanetName) {
            setActivePlanet(nextPlanetName);
        }
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
                    {/* TRON glow ring around planets */}
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

export function SolarSystemTravel() {
    const [activePlanetName, setActivePlanetName] = useState<string | null>(null);
    const activePlanet = PLANETS.find(p => p.name === activePlanetName);

    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" style={{ background: '#000000' }}>
            <Canvas dpr={settings.dpr}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
                <fog attach="fog" args={['#000000', 10, 60]} />

                <Stars radius={100} depth={50} count={settings.starCount} factor={4} saturation={0} fade speed={1} />
                <TronGridFloor />
                <WarpLines />

                <ambientLight intensity={0.3} />
                <PlanetSystem setActivePlanet={setActivePlanetName} activePlanetName={activePlanetName} />

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
            </Canvas>

            {/* TRON Scanlines overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    background: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        ${TRON_GOLD} 2px,
                        ${TRON_GOLD} 4px
                    )`
                }}
            />

            {/* HUD Overlay */}
            <AnimatePresence>
                {activePlanet && (
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute left-[5%] sm:left-[10%] top-[35%] sm:top-[40%] font-mono pointer-events-none"
                        style={{ color: TRON_GOLD }}
                    >
                        <div className="flex items-center gap-2 sm:gap-4">
                            <div
                                className="w-6 sm:w-8 md:w-12 h-[1px] animate-pulse"
                                style={{
                                    background: TRON_GOLD,
                                    boxShadow: `0 0 10px ${TRON_GOLD}`
                                }}
                            />
                            <h3
                                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em]"
                                style={{ textShadow: `0 0 20px ${TRON_GOLD}` }}
                            >
                                {activePlanet.name}
                            </h3>
                        </div>

                        <div className="mt-2 sm:mt-3 md:mt-4 space-y-1 sm:space-y-2 border-l pl-3 sm:pl-4 md:pl-6 ml-3 sm:ml-4 md:ml-6" style={{ borderColor: `${TRON_GOLD}40` }}>
                            <div className="text-[10px] sm:text-xs opacity-60 uppercase tracking-wider">
                                <span className="opacity-40">COORD:</span> {activePlanet.coord}
                            </div>
                            <div className="text-xs sm:text-sm opacity-80">
                                {activePlanet.info}
                            </div>
                            <div className="text-[8px] sm:text-[10px] animate-pulse">STATUS: SCANNING_PROXIMITY...</div>
                        </div>

                        <div
                            className="absolute left-[100%] top-1/2 w-[30vw] h-[1px] origin-left rotate-[-15deg]"
                            style={{
                                background: `linear-gradient(to right, ${TRON_GOLD}80, transparent)`,
                                boxShadow: `0 0 5px ${TRON_GOLD}`
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Speed HUD */}
            <div
                className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 text-[8px] sm:text-[9px] md:text-[10px] font-mono tracking-wider sm:tracking-widest flex flex-col gap-0.5 sm:gap-1 opacity-40"
                style={{ color: TRON_GOLD }}
            >
                <div className="hidden sm:block">VELOCITY: c (SPEED_OF_LIGHT)</div>
                <div>TRAJECTORY: SOLAR_LOOP_X01</div>
                <div className="hidden md:block">RANGE: {LOOP_DISTANCE} AU</div>
                <div>GRID_STATUS: ACTIVE</div>
            </div>
        </div>
    );
}
