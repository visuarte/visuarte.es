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
}

export function getWebGLSettings(): WebGLSettings {
    const tier = getPerformanceTier();
    const mobile = isMobile();

    switch (tier) {
        case 'low':
            return {
                dpr: 1,
                starCount: 2000,
                warpLineCount: 50,
                gridDivisions: 25,
                enablePostProcessing: true,
                enableAdvancedEffects: false, // Bloom only
            };
        case 'medium':
            return {
                dpr: mobile ? 1 : [1, 1.5],
                starCount: 3500,
                warpLineCount: 100,
                gridDivisions: 35,
                enablePostProcessing: true,
                enableAdvancedEffects: false,
            };
        case 'high':
        default:
            return {
                dpr: [1, 2],
                starCount: 5000,
                warpLineCount: 150,
                gridDivisions: 50,
                enablePostProcessing: true,
                enableAdvancedEffects: true, // All effects
            };
    }
}
