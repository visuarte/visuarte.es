import type { ReactNode } from 'react';
import { Header } from './Header';
import { AudioController } from '../ui/AudioController';
import { ClickSpark } from '../effects/ClickSpark';
import { GlitchEffect } from '../effects/GlitchEffect';
import { useLocation } from 'react-router-dom';
import { CosmosManager } from '../canvas/CosmosManager';
import { Hero3D } from '../canvas/Hero3D';
import { SolarSystemTravelContent } from '../effects/SolarSystemTravelContent';
import { useCosmos } from '../../context/CosmosContext';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const location = useLocation();
    const isContactOrAbout = location.pathname === '/contact' || location.pathname === '/about';
    const { activePlanetName, setActivePlanetName } = useCosmos();

    return (
        <div className="relative min-h-screen bg-dark text-white overflow-hidden selection:bg-primary selection:text-black">
            <ClickSpark />
            <GlitchEffect />

            <CosmosManager>
                {/* Dynamically render 3D content based on route */}
                {isContactOrAbout ? (
                    <SolarSystemTravelContent
                        activePlanetName={activePlanetName}
                        setActivePlanet={setActivePlanetName}
                    />
                ) : (
                    <Hero3D />
                )}
            </CosmosManager>

            <Header />
            <AudioController />

            <main className="relative z-10 pt-24 px-8 md:px-16 container mx-auto">
                {children}
            </main>

            <div className="fixed bottom-8 left-8 text-xs text-gray-500 z-40 font-mono">
                © {new Date().getFullYear()} VISUARTE
            </div>

            <div className="fixed bottom-8 right-8 text-[10px] text-gray-600 z-40 font-mono tracking-wider">
                <span className="opacity-40">✦ powered by </span>
                <span className="text-primary/60 font-bold">MAPICP CORE</span>
            </div>
        </div>
    );
}
