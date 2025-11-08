import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative w-full bg-gradient-to-b from-[#EFF6FF] to-white py-16 md:py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-64 h-64 bg-[#3B82F6]/20 rounded-full top-10 left-20 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-96 h-96 bg-[#F97316]/20 rounded-full bottom-10 right-20 blur-3xl"
        />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, Math.random() * 30, 0], x: [0, Math.random() * 30, 0] }}
            transition={{ duration: 10 + Math.random() * 6, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 5 }}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[#1E3A8A] text-xl md:text-3xl font-bold text-center"
        >
          Seek Taleemi Advice
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#6B7280] text-center max-w-2xl mx-auto text-lg leading-relaxed"
        >
          <span className="font-semibold text-[#1E3A8A]">
            Don’t let challenges hold you back.
          </span>{" "}
          From high school to working professionals, every journey is unique — and so is our guidance. TaleemiGuide helps you save time, effort, and make the right decisions.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-[#E5E7EB] hover:shadow-3xl transition-shadow duration-500 overflow-hidden"
        >
          {/* Decorative Gradient Circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#F97316]/50 to-[#3B82F6]/50 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-br from-[#3B82F6]/30 to-[#F97316]/30 rounded-full blur-3xl pointer-events-none animate-pulse" />

          {/* Form Title */}
          <h3 className="text-[#1E3A8A] text-xl md:text-2xl font-semibold mb-6 text-center md:text-left">
            Ready to take the next step? Submit your query below and get personalized guidance.
          </h3>

          <form className="space-y-6">
            {/* Name, Email, Phone */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["Name", "Email", "Phone"].map((placeholder, i) => (
                <div key={i} className="relative">
                  <input
                    type={placeholder === "Email" ? "email" : placeholder === "Phone" ? "tel" : "text"}
                    placeholder=" "
                    className="w-full px-4 py-3 rounded-lg border border-[#CBD5E1] focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316] transition peer bg-white/90 hover:scale-[1.02] duration-300"
                  />
                  <label className="absolute left-4 top-2 text-[#6B7280] text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1E3A8A]">
                    {placeholder}
                  </label>
                </div>
              ))}
            </div>

            {/* Dropdown */}
            <div className="relative">
              <select className="w-full px-4 py-3 rounded-lg border border-[#CBD5E1] focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316] transition bg-white/90 appearance-none hover:scale-[1.02] duration-300">
                <option>Select your category</option>
                <option>Class 10-12</option>
                <option>BA/BSc</option>
                <option>Associate Degree</option>
                <option>BS & Equivalent</option>
                <option>MS & Equivalent</option>
                <option>PhD</option>
                <option>Working Professional</option>
              </select>
            </div>

            {/* Query Textarea */}
            <div className="relative">
              <textarea
                rows="4"
                placeholder=" "
                className="w-full px-4 py-3 rounded-lg border border-[#CBD5E1] focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316] transition peer bg-white/90 hover:scale-[1.02] duration-300"
              ></textarea>
              <label className="absolute left-4 top-2 text-[#6B7280] text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1E3A8A]">
                Enter your query
              </label>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-[#6B7280] mb-2 font-medium">
                Supporting Documents
              </label>
              <div className="flex items-center gap-4">
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer bg-[#EFF6FF] text-[#1E3A8A] px-5 py-2 rounded-lg hover:bg-[#DBEAFE] transition transform hover:scale-105 duration-300"
                >
                  Choose Files
                </label>
                <span className="text-[#6B7280]">No file chosen</span>
                <input id="file-upload" type="file" className="hidden" multiple />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-[#F97316] to-[#1E3A8A] text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Click Here to Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
