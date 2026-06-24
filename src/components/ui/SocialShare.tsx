import { Share2, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { TRON_COLORS } from '../../lib/tronColors';

interface SocialShareProps {
    title?: string;
    url?: string;
}

export function SocialShare({ title = "VISUARTE | Digital Experiences", url = window.location.href }: SocialShareProps) {
    const [isOpen, setIsOpen] = useState(false);

    const shareData = {
        title: title,
        text: 'Echa un vistazo a esta experiencia digital de VISUARTE',
        url: url,
    };

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            setIsOpen(!isOpen);
        }
    };

    const socialLinks = [
        {
            name: 'X',
            icon: <Twitter className="w-4 h-4" />,
            url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(url)}`,
            color: TRON_COLORS.cyan
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-4 h-4" />,
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            color: TRON_COLORS.cyan
        },
        {
            name: 'WhatsApp',
            icon: <MessageCircle className="w-4 h-4" />,
            url: `https://wa.me/?text=${encodeURIComponent(shareData.text + ' ' + url)}`,
            color: TRON_COLORS.cyan
        }
    ];

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-16 right-0 flex flex-col gap-3"
                    >
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 backdrop-blur-md group relative"
                                style={{
                                    background: 'rgba(0,0,0,0.8)',
                                    borderColor: `${link.color}40`,
                                    color: link.color,
                                    boxShadow: `0 0 10px ${link.color}20`
                                }}
                            >
                                {link.icon}
                                {/* Glitch effect on hover */}
                                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none" style={{ border: `2px solid ${link.color}` }} />
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={handleNativeShare}
                className="w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-500 group relative overflow-hidden"
                style={{
                    background: 'rgba(0,0,0,0.9)',
                    borderColor: isOpen ? TRON_COLORS.orange : TRON_COLORS.cyan,
                    color: isOpen ? TRON_COLORS.orange : TRON_COLORS.cyan,
                    boxShadow: isOpen ? `0 0 20px ${TRON_COLORS.orange}60` : `0 0 20px ${TRON_COLORS.cyan}40`
                }}
            >
                <Share2 className={`w-6 h-6 transform transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />

                {/* Visual Feedback - Scanlines inside circle */}
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />

                {/* Rotating Border Segment for extra "tech" feel */}
                <div className="absolute inset-[-4px] border-t-2 border-primary/40 rounded-full animate-[spin_3s_linear_infinite] opacity-50" />
            </button>
        </div>
    );
}
