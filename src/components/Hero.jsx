import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroImg1 from "../assets/hero-img/1.png";
import HeroImg2 from "../assets/hero-img/2.png";
import HeroImg3 from "../assets/hero-img/3.png";
import HeroImg4 from "../assets/hero-img/4.png";
import HeroImg5 from "../assets/hero-img/5.png";

const slides = [
  { title: "Struggling with your educational career?", desc: "TaleemiGuide saves your time.", img: HeroImg1, link: "#" },
  { title: "Lost in specializations?", desc: "TaleemiGuide matches passion with profession.", img: HeroImg2, link: "#" },
  { title: "Need admissions or scholarships?", desc: "TaleemiGuide guides you step by step.", img: HeroImg3, link: "#" },
  { title: "Looking for mentors?", desc: "TaleemiGuide connects you with experts.", img: HeroImg4, link: "#" },
  { title: "Shifting careers?", desc: "TaleemiGuide provides practical solutions.", img: HeroImg5, link: "#" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrent((prev) => (prev + 1) % slides.length);
          return 0;
        }
        return p + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF] via-[#E0E7FF] to-[#FDF6E3]"></div>

        {/* Floating Shapes */}
        <motion.div
          animate={{ y: [0, 25, 0], x: [0, 15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-64 h-64 bg-[#F97316]/20 rounded-full top-20 left-10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, -20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-96 h-96 bg-[#3B82F6]/20 rounded-full bottom-0 right-20 blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, Math.random() * 20, 0], x: [0, Math.random() * 20, 0] }}
            transition={{ duration: 8 + Math.random() * 5, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 5 }}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Bottom Wave */}
        <motion.svg
          className="absolute bottom-0 w-full h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <path
            fill="#FDF6E3"
            fillOpacity="0.8"
            d="M0,128L48,133.3C96,139,192,149,288,149.3C384,149,480,139,576,133.3C672,128,768,128,864,133.3C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,320L0,320Z"
          />
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-12">
        {/* Hero Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* LEFT: Text */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 md:space-y-8"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E3A8A] drop-shadow-lg">
                  {slides[current].title}
                </h1>
                <p className="text-lg sm:text-xl text-[#4B5563] max-w-xl mx-auto md:mx-0 leading-relaxed">
                  {slides[current].desc}
                </p>
                <div className="flex justify-center md:justify-start">
                  <a
                    href={slides[current].link}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <AnimatePresence mode="wait">
              <motion.img
                key={slides[current].img}
                src={slides[current].img}
                alt="Slide"
                className="rounded-2xl object-contain shadow-2xl"
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom: Progress Circles */}
        <div className="flex justify-center items-center gap-4">
          {slides.map((_, i) => {
            const radius = 12;
            const circumference = 2 * Math.PI * radius;

            return (
              <div
                key={i}
                onClick={() => {
                  setCurrent(i);
                  setProgress(0);
                }}
                className="relative w-8 h-8 cursor-pointer group"
              >
                {/* Inactive Circle */}
                <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
                  <circle
                    cx="16"
                    cy="16"
                    r={radius}
                    stroke={current === i ? "#F97316" : "#9CA3AF"}
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>

                {/* Active Progress */}
                {current === i && (
                  <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
                    <circle
                      cx="16"
                      cy="16"
                      r={radius}
                      stroke="#F97316"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={
                        circumference - (progress / 100) * circumference
                      }
                      style={{ transition: "stroke-dashoffset 0.05s linear" }}
                    />
                  </svg>
                )}

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-full bg-[#F97316] opacity-20 scale-0 group-hover:scale-110 transition-transform duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
