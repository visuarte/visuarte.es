import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';
import { TRON_COLORS } from '../../lib/tronColors';
import { getWebGLSettings } from '../../lib/deviceDetection';

const settings = getWebGLSettings();

function EarthProxy() {
    const meshRef = useRef<THREE.Group>(null);
    const isBarebones = settings.isBarebones;

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
        }
    });

    return (
        <group ref={meshRef}>
            {/* Wireframe Earth */}
            <Sphere args={[2, isBarebones ? 12 : 32, isBarebones ? 12 : 32]}>
                <meshBasicMaterial
                    color={TRON_COLORS.cyan}
                    wireframe
                    transparent
                    opacity={0.4}
                />
            </Sphere>
            <Sphere args={[1.98, isBarebones ? 8 : 32, isBarebones ? 8 : 32]}>
                <meshBasicMaterial color="#000000" transparent opacity={0.8} />
            </Sphere>

            {/* Pointer to shop location (approximate for visual effect) */}
            <group rotation={[0.5, 1.2, 0]}>
                <mesh position={[0, 0, 2.1]}>
                    <coneGeometry args={[0.05, 0.2, 8]} />
                    <meshBasicMaterial color={TRON_COLORS.orange} />
                    <pointLight color={TRON_COLORS.orange} intensity={1} distance={2} />
                </mesh>
                {/* Glow ring around pointer */}
                <mesh position={[0, 0, 2.05]} rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[0.1, 0.12, 16]} />
                    <meshBasicMaterial color={TRON_COLORS.orange} transparent opacity={0.5} />
                </mesh>
            </group>
        </group>
    );
}

export function SpaceMap() {
    const isBarebones = settings.isBarebones;

    if (isBarebones) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center space-y-6 bg-black/40 border border-[#00FFFF22] backdrop-blur-sm p-8 rounded-lg">
                <div className="text-center space-y-4">
                    <div className="text-xs font-mono tracking-[0.3em] opacity-40 uppercase" style={{ color: TRON_COLORS.cyan }}>
                        // LOCATION_COORDINATES
                    </div>
                    <div className="text-2xl font-display font-bold" style={{ color: TRON_COLORS.cyan }}>
                        VALENCIA, SPAIN
                    </div>
                    <div className="text-sm font-mono opacity-60" style={{ color: TRON_COLORS.cyan }}>
                        39.4699° N, 0.3763° W
                    </div>
                </div>

                <a
                    href="https://share.google/a3tbFy8Cdantn2jvh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-4 font-mono text-sm tracking-widest uppercase overflow-hidden"
                    style={{ border: `1px solid ${TRON_COLORS.orange}` }}
                >
                    <div
                        className="absolute inset-0 transition-transform duration-500 translate-x-[-100%] group-hover:translate-x-0"
                        style={{ backgroundColor: TRON_COLORS.orange }}
                    />
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-black" style={{ color: TRON_COLORS.orange }}>
                        OPEN_GRID_MAP
                    </span>
                </a>
            </div>
        );
    }

    return (
        <div className="w-full h-[400px] lg:h-full relative overflow-hidden rounded-xl border border-white/5 bg-black/20">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} />
                <ambientLight intensity={0.2} />
                <EarthProxy />
                {/* Visual connection line */}
                <Line
                    points={[[0, 0, 0], [4, 4, -5]]}
                    color={TRON_COLORS.cyan}
                    lineWidth={1}
                    transparent
                    opacity={0.1}
                />
            </Canvas>

            <div className="absolute top-6 left-6 font-mono text-[10px] tracking-widest opacity-40 uppercase" style={{ color: TRON_COLORS.cyan }}>
                COORD_LOCATOR: VALENCIA_NODE_V1
            </div>

            <div className="absolute bottom-6 right-6 flex flex-col items-end space-y-2">
                <a
                    href="https://share.google/a3tbFy8Cdantn2jvh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 group px-4 py-2 border border-[#FF9D0044] hover:bg-[#FF9D0022] transition-colors duration-500"
                >
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] font-mono opacity-60 uppercase" style={{ color: TRON_COLORS.orange }}>Target_Location</span>
                        <span className="text-xs font-mono font-bold" style={{ color: TRON_COLORS.orange }}>OPEN_GOOGLE_MAPS</span>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center border border-[#FF9D0044] rounded-full">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={TRON_COLORS.orange} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    );
}
