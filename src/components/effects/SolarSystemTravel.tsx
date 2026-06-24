import { motion, AnimatePresence } from 'framer-motion';
import { useCosmos } from '../../context/CosmosContext';
import { PLANETS, TRON_GOLD, LOOP_DISTANCE } from '../../constants';

export function SolarSystemTravel() {
    const { activePlanetName } = useCosmos();
    const activePlanet = PLANETS.find(p => p.name === activePlanetName);

    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* HUD Overlay - Kept outside Canvas in the HTML layer */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10 z-10"
                style={{
                    background: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        ${TRON_GOLD} 2px,
                        ${TRON_GOLD} 4px
                    )`
                }}
            />

            <AnimatePresence>
                {activePlanet && (
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute left-[5%] sm:left-[10%] top-[35%] sm:top-[40%] font-mono pointer-events-none z-20"
                        style={{ color: TRON_GOLD }}
                    >
                        <div className="flex items-center gap-2 sm:gap-4">
                            <div
                                className="w-6 sm:w-8 md:w-12 h-[1px] animate-pulse"
                                style={{
                                    background: TRON_GOLD,
                                    boxShadow: `0 0 10px ${TRON_GOLD}`
                                }}
                            />
                            <h3
                                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em]"
                                style={{ textShadow: `0 0 20px ${TRON_GOLD}` }}
                            >
                                {activePlanet.name}
                            </h3>
                        </div>

                        <div className="mt-2 sm:mt-3 md:mt-4 space-y-1 sm:space-y-2 border-l pl-3 sm:pl-4 md:pl-6 ml-3 sm:ml-4 md:ml-6" style={{ borderColor: `${TRON_GOLD}40` }}>
                            <div className="text-[10px] sm:text-xs opacity-60 uppercase tracking-wider">
                                <span className="opacity-40">COORD:</span> {activePlanet.coord}
                            </div>
                            <div className="text-xs sm:text-sm opacity-80">
                                {activePlanet.info}
                            </div>
                            <div className="text-[8px] sm:text-[10px] animate-pulse">STATUS: SCANNING_PROXIMITY...</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div
                className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 text-[8px] sm:text-[9px] md:text-[10px] font-mono tracking-wider sm:tracking-widest flex flex-col gap-0.5 sm:gap-1 opacity-40 z-20"
                style={{ color: TRON_GOLD }}
            >
                <div className="hidden sm:block">VELOCITY: c (SPEED_OF_LIGHT)</div>
                <div>TRAJECTORY: SOLAR_LOOP_X01</div>
                <div>RANGE: {LOOP_DISTANCE} AU</div>
                <div>GRID_STATUS: ACTIVE</div>
            </div>
        </div>
    );
}
