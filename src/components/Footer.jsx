import React, { useRef } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

export default function Footer() {
  const ref = useRef(null);
  
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <footer ref={ref} className="relative">
      

      {/* 2. Bottom Section - Quick Links & Social */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-[#111827] py-16 px-6 md:px-12 lg:px-20 text-[#D1D5DB]"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:items-start">
          {/* Left Column - Social */}
          <div className="md:flex-1 space-y-6">
            <h3 className="text-[#FBBF24] font-semibold mb-4 text-lg">Follow Us</h3>
            <p className="text-base md:text-lg">
              Stay connected with TaleemiGuide through our social channels for latest updates, tips, and educational news.
            </p>
            <div className="flex gap-4 mt-2">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3B82F6] hover:bg-[#F97316] transition-all text-white shadow-lg hover:shadow-xl"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="md:flex-1">
            <h3 className="text-[#FDBA74] font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Services", "Taleemi Advice", "Career Assessment Test", "Make an Appointment"].map(
                (link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-[#F97316] transition-colors text-base md:text-lg"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right Column - Contact Info */}
          <div className="md:flex-1 space-y-4">
            <h3 className="text-[#FDBA74] font-semibold mb-4 text-lg">Contact Us</h3>
            <p className="text-base md:text-lg">Email: info@taleemiguide.com</p>
            <p className="text-base md:text-lg">Phone: +92 300 1234567</p>
            <p className="text-base md:text-lg">Address: 123 Taleemi St, Karachi, Pakistan</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-[#374151]/40 pt-6 text-center text-sm md:text-base text-[#9CA3AF]">
          &copy; {new Date().getFullYear()} TaleemiGuide. All rights reserved.
        </div>
      </motion.section>
    </footer>
  );
}