import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { TRON_COLORS } from '../../lib/tronColors';
import { getWebGLSettings } from '../../lib/deviceDetection';

// Get device-specific settings
const settings = getWebGLSettings();

function Grid() {
    const gridRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!gridRef.current) return;
        // Infinite scroll effect
        gridRef.current.position.z = (state.clock.elapsedTime * 2) % 10;
    });

    const { positions, color } = useMemo(() => {
        const points = [];
        const gridSize = 50;
        const divisions = settings.gridDivisions;
        const step = gridSize / divisions;

        for (let i = -divisions; i <= divisions; i++) {
            points.push(-gridSize, 0, i * step, gridSize, 0, i * step);
            points.push(i * step, 0, -gridSize, i * step, 0, gridSize);
        }

        return {
            positions: new Float32Array(points),
            color: new THREE.Color(TRON_COLORS.cyan)
        };
    }, []);

    return (
        <group ref={gridRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -5, -10]}>
            <lineSegments>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    color={color}
                    transparent
                    opacity={0.3}
                    blending={THREE.AdditiveBlending}
                />
            </lineSegments>
        </group>
    );
}

function LightCycles() {
    const cyclesRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!cyclesRef.current) return;
        cyclesRef.current.children.forEach((child, i) => {
            child.position.x = Math.sin(state.clock.elapsedTime + i * 2) * 15;
            child.position.z = (state.clock.elapsedTime * 3 + i * 5) % 30 - 15;
        });
    });

    const lightCycleCount = settings.enableAdvancedEffects ? 2 : 1; // Simplified count

    return (
        <group ref={cyclesRef}>
            {Array.from({ length: lightCycleCount }).map((_, i) => (
                <mesh key={i} position={[0, -3, 0]}>
                    <boxGeometry args={[0.08, 0.08, 1.5]} />
                    <meshBasicMaterial
                        color={i === 1 ? TRON_COLORS.orange : TRON_COLORS.cyan}
                        transparent
                        opacity={0.6}
                    />
                    {!settings.enableAdvancedEffects && settings.starCount > 1000 ? (
                        <pointLight
                            color={i === 1 ? TRON_COLORS.orange : TRON_COLORS.cyan}
                            intensity={1.5}
                            distance={4}
                        />
                    ) : null}
                </mesh>
            ))}
        </group>
    );
}

export function TronGrid() {
    if (settings.disableWebGL) {
        return (
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" style={{ background: TRON_COLORS.darkBlue }}>
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(${TRON_COLORS.cyan} 1px, transparent 1px), linear-gradient(90deg, ${TRON_COLORS.cyan} 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>
        );
    }

    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" style={{ background: TRON_COLORS.darkBlue }}>
            <Canvas camera={{ position: [0, 5, 10], fov: 60 }} dpr={settings.dpr}>
                <fog attach="fog" args={[TRON_COLORS.darkBlue, 10, 50]} />
                {!settings.isBarebones ? (
                    <>
                        <Grid />
                        <LightCycles />
                        <ambientLight intensity={0.1} />
                    </>
                ) : (
                    // On barebones, we show a static simplified version or nothing
                    <ambientLight intensity={0.05} />
                )}
            </Canvas>

            {/* Scanlines overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    background: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        ${TRON_COLORS.cyan} 2px,
                        ${TRON_COLORS.cyan} 4px
                    )`
                }}
            />
        </div>
    );
}
