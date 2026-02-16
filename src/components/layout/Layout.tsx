import type { ReactNode } from 'react';
import { Header } from './Header';
import { Scene } from '../canvas/Scene';
import { Hero3D } from '../canvas/Hero3D';
import { AudioController } from '../ui/AudioController';
import { ClickSpark } from '../effects/ClickSpark';
import { GlitchEffect } from '../effects/GlitchEffect';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="relative min-h-screen bg-dark text-white overflow-hidden selection:bg-primary selection:text-black">
            <ClickSpark />
            <GlitchEffect />

            <Scene>
                {/* We can switch 3D content based on route if needed, 
            but for now let's keep a persistent background */}
                <Hero3D />
            </Scene>

            <Header />
            <AudioController />

            <main className="relative z-10 pt-24 px-8 md:px-16 container mx-auto">
                {children}
            </main>

            <div className="fixed bottom-8 left-8 text-xs text-gray-500 z-40 font-mono">
                © {new Date().getFullYear()} VISUARTE
            </div>
        </div>
    );
}
