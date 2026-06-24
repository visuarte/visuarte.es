import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { NeonBorder } from '../components/ui/NeonBorder';
import { SEO } from '../components/ui/SEO';

export default function Work() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-[var(--spacing-phi-3)] px-[var(--spacing-phi-2)]"
        >
            <SEO title="Selected Works" description="Explora nuestros proyectos destacados en producción audiovisual y desarrollo interactivo." />
            <h2 className="text-[length:var(--text-phi-2xl)] font-display font-bold mb-[var(--spacing-phi-3)] text-primary">SELECTED WORKS</h2>
            <div className="grid grid-cols-1 md:golden-grid gap-[var(--spacing-phi-2)]">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link to={`/work/${project.id}`}>
                            <NeonBorder
                                className="group relative aspect-video bg-secondary border border-gray-800 hover:border-primary transition-colors duration-300 overflow-hidden cursor-pointer"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/70 group-hover:bg-black/30 transition-colors duration-500">
                                    <div className="text-center transform transition-transform duration-500 group-hover:-translate-y-2">
                                        <h3 className="text-[length:var(--text-phi-xl)] font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                        <p className="text-sm text-gray-400 mt-2 font-mono tracking-widest uppercase">{project.category}</p>
                                    </div>
                                </div>
                            </NeonBorder>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
