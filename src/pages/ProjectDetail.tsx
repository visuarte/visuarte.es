import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Typewriter } from '../components/ui/Typewriter';
import { useEffect, useState } from 'react';

export default function ProjectDetail() {
    const { id } = useParams();
    const project = PROJECTS.find(p => p.id === Number(id));
    const [bootSequence, setBootSequence] = useState(false);

    useEffect(() => {
        // Simulate boot-up sequence
        const timer = setTimeout(() => setBootSequence(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen pt-24 flex flex-col items-center justify-center text-red-500 font-mono z-50 relative">
                <h1 className="text-4xl font-bold mb-4">ERROR 404</h1>
                <p>PROJECT_DATA_CORRUPTED: SECTOR {id}</p>
                <Link to="/work" className="mt-8 border border-red-500 px-4 py-2 hover:bg-red-500 hover:text-black transition-colors">
                    Return to Safe Zone
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 px-4 md:px-[var(--spacing-phi-2)] font-mono text-primary">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-[100] max-w-6xl mx-auto border border-primary/30 bg-black/95 backdrop-blur-2xl p-6 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden mt-10"
            >
                {/* Scanline CRT Effect */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] contrast-150" />

                <div className="mb-8 border-b border-primary/30 pb-4 flex justify-between items-end">
                    <div>
                        <p className="text-xs opacity-50">SYSTEM_ID: PRIORITY_ALPHA</p>
                        <h1 className="text-4xl md:text-6xl font-bold uppercase glitch-text" data-text={project.title}>
                            {project.title}
                        </h1>
                    </div>
                    <div className="text-xs text-right opacity-70 hidden md:block">
                        <p>STATUS: DECLASSIFIED</p>
                        <p>MEM: 640K OK</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
                    <div className="space-y-6">
                        {/* Image Frame */}
                        <div className="border border-primary/50 p-1">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500 filter contrast-125"
                            />
                        </div>

                        <div className="bg-primary/10 p-4 border-l-2 border-primary">
                            <p className="text-sm mb-2 opacity-60">{'>'} PROJECT_DESCRIPTION</p>
                            {bootSequence ? (
                                <p className="text-lg leading-relaxed text-white/90">
                                    <Typewriter text={project.description || ''} speed={10} cursor={false} />
                                </p>
                            ) : (
                                <p className="animate-pulse">LOADING DATA...</p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-6 text-sm">
                        <div className="border border-primary/20 p-4">
                            <p className="opacity-50 mb-2">{'>'} METADATA</p>
                            <ul className="space-y-2">
                                <li className="flex justify-between border-b border-primary/10 pb-1">
                                    <span>CLIENT:</span>
                                    <span className="text-white">{project.client}</span>
                                </li>
                                <li className="flex justify-between border-b border-primary/10 pb-1">
                                    <span>YEAR:</span>
                                    <span className="text-white">{project.year}</span>
                                </li>
                                <li className="flex justify-between border-b border-primary/10 pb-1">
                                    <span>CATEGORY:</span>
                                    <span className="text-white">{project.category}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="border border-primary/20 p-4">
                            <p className="opacity-50 mb-2">{'>'} TECH_STACK</p>
                            <div className="flex flex-wrap gap-2">
                                {project.stack?.map((tech, i) => (
                                    <span key={i} className="px-2 py-1 bg-primary/20 border border-primary text-primary text-xs">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <Link to="/work">
                            <button className="mt-8 w-full border border-primary text-primary hover:bg-primary hover:text-black py-3 uppercase tracking-widest font-bold transition-all duration-300">
                                {`< RETURN_TO_ROOT`}
                            </button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
