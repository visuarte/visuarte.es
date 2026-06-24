import { motion } from 'framer-motion';
import { Video, Code2, Bot, Globe, Printer } from 'lucide-react';

const SERVICES = [
    {
        name: 'PRODUCCION DE VIDEO',
        icon: Video,
        id: 'vid',
        description: 'Advanced cinematic production using 8K RAW pipelines and AI-driven color grading. We deliver hyper-visual narratives for the modern digital landscape.'
    },
    {
        name: 'SOFTWARE CINEMATOGRAFICO',
        icon: Code2,
        id: 'sw',
        description: 'Custom OS and toolsets designed for high-stakes film production environments. Robust architecture for reliable real-time collaboration.'
    },
    {
        name: 'APLICACIONES Y AUTOMATISMOS',
        icon: Bot,
        id: 'auto',
        description: 'Intelligent automation workflows and custom enterprise application layers. Seamlessly integrating AI to optimize your creative pipeline.'
    },
    {
        name: 'WEBGL',
        icon: Globe,
        id: 'gl',
        description: 'High-performance interactive 3D experiences rendered directly in the browser. Pushing the limits of GPU acceleration for immersive storytelling.'
    },
    {
        name: 'DISEÑO E IMPRESION',
        icon: Printer,
        id: 'print',
        description: 'Precision graphic systems and high-fidelity physical manufacturing outputs. Bridging the gap between pixels and professional physical assets.'
    }
];

interface MinorityIconsProps {
    isVisible: boolean;
    onSelect: (service: typeof SERVICES[0]) => void;
    selectedId?: string;
}

export function MinorityIcons({ isVisible, onSelect, selectedId }: MinorityIconsProps) {
    return (
        <div className="mt-8 grid grid-cols-5 gap-4 w-full max-w-[400px]">
            {SERVICES.map((service, index) => {
                const isActive = selectedId === service.id;

                return (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, scale: 0, y: 20 }}
                        animate={isVisible ? {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        } : {}}
                        transition={{
                            delay: index * 0.1 + 0.5,
                            duration: 0.5,
                            type: "spring"
                        }}
                        onClick={() => onSelect(service)}
                        className={`flex flex-col items-center group cursor-pointer transition-all duration-300 ${isActive ? 'scale-110' : 'hover:scale-105'}`}
                    >
                        <motion.div
                            animate={isVisible ? {
                                y: [0, -5, 0],
                                rotateZ: [0, 2, -2, 0],
                            } : {}}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className={`relative p-3 border transition-colors rounded-lg mb-2 shadow-[0_0_15px_rgba(255,215,0,0.1)] ${isActive ? 'bg-primary/30 border-primary shadow-[0_0_25px_rgba(255,215,0,0.4)]' : 'border-primary/20 bg-primary/5 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]'}`}
                        >
                            {/* Scanning HUD Deco */}
                            <div className="absolute inset-0 border-t-2 border-primary/40 w-1/4 h-1/4" />
                            <div className="absolute bottom-0 right-0 border-b-2 border-primary/40 w-1/4 h-1/4" />

                            <service.icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-primary'}`} />

                            {/* Connecting Line (Minority Report Style) */}
                            <motion.div
                                className="absolute -top-4 left-1/2 w-[1px] h-4 bg-primary/30"
                                animate={{ opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>

                        <span className={`text-[8px] font-mono text-center leading-tight transition-opacity ${isActive ? 'text-white font-bold opacity-100' : 'text-primary opacity-70 group-hover:opacity-100'}`}>
                            {service.name}
                        </span>

                        {/* Status Dot */}
                        <div className="mt-1 flex gap-1">
                            <div className={`w-1 h-1 rounded-full ${isActive ? 'bg-white shadow-[0_0_5px_white]' : 'bg-primary'} animate-pulse`} />
                            <div className="w-1 h-1 rounded-full bg-primary/20" />
                            <div className="w-1 h-1 rounded-full bg-primary/20" />
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
