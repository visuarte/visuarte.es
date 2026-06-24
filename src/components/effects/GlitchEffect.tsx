import { motion, useIsPresent } from 'framer-motion';

export function GlitchEffect() {
    const isPresent = useIsPresent();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            className="fixed inset-0 z-[100] pointer-events-none mix-blend-difference"
            style={{ display: isPresent ? 'none' : 'block' }}
        >
            {/* Glitch Slices */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute inset-0 bg-white"
                    initial={{ clipPath: 'inset(50% 0 50% 0)' }}
                    animate={{
                        clipPath: [
                            `inset(${10 + i * 10}% 0 ${80 - i * 10}% 0)`,
                            `inset(${40 + i * 5}% 0 ${30 - i * 5}% 0)`,
                            'inset(50% 0 50% 0)'
                        ],
                        x: [-20, 20, -10, 10, 0]
                    }}
                    transition={{ duration: 0.2, times: [0, 0.5, 1] }}
                />
            ))}
        </motion.div>
    );
}
