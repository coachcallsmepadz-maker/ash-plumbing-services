import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import tapImage from '../assets/images/hero-tap.png';
import heroBg from '../assets/images/backgrounds/hero-bg.png';

const Hero: React.FC = () => {
    const { scrollY } = useScroll();

    // Twist animation: rotate handles as user scrolls
    const rotateLeft = useTransform(scrollY, [0, 500], [0, -180]);
    const rotateRight = useTransform(scrollY, [0, 500], [0, 180]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.9]);
    const y = useTransform(scrollY, [0, 500], [0, 100]);

    return (
        <section id="hero" className="relative h-[110vh] w-full flex flex-col justify-center items-center overflow-hidden -mt-20 pt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
                    style={{ backgroundImage: `url(${heroBg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/50 to-dark-bg"></div>
            </div>

            <motion.div
                style={{ opacity, scale, y }}
                className="relative z-10 flex flex-col items-center max-w-5xl mx-auto px-4 text-center mt-10 md:mt-0"
            >
                <div className="mb-6 inline-block">
                    <span className="py-2 px-4 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-bold tracking-widest uppercase backdrop-blur-sm">
                        Melbourne & Geelong
                    </span>
                </div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-2 tracking-tighter leading-none text-white drop-shadow-2xl">
                    ASH <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">PLUMBING</span>
                </h1>

                <p className="text-2xl md:text-4xl font-light text-gray-300 tracking-wide mb-12">
                    SERVICES
                </p>

                <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex justify-center items-center mt-4">
                    {/* Left Handle - HOT */}
                    <motion.div
                        style={{ rotate: rotateLeft }}
                        className="absolute left-[-20px] md:left-[-40px] top-[25%] z-20 cursor-pointer w-24 h-24 md:w-32 md:h-32"
                    >
                        <div className="w-full h-full relative drop-shadow-2xl filter brightness-110">
                            {/* Cross Handle Visual */}
                            <div className="absolute top-1/2 left-0 w-full h-4 bg-gradient-to-b from-gray-200 via-white to-gray-400 rounded-full shadow-lg transform -translate-y-1/2"></div>
                            <div className="absolute top-0 left-1/2 w-4 h-full bg-gradient-to-r from-gray-200 via-white to-gray-400 rounded-full shadow-lg transform -translate-x-1/2"></div>
                            {/* Center Cap */}
                            <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-gray-100 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] border border-gray-300 flex items-center justify-center">
                                <span className="text-[10px] font-black text-red-600 tracking-widest">HOT</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tap Body Main Image */}
                    <div className="relative z-10 w-full h-full p-4">
                        <img
                            src={tapImage}
                            alt="Tap"
                            className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                        />
                    </div>

                    {/* Right Handle - COLD */}
                    <motion.div
                        style={{ rotate: rotateRight }}
                        className="absolute right-[-20px] md:right-[-40px] top-[25%] z-20 cursor-pointer w-24 h-24 md:w-32 md:h-32"
                    >
                        <div className="w-full h-full relative drop-shadow-2xl filter brightness-110">
                            <div className="absolute top-1/2 left-0 w-full h-4 bg-gradient-to-b from-gray-200 via-white to-gray-400 rounded-full shadow-lg transform -translate-y-1/2"></div>
                            <div className="absolute top-0 left-1/2 w-4 h-full bg-gradient-to-r from-gray-200 via-white to-gray-400 rounded-full shadow-lg transform -translate-x-1/2"></div>
                            <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-gray-100 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] border border-gray-300 flex items-center justify-center">
                                <span className="text-[10px] font-black text-blue-600 tracking-widest">COLD</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-xl text-center leading-relaxed">
                    Premium plumbing & gasfitting for residential and commercial properties.
                </p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-12 z-20 flex flex-col items-center gap-3 cursor-pointer"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-xs uppercase tracking-[0.3em] text-primary/80 font-bold">Scroll to Explore</span>
                <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ height: ['20%', '50%', '20%'] }}
                        className="w-1 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
