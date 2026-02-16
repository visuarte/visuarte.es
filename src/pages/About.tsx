import { motion } from 'framer-motion';
import { SolarSystemTravel } from '../components/effects/SolarSystemTravel';
import { ServiceNexus } from '../components/ui/ServiceNexus';
import { AboutHeader, AboutSideInfo } from '../components/ui/AboutComponents';

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[90vh] flex flex-col justify-center px-[var(--spacing-phi-3)] py-20 overflow-hidden"
        >
            <SolarSystemTravel />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-end">
                <AboutHeader />
                <AboutSideInfo />
            </div>

            <ServiceNexus />

            {/* Bottom Deco */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-[var(--spacing-phi-3)] right-[var(--spacing-phi-3)] flex justify-between items-center z-10"
            >
                <div className="font-mono text-[8px] text-primary/20 tracking-[4px]">
                    SCANNING_IDENTITY... VALIDATED_USER_88192
                </div>
                <div className="h-[1px] flex-1 mx-8 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
                <div className="font-mono text-[8px] text-primary/20 tracking-[4px]">
                    2026 © VISUARTE_CORE
                </div>
            </motion.div>
        </motion.div>
    );
}
