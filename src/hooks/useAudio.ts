import { useState, useRef, useEffect } from 'react';
import { AUDIO_CONFIG } from '../constants';

export function useAudio(autoPlay: boolean = false) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (autoPlay && audioRef.current) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => setIsPlaying(true))
                    .catch((error) => {
                        console.log("Auto-play prevented by browser:", error);
                        setIsPlaying(false);
                    });
            }
        }
    }, [autoPlay]);

    const toggle = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(console.error);
            }
            setIsPlaying(!isPlaying);
        }
    };

    return { isPlaying, toggle, audioRef, src: AUDIO_CONFIG.ambientTrack };
}
