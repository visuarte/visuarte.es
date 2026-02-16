import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { COLORS } from '../../constants';

interface Spark {
    id: number;
    x: number;
    y: number;
    angle: number;
    size: number;
}

export function ClickSpark() {
    const [sparks, setSparks] = useState<Spark[]>([]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const newSparks: Spark[] = [];
            const count = 8 + Math.floor(Math.random() * 5); // 8-12 sparks

            for (let i = 0; i < count; i++) {
                newSparks.push({
                    id: Date.now() + i,
                    x: e.clientX,
                    y: e.clientY,
                    angle: (Math.PI * 2 * i) / count,
                    size: 2 + Math.random() * 4
                });
            }

            setSparks(prev => [...prev.slice(-20), ...newSparks]);
        };

        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            <AnimatePresence>
                {sparks.map(spark => (
                    <motion.div
                        key={spark.id}
                        initial={{
                            x: spark.x,
                            y: spark.y,
                            opacity: 1,
                            scale: 0
                        }}
                        animate={{
                            x: spark.x + Math.cos(spark.angle) * 100,
                            y: spark.y + Math.sin(spark.angle) * 100,
                            opacity: 0,
                            scale: 1
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        style={{
                            width: spark.size,
                            height: spark.size,
                            backgroundColor: COLORS.primary,
                            borderRadius: '50%',
                            position: 'absolute'
                        }}
                        onAnimationComplete={() => setSparks(prev => prev.filter(s => s.id !== spark.id))}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}
