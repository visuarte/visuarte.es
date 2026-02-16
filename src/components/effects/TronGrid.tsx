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

    const gridLines = useMemo(() => {
        const lines: THREE.Vector3[][] = [];
        const gridSize = 50;
        const divisions = settings.gridDivisions; // Adaptive grid density
        const step = gridSize / divisions;

        // Create horizontal lines
        for (let i = -divisions; i <= divisions; i++) {
            const points: THREE.Vector3[] = [];
            points.push(new THREE.Vector3(-gridSize, 0, i * step));
            points.push(new THREE.Vector3(gridSize, 0, i * step));
            lines.push(points);
        }

        // Create vertical lines
        for (let i = -divisions; i <= divisions; i++) {
            const points: THREE.Vector3[] = [];
            points.push(new THREE.Vector3(i * step, 0, -gridSize));
            points.push(new THREE.Vector3(i * step, 0, gridSize));
            lines.push(points);
        }
        return lines;
    }, []);

    return (
        <group ref={gridRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -5, -10]}>
            {gridLines.map((points, i) => (
                <line key={i}>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            args={[new Float32Array(points.flatMap(p => [p.x, p.y, p.z])), 3]}
                        />
                    </bufferGeometry>
                    <lineBasicMaterial
                        color={TRON_COLORS.cyan}
                        transparent
                        opacity={0.3}
                        blending={THREE.AdditiveBlending}
                    />
                </line>
            ))}
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

    const lightCycleCount = settings.enableAdvancedEffects ? 3 : 1; // Fewer light cycles on mobile

    return (
        <group ref={cyclesRef}>
            {Array.from({ length: lightCycleCount }).map((_, i) => (
                <mesh key={i} position={[0, -3, 0]}>
                    <boxGeometry args={[0.1, 0.1, 2]} />
                    <meshBasicMaterial
                        color={i === 1 ? TRON_COLORS.orange : TRON_COLORS.cyan}
                        transparent
                        opacity={0.8}
                    />
                    <pointLight
                        color={i === 1 ? TRON_COLORS.orange : TRON_COLORS.cyan}
                        intensity={2}
                        distance={5}
                    />
                </mesh>
            ))}
        </group>
    );
}

export function TronGrid() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" style={{ background: TRON_COLORS.darkBlue }}>
            <Canvas camera={{ position: [0, 5, 10], fov: 60 }} dpr={settings.dpr}>
                <fog attach="fog" args={[TRON_COLORS.darkBlue, 10, 50]} />
                <Grid />
                <LightCycles />
                <ambientLight intensity={0.1} />
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
