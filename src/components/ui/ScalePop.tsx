import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScalePopProps {
    children: ReactNode;
    scale?: number;
    className?: string;
    onClick?: () => void;
}

export function ScalePop({ children, scale = 1.05, className = '', onClick }: ScalePopProps) {
    return (
        <motion.div
            className={className}
            whileHover={{ scale: scale }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 17
            }}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
}
