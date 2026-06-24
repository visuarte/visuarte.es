import React, { createContext, useContext, useState } from 'react';

interface CosmosContextType {
    activePlanetName: string | null;
    setActivePlanetName: (name: string | null) => void;
}

const CosmosContext = createContext<CosmosContextType | undefined>(undefined);

export function CosmosProvider({ children }: { children: React.ReactNode }) {
    const [activePlanetName, setActivePlanetName] = useState<string | null>(null);

    return (
        <CosmosContext.Provider value={{ activePlanetName, setActivePlanetName }}>
            {children}
        </CosmosContext.Provider>
    );
}

export function useCosmos() {
    const context = useContext(CosmosContext);
    if (context === undefined) {
        throw new Error('useCosmos must be used within a CosmosProvider');
    }
    return context;
}
