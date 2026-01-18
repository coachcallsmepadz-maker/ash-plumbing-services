import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroVideo from '../assets/videos/hero-animation.mp4';

const Hero: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { scrollY } = useScroll();

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Ensure video is paused so we can control it manually
        video.pause();

        const handleScroll = () => {
            if (video.duration) {
                // Map the first 1000px of scroll to the video duration
                // Adjust this value to control how "fast" the wheels turn relative to scroll
                const scrollRange = 1000;
                const progress = Math.min(window.scrollY / scrollRange, 1);

                // Set current time based on scroll progress
                if (Number.isFinite(video.duration)) {
                    video.currentTime = video.duration * progress;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial set
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const opacity = useTransform(scrollY, [0, 500], [1, 0]);
    const y = useTransform(scrollY, [0, 500], [0, 100]);

    return (
        <section id="hero" className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-dark-bg">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    src={heroVideo}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    preload="auto"
                />
                <div className="absolute inset-0 bg-black/50 z-10 backdrop-blur-[1px]"></div>
            </div>

            {/* Content */}
            <motion.div
                style={{ opacity, y }}
                className="relative z-20 flex flex-col items-center max-w-5xl mx-auto px-4 text-center mt-10 md:mt-0"
            >
                <div className="mb-8 inline-block">
                    <span className="py-2 px-6 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-lg shadow-black/20">
                        Melbourne & Geelong
                    </span>
                </div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tighter leading-[0.9] text-white drop-shadow-2xl">
                    ASH <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">PLUMBING</span>
                </h1>

                <p className="text-2xl md:text-4xl font-light text-gray-300 tracking-[0.2em] mb-12 border-t border-white/20 pt-6 mt-2">
                    SERVICES
                </p>

                <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl text-center leading-relaxed font-light">
                    Premium plumbing & gasfitting solutions.
                    <br /><span className="text-primary font-medium">Scroll to interact.</span>
                </p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-12 z-20 flex flex-col items-center gap-3 cursor-pointer"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-xs uppercase tracking-[0.3em] text-primary/80 font-bold">Scroll Down</span>
                <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-1 bg-black/20 backdrop-blur-sm">
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
