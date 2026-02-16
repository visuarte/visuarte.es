import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../../constants';

export function Header() {
    const location = useLocation();

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference text-white pointer-events-none"
        >
            <Link to="/" className="text-2xl font-display font-bold uppercase tracking-wider pointer-events-auto">
                Visuarte
            </Link>

            <nav className="flex space-x-8 pointer-events-auto">
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors duration-300 ${location.pathname === item.path ? 'text-primary' : 'text-white'
                            } `}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </motion.header>
    );
}
