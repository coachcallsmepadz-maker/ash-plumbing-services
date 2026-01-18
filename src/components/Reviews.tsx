


import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import reviewsBg from '../assets/images/backgrounds/reviews-bg.png';

const reviews = [
    { id: 1, name: 'Sarah M.', text: "Ash Plumbing saved us during a weekend emergency! Fast, professional, and very reasonably priced.", rating: 5 },
    { id: 2, name: 'James T.', text: "Excellent work on our bathroom renovation. Their attention to detail is top notch. Highly recommended.", rating: 5 },
    { id: 3, name: 'Building Corp', text: "We use Ash for all our strata maintenance. Reliable and easy to deal with every time.", rating: 5 },
];

const Reviews: React.FC = () => {
    return (
        <section id="reviews" className="relative py-32 px-4 overflow-hidden bg-dark-bg">
            {/* Background */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${reviewsBg})`,
                    backgroundAttachment: 'fixed'
                }}
            />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white tracking-tight">Client Reviews</h2>
                    <div className="flex justify-center gap-2 mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} size={28} fill="#ff8c00" stroke="none" className="drop-shadow-lg" />)}
                    </div>
                    <p className="text-xl text-primary font-medium tracking-wide border-b border-white/10 inline-block pb-2">5.0 Star Average Rating</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl relative group hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="absolute -top-6 left-8 bg-dark-bg border border-white/10 p-3 rounded-xl text-primary shadow-xl group-hover:scale-110 transition-transform duration-300">
                                <Quote size={32} fill="currentColor" />
                            </div>

                            <p className="text-lg text-gray-300 mb-8 mt-4 leading-relaxed relative z-10 italic font-light">
                                "{review.text}"
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                <div className="flex flex-col">
                                    <span className="font-bold text-white text-lg font-heading">{review.name}</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Verified Client</span>
                                </div>
                                <div className="flex gap-1 bg-black/20 px-3 py-1 rounded-full">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={14} fill="#ff8c00" stroke="none" />
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
