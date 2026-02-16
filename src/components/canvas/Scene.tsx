import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { Suspense } from 'react';

interface SceneProps {
    children?: React.ReactNode;
}

export function Scene({ children }: SceneProps) {
    return (
        <div className="fixed inset-0 z-0 bg-dark pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    {children}
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
}
