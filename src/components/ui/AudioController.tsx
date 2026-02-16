import { Megaphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../../hooks/useAudio';

export function AudioController() {
    const { isPlaying, toggle, audioRef, src } = useAudio(true);

    return (
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4">
            <audio
                ref={audioRef}
                loop
                src={src}
            />

            <motion.button
                onClick={toggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 rounded-full border border-primary/20 backdrop-blur-md transition-all duration-300 ${isPlaying ? 'bg-primary text-black shadow-[0_0_20px_rgba(255,215,0,0.3)]' : 'bg-transparent text-white/50 hover:text-primary hover:border-primary'
                    }`}
            >
                <AnimatePresence mode="wait">
                    {isPlaying ? (
                        <motion.div
                            key="playing"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                        >
                            <Megaphone size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="muted"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                        >
                            <Megaphone size={24} className="opacity-50" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {isPlaying && (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="hidden md:block text-xs font-mono text-primary/70"
                >
                    LISTENING TO: MOUNTAIN BREAKBEAT
                </motion.div>
            )}
        </div>
    );
}
