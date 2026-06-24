export const BLOOM_PRESETS = {
    neonIntense: {
        intensity: 1.5,
        luminanceThreshold: 0.1,
        luminanceSmoothing: 0.9,
        mipmapBlur: true,
    },
    soft: {
        intensity: 0.5,
        luminanceThreshold: 0.4,
        luminanceSmoothing: 0.9,
        mipmapBlur: true,
    },
    extreme: {
        intensity: 3.0,
        luminanceThreshold: 0.05,
        luminanceSmoothing: 0.95,
        mipmapBlur: true,
    }
};

export const GLITCH_PRESETS = {
    subtle: {
        delay: [1.5, 3.5] as [number, number],
        duration: [0.1, 0.3] as [number, number],
        strength: [0.1, 0.3] as [number, number],
        active: true,
        ratio: 0.85
    },
    intense: {
        delay: [0.5, 1.5] as [number, number],
        duration: [0.3, 0.8] as [number, number],
        strength: [0.3, 1.0] as [number, number],
        active: true,
        ratio: 0.5
    },
    wild: {
        delay: [0.1, 0.5] as [number, number],
        duration: [0.1, 2.0] as [number, number],
        strength: [1.0, 2.0] as [number, number],
        active: true,
        ratio: 0.2
    }
};

export const CHROMATIC_PRESETS = {
    cinematic: {
        offset: [0.001, 0.001] as [number, number],
        radialModulation: false,
        modulationOffset: 0
    },
    retro: {
        offset: [0.005, 0.005] as [number, number],
        radialModulation: true,
        modulationOffset: 0.5
    },
    rgbSplit: {
        offset: [0.012, 0.012] as [number, number],
        radialModulation: false,
        modulationOffset: 0
    }
};

export const NOISE_PRESETS = {
    film: { opacity: 0.1, premultiply: true },
    vhs: { opacity: 0.3, premultiply: true },
    dramatic: { opacity: 0.6, premultiply: false }
};

export const SCANLINE_PRESETS = {
    crt: { density: 1.5, opacity: 0.1 },
    cyberpunk: { density: 2.5, opacity: 0.3 },
    holographic: { density: 0.8, opacity: 0.15 }
};

export const VIGNETTE_PRESETS = {
    cinematic: { offset: 0.5, darkness: 0.5, eskil: false },
    vintage: { offset: 0.3, darkness: 0.8, eskil: true },
    intense: { offset: 0.1, darkness: 1.0, eskil: false }
};
