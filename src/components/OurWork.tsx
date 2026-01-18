import { motion } from 'framer-motion';
import work1 from '../assets/images/portfolio/work-1.png';
import work2 from '../assets/images/portfolio/work-2.png';
import work3 from '../assets/images/portfolio/work-3.png';
import work4 from '../assets/images/portfolio/work-4.png';
import work5 from '../assets/images/portfolio/work-5.png';

const works = [
    { id: 1, title: 'Luxury Bathroom Spec', category: 'Renovation', image: work1, size: 'large' },
    { id: 2, title: 'Commercial Fitout', category: 'Commercial', image: work2, size: 'small' },
    { id: 3, title: 'Hydronic Heating', category: 'Installation', image: work3, size: 'small' },
    { id: 4, title: 'Gas Line Upgrade', category: 'Safety', image: work4, size: 'medium' },
    { id: 5, title: 'Emergency Response', category: 'Maintenance', image: work5, size: 'medium' },
];

const OurWork: React.FC = () => {
    return (
        <section id="our-work" className="relative py-32 px-4 bg-dark-surface">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div className="text-left">
                        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-white">Featured Work</h2>
                        <div className="w-24 h-1.5 bg-secondary rounded-full"></div>
                    </div>
                    <p className="text-gray-400 max-w-md text-lg text-left md:text-right">
                        Explore our portfolio of high-quality craftsmanship across residential and commercial projects.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {works.map((work, index) => (
                        <motion.div
                            key={work.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group overflow-hidden rounded-3xl cursor-pointer ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                                } ${index === 3 ? 'md:col-span-2' : ''}`}
                        >
                            <div className="absolute inset-0 bg-gray-800 animate-pulse" /> {/* Placeholder while loading */}

                            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                            <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    <span className="py-1 px-3 bg-primary/90 text-white text-xs font-bold uppercase tracking-widest rounded-full backdrop-blur-sm">
                                        {work.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mt-3 group-hover:text-primary transition-colors duration-300">
                                    {work.title}
                                </h3>
                            </div>

                            {/* Hover overlay icon */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                                    <span className="text-3xl text-white">View</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="btn-primary">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OurWork;
