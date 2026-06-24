import { motion } from 'framer-motion';

export const CyberHeart = () => (
    <div className="relative w-full h-full flex items-center justify-center opacity-60">
        <motion.svg viewBox="0 0 100 100" className="w-32 h-32 fill-none stroke-primary stroke-[0.5]">
            <motion.path
                d="M50 30 C 50 20, 20 20, 20 45 C 20 70, 50 90, 50 90 C 50 90, 80 70, 80 45 C 80 20, 50 20, 50 30"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Tech Detailing */}
            <motion.circle cx="50" cy="45" r="5" strokeWidth="1" animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 1, repeat: Infinity }} />
            <line x1="20" y1="45" x2="10" y2="45" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="80" y1="45" x2="90" y2="45" strokeWidth="0.5" strokeDasharray="2 2" />
        </motion.svg>
        <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full" />
    </div>
);

export const CyberBrain = () => (
    <div className="relative w-full h-full flex items-center justify-center opacity-60">
        <motion.svg viewBox="0 0 100 100" className="w-32 h-32 fill-none stroke-primary stroke-[0.5]">
            <motion.path
                d="M30 40 Q30 20 50 20 Q70 20 70 40 Q70 60 50 60 Q30 60 30 40"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Neural Connections */}
            {[...Array(6)].map((_, i) => (
                <motion.line
                    key={i}
                    x1="50" y1="40"
                    x2={50 + Math.cos(i * 60) * 30}
                    y2={40 + Math.sin(i * 60) * 30}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ delay: i * 0.2, duration: 2, repeat: Infinity }}
                />
            ))}
            <motion.rect x="45" y="35" width="10" height="10" strokeWidth="1" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
        </motion.svg>
    </div>
);

export const CyberShip = () => (
    <div className="relative w-full h-full flex items-center justify-center opacity-70">
        <motion.div
            animate={{ y: [0, -10, 0], rotateX: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
            <svg viewBox="0 0 100 100" className="w-32 h-32 fill-none stroke-primary stroke-[0.5]">
                <path d="M20 50 L40 40 L80 50 L40 60 Z" />
                <path d="M40 40 L45 30 L65 30 L60 40" />
                <motion.line
                    x1="20" y1="50" x2="10" y2="50"
                    animate={{ x: [-10, -30] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                />
                <circle cx="80" cy="50" r="2" fill="currentColor" className="animate-pulse" />
            </svg>
        </motion.div>
    </div>
);

export const StrategicWeb = () => (
    <div className="relative w-full h-full flex items-center justify-center opacity-60">
        <motion.svg viewBox="0 0 100 100" className="w-40 h-40 fill-none stroke-primary stroke-[0.3]">
            {[...Array(8)].map((_, i) => (
                <motion.line
                    key={i}
                    x1={10 + i * 10} y1="0"
                    x2={90 - i * 10} y2="100"
                    animate={{ opacity: [0.1, 0.4, 0.1] }}
                    transition={{ delay: i * 0.1, duration: 3, repeat: Infinity }}
                />
            ))}
            {[...Array(8)].map((_, i) => (
                <motion.line
                    key={`h-${i}`}
                    x1="0" y1={10 + i * 10}
                    x2="100" y2={90 - i * 10}
                    animate={{ opacity: [0.1, 0.4, 0.1] }}
                    transition={{ delay: i * 0.1, duration: 3, repeat: Infinity }}
                />
            ))}
            {/* Matrix Rain Decoration */}
            <motion.rect
                x="40" y="0" width="1" height="20" fill="currentColor"
                animate={{ y: [0, 100] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.rect
                x="60" y="0" width="1" height="30" fill="currentColor"
                animate={{ y: [-30, 100] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1 }}
            />
        </motion.svg>
    </div>
);
