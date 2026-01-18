import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-panel mx-4 mt-4' : 'py-6 bg-transparent'}`}>
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold font-heading text-white tracking-tighter">
                    ASH<span className="text-[#00a8ff]">PLUMBING</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {['Services', 'Our Work', 'Reviews'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                            className="text-white hover:text-[#00a8ff] font-medium text-lg uppercase tracking-wide"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Call Now Button */}
                <div className="hidden md:block">
                    <a href="tel:0409212023" className="flex items-center gap-2 bg-[#ff8c00] hover:bg-[#ff7b00] text-white px-8 py-3 rounded-full font-bold text-xl shadow-lg transform hover:scale-105 transition-all">
                        <Phone size={24} fill="currentColor" />
                        CALL 0409 212 023
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
                        {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute top-full left-0 right-0 m-4 p-6 glass-panel flex flex-col gap-4 md:hidden"
                    >
                        {['Services', 'Our Work', 'Reviews'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                                className="text-white text-left text-xl font-bold py-2 border-b border-white/10"
                            >
                                {item}
                            </button>
                        ))}
                        <a href="tel:0409212023" className="flex items-center justify-center gap-2 bg-[#ff8c00] text-white px-6 py-4 rounded-xl font-bold text-xl mt-4">
                            <Phone size={24} fill="currentColor" />
                            CALL NOW
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
