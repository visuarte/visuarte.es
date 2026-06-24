export const PHI = 1.618033988749895;

/**
 * Calculates a value based on the Golden Ratio.
 * @param base The base unit value
 * @param power The power to raise PHI to (can be negative for smaller values)
 * @returns The calculated value
 */
export const golden = (base: number, power: number = 1): number => {
    return base * Math.pow(PHI, power);
};

/**
 * Generates a modular scale using the Golden Ratio.
 * @param base Base font size or spacing unit
 * @param steps Number of steps to generate
 */
export const goldenScale = (base: number, steps: number = 5): number[] => {
    return Array.from({ length: steps }, (_, i) => golden(base, i));
};

export const GOLDEN_GRID = {
    main: `${100 / PHI}%`,
    sidebar: `${100 - (100 / PHI)}%`,
};
