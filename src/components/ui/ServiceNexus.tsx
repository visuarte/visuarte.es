import { motion } from 'framer-motion';
import { useState } from 'react';
import { Layers, Zap, Crosshair, Cpu } from 'lucide-react';
import { CyberHeart, CyberBrain, CyberShip, StrategicWeb } from './ServiceVisuals';

const SERVICES = [
    {
        id: '01',
        title: 'VISUAL_CORE',
        subtitle: 'High-End 3D Engine',
        icon: Layers,
        visual: CyberHeart,
        description: 'Advanced WebGL and WebGPU implementation for real-time 3D environments that run natively in the browser.'
    },
    {
        id: '02',
        title: 'NEURAL_SYSTEMS',
        subtitle: 'AI Integration',
        icon: Cpu,
        visual: CyberBrain,
        description: 'Seamless integration of LLMs and generative pipelines into digital products and interactive installations.'
    },
    {
        id: '03',
        title: 'KINETIC_FLOW',
        subtitle: 'Motion & UX',
        icon: Zap,
        visual: CyberShip,
        description: 'Atmospheric UI/UX design focusing on micro-interactions and high-performance physics-based animations.'
    },
    {
        id: '04',
        title: 'STRATEGIC_INT',
        subtitle: 'Product Architecture',
        icon: Crosshair,
        visual: StrategicWeb,
        description: 'End-to-end technical leadership and architectural design for scalable, future-proof digital products.'
    }
];

export function ServiceNexus() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div className="flex h-[400px] w-full gap-4 mt-20">
            {SERVICES.map((service) => (
                <motion.div
                    key={service.id}
                    onHoverStart={() => setHovered(service.id)}
                    onHoverEnd={() => setHovered(null)}
                    animate={{
                        flex: hovered === service.id ? 2.5 : 1, // Increased expansion for visual space
                        opacity: hovered && hovered !== service.id ? 0.3 : 1
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative border border-primary/20 bg-black/40 backdrop-blur-md overflow-hidden group cursor-crosshair"
                >
                    {/* Vertical Header */}
                    <div className="absolute top-0 left-0 w-full h-full p-6 flex flex-col justify-between z-20">
                        <div className="flex justify-between items-start">
                            <service.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                            <span className="font-mono text-[10px] text-primary/40 group-hover:text-primary/60">{service.id}</span>
                        </div>

                        <div className="mt-auto">
                            <h3 className="font-display font-bold text-xl text-primary tracking-widest mb-1 group-hover:pl-2 transition-all">{service.title}</h3>
                            <p className="font-mono text-[10px] text-primary/40 uppercase tracking-[4px] group-hover:pl-2 transition-all">{service.subtitle}</p>
                        </div>
                    </div>

                    {/* Custom Visual (Visible in both states) */}
                    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                        <motion.div
                            animate={{
                                opacity: hovered === service.id ? 0.4 : 0.15,
                                scale: hovered === service.id ? 1.2 : 0.8,
                                x: hovered === service.id ? '25%' : '0%'
                            }}
                            className="w-full h-full flex items-center justify-center"
                        >
                            <service.visual />
                        </motion.div>
                    </div>

                    {/* Expaned Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hovered === service.id ? 1 : 0 }}
                        className="absolute inset-0 p-6 flex items-center justify-between bg-primary/5 pointer-events-none z-10"
                    >
                        {/* Text Content */}
                        <div className="max-w-[50%] z-30">
                            <p className="font-mono text-sm text-primary/80 leading-relaxed mb-4">
                                {service.description}
                            </p>
                            <div className="h-[1px] w-12 bg-primary/40" />
                        </div>
                    </motion.div>

                    {/* Scanline Effect */}
                    <div className="absolute inset-0 bg-scanline opacity-10 pointer-events-none z-10" />
                </motion.div>
            ))}
        </div>
    );
}
