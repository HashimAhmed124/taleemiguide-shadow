import React from "react";
import { NavLink } from "react-router-dom";
import {
  Search,
  MapPin,
  GraduationCap,
  SlidersHorizontal,
  ArrowRight,
  Database,
  Compass,
} from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";
import programFinderHero from "../../assets/service-images/degree-finder.png";

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
      <div className="grid md:grid-cols-2 gap-8 items-start mb-6">
        {/* LEFT: TEXT */}
        <div>
          <p
            className="text-sm sm:text-base leading-relaxed mb-4"
            style={{ color: COLORS.textGray }}
          >
            Welcome to Pakistan’s first comprehensive University Program Finder,
            powered by TaleemiGuide. Now, you can explore every BS, MS/MPhil,
            and PhD program offered across all universities — verified, updated,
            organized, and completely free.
          </p>

          <p
            className="text-sm sm:text-base leading-relaxed mb-4"
            style={{ color: COLORS.textGray }}
          >
            This national-level database consolidates all degree programs under
            one platform, enabling students, parents, counselors, and
            professionals to make informed academic decisions without confusion,
            guesswork, or unreliable sources.
          </p>

          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            Whether you’re a Class 12 student searching for BS options, a
            graduate planning for MS/MPhil, or a professional considering
            doctoral studies — TaleemiGuide helps you find the right program in
            no time.
          </p>
        </div>

        {/* RIGHT: HERO IMAGE */}
        <div className="flex md:justify-end">
          <div
            className="overflow-hidden rounded-3xl border border-gray-200 bg-slate-50 w-full max-w-md"
            style={{
              boxShadow: "0 16px 40px rgba(15,23,42,0.08)",
            }}
          >
            <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96">
              <img
                src={programFinderHero}
                alt="University Program Finder – explore degree options"
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
// 2) WHY THIS MATTERS
// --------------------------------------------------------------------
const WhyThisMattersSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-3"
          style={{ color: COLORS.primaryDark }}
        >
          Why This Matters
        </h2>
      </div>

      <div
        className="rounded-2xl p-5 sm:p-6"
        style={{
          backgroundColor: COLORS.surface,
          border: `1px solid ${COLORS.borderSoft}`,
          boxShadow: "0 10px 25px rgba(15,23,42,0.06)",
        }}
      >
        <p
          className="text-sm sm:text-base leading-relaxed mb-3"
          style={{ color: COLORS.textGray }}
        >
          Every year, thousands of students struggle during admissions because
          of:
        </p>

        <ul
          className="list-disc list-inside space-y-1 text-sm sm:text-base mb-4"
          style={{ color: COLORS.textGray }}
        >
          <li>incomplete information</li>
          <li>outdated websites</li>
          <li>unreliable recommendations</li>
          <li>no centralized database</li>
          <li>scattered and inconsistent program listings</li>
        </ul>

        <p
          className="text-sm sm:text-base leading-relaxed font-semibold"
          style={{ color: COLORS.primaryDark }}
        >
          TaleemiGuide offers accurate, structured, searchable academic data.
        </p>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 3) WHAT YOU CAN DO
// --------------------------------------------------------------------
const WhatYouCanDoSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-3"
          style={{ color: COLORS.primaryDark }}
        >
          What You Can Do
        </h2>
      </div>

      <div
        className="rounded-3xl p-6 sm:p-7"
        style={baseCardStyle}
      >
        <div className="flex items-start gap-3 mb-5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-none"
            style={{
              backgroundColor: COLORS.lightBackground,
              border: `1px solid ${COLORS.borderSoft}`,
            }}
          >
            <Search size={20} style={{ color: COLORS.secondary }} />
          </div>
          <p
            className="text-sm sm:text-base font-semibold"
            style={{ color: COLORS.primaryDark }}
          >
            Search, Filter &amp; Explore Programs by:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* DEGREE LEVEL */}
          <div className="flex items-start gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-none"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <GraduationCap size={20} style={{ color: COLORS.secondary }} />
            </div>
            <div>
              <p
                className="text-sm sm:text-base font-semibold"
                style={{ color: COLORS.primaryDark }}
              >
                🎓 Degree Level
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: COLORS.textGray }}
              >
                BS | MS/MPhil | PhD
              </p>
            </div>
          </div>

          {/* UNIVERSITY NAME */}
          <div className="flex items-start gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-none"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <Database size={20} style={{ color: COLORS.secondary }} />
            </div>
            <div>
              <p
                className="text-sm sm:text-base font-semibold"
                style={{ color: COLORS.primaryDark }}
              >
                🏫 University Name
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: COLORS.textGray }}
              >
                All Universities
              </p>
            </div>
          </div>

          {/* FIELD OF STUDY */}
          <div className="flex items-start gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-none"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <Compass size={20} style={{ color: COLORS.secondary }} />
            </div>
            <div>
              <p
                className="text-sm sm:text-base font-semibold"
                style={{ color: COLORS.primaryDark }}
              >
                📘 Field of Study / Discipline
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: COLORS.textGray }}
              >
                From Arts to Engineering, Health to IT, Social Sciences to
                Emerging Technologies etc
              </p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-start gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-none"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <MapPin size={20} style={{ color: COLORS.secondary }} />
            </div>
            <div>
              <p
                className="text-sm sm:text-base font-semibold"
                style={{ color: COLORS.primaryDark }}
              >
                📍 Location
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: COLORS.textGray }}
              >
                Province, City, Region
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 4) SEAMLESS INTEGRATION SECTION
// --------------------------------------------------------------------
const IntegrationSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-3"
          style={{ color: COLORS.primaryDark }}
        >
          Seamless Integration With Other TaleemiGuide Services
        </h2>
      </div>

      {/* TIMELINE STYLE LIST */}
      <div className="space-y-6 mb-8">
        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          The Program Finder works perfectly with our broader guidance ecosystem: 
        </p>

        {/* Item 1 – Career Assessment Test */}
        <div className="flex gap-4 items-start">
          <div className="flex flex-col items-center flex-none pt-1.5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                backgroundColor: COLORS.lightBackground,
                color: COLORS.primaryDark,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              🎯
            </div>
          </div>
          <div className="space-y-1">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              Career Assessment Test:
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              Find fields that suit your personality, then use Program Finder to explore universities offering them.
            </p>
          </div>
        </div>

        {/* Item 2 – Class 12 Guidance */}
        <div className="flex gap-4 items-start">
          <div className="flex flex-col items-center flex-none pt-1.5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                backgroundColor: COLORS.lightBackground,
                color: COLORS.primaryDark,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              🧭
            </div>
          </div>
          <div className="space-y-1">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              Class 12 Guidance:
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              Plan admission timelines, understand specialization options, and compare institutions.
            </p>
          </div>
        </div>

        {/* Item 3 – University Graduates Guidance */}
        <div className="flex gap-4 items-start">
          <div className="flex flex-col items-center flex-none pt-1.5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                backgroundColor: COLORS.lightBackground,
                color: COLORS.primaryDark,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              🏫
            </div>
          </div>
          <div className="space-y-1">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              University Graduates Guidance:
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              Learn about eligibility, credit transfer, degree equivalence, or postgraduate pathways.
            </p>
          </div>
        </div>

        {/* Item 4 – Book Online Session */}
        <div className="flex gap-4 items-start">
          <div className="flex flex-col items-center flex-none pt-1.5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                backgroundColor: COLORS.lightBackground,
                color: COLORS.primaryDark,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              💬
            </div>
          </div>
          <div className="space-y-1">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              Book Online Session:
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              Discuss your shortlisted programs with an expert for personalized advice.
            </p>
          </div>
        </div>
      </div>

      {/* CTA: Start Exploring Now */}
      <div className="space-y-3">
        <p
          className="text-xs sm:text-sm font-semibold uppercase tracking-wide"
          style={{ color: COLORS.secondary }}
        >
          Start Exploring Now!
        </p>
        <p
          className="text-sm sm:text-base leading-relaxed max-w-3xl"
          style={{ color: COLORS.textGray }}
        >
          Find your perfect degree from Pakistan’s largest verified database of university programs.Find your perfect degree from Pakistan’s largest verified database of university programs.
        </p>

        <NavLink
          // TODO: need to update it to actual page when completed
          to="/program-finder"
          className="inline-flex items-center justify-center mt-3 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
          style={{
            backgroundColor: COLORS.secondary,
            color: "white",
          }}
        >
          Launch University Program Finder
          <ArrowRight size={18} className="ml-2" />
        </NavLink>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 5) NEXT STEP IN THE JOURNEY
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
            Once students enter university, a new set of challenges begins — and
            TaleemiGuide continues supporting them through our University
            Graduates guidance service.
          </p>

          <NavLink
            to="/service/university-graduates-guidance"
            className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-lg font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
            style={{
              backgroundColor: COLORS.secondary,
              color: "white",
            }}
          >
            Go to University Graduates Guidance
            <ArrowRight size={18} className="ml-2" />
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 6) MAIN COMPONENT
// --------------------------------------------------------------------
export default function UniversityProgramFinder() {
  return (
    <ServiceLayout>
      <HeroSection />
      <WhyThisMattersSection />
      <WhatYouCanDoSection />
      <IntegrationSection />
      <NextStepSection />
    </ServiceLayout>
  );
}
