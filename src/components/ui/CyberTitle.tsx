import { motion } from 'framer-motion';
import { useState } from 'react';
import { COLORS } from '../../constants';

interface CyberTitleProps {
    text: string;
    className?: string;
}

export function CyberTitle({ text, className = '' }: CyberTitleProps) {
    const [isHovered, setIsHovered] = useState(false);

    const glitch = {
        initial: { x: 0, y: 0, opacity: 1 },
        hover: {
            x: [0, -2, 2, -1, 1, 0],
            y: [0, 1, -1, 0],
            textShadow: [
                `2px 2px 0px ${COLORS.primary}`,
                `-2px -2px 0px #ff00ff`, // Cyberpunk magenta contrast
                `0px 0px 0px transparent`
            ],
            transition: {
                duration: 0.3,
                repeat: Infinity,
                repeatType: "mirror" as const
            }
        }
    };

    return (
        <div className="relative inline-block group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <motion.h2
                className={`font-display font-bold uppercase tracking-tighter relative z-10 ${className}`}
                variants={glitch}
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
            >
                {text}
            </motion.h2>

            {/* Decorative scanline or underline */}
            <motion.div
                className="absolute -bottom-2 left-0 h-[2px] bg-primary"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, ease: "circOut" }}
            />
        </div>
    );
}
