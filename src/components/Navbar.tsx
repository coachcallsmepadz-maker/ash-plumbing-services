import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Offset for fixed header
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8 ${scrolled
                    ? 'py-3 bg-dark-bg/80 backdrop-blur-lg border-b border-white/10 shadow-lg'
                    : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl md:text-3xl font-bold font-heading text-white tracking-tighter cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    ash<span className="text-primary">plumbing</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {['Services', 'Our Work', 'Reviews'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                            className="text-white/90 hover:text-primary font-medium text-sm lg:text-base uppercase tracking-widest transition-colors duration-200 relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </button>
                    ))}
                </div>

                {/* Call Now Button */}
                <div className="hidden md:block">
                    <a
                        href="tel:0409212023"
                        className="flex items-center gap-3 bg-secondary hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg shadow-secondary/20 hover:shadow-secondary/40 transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <Phone size={20} className="fill-current" />
                        <span>0409 212 023</span>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-dark-card/95 backdrop-blur-xl border-t border-white/10 absolute top-full left-0 right-0 shadow-2xl"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {['Services', 'Our Work', 'Reviews'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                                    className="text-white/90 hover:text-primary hover:bg-white/5 text-left text-lg font-bold py-4 px-4 rounded-xl transition-all"
                                >
                                    {item}
                                </button>
                            ))}
                            <a
                                href="tel:0409212023"
                                className="flex items-center justify-center gap-3 bg-secondary text-white px-6 py-4 rounded-xl font-bold text-xl mt-2 active:scale-95 transition-transform"
                            >
                                <Phone size={24} className="fill-current" />
                                CALL NOW
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
