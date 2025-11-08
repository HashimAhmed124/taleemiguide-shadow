import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import video1 from "../assets/video/1.mp4";

export default function ForWhom() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const progressData = [
    { label: "Class 10-12", percent: 85 },
    { label: "College/University Students", percent: 90 },
    { label: "Fresh Graduates", percent: 70 },
    { label: "Professionals", percent: 55 },
  ];

  return (
    <section
      className="relative w-full py-12 md:py-20 px-4 md:px-12 bg-gradient-to-b from-[#EFF6FF] to-white"
      id="for-whom"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        {/* LEFT: Video */}
        <div className="flex-1 flex justify-center">
          <div
            className="
              w-full max-w-md aspect-video 
              lg:w-[700px] lg:h-[500px] 
              border border-[#E5E7EB] 
              rounded-3xl bg-white shadow-xl 
              hover:shadow-2xl transition-shadow duration-500 
              overflow-hidden
            "
          >
            <video
              src={video1}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="https://via.placeholder.com/700x500.png?text=Loading+Video"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="flex-1 space-y-5 text-[#374151]" ref={ref}>
          {/* Small Orange Text */}
          <p className="text-[#F97316] font-semibold uppercase tracking-wide text-xs sm:text-sm md:text-base">
            For Whom is TaleemiGuide?
          </p>

          {/* Heading - SCALED DOWN FURTHER */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold text-[#1E3A8A] leading-snug">
            A trusted partner for students and professionals to make informed
            educational and career decisions.
          </h2>

          {/* Description */}
          <p className="text-[#4B5563] text-sm sm:text-base md:text-lg leading-relaxed">
            Welcome to TaleemiGuide — Pakistan’s first tech-based educational
            guidance platform. We provide practical solutions for students and
            professionals at every stage of their journey. From Grade 10 to
            working professionals, our expert-backed guidance helps you make the
            right decisions, saving years of effort and money.
          </p>

          {/* Progress Bars */}
          <div className="space-y-5 mt-4 md:mt-6">
            {progressData.map((item, i) => (
              <div key={i} className="group">
                <div className="flex justify-between items-center text-xs sm:text-sm md:text-base mb-1.5 md:mb-2 text-[#1F2937] font-medium">
                  <span>{item.label}</span>
                  <span>{item.percent}%</span>
                </div>
                <div className="w-full h-2.5 md:h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#1E3A8A] to-[#F97316] rounded-full group-hover:scale-105 transform transition-transform duration-500 will-change-transform will-change-width"
                    initial={{ width: 0 }}
                    animate={{ width: isInView ? `${item.percent}%` : 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}