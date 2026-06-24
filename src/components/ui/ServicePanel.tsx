import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from './Typewriter';
import { X, Activity, Cpu, Database, ShieldCheck } from 'lucide-react';

interface ServicePanelProps {
    service: {
        name: string;
        description: string;
    } | null;
    onClose: () => void;
}

export function ServicePanel({ service, onClose }: ServicePanelProps) {
    if (!service) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: 50, scaleX: 0 }}
                animate={{ opacity: 1, x: 0, scaleX: 1 }}
                exit={{ opacity: 0, x: 50, scaleX: 0 }}
                className="w-[390px] bg-black/80 border-r-2 border-primary/40 backdrop-blur-xl h-[550px] relative overflow-hidden flex flex-col origin-left"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)' }}
            >
                {/* Background Tech Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 0)', backgroundSize: '20px 20px' }}
                />

                {/* Header */}
                <div className="p-6 border-b border-primary/20 flex justify-between items-start bg-primary/5">
                    <div>
                        <div className="text-primary/40 text-[10px] uppercase tracking-[4px] font-mono mb-1">SYSTEM_SERVICE_MODULE</div>
                        <h2 className="text-primary text-xl font-display font-bold tracking-widest">{service.name}</h2>
                    </div>
                    <button onClick={onClose} className="text-primary/40 hover:text-primary transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                    {/* Visual Asset Section */}
                    <div className="w-full aspect-video border border-primary/20 bg-primary/5 rounded relative overflow-hidden group/img">
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                        <img
                            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800"
                            alt="Service Schematic"
                            className="w-full h-full object-cover opacity-60 group-hover/img:scale-110 transition-transform duration-[10s] linear"
                        />
                        <div className="absolute bottom-2 left-2 z-20 text-[8px] font-mono text-primary/60">SCAN_SOURCE: VISUARTE_3D_CORE</div>
                    </div>

                    {/* Diagnostic HUD */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 border border-primary/10 bg-black/40 rounded flex flex-col gap-2">
                            <Activity size={16} className="text-primary/60" />
                            <div className="h-1 w-full bg-primary/10 rounded-full overflow-hidden">
                                <motion.div className="h-full bg-primary" animate={{ width: ['20%', '90%', '40%'] }} transition={{ duration: 4, repeat: Infinity }} />
                            </div>
                            <span className="text-[8px] font-mono text-primary/40">CORE_LOAD: 42%</span>
                        </div>
                        <div className="p-3 border border-primary/10 bg-black/40 rounded flex flex-col gap-2">
                            <Cpu size={16} className="text-primary/60" />
                            <div className="text-primary font-mono text-xs">ENCRYPTION: AES-256</div>
                            <span className="text-[8px] font-mono text-primary/40">STATUS: SECURE</span>
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Database size={14} className="text-primary" />
                            <span className="text-[10px] font-mono text-primary tracking-widest">DATA_DESCRIPTION</span>
                        </div>
                        <div className="text-primary/80 font-mono text-sm leading-relaxed min-h-[100px] border-l border-primary/20 pl-4 py-1">
                            <Typewriter text={service.description} speed={20} />
                        </div>
                    </div>

                    {/* Meta Data */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={14} className="text-primary" />
                            <span className="text-[10px] font-mono text-primary tracking-widest">SYSTEM_REQUIREMENTS</span>
                        </div>
                        <ul className="grid grid-cols-1 gap-2 text-[10px] font-mono text-primary/60">
                            <li>{'>'} STABLE_CONNECTION: REQUIRED</li>
                            <li>{'>'} HARDWARE_ACCEL: ENABLED</li>
                            <li>{'>'} AUTH_LEVEL: GHOST_PRIME</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Decor */}
                <div className="px-6 py-4 bg-primary/5 border-t border-primary/20 flex justify-between items-center text-[10px] font-mono text-primary/40">
                    <span className="animate-pulse">V.CORE.SYS.8.1</span>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                        <span>LINK_ACTIVE</span>
                    </div>
                </div>

                {/* Visual Glitch Bar */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-primary/40"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
            </motion.div>
        </AnimatePresence>
    );
}
