/**
 * Device detection and performance tier utilities
 */

export function isMobile(): boolean {
    if (typeof window === 'undefined') return false;

    // Check for touch capability and small screen
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth < 768;

    // Check user agent for mobile devices
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    const isMobileUA = mobileRegex.test(navigator.userAgent);

    return (hasTouch && isSmallScreen) || isMobileUA;
}

export function isTablet(): boolean {
    if (typeof window === 'undefined') return false;

    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isTabletScreen = window.innerWidth >= 768 && window.innerWidth < 1024;

    const tabletRegex = /iPad|Android(?!.*Mobile)/i;
    const isTabletUA = tabletRegex.test(navigator.userAgent);

    return (hasTouch && isTabletScreen) || isTabletUA;
}

export type PerformanceTier = 'low' | 'medium' | 'high';

export function getPerformanceTier(): PerformanceTier {
    if (typeof window === 'undefined') return 'medium';

    // Mobile devices default to low
    if (isMobile()) return 'low';

    // Tablets default to medium
    if (isTablet()) return 'medium';

    // Desktop: check hardware concurrency (CPU cores) as a proxy
    const cores = navigator.hardwareConcurrency || 4;

    if (cores >= 8) return 'high';
    if (cores >= 4) return 'medium';
    return 'low';
}

export interface DeviceCapabilities {
    isMobile: boolean;
    isTablet: boolean;
    performanceTier: PerformanceTier;
    screenWidth: number;
    screenHeight: number;
    pixelRatio: number;
}

export function getDeviceCapabilities(): DeviceCapabilities {
    if (typeof window === 'undefined') {
        return {
            isMobile: false,
            isTablet: false,
            performanceTier: 'medium',
            screenWidth: 1920,
            screenHeight: 1080,
            pixelRatio: 1,
        };
    }

    return {
        isMobile: isMobile(),
        isTablet: isTablet(),
        performanceTier: getPerformanceTier(),
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        pixelRatio: window.devicePixelRatio || 1,
    };
}

/**
 * Get optimized settings for WebGL based on device capabilities
 */
export interface WebGLSettings {
    dpr: number | [number, number];
    starCount: number;
    warpLineCount: number;
    gridDivisions: number;
    enablePostProcessing: boolean;
    enableAdvancedEffects: boolean; // Glitch, Noise, ChromaticAberration
    isBarebones: boolean; // Minimum rendering for ultra-low devices
    disableWebGL: boolean; // Complete bypass for ultra-slow devices
}

export function getWebGLSettings(): WebGLSettings {
    const tier = getPerformanceTier();
    const mobile = isMobile();

    switch (tier) {
        case 'low':
            return {
                dpr: 0.7, // Extreme reduction
                starCount: 0,
                warpLineCount: 0,
                gridDivisions: 0,
                enablePostProcessing: false,
                enableAdvancedEffects: false,
                isBarebones: true,
                disableWebGL: true, // Bypass Three.js on mobile for max speed
            };
        case 'medium':
            return {
                dpr: mobile ? 0.8 : 1.25,
                starCount: 1500,
                warpLineCount: 40,
                gridDivisions: 25,
                enablePostProcessing: mobile ? false : true,
                enableAdvancedEffects: false,
                isBarebones: false,
                disableWebGL: false,
            };
        case 'high':
        default:
            return {
                dpr: 1.5,
                starCount: 4000,
                warpLineCount: 100,
                gridDivisions: 40,
                enablePostProcessing: true,
                enableAdvancedEffects: true,
                isBarebones: false,
                disableWebGL: false,
            };
    }
}
