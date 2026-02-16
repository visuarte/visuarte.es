import { useRef, useMemo } from 'react';
import * as THREE from 'three';

interface UseBezierMotionPathProps {
    points: THREE.Vector3[];
    speed?: number;
    loop?: boolean;
}

export function useBezierMotionPath({ points, speed = 0.1, loop = true }: UseBezierMotionPathProps) {
    const curve = useMemo(() => new THREE.CatmullRomCurve3(points, loop), [points, loop]);
    const progress = useRef(0);

    // Helper to get position at specific progress (0-1)
    const getPointAt = (t: number) => curve.getPointAt(t % 1);

    // Helper to get tangent/rotation at specific progress
    const getTangentAt = (t: number) => curve.getTangentAt(t % 1);

    return {
        curve,
        progress,
        getPointAt,
        getTangentAt,
        update: (delta: number) => {
            progress.current += delta * speed;
            if (loop) {
                progress.current = progress.current % 1;
            } else {
                progress.current = Math.min(progress.current, 1);
            }
            return progress.current;
        }
    };
}
