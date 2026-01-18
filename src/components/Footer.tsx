import React from 'react';
import { Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-20 px-4 border-t border-white/5 relative overflow-hidden">
            {/* Ambient bg glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container-custom grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
                <div className="md:col-span-4">
                    <h3 className="text-3xl font-bold font-heading mb-6 tracking-tight">ASH<span className="text-primary">PLUMBING</span></h3>
                    <p className="text-gray-400 mb-8 leading-relaxed pr-4">
                        Providing top-quality plumbing and gasfitting services to Melbourne, Geelong, and surrounding areas.
                        Reliable, professional, and fully licensed.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>

                <div className="md:col-span-4">
                    <h4 className="text-xl font-bold mb-8 font-heading">Contact Us</h4>
                    <div className="space-y-6">
                        <a href="tel:0409212023" className="flex items-start gap-4 text-gray-300 hover:text-white group transition-colors">
                            <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                <Phone size={20} />
                            </div>
                            <div>
                                <span className="block text-xs uppercase text-gray-500 font-bold tracking-wider mb-1">Phone</span>
                                <span className="text-lg font-medium">0409 212 023</span>
                            </div>
                        </a>

                        <div className="flex items-start gap-4 text-gray-300">
                            <div className="p-3 bg-white/5 rounded-lg">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <span className="block text-xs uppercase text-gray-500 font-bold tracking-wider mb-1">Service Area</span>
                                <span className="text-lg font-medium">Hamlyn Heights, VIC 3215<br />& Surrounding Suburbs</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-4">
                    <h4 className="text-xl font-bold mb-8 font-heading">Quick Links</h4>
                    <ul className="space-y-4 text-gray-400">
                        {['Home', 'Services', 'Our Work', 'Reviews'].map((item) => (
                            <li key={item}>
                                <button
                                    onClick={() => document.getElementById(item.toLowerCase().replace(' ', '-') === 'home' ? 'hero' : item.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' })}
                                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors"></span>
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container-custom mt-20 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                <p>&copy; {new Date().getFullYear()} Ash Plumbing & Gasfitting Pty Ltd. All rights reserved.</p>
                <p className="mt-2 md:mt-0 flex gap-6">
                    <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-400">Terms of Service</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
