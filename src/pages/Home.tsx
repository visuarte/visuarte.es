import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from '../components/ui/Typewriter';
import { CyberTitle } from '../components/ui/CyberTitle';
import { ScalePop } from '../components/ui/ScalePop';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CyberPlayer } from '../components/ui/CyberPlayer';
import { MinorityIcons } from '../components/ui/MinorityIcons';
import { ServicePanel } from '../components/ui/ServicePanel';
import { SEO } from '../components/ui/SEO';
import { SocialShare } from '../components/ui/SocialShare';

const JSON_LD = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "VISUARTE",
    "image": "https://visuarte.es/og-image.jpg",
    "url": "https://visuarte.es",
    "telephone": "+34616996306",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Valencia",
        "addressCountry": "ES"
    },
    "description": "Productora Audiovisual & Digital especializada en WebGL y experiencias interactivas.",
    "sameAs": [
        "https://www.instagram.com/visuarte_printshop/"
    ]
};

export default function Home() {
    const [showPlayer, setShowPlayer] = useState(false);
    const [selectedService, setSelectedService] = useState<any>(null);

    useEffect(() => {
        // Trigger player after text animation finishes (~9s)
        const timer = setTimeout(() => setShowPlayer(true), 9000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center min-h-[70vh] px-[var(--spacing-phi-2)]"
        >
            <SEO jsonLd={JSON_LD} />
            <SocialShare />
            <div className="mb-[var(--spacing-phi-1)] text-primary font-mono text-xs sm:text-sm tracking-widest">
                <Typewriter text="SYSTEM INITIALIZED..." speed={50} />
            </div>

            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="scale-90 origin-left"
            >
                <div className="flex flex-col md:flex-row md:items-end gap-6">
                    <div>
                        <CyberTitle text="DIGITAL" className="text-4xl sm:text-5xl md:text-6xl lg:text-[length:calc(var(--text-phi-3xl)*0.85)] leading-none" />
                        <h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-[length:calc(var(--text-phi-3xl)*0.85)] font-display font-bold leading-none tracking-tighter mix-blend-exclusion text-primary opacity-90 glitch-text"
                            data-text="EXPERIENCES"
                        >
                            EXPERIENCES
                        </h1>
                    </div>

                    <div className="mb-2">
                        <Link to="/work">
                            <ScalePop>
                                <button className="px-[var(--spacing-phi-2)] py-[var(--spacing-phi-1)] border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm font-bold whitespace-nowrap">
                                    View Projects <span className="ml-2">→</span>
                                </button>
                            </ScalePop>
                        </Link>
                    </div>
                </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 mt-[var(--spacing-phi-2)] relative">
                <div className="w-[249px] h-[450px] text-[length:var(--text-phi-base)] text-primary font-mono space-y-6 border-l-2 border-primary pl-[var(--spacing-phi-1)] flex flex-col pt-4 overflow-hidden bg-primary/5">
                    <p className="leading-relaxed">
                        <span className="opacity-50 mr-2">{'>'}</span>
                        <Typewriter text="We create immersive web experiences that merge technology and art." speed={30} delay={500} cursor={false} />
                    </p>
                    <p className="leading-relaxed">
                        <span className="opacity-50 mr-2">{'>'}</span>
                        <Typewriter text="Refining the digital frontier with WebGL and interactive design." speed={30} delay={3500} cursor={false} />
                    </p>
                    <p className="leading-relaxed">
                        <span className="opacity-50 mr-2">{'>'}</span>
                        <Typewriter text="System Status: ONLINE. Ready for input." speed={30} delay={6500} />
                    </p>
                    <div className="mt-auto opacity-20 text-[10px] pb-2">
                        <p>PORT: 8080</p>
                        <p>STATUS: ANALYZING...</p>
                    </div>
                </div>

                <div className="lg:absolute lg:left-[300px] lg:top-0 flex flex-col items-center">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="flex flex-col items-center">
                            <CyberPlayer
                                isVisible={showPlayer}
                                videoUrl="https://www.youtube.com/watch?v=OstKZd4iHVA"
                            />
                            <MinorityIcons
                                isVisible={showPlayer}
                                onSelect={(s) => setSelectedService(s)}
                                selectedId={selectedService?.id}
                            />

                            <AnimatePresence>
                                {showPlayer && !selectedService && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="mt-6 flex items-center gap-3 px-4 py-2 border border-primary/40 bg-primary/10 rounded-full"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                                        <span className="text-[10px] font-mono text-primary tracking-[4px] uppercase font-bold">
                                            Click Here to Initialize
                                        </span>
                                        <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <ServicePanel
                            service={selectedService}
                            onClose={() => setSelectedService(null)}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
