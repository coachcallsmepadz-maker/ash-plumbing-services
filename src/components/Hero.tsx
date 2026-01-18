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
    const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

    return (
        <section id="hero" className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
            {/* Background - placeholder for blurred plumbing bg */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${heroBg})`
                }}
            >
                <div className="absolute inset-0 backdrop-blur-[2px] bg-black/30"></div>
            </div>

            <motion.div
                style={{ opacity, scale }}
                className="relative z-10 flex flex-col items-center mt-20"
            >
                <h1 className="text-5xl md:text-7xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 drop-shadow-2xl">
                    ASH PLUMBING<br />SERVICES
                </h1>

                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex justify-center items-center">
                    {/* Left Handel (CSS Simulation for now as we don't have separate assets) */}
                    <motion.div
                        style={{ rotate: rotateLeft }}
                        className="absolute left-[-40px] md:left-[-60px] top-[20%] w-24 h-24 md:w-32 md:h-32 bg-contain bg-no-repeat bg-center z-20 cursor-pointer"
                    >
                        {/* Visualizing a cross handle with CSS gradients */}
                        <div className="w-full h-full relative">
                            <div className="absolute top-1/2 left-0 w-full h-4 bg-gradient-to-b from-gray-300 via-white to-gray-400 rounded-full shadow-lg transform -translate-y-1/2"></div>
                            <div className="absolute top-0 left-1/2 w-4 h-full bg-gradient-to-r from-gray-300 via-white to-gray-400 rounded-full shadow-lg transform -translate-x-1/2"></div>
                            <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gray-200 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-inner border border-gray-400">
                                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-red-600">HOT</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tap Body */}
                    <div className="relative z-10 w-full h-full">
                        <img src={tapImage} alt="Tap" className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]" />
                    </div>

                    {/* Right Handle */}
                    <motion.div
                        style={{ rotate: rotateRight }}
                        className="absolute right-[-40px] md:right-[-60px] top-[20%] w-24 h-24 md:w-32 md:h-32  z-20 cursor-pointer"
                    >
                        <div className="w-full h-full relative">
                            <div className="absolute top-1/2 left-0 w-full h-4 bg-gradient-to-b from-gray-300 via-white to-gray-400 rounded-full shadow-lg transform -translate-y-1/2"></div>
                            <div className="absolute top-0 left-1/2 w-4 h-full bg-gradient-to-r from-gray-300 via-white to-gray-400 rounded-full shadow-lg transform -translate-x-1/2"></div>
                            <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gray-200 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-inner border border-gray-400">
                                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-blue-600">COLD</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Water drop animation? */}
                </div>

                <p className="mt-8 text-xl text-gray-300 max-w-2xl text-center">
                    Professional Plumbing & Gasfitting Services across Melbourne & Geelong.
                </p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-10 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-sm uppercase tracking-widest text-[#00a8ff]">Scroll to Twist</span>
                <div className="w-1 h-12 bg-gradient-to-b from-[#00a8ff] to-transparent rounded-full"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
