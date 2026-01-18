


import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import reviewsBg from '../assets/images/backgrounds/reviews-bg.png';

const reviews = [
    { id: 1, name: 'Sarah M.', text: "Ash Plumbing saved us during a weekend emergency! Fast, professional, and very reasonably priced.", rating: 5 },
    { id: 2, name: 'James T.', text: "Excellent work on our bathroom renovation. Their attention to detail is top notch. Highly recommended.", rating: 5 },
    { id: 3, name: 'Building Corp', text: "We use Ash for all our strata maintenance. Reliable and easy to deal with every time.", rating: 5 },
];

const Reviews: React.FC = () => {
    return (
        <section id="reviews" className="relative py-24 px-4 overflow-hidden">
            {/* Background - placeholder for blurred plumbing bg */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(${reviewsBg})`,
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">What Clients Say</h2>
                    <div className="flex justify-center gap-1">
                        {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="#ff8c00" stroke="none" />)}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-panel p-8 relative"
                        >
                            <div className="absolute -top-4 -left-4 text-6xl text-[#00a8ff] opacity-30 font-serif">"</div>
                            <p className="text-lg text-gray-200 mb-6 relative z-10 italic">{review.text}</p>
                            <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                <span className="font-bold text-white">{review.name}</span>
                                <div className="flex gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="#ff8c00" stroke="none" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
