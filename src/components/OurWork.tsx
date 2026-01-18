import { motion } from 'framer-motion';
import work1 from '../assets/images/work/work-1.png';
import work2 from '../assets/images/work/work-2.png';
import work3 from '../assets/images/work/work-3.png';
import work4 from '../assets/images/work/work-4.png';
import work5 from '../assets/images/work/work-5.png';

const works = [
    { id: 1, title: 'Bathroom Renovation', category: 'Renovation', image: work1 },
    { id: 2, title: 'Kitchen Plumbing', category: 'Commercial', image: work2 },
    { id: 3, title: 'Gas System Upgrade', category: 'Installation', image: work3 },
    { id: 4, title: 'Hot Water System', category: 'Installation', image: work4 },
    { id: 5, title: 'Emergency Repair', category: 'Maintenance', image: work5 },
];

const OurWork: React.FC = () => {
    return (
        <section id="our-work" className="relative py-24 px-4 bg-[#0a0a0a]">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Featured Work</h2>
                    <p className="text-gray-400">Quality craftsmanship in every detail.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {works.map((work, index) => (
                        <motion.div
                            key={work.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
                        >
                            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                                <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

                            <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-[#00a8ff] text-sm font-bold uppercase tracking-wider">{work.category}</span>
                                <h3 className="text-2xl font-bold text-white mt-1">{work.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurWork;
