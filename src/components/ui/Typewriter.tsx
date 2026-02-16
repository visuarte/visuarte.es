import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    cursor?: boolean;
}

export function Typewriter({ text, speed = 50, delay = 0, className = '', cursor = true }: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        let currentIndex = 0;

        const startTyping = () => {
            const typeChar = () => {
                if (currentIndex < text.length) {
                    setDisplayedText(text.slice(0, currentIndex + 1));
                    currentIndex++;
                    timeout = setTimeout(typeChar, speed + (Math.random() * 20)); // Add slight randomness for realism
                }
            };

            typeChar();
        };

        const delayTimeout = setTimeout(startTyping, delay);

        return () => {
            clearTimeout(timeout);
            clearTimeout(delayTimeout);
        };
    }, [text, speed, delay]);

    return (
        <span className={`${className} inline-flex items-center`}>
            {displayedText}
            {cursor && (
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="ml-1 w-[2px] h-[1em] bg-primary inline-block"
                />
            )}
        </span>
    );
}
