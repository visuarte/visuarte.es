import { motion } from 'framer-motion';
import { TronGrid } from '../components/effects/TronGrid';
import { TronContactForm } from '../components/ui/TronContactForm';
import { TRON_COLORS } from '../lib/tronColors';

export default function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen flex items-center justify-center px-[var(--spacing-phi-3)] py-20 overflow-hidden"
        >
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
                        </div>

                        <div className="border-l-2 pl-6" style={{ borderColor: TRON_COLORS.orange }}>
                            <div className="text-xs uppercase tracking-[0.3em] mb-2 font-mono opacity-60" style={{ color: TRON_COLORS.orange }}>
                                NETWORK_NODES
                            </div>
                            <div className="flex space-x-6">
                                {['TWITTER', 'INSTAGRAM', 'LINKEDIN'].map(social => (
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

                {/* Right side - Form */}
                <div>
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
