import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { TRON_COLORS } from '../../lib/tronColors';

export function TronContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // Using FormSubmit.co for serverless email forwarding
            const response = await fetch('https://formsubmit.co/ajax/visuarte.creativos@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Contact from ${formData.name}`,
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="relative space-y-6 z-10"
        >
            {/* Circuit pattern background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="2" fill={TRON_COLORS.cyan} />
                            <line x1="10" y1="10" x2="50" y2="10" stroke={TRON_COLORS.cyan} strokeWidth="1" />
                            <line x1="50" y1="10" x2="50" y2="50" stroke={TRON_COLORS.cyan} strokeWidth="1" />
                            <circle cx="50" cy="50" r="2" fill={TRON_COLORS.cyan} />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit)" />
                </svg>
            </div>

            <div className="relative">
                <label
                    className="block text-xs uppercase tracking-[0.3em] mb-3 font-mono"
                    style={{ color: TRON_COLORS.cyan }}
                >
                    IDENTITY_NAME
                </label>
                <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/50 border-2 p-4 text-white font-mono focus:outline-none transition-all duration-300"
                    style={{
                        borderColor: TRON_COLORS.gridBlue,
                        boxShadow: `0 0 5px ${TRON_COLORS.glowCyan}`
                    }}
                    onFocus={(e) => {
                        e.target.style.borderColor = TRON_COLORS.cyan;
                        e.target.style.boxShadow = `0 0 15px ${TRON_COLORS.cyan}, 0 0 30px ${TRON_COLORS.glowCyan}`;
                    }}
                    onBlur={(e) => {
                        e.target.style.borderColor = TRON_COLORS.gridBlue;
                        e.target.style.boxShadow = `0 0 5px ${TRON_COLORS.glowCyan}`;
                    }}
                />
            </div>

            <div className="relative">
                <label
                    className="block text-xs uppercase tracking-[0.3em] mb-3 font-mono"
                    style={{ color: TRON_COLORS.cyan }}
                >
                    CONTACT_PROTOCOL
                </label>
                <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/50 border-2 p-4 text-white font-mono focus:outline-none transition-all duration-300"
                    style={{
                        borderColor: TRON_COLORS.gridBlue,
                        boxShadow: `0 0 5px ${TRON_COLORS.glowCyan}`
                    }}
                    onFocus={(e) => {
                        e.target.style.borderColor = TRON_COLORS.cyan;
                        e.target.style.boxShadow = `0 0 15px ${TRON_COLORS.cyan}, 0 0 30px ${TRON_COLORS.glowCyan}`;
                    }}
                    onBlur={(e) => {
                        e.target.style.borderColor = TRON_COLORS.gridBlue;
                        e.target.style.boxShadow = `0 0 5px ${TRON_COLORS.glowCyan}`;
                    }}
                />
            </div>

            <div className="relative">
                <label
                    className="block text-xs uppercase tracking-[0.3em] mb-3 font-mono"
                    style={{ color: TRON_COLORS.cyan }}
                >
                    TRANSMISSION_DATA
                </label>
                <textarea
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/50 border-2 p-4 text-white font-mono focus:outline-none transition-all duration-300 resize-none"
                    style={{
                        borderColor: TRON_COLORS.gridBlue,
                        boxShadow: `0 0 5px ${TRON_COLORS.glowCyan}`
                    }}
                    onFocus={(e) => {
                        e.target.style.borderColor = TRON_COLORS.cyan;
                        e.target.style.boxShadow = `0 0 15px ${TRON_COLORS.cyan}, 0 0 30px ${TRON_COLORS.glowCyan}`;
                    }}
                    onBlur={(e) => {
                        e.target.style.borderColor = TRON_COLORS.gridBlue;
                        e.target.style.boxShadow = `0 0 5px ${TRON_COLORS.glowCyan}`;
                    }}
                />
            </div>

            <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="relative px-8 py-4 font-mono uppercase tracking-[0.3em] text-sm font-bold overflow-hidden group"
                style={{
                    backgroundColor: 'transparent',
                    border: `2px solid ${TRON_COLORS.cyan}`,
                    color: TRON_COLORS.cyan,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className="relative z-10">
                    {status === 'sending' && 'TRANSMITTING...'}
                    {status === 'success' && 'TRANSMISSION_COMPLETE'}
                    {status === 'error' && 'TRANSMISSION_FAILED'}
                    {status === 'idle' && 'INITIATE_CONTACT'}
                </span>

                {/* Hover glow effect */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: `linear-gradient(90deg, transparent, ${TRON_COLORS.glowCyan}, transparent)`,
                        boxShadow: `0 0 20px ${TRON_COLORS.cyan}`
                    }}
                />
            </motion.button>

            {status === 'success' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center font-mono text-sm"
                    style={{ color: TRON_COLORS.cyan }}
                >
                    ✓ MESSAGE_RECEIVED // RESPONSE_INCOMING
                </motion.div>
            )}

            {status === 'error' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center font-mono text-sm"
                    style={{ color: TRON_COLORS.orange }}
                >
                    ⚠ TRANSMISSION_ERROR // RETRY_PROTOCOL
                </motion.div>
            )}
        </motion.form>
    );
}
