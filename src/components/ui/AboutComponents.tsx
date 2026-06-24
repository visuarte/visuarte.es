import { motion } from 'framer-motion';
import { Typewriter } from './Typewriter';

export function AboutHeader() {
    return (
        <div className="space-y-12">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
            >
                <div className="text-primary/40 font-mono text-xs tracking-[8px] uppercase mb-4">IDENT_CONFIRMED: VISUARTE_PROTO</div>
                <h1 className="text-7xl font-display font-bold text-primary tracking-tighter leading-none glitch-text" data-text="ABOUT_US">
                    ABOUT_US
                </h1>
            </motion.div>

            <div className="max-w-2xl border-l-2 border-primary/20 pl-8 space-y-6">
                <p className="text-xl font-mono text-primary/80 leading-relaxed">
                    <Typewriter
                        text="Visuarte is a high-performance digital laboratory located at the intersect of advanced engineering and cinematic art."
                        speed={20}
                    />
                </p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="text-lg font-light text-primary/60 leading-relaxed font-mono italic"
                >
                    We specialize in crafting immersive 3D architectures, neural-integrated experiences, and hyper-visual narratives for the next era of the web.
                </motion.p>
            </div>
        </div>
    );
}

export function AboutSideInfo() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex flex-col items-end text-right border-t border-primary/10 pt-8"
        >
            <div className="font-mono text-[10px] text-primary/40 space-y-1">
                <p>LOC: NIGHT_CITY_COORD_2026</p>
                <p>SYSTEM: PROTOCOL_X</p>
                <p>STABILITY: 99.8%</p>
            </div>
            <div className="mt-8 text-primary/20 font-display text-4xl opacity-50 select-none vertical-text tracking-widest uppercase">
                ヴィジュアル
            </div>
        </motion.div>
    );
}
