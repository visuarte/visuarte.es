export const COLORS = {
    primary: '#FFD700',   // Gold/Yellow
    secondary: '#1A1A1A', // Dark Gray
    accent: '#FFFFFF',    // White
    dark: '#000000',      // Deep Black
    glassBorder: 'rgba(255, 215, 0, 0.2)',
    glassShadow: 'rgba(255, 215, 0, 0.3)',
};

export const AUDIO_CONFIG = {
    ambientTrack: '/assets/audio/ambient_breakbeat.mp3',
    defaultVolume: 0.4,
};

export interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    year?: string;
    client?: string;
    stack?: string[];
    description?: string;
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'CineOps',
        category: 'Production OS',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
        year: '2025',
        client: 'SaaS Product',
        stack: ['Python', 'Streamlit', 'PostgreSQL', 'Docker', 'NoSQL', 'Redis'],
        description: 'A modular Operating System for film production, engineered for data integrity and real-time collaboration.\n\nARCHITECTURE:\n• Core: Modular Monolith in Python (18k+ LOC).\n• Data Layer: Hybrid approach using PostgreSQL for relational production data (Scenes, Cast, Schedules) and NoSQL (MongoDB) for flexible metadata schema allowing dynamic script breakdowns.\n• Async: Redis-backed job queues for generating call sheets and legal docs.\n• Storage: Object storage (S3) for heavy assets like storyboards and location photos.\n\nDesigned to bridge the gap between creative chaos and engineering precision.',
    },
    {
        id: 2,
        title: 'Neon Dreams',
        category: 'WebGL Experience',
        image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=800',
        year: '2024',
        client: 'NightCity Gov',
        stack: ['GLSL', 'React Three Fiber', 'Tone.js'],
        description: 'An immersive audiovisual journey through a procedural neon metropolis. Users fly through infinite cityscapes generated in real-time, reacting to the beat of the city.',
    },
    {
        id: 3,
        title: 'Cyber Interface',
        category: 'UI Design',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
        year: '2023',
        client: 'Orbital Defenses',
        stack: ['Figma', 'React', 'Tailwind', 'Framer Motion'],
        description: 'Next-generation dashboard for orbital satellite management. Features holographic data visualization, gesture control, and mild-to-moderate AI assistance.',
    },
    {
        id: 4,
        title: 'Abstract Realm',
        category: 'Interactive Art',
        image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800',
        year: '2024',
        client: 'Museum of Future Art',
        stack: ['WebGL', 'Fluid Simulation', 'WebGPU'],
        description: 'A liquid metal fluid simulation running entirely on the GPU. Visitors can interact with the fluid using their cursor, creating ripples in the fabric of digital reality.',
    },
];

export const NAV_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

export const TRON_GOLD = '#FFD700';
export const LOOP_DISTANCE = 220;

export const PLANETS = [
    { name: 'SUN', color: '#FFD700', size: 2.5, z: 0, coord: '0.00.00.00', info: 'CORE_STAR [G2V]' },
    { name: 'MERCURY', color: '#888888', size: 0.4, z: -10, coord: '0.39.00.01', info: 'FE_CORE [HEAVILY_CRATERED]' },
    { name: 'VENUS', color: '#E3BB76', size: 0.8, z: -20, coord: '0.72.10.45', info: 'H2SO4_ATMOS [VOLCANIC]' },
    { name: 'EARTH', color: '#2277FF', size: 0.85, z: -35, coord: '1.00.00.00', info: 'BIOSPHERE_DETECTED [HOME]' },
    { name: 'MARS', color: '#FF4422', size: 0.6, z: -50, coord: '1.52.44.12', info: 'IRON_OXIDE [TERRAFORM_PROJECT]' },
    { name: 'JUPITER', color: '#D39C7E', size: 1.8, z: -75, coord: '5.20.12.89', info: 'GAS_GIANT [GREAT_RED_SPOT]' },
    { name: 'SATURN', color: '#C5AB6E', size: 1.5, z: -105, coord: '9.58.55.32', info: 'RING_SYSTEM [LOW_DENSITY]' },
    { name: 'URANUS', color: '#BBE1E4', size: 1.1, z: -135, coord: '19.22.41.01', info: 'ICE_GIANT [TILTED_AXIS]' },
    { name: 'NEPTUNE', color: '#6081FF', size: 1.1, z: -165, coord: '30.07.12.44', info: 'WIND_PEAKS [DEEP_BLUE]' },
    { name: 'PLUTO', color: '#D0C3C3', size: 0.3, z: -190, coord: '39.48.99.11', info: 'KUIPER_BELT [DWARF]' },
];
