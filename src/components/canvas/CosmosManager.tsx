import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';
import { getWebGLSettings } from '../../lib/deviceDetection';
import { TRON_COLORS } from '../../lib/tronColors';

const settings = getWebGLSettings();

interface CosmosManagerProps {
    children: React.ReactNode;
}

function StaticFallback() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden" style={{ background: '#000000' }}>
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(${TRON_COLORS.cyan} 1px, transparent 1px), linear-gradient(90deg, ${TRON_COLORS.cyan} 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                    transform: 'perspective(500px) rotateX(60deg) translateY(-100px)',
                }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-96 h-96 rounded-full opacity-10 bg-cyan-500 blur-[100px] animate-pulse" />
            </div>
            {/* Scanlines overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%]" />
        </div>
    );
}

export function CosmosManager({ children }: CosmosManagerProps) {
    if (settings.disableWebGL) {
        return <StaticFallback />;
    }

    return (
        <div className="fixed inset-0 z-0 bg-dark overflow-hidden pointer-events-none">
            <Canvas
                shadows={!settings.isBarebones}
                dpr={settings.dpr}
                gl={{
                    antialias: !settings.isBarebones,
                    alpha: false,
                    powerPreference: "high-performance"
                }}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
                <color attach="background" args={['#000000']} />
                <fog attach="fog" args={['#000000', 5, 20]} />

                <Suspense fallback={null}>
                    {children}

                    {!settings.isBarebones && settings.enablePostProcessing && (
                        <EffectComposer>
                            <Bloom luminanceThreshold={1} intensity={1.2} />
                            {settings.enableAdvancedEffects ? (
                                <Noise opacity={0.05} />
                            ) : <></>}
                        </EffectComposer>
                    )}

                    <Preload all />
                </Suspense>
            </Canvas>

            {/* Global scanlines overlay - only on non-barebones for max perf */}
            {!settings.isBarebones && (
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[length:100%_2px,3px_100%]" />
            )}
        </div>
    );
}
