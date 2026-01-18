import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-16 px-4 border-t border-white/10">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <h3 className="text-2xl font-bold font-heading mb-6">ASH<span className="text-[#00a8ff]">PLUMBING</span></h3>
                    <p className="text-gray-400 mb-6">
                        Providing top-quality plumbing and gasfitting services to Melbourne, Geelong, and surrounding areas.
                        Reliable, professional, and fully licensed.
                    </p>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-6">Contact Us</h4>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-gray-300">
                            <Phone size={20} className="text-[#00a8ff]" />
                            <a href="tel:0409212023" className="hover:text-white transition-colors">0409 212 023</a>
                        </div>
                        <div className="flex items-center gap-3 text-gray-300">
                            <MapPin size={20} className="text-[#00a8ff]" />
                            <span>Hamlyn Heights, VIC 3215</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#00a8ff]">Home</button></li>
                        <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#00a8ff]">Services</button></li>
                        <li><button onClick={() => document.getElementById('our-work')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#00a8ff]">Our Work</button></li>
                        <li><button onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#00a8ff]">Reviews</button></li>
                    </ul>
                </div>
            </div>
            <div className="container mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Ash Plumbing & Gasfitting Pty Ltd. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
