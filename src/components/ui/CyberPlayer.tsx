import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface CyberPlayerProps {
    isVisible: boolean;
    videoUrl: string;
}

export function CyberPlayer({ isVisible, videoUrl }: CyberPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isYouTube, setIsYouTube] = useState(false);
    const [videoId, setVideoId] = useState('');

    useEffect(() => {
        if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
            setIsYouTube(true);
            const id = videoUrl.includes('v=')
                ? videoUrl.split('v=')[1]?.split('&')[0]
                : videoUrl.split('/').pop();
            setVideoId(id || '');
        } else {
            setIsYouTube(false);
        }
    }, [videoUrl]);

    useEffect(() => {
        if (isVisible && !isYouTube && videoRef.current) {
            videoRef.current.play().catch(e => console.log("Autoplay blocked:", e));
        }
    }, [isVisible, isYouTube]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 50, rotateY: 30 }}
                    animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", damping: 15, stiffness: 100 }}
                    className="relative group w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] aspect-video perspective-1000"
                >
                    {/* Futuristic Frame Decoration */}
                    <div className="absolute -inset-2 border border-primary/30 z-0 skew-x-2" />
                    <div className="absolute -top-4 -left-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-t-2 border-l-2 border-primary" />
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-b-2 border-r-2 border-primary" />

                    {/* Scanning Line Overlay */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20 opacity-20 bg-gradient-to-b from-transparent via-primary/50 to-transparent h-1 w-full animate-scanline" />

                    {/* Main Content */}
                    <div className="relative z-10 w-full h-full overflow-hidden border border-primary bg-black shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                        {/* Status Bar */}
                        <div className="absolute top-0 left-0 right-0 bg-primary/20 flex justify-between px-2 sm:px-3 py-1 text-[8px] sm:text-[9px] md:text-[10px] font-mono text-primary z-30">
                            <span className="truncate">REPLAYING: WEBGL_CORE_RECOVERY</span>
                            <span className="animate-pulse">REC ●</span>
                        </div>

                        {isYouTube ? (
                            <div className="w-full h-full relative pointer-events-none scale-110">
                                <iframe
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&iv_load_policy=3`}
                                    className="absolute inset-0 w-full h-full border-0"
                                    allow="autoplay; encrypted-media"
                                    title="Cyber Video"
                                />
                            </div>
                        ) : (
                            <video
                                ref={videoRef}
                                src={videoUrl}
                                muted
                                loop
                                className="w-full h-full object-cover grayscale brightness-125 contrast-125"
                            />
                        )}

                        {/* Branding Overlay */}
                        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 0.4, 0.2] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="text-2xl sm:text-3xl md:text-[40px] font-display font-black text-primary/30 tracking-[10px] sm:tracking-[15px] md:tracking-[20px] select-none text-center"
                            >
                                VISUARTE
                            </motion.div>
                            <div className="text-[8px] sm:text-[9px] md:text-[10px] font-mono text-primary/40 tracking-[3px] sm:tracking-[4px] md:tracking-[5px] mt-[-5px] sm:mt-[-8px] md:mt-[-10px]">
                                3D_WEBGL_ENGINE_v.2.0
                            </div>
                        </div>

                        {/* HUD Elements */}
                        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 flex justify-between items-end z-30 pointer-events-none">
                            <div className="space-y-1">
                                <div className="w-16 sm:w-20 md:w-24 h-1 bg-primary/20 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-primary"
                                        animate={{ width: ["0%", "100%", "0%"] }}
                                        transition={{ duration: 10, repeat: Infinity }}
                                    />
                                </div>
                                <p className="text-[7px] sm:text-[8px] font-mono text-primary opacity-50">SYNCING_BITSTREAM...</p>
                            </div>
                            <div className="text-[10px] sm:text-[12px] md:text-[14px] font-mono text-primary font-bold">
                                00:FF:21:A{Math.floor(Math.random() * 9)}
                            </div>
                        </div>
                    </div>

                    {/* Glitch Overlay */}
                    <div className="absolute inset-0 z-40 bg-primary/5 pointer-events-none mix-blend-overlay group-hover:block hidden animate-glitch-active" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
