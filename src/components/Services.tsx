import { Wrench, Droplets, Flame, Hammer, Bath, Pipette as Pipe } from 'lucide-react';
import { motion } from 'framer-motion';
import servicesBg from '../assets/images/backgrounds/services-bg.png';

const services = [
    { id: 1, name: 'General Plumbing', icon: <Wrench size={40} />, desc: 'Repairs, maintenance, and installations.' },
    { id: 2, name: 'Blocked Drains', icon: <Pipe size={40} />, desc: 'Clearing blockages with advanced equipment.' },
    { id: 3, name: 'Gas Fitting', icon: <Flame size={40} />, desc: 'Safe gas appliance installation and repair.' },
    { id: 4, name: 'Hot Water', icon: <Droplets size={40} />, desc: 'System repairs and replacements.' },
    { id: 5, name: 'Renovations', icon: <Hammer size={40} />, desc: 'Bathroom and kitchen makeovers.' },
    { id: 6, name: 'Emergency', icon: <Bath size={40} />, desc: '24/7 support for urgent issues.' },
];

const Services: React.FC = () => {
    return (
        <section id="services" className="relative py-24 px-4 overflow-hidden">
            {/* Background - placeholder for blurred plumbing bg */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${servicesBg})`,
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 backdrop-blur-sm"></div>
            </div>

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services</h2>
                    <div className="w-24 h-1 bg-[#00a8ff] mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 flex flex-col items-center text-center hover:bg-white/10 transition-colors group cursor-pointer border border-white/5 hover:border-[#00a8ff]/50"
                        >
                            <div className="bg-[#00a8ff]/20 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 text-[#00a8ff]">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#00a8ff] transition-colors">{service.name}</h3>
                            <p className="text-gray-300">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
