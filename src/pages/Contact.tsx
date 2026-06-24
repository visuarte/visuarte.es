import { motion } from 'framer-motion';
import { TronGrid } from '../components/effects/TronGrid';
import { TronContactForm } from '../components/ui/TronContactForm';
import { SpaceMap } from '../components/canvas/SpaceMap';
import { TRON_COLORS } from '../lib/tronColors';
import { SEO } from '../components/ui/SEO';

export default function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen flex items-center justify-center px-[var(--spacing-phi-3)] py-20 overflow-hidden"
        >
            <SEO title="Enter the Grid" description="Inicia el protocolo de contacto. Estamos listos para dar vida a tus proyectos digitales más ambiciosos." />
            <TronGrid />

            <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left side - Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2
                        className="text-6xl font-display font-bold mb-6 tracking-wider"
                        style={{
                            color: TRON_COLORS.cyan,
                            textShadow: `0 0 20px ${TRON_COLORS.cyan}, 0 0 40px ${TRON_COLORS.glowCyan}`
                        }}
                    >
                        ENTER THE GRID
                    </h2>

                    <p className="text-lg mb-8 font-mono" style={{ color: TRON_COLORS.cyan, opacity: 0.7 }}>
                        // INITIALIZE_CONTACT_PROTOCOL
                    </p>

                    <div className="space-y-6">
                        <div className="border-l-2 pl-6" style={{ borderColor: TRON_COLORS.cyan }}>
                            <div className="text-xs uppercase tracking-[0.3em] mb-2 font-mono opacity-60" style={{ color: TRON_COLORS.cyan }}>
                                DIRECT_TRANSMISSION
                            </div>
                            <a
                                href="mailto:visuarte.creativos@gmail.com"
                                className="text-xl font-mono hover:opacity-80 transition-opacity block"
                                style={{ color: TRON_COLORS.cyan }}
                            >
                                visuarte.creativos@gmail.com
                            </a>
                            <a
                                href="https://wa.me/34616996306"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-mono hover:opacity-100 transition-opacity flex items-center gap-2 mt-4"
                                style={{ color: TRON_COLORS.cyan, textShadow: `0 0 10px ${TRON_COLORS.cyan}` }}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                WHATSAPP_TRANSMISSION
                            </a>
                            <div className="text-[10px] opacity-40 mt-1" style={{ color: TRON_COLORS.cyan }}>
                                [+34 616 996 306]
                            </div>
                        </div>

                        <div className="border-l-2 pl-6" style={{ borderColor: TRON_COLORS.orange }}>
                            <div className="text-xs uppercase tracking-[0.3em] mb-2 font-mono opacity-60" style={{ color: TRON_COLORS.orange }}>
                                NETWORK_NODES
                            </div>
                            <div className="flex flex-wrap gap-x-6 gap-y-4">
                                <a
                                    href="https://www.instagram.com/visuarte_printshop/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs uppercase tracking-widest font-mono hover:opacity-100 transition-opacity opacity-100 flex items-center gap-2"
                                    style={{ color: TRON_COLORS.orange }}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: TRON_COLORS.orange }}></span>
                                    INSTAGRAM
                                </a>
                                {['TWITTER', 'LINKEDIN'].map(social => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="text-xs uppercase tracking-widest font-mono hover:opacity-100 transition-opacity opacity-60"
                                        style={{ color: TRON_COLORS.orange }}
                                    >
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="mt-12 space-y-2 font-mono text-xs opacity-30" style={{ color: TRON_COLORS.cyan }}>
                        <div>SYSTEM_STATUS: ONLINE</div>
                        <div>RESPONSE_TIME: &lt; 24H</div>
                        <div>ENCRYPTION: ENABLED</div>
                    </div>
                </motion.div>

                {/* Right side - Form & Map */}
                <div className="space-y-12">
                    <div className="h-[400px] w-full">
                        <SpaceMap />
                    </div>
                    <TronContactForm />
                </div>
            </div>

            {/* Bottom decorative line */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{
                    background: `linear-gradient(90deg, transparent, ${TRON_COLORS.cyan}, transparent)`,
                    boxShadow: `0 0 10px ${TRON_COLORS.cyan}`
                }}
            />
        </motion.div>
    );
}
