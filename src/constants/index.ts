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
