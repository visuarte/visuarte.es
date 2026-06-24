export const TRON_COLORS = {
    cyan: '#FFD700', // Cambiado a dorado para consistencia
    orange: '#FF6C00',
    darkBlue: '#0A0A0A', // Más oscuro para contraste con dorado
    gridBlue: '#FFD700', // Dorado para el grid
    glowCyan: 'rgba(255, 215, 0, 0.8)', // Glow dorado
    glowOrange: 'rgba(255, 108, 0, 0.8)',
};

export const TRON_SHADOWS = {
    cyanGlow: `0 0 10px ${TRON_COLORS.cyan}, 0 0 20px ${TRON_COLORS.cyan}, 0 0 30px ${TRON_COLORS.cyan}`,
    orangeGlow: `0 0 10px ${TRON_COLORS.orange}, 0 0 20px ${TRON_COLORS.orange}`,
    softCyan: `0 0 5px ${TRON_COLORS.glowCyan}`,
};
