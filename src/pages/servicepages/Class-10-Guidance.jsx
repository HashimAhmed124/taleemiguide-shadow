// Class-10-Guidance.jsx

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { User, Briefcase, MessageCircle, ArrowRight, X } from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";
import class10Hero from "../../assets/service-images/10-grade.jpg";
// TODO: update this to your actual roadmap image
import class10Roadmap from "../../assets/service-images/10-grade.jpg";

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

const ROADMAP_LINK = "/roadmap/class-10";

// --------------------------------------------------------------------
// 1) HERO IMAGE (from previous step)
// --------------------------------------------------------------------
const HeroImageSection = () => (
  <section className="mb-10">
    <div
      className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm bg-slate-50"
      style={{
        boxShadow: "0 16px 40px rgba(15,23,42,0.08)",
      }}
    >
      <div className="w-full aspect-[16/7] md:aspect-[16/5]">
        <img
          src={class10Hero}
          alt="Class 10 Guidance – choosing the right stream after Matric"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 2) INTRO / PROBLEM SECTION (refined layout + CTA popup trigger)
// --------------------------------------------------------------------
const IntroSection = ({ onOpenRoadmap }) => (
  <section className="pb-10 border-b border-gray-200 mb-12">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* LEFT: main narrative */}
        <div>
          <h1
            className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3"
            style={{ color: COLORS.primaryDark }}
          >
            Your First Major Academic Decision Starts Here
          </h1>

          <p
            className="text-sm sm:text-base leading-relaxed mb-4"
            style={{ color: COLORS.textGray }}
          >
            After completing Grade 10, students enter one of the most important
            phases of their academic life. This is the point where they must
            choose a stream — a choice that shapes their future studies,
            university options, and eventually the careers they qualify for.
          </p>

          <p
            className="text-sm sm:text-base leading-relaxed mb-4"
            style={{ color: COLORS.textGray }}
          >
            However, most students and parents face the same challenge:
            <br />
            minimum reliable information and maximum confusion.
          </p>

          <p
            className="text-sm sm:text-base leading-relaxed mb-2"
            style={{ color: COLORS.textGray }}
          >
            At this stage, students often make decisions based on:
          </p>

          <ul
            className="list-disc list-inside space-y-1 text-sm sm:text-base mb-4"
            style={{ color: COLORS.textGray }}
          >
            <li>Family expectations</li>
            <li>Friends’ choices</li>
            <li>Trends and “scope” discussions</li>
            <li>Incomplete or outdated guidance</li>
          </ul>
        </div>

        {/* RIGHT: key questions card */}
        <div>
          <div
            className="h-full rounded-2xl p-5 sm:p-6"
            style={{
              backgroundColor: COLORS.surface,
              border: `1px solid ${COLORS.borderSoft}`,
              boxShadow: "0 10px 30px rgba(15,23,42,0.04)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wide mb-2"
              style={{ color: COLORS.secondary }}
            >
              This leads to questions like:
            </p>

            <ul
              className="list-disc list-inside space-y-1 text-sm sm:text-base mb-4"
              style={{ color: COLORS.textGray }}
            >
              <li>Which stream should I choose after Matric?</li>
              <li>
                Should I select Engineering, Medical, Science General, Commerce,
                Humanities, Computing, Medical Technology, Tech, or O-Levels?
              </li>
              <li>What subjects are included in each option?</li>
              <li>What future careers does each choice lead to?</li>
              <li>
                Which opportunities close automatically after selecting a
                particular stream?
              </li>
              <li>Will I perform well in the field I choose — how do I know?</li>
              <li>Which combinations are better for my long-term plans?</li>
              <li>
                Should I prepare for any entrance or aptitude tests after Class
                10?
              </li>
            </ul>

            <p
              className="text-sm leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              For both students and parents, this is one of the most stressful
              and uncertain decision points due to lack of structured, verified
              information.
            </p>
          </div>
        </div>
      </div>

      {/* Roadmap CTA – full width */}
      <div
        className="mt-8 rounded-2xl px-4 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        style={{
          backgroundColor: COLORS.lightBackground,
          border: `1px solid ${COLORS.borderSoft}`,
        }}
      >
        <div className="space-y-1">
          <p
            className="text-xs font-semibold uppercase tracking-wide"
            style={{ color: COLORS.secondary }}
          >
            Visual Guide
          </p>
          <p
            className="text-sm sm:text-base font-medium max-w-2xl"
            style={{ color: COLORS.primaryDark }}
          >
            Check the roadmap for class 10 to know all the possibilities.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          <button
            type="button"
            onClick={onOpenRoadmap}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm sm:text-base font-semibold transition-transform duration-200 hover:scale-[1.03] shadow-md"
            style={{
              backgroundColor: COLORS.secondary,
              color: "white",
            }}
          >
            View RoadMap
            <ArrowRight size={16} className="ml-2" />
          </button>

          {/* Optional: still keep a link to the roadmap page */}
          <NavLink
            to={ROADMAP_LINK}
            className="text-xs sm:text-sm font-medium underline underline-offset-2"
            style={{ color: COLORS.primary }}
          >
            Open roadmap page
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 3) HOW TALEEMIGUIDE HELPS SECTION (refined layout)
// --------------------------------------------------------------------
const HowTaleemiGuideHelpsSection = () => (
  <section className="pb-10 border-b border-gray-200 mb-12">
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* LEFT: heading + description */}
        <div className="md:w-7/12">
          <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide"
            style={{
              backgroundColor: COLORS.lightBackground,
              color: COLORS.primaryDark,
              border: `1px solid ${COLORS.borderSoft}`,
            }}
          >
            <span>Guidance You Can Trust</span>
          </div>

          <h2
            className="text-lg sm:text-xl md:text-2xl font-semibold mb-3"
            style={{ color: COLORS.primaryDark }}
          >
            How TaleemiGuide Helps
          </h2>

          <p
            className="text-sm sm:text-base leading-relaxed mb-4"
            style={{ color: COLORS.textGray }}
          >
            TaleemiGuide is Pakistan’s first tech-based educational guidance
            platform built by educationists, academicians, industry
            professionals, psychologists, and counselors.
          </p>

          <p
            className="text-sm sm:text-base leading-relaxed mb-4"
            style={{ color: COLORS.textGray }}
          >
            We help students choose the right path after Matric with clarity,
            confidence, and complete understanding of future consequences.
          </p>

          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            If you or your child is transitioning from Class 10 and needs
            guidance, TaleemiGuide offers three support options:
          </p>
        </div>

        {/* RIGHT: compact highlight card to use space */}
        <div className="md:w-5/12">
          <div
            className="rounded-2xl p-5 sm:p-6 h-full"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(249,115,22,0.12), transparent 55%)",
              border: `1px solid ${COLORS.borderSoft}`,
              boxShadow: "0 12px 35px rgba(15,23,42,0.08)",
            }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wide mb-3"
              style={{ color: COLORS.secondary }}
            >
              What Makes Us Different
            </p>

            <ul
              className="space-y-2 text-sm sm:text-base"
              style={{ color: COLORS.textGray }}
            >
              <li>• Built by experts from education, industry, and psychology.</li>
              <li>• Focus on long-term academic and career fit.</li>
              <li>• Structured support instead of guesswork and pressure.</li>
              <li>• Integrated with tests, guidance sessions, and quick advice.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 4) OPTIONS SECTION 
// --------------------------------------------------------------------
const OptionsSection = () => (
  <section className="py-12 border-b border-gray-200 mb-12">
    <div className="text-center mb-10">
      <h2
        className="text-3xl font-extrabold mb-2"
        style={{ color: COLORS.primaryDark }}
      >
        Three Paths to the Right Decision
      </h2>

      <p
        className="text-sm sm:text-base max-w-2xl mx-auto"
        style={{ color: COLORS.textGray }}
      >
        If you or your child is transitioning from Class 10 and needs guidance, TaleemiGuide offers three support options:
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* OPTION 1 – Taleemi Advice */}
      <div
        className="rounded-3xl p-7 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E0E7FF",
          boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
        }}
      >
        <div
          className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.45), transparent 70%)",
          }}
        />

        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-5"
          style={{
            backgroundColor: COLORS.lightBackground,
            border: `1px solid ${COLORS.secondary}30`,
          }}
        >
          <MessageCircle size={30} style={{ color: COLORS.secondary }} />
        </div>

        <h3
          className="text-lg sm:text-xl font-bold mb-2"
          style={{ color: COLORS.primaryDark }}
        >
          Option 1 — Seek Quick Information (Taleemi Advice)
        </h3>

        <span
          className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full mb-4"
          style={{
            backgroundColor: `${COLORS.secondary}15`,
            color: COLORS.secondary,
          }}
        >
          Quick Response
        </span>

        <p
          className="text-sm mb-3 leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          If you need fast answers to any educational query related to Matric
          subjects, options, or entry test needs, simply:
        </p>

        <ol
          className="list-decimal list-inside text-sm mb-4 space-y-1"
          style={{ color: COLORS.textGray }}
        >
          <li>Login at TaleemiGuide.com</li>
          <li>From the Home Page, select Seek Taleemi Advice</li>
          <li>Submit your query and upload any document</li>
          <li>Receive expert guidance immediately</li>
        </ol>

        <div
          className="rounded-xl p-3 mb-6"
          style={{
            backgroundColor: COLORS.lightBackground,
            border: "1px solid #E0E7FF",
          }}
        >
          <p
            className="text-[11px] uppercase font-semibold mb-1"
            style={{ color: COLORS.grayText }}
          >
            Ideal For
          </p>
          <ul
            className="text-xs sm:text-sm leading-snug space-y-1"
            style={{ color: COLORS.grayText }}
          >
            <li>✔ Immediate questions</li>
            <li>✔ Clarification on streams</li>
            <li>✔ Subject combination queries</li>
          </ul>
        </div>

        <NavLink
          to="/service/taleemi-advice"
          className="inline-flex items-center justify-center mt-auto px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03] shadow-md"
          style={{
            backgroundColor: COLORS.secondary,
            color: "white",
          }}
        >
          Ask a Question
          <ArrowRight size={16} className="ml-2" />
        </NavLink>
      </div>

      {/* OPTION 2 – Career Assessment Test */}
      <div
        className="rounded-3xl p-7 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E0E7FF",
          boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
        }}
      >
        <div
          className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.45), transparent 70%)",
          }}
        />

        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-5"
          style={{
            backgroundColor: COLORS.lightBackground,
            border: `1px solid ${COLORS.secondary}30`,
          }}
        >
          <Briefcase size={30} style={{ color: COLORS.secondary }} />
        </div>

        <h3
          className="text-lg sm:text-xl font-bold mb-2"
          style={{ color: COLORS.primaryDark }}
        >
          Option 2 — Take the Career Assessment Test
        </h3>

        <span
          className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full mb-4"
          style={{
            backgroundColor: `${COLORS.secondary}15`,
            color: COLORS.secondary,
          }}
        >
          Psychometric Test
        </span>

        <p
          className="text-sm mb-3 leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          If you want to choose your stream based on your interests, aptitude,
          strengths, and personality, this test is ideal.
        </p>

        <p
          className="text-sm font-semibold mb-1"
          style={{ color: COLORS.textGray }}
        >
          Steps:
        </p>

        <ol
          className="list-decimal list-inside text-sm mb-3 space-y-1"
          style={{ color: COLORS.textGray }}
        >
          <li>Login at TaleemiGuide.com</li>
          <li>From Home Page, select Career Assessment Test</li>
          <li>Attempt the test in a relaxed environment</li>
          <li>
            Get your detailed Personalized Career Profile, including:
            <ul className="list-disc list-inside mt-1 space-y-1 ml-4">
              <li>Your top interests</li>
              <li>Strengths and aptitude</li>
              <li>Best-fit fields</li>
              <li>Recommended stream after Matric</li>
              <li>Long-term academic pathways</li>
            </ul>
          </li>
        </ol>

        <p
          className="text-sm mb-3 leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          This report helps you make a scientific, data-based decision rather
          than emotional or pressure-driven choices.
        </p>

        <p
          className="text-sm mb-6 leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          If you want to discuss the report further, you can book a session
          (Option 3).
        </p>

        <NavLink
          to="/service/career-assessment"
          className="inline-flex items-center justify-center mt-auto px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03] shadow-md"
          style={{
            backgroundColor: COLORS.secondary,
            color: "white",
          }}
        >
          Take the Test
          <ArrowRight size={16} className="ml-2" />
        </NavLink>
      </div>

      {/* OPTION 3 – Online Consultation */}
      <div
        className="rounded-3xl p-7 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E0E7FF",
          boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
        }}
      >
        <div
          className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.45), transparent 70%)",
          }}
        />

        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-5"
          style={{
            backgroundColor: COLORS.lightBackground,
            border: `1px solid ${COLORS.secondary}30`,
          }}
        >
          <User size={30} style={{ color: COLORS.secondary }} />
        </div>

        <h3
          className="text-lg sm:text-xl font-bold mb-2"
          style={{ color: COLORS.primaryDark }}
        >
          Option 3 — Book an Online Consultation
        </h3>

        <span
          className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full mb-4"
          style={{
            backgroundColor: `${COLORS.secondary}15`,
            color: COLORS.secondary,
          }}
        >
          1:1 Deep Guidance
        </span>

        <p
          className="text-sm mb-3 leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          For one-on-one guidance with our expert counselors:
        </p>

        <ol
          className="list-decimal list-inside text-sm mb-4 space-y-1"
          style={{ color: COLORS.textGray }}
        >
          <li>Login at TaleemiGuide.com</li>
          <li>Select Book Online Session</li>
          <li>Choose your preferred date and time</li>
          <li>
            Receive confirmation and join the session through a shared link
          </li>
        </ol>

        <div
          className="rounded-xl p-3 mb-6"
          style={{
            backgroundColor: COLORS.lightBackground,
            border: "1px solid #E0E7FF",
          }}
        >
          <p
            className="text-[11px] uppercase font-semibold mb-1"
            style={{ color: COLORS.grayText }}
          >
            Ideal For
          </p>
          <ul
            className="text-xs sm:text-sm leading-snug space-y-1"
            style={{ color: COLORS.grayText }}
          >
            <li>✔ Students needing deep clarity</li>
            <li>✔ Parents wanting expert advice</li>
            <li>✔ Discussing the Career Assessment Report</li>
          </ul>
        </div>

        <NavLink
          to="/service/online-session"
          className="inline-flex items-center justify-center mt-auto px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03] shadow-md"
          style={{
            backgroundColor: COLORS.secondary,
            color: "white",
          }}
        >
          Book a Session
          <ArrowRight size={16} className="ml-2" />
        </NavLink>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 5) NEXT STEP SECTION (UNCHANGED)
// --------------------------------------------------------------------
const NextStepSection = () => (
  <section className="pt-6">
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
          Your Next Step in the Journey
        </h2>

        <p
          className="text-sm sm:text-base md:text-lg leading-relaxed mb-5 max-w-3xl"
          style={{ color: COLORS.textGray }}
        >
          Once you choose the right stream after Class 10, the next decision in
          Class 11–12 is selecting a{" "}
          <strong className="font-semibold">
            specialization and preparing for university admissions
          </strong>
          . TaleemiGuide continues supporting you at each stage through
          structured guidance.
        </p>

        <NavLink
          to="/service/class-12-guidance"
          className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-lg font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
          style={{
            backgroundColor: COLORS.secondary,
            color: "white",
          }}
        >
          Explore Class 12 Guidance
          <ArrowRight size={18} className="ml-2" />
        </NavLink>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 6) ROADMAP MODAL
// --------------------------------------------------------------------
const RoadmapModal = ({ open, onClose }) => {
  if (!open) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        className="relative bg-white rounded-2xl max-w-4xl w-full mx-4 overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-gray-200 bg-slate-50">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Class 10 Roadmap
            </p>
            <p className="text-sm sm:text-base font-semibold text-slate-900">
              From streams to degrees and careers
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200/70 transition-colors"
          >
            <X size={18} className="text-slate-600" />
          </button>
        </div>

        {/* Image area */}
        <div className="bg-black flex items-center justify-center max-h-[75vh]">
          <img
            src={class10Roadmap}
            alt="Class 10 academic and career roadmap"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

// --------------------------------------------------------------------
// 7) MAIN COMPONENT
// --------------------------------------------------------------------
export default function Class10Guidance() {
  const [roadmapOpen, setRoadmapOpen] = useState(false);

  return (
    <ServiceLayout>
      <HeroImageSection />
      <IntroSection onOpenRoadmap={() => setRoadmapOpen(true)} />
      <HowTaleemiGuideHelpsSection />
      <OptionsSection />
      <NextStepSection />
      <RoadmapModal open={roadmapOpen} onClose={() => setRoadmapOpen(false)} />
    </ServiceLayout>
  );
}
