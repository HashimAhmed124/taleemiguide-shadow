import React from "react";
import { NavLink } from "react-router-dom";
import {
  Zap,
  MessageCircle,
  Users,
  CheckCircle2,
  MonitorSmartphone,
} from "lucide-react";

import ServiceLayout from "../../components/ServiceLayout";
import TaleemiAdviseForm from "../../components/ContactUs";
import taleemiAdviceHero from "../../assets/service-images/Taleemi-Advice.png";

// --- BRAND COLORS ----------------------------------------------------
const COLORS = {
  primary: "#1E3A8A",
  primaryDark: "#11253e",
  secondary: "#F97316",
  textGray: "#4B5563",
  grayText: "#4B5563",
  lightBackground: "#EFF6FF",
  surface: "#F8FAFC",
  borderSoft: "#E5E7EB",
};

const baseCardStyle = {
  backgroundColor: "#FFFFFF",
  border: "1px solid #E0E7FF",
  boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
};

// --------------------------------------------------------------------
// 1) HERO SECTION
// --------------------------------------------------------------------
const HeroSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* LEFT: TEXT */}
        <div>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            In the fast-moving world of education and careers, timely guidance
            can make all the difference. Whether you are a student facing an
            urgent academic issue or a professional seeking immediate clarity,
            Taleemi Advice provides fast, accurate, and personalized solutions —
            exactly when you need them. As Pakistan’s first tech-based
            educational solution provider, TaleemiGuide offers quick-response
            support for all academic and professional matters, ensuring clarity,
            relief, and direction within hours.
          </p>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="flex md:justify-end mt-6 md:mt-0">
          <div
            className="overflow-hidden rounded-3xl border border-gray-200 bg-slate-50 w-full max-w-md"
            style={{
              boxShadow: "0 16px 40px rgba(15,23,42,0.08)",
            }}
          >
            <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96">
              <img
                src={taleemiAdviceHero}
                alt="Student and professional receiving Taleemi Advice"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 2) WHAT MAKES TALEEMI ADVICE UNIQUE?
// --------------------------------------------------------------------
const WhatMakesUniqueSection = () => (
  <section className="py-12 border-b border-gray-200">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <h2
        className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8"
        style={{ color: COLORS.primaryDark }}
      >
        What Makes Taleemi Advice Unique?
      </h2>

      {/* Qualities List – single column */}
      <div className="space-y-8 sm:space-y-10">
        {/* 1) Immediate Assistance */}
        <div className="flex gap-4 sm:gap-5">
          {/* Icon bubble */}
          <div className="mt-1">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <Zap size={20} style={{ color: COLORS.secondary }} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 border-b border-gray-200 pb-6 sm:pb-7">
            <p
              className="text-sm sm:text-base font-semibold mb-2"
              style={{ color: COLORS.primaryDark }}
            >
              Immediate Assistance — Quick Response Like 1122
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              Some decisions can’t wait. Taleemi Advice works like 1122 in the academic world, giving you urgent access to expert advice, reliable information, and clear answers — fast.
              <br />
              Whenever you face uncertainty, confusion, or a time-sensitive issue, we are here with instant, expert-backed support.
            </p>
          </div>
        </div>

        {/* 2) Comprehensive Expertise */}
        <div className="flex gap-4 sm:gap-5">
          {/* Icon bubble */}
          <div className="mt-1">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <Users size={20} style={{ color: COLORS.secondary }} />
            </div>
          </div>

        {/* Content */}
          <div className="flex-1 border-b border-gray-200 pb-6 sm:pb-7">
            <p
              className="text-sm sm:text-base font-semibold mb-2"
              style={{ color: COLORS.primaryDark }}
            >
              Comprehensive Expertise — For All Levels
            </p>

            <p
              className="text-sm sm:text-base leading-relaxed mb-2"
              style={{ color: COLORS.textGray }}
            >
              Our advisory team includes:
            </p>

            <ul
              className="list-disc list-inside space-y-1 text-sm sm:text-base mb-3"
              style={{ color: COLORS.textGray }}
            >
              <li>Educationists</li>
              <li>Academicians</li>
              <li>Industry experts</li>
              <li>Career coaches</li>
              <li>Psychologists</li>
              <li>Certified counselors</li>
            </ul>

            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              We cover academic and professional issues from Matric to Post-Graduation, and for Working Professionals, providing clarity across every field and specialization.
            </p>
          </div>
        </div>

        {/* 3) Personalized, Practical Solutions */}
        <div className="flex gap-4 sm:gap-5">
          {/* Icon bubble */}
          <div className="mt-1">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <CheckCircle2 size={20} style={{ color: COLORS.secondary }} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 border-b border-gray-200 pb-6 sm:pb-7">
            <p
              className="text-sm sm:text-base font-semibold mb-2"
              style={{ color: COLORS.primaryDark }}
            >
              Personalized, Practical Solutions
            </p>

            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              Every individual, case, and situation is different — so our responses are tailored specifically to your unique needs, ensuring the advice you receive is accurate, relevant, and immediately actionable.
            </p>
          </div>
        </div>

        {/* 4) Easy & User-Friendly Platform */}
        <div className="flex gap-4 sm:gap-5">
          {/* Icon bubble */}
          <div className="mt-1">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <MonitorSmartphone size={20} style={{ color: COLORS.secondary }} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <p
              className="text-sm sm:text-base font-semibold mb-2"
              style={{ color: COLORS.primaryDark }}
            >
              Easy & User-Friendly Platform
            </p>

            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              The TaleemiGuide interface is designed for simplicity.
              <br />
              You can connect with experts, upload documents, and receive guidance quickly and conveniently — anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 3) TALEEMI ADVICE FORM (REUSABLE COMPONENT)
// --------------------------------------------------------------------
const TaleemiAdviceFormSection = () => <TaleemiAdviseForm />;

// --------------------------------------------------------------------
// 4) NEXT STEP IN THE JOURNEY
// --------------------------------------------------------------------
const NextStepSection = () => (
  <section className="py-10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="p-6 sm:p-8 rounded-3xl relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 60%, #FFFFFF 100%)",
          border: "1px solid rgba(0,0,0,0.04)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 w-52 h-52 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(30,58,138,0.15), transparent 70%)",
          }}
        />

        <div className="relative">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-3"
            style={{ color: COLORS.primaryDark }}
          >
            Next Step in the Journey
          </h2>

          <p
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-5 max-w-3xl"
            style={{ color: COLORS.textGray }}
          >
            If you want personalized guidance or need to discuss your case in
            detail, your next step is to Book an Online Session with our expert
            counselors.
          </p>

          <NavLink
            to="/service/online-session"
            className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-lg font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
            style={{
              backgroundColor: COLORS.secondary,
              color: "white",
            }}
          >
            Book Online Session
            <MessageCircle size={18} className="ml-2" />
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// MAIN COMPONENT
// --------------------------------------------------------------------
export default function TaleemiAdvice() {
  return (
    <ServiceLayout>
      <HeroSection />
      <WhatMakesUniqueSection />
      <TaleemiAdviceFormSection />
      <NextStepSection />
    </ServiceLayout>
  );
}
