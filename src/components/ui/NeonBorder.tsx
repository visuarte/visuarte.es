import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { COLORS } from '../../constants';

interface NeonBorderProps {
    children: ReactNode;
    className?: string;
    color?: string;
}

export function NeonBorder({ children, className = '', color = COLORS.primary }: NeonBorderProps) {
    return (
        <div className={`relative group p-[1px] rounded-lg overflow-hidden ${className}`}>
            {/* Animated gradient border */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                    x: ['-100%', '100%'],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "linear",
                }}
                style={{
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`
                }}
            />

            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: color, filter: 'blur(20px)' }}
            />

            <div className="relative bg-secondary rounded-lg h-full w-full z-10">
                {children}
            </div>
        </div>
    );
}
