// Class-10-Guidance.jsx

import React, { useState, useRef } from "react";
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
// 1) MERGED HERO + INTRO + QUESTIONS
// --------------------------------------------------------------------
const HeroIntroSection = () => {
  const questions = [
    "What options are available after Matric?",
    "Which career does each option lead to?",
    "Which options are most suitable for me?",
    "What is included in each track?",
    "Which career opportunities close upon selecting some choice?",
    "How to know if some choice is most suitable for me?",
  ];

  const mid = Math.ceil(questions.length / 2);
  const leftQuestions = questions.slice(0, mid);
  const rightQuestions = questions.slice(mid);

  return (
    <section className="py-10 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row: text (left) + hero image (right) */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center mb-10">
          {/* LEFT: main narrative */}
          <div className="space-y-4">
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              After completing Grade 10, students enter one of the most
              important phases of their academic life. This is the point where
              they must choose a stream — a choice that shapes their future
              studies, university options, and eventually the careers they
              qualify for.
            </p>

            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              However, most students and parents face the same challenge:
              <br />
              <strong>
                minimum reliable information and maximum confusion.
              </strong>
            </p>

            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              At this stage, students often make decisions based on family
              expectations, friends’ choices, trends and “scope” discussions,
              and incomplete or outdated guidance.
            </p>
          </div>

          {/* RIGHT: hero image card */}
          <div className="flex justify-center md:justify-end">
            <div
              className="overflow-hidden rounded-3xl border border-gray-200 bg-slate-50 w-full max-w-md lg:max-w-lg"
              style={{
                boxShadow: "0 16px 40px rgba(15,23,42,0.08)",
              }}
            >
              <div className="w-full aspect-[4/3]">
                <img
                  src={class10Hero}
                  alt="Class 10 Guidance – choosing the right stream after Matric"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: questions in two columns */}
        <div
          className="rounded-2xl p-5 sm:p-6 lg:p-7"
          style={{
            backgroundColor: COLORS.surface,
            border: `1px solid ${COLORS.borderSoft}`,
            boxShadow: "0 10px 30px rgba(15,23,42,0.04)",
          }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-wide mb-4"
            style={{ color: COLORS.secondary }}
          >
            Key Questions at This Stage
          </p>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <ul
              className="space-y-1.5 text-sm sm:text-base"
              style={{ color: COLORS.textGray }}
            >
              {leftQuestions.map((q, idx) => (
                <li key={idx}>• {q}</li>
              ))}
            </ul>

            <ul
              className="space-y-1.5 text-sm sm:text-base"
              style={{ color: COLORS.textGray }}
            >
              {rightQuestions.map((q, idx) => (
                <li key={idx}>• {q}</li>
              ))}
            </ul>
          </div>

          <p
            className="text-sm leading-relaxed mt-5"
            style={{ color: COLORS.textGray }}
          >
            For both students and parents, this is one of the most stressful and
            uncertain decision points due to lack of structured, verified
            information, which is now made easy by{" "}
            <strong>TaleemiGuide!</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

// --------------------------------------------------------------------
// 2) HOW TALEEMIGUIDE HELPS – SINGLE COLUMN
// --------------------------------------------------------------------
const HowTaleemiGuideHelpsSection = ({ onOpenRoadmap }) => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Main copy – single column in a subtle card for consistency */}
      <div
        className="rounded-2xl p-5 sm:p-6 lg:p-7"
        style={{
          backgroundColor: "white",
          border: `1px solid ${COLORS.borderSoft}`,
          boxShadow: "0 10px 28px rgba(15,23,42,0.04)",
        }}
      >
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
          platform built by educationists, academicians, industry professionals,
          psychologists, and counselors.
        </p>

        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          We help students choose the right path after Matric with clarity,
          confidence, and complete understanding of future consequences.
        </p>
      </div>

      {/* Roadmap CTA */}
      <div
        className="rounded-2xl px-4 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
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
            Complete Pathway View
          </p>
          <p
            className="text-sm sm:text-base font-medium max-w-2xl"
            style={{ color: COLORS.primaryDark }}
          >
            Click here to view the complete roadmap after Matric.
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
            View Complete Roadmap
            <ArrowRight size={16} className="ml-2" />
          </button>

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
// 3) OPTIONS SECTION – NOW ONLY 2 OPTIONS (2 COLUMNS)
// --------------------------------------------------------------------
const OptionsSection = () => (
  <section className="py-12 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2
          className="text-3xl font-extrabold mb-2"
          style={{ color: COLORS.primaryDark }}
        >
          Two Core Ways to Decide
        </h2>

        <p
          className="text-sm sm:text-base max-w-2xl mx-auto"
          style={{ color: COLORS.textGray }}
        >
          If you or your child is transitioning from Class 10 and needs guidance,
          TaleemiGuide offers these core support options.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            Option 1 — Take the Career Assessment Test
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
            (Option 2).
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
            Option 2 — Book an Online Consultation
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
    </div>
  </section>
);

// --------------------------------------------------------------------
// 4) NEW TALEEMI ADVICE FORM SECTION (YOUR FORM, ADAPTED)
// --------------------------------------------------------------------
const TaleemiAdviceFormSection = () => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 border-b border-gray-200"
      style={{
        background: `linear-gradient(to bottom right, ${COLORS.lightBackground} 0%, white 100%)`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Title & Description Header */}
          <div className="text-center space-y-3">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold"
              style={{ color: COLORS.primary }}
            >
              Need Quick Help? (Seek Taleemi Advice)
            </h2>

            <p
              className="text-center max-w-2xl mx-auto text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              <span
                className="font-semibold"
                style={{ color: COLORS.primary }}
              >
                Taleemi Advice
              </span>{" "}
              is your academic emergency service. Whether you're choosing
              subjects, facing confusion, stuck in academic challenges, or
              planning a career transition — get expert guidance in time.
            </p>
          </div>

          {/* Form Container Card */}
          <div className="relative bg-white shadow-xl rounded-3xl p-8 md:p-12 border border-blue-300 transition-shadow duration-500 max-w-3xl mx-auto">
            {/* Form Title */}
            <h3
              className="text-xl md:text-2xl font-semibold mb-8 text-center"
              style={{ color: COLORS.primary }}
            >
              Submit Your Query
            </h3>

            <form className="space-y-6">
              {/* Name, Email, Phone */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {["Name", "Email", "Phone"].map((placeholder, i) => (
                  <div key={i} className="relative">
                    <input
                      type={
                        placeholder === "Email"
                          ? "email"
                          : placeholder === "Phone"
                          ? "tel"
                          : "text"
                      }
                      placeholder=" "
                      className="w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 focus:outline-none focus:border-2 focus:ring-0 transition peer bg-white hover:border-gray-400 duration-300"
                      style={{
                        borderColor: "#E5E7EB",
                      }}
                    />
                    {/* Floating Label */}
                    <label
                      className="absolute left-4 top-2 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs"
                      style={{ color: COLORS.textGray }}
                    >
                      {placeholder}
                    </label>
                  </div>
                ))}
              </div>

              {/* Dropdown */}
              <div className="relative">
                <select
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-2 focus:ring-0 transition bg-white appearance-none hover:border-gray-400 duration-300"
                  style={{
                    borderColor: "#E5E7EB",
                    paddingTop: "1rem",
                    paddingBottom: "0.5rem",
                  }}
                >
                  <option disabled defaultValue="">
                    Select your category
                  </option>
                  <option>Class 10-12</option>
                </select>
              </div>

              {/* Query Textarea */}
              <div className="relative">
                <textarea
                  rows="4"
                  placeholder=" "
                  className="w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 focus:outline-none focus:border-2 focus:ring-0 transition peer bg-white hover:border-gray-400 duration-300"
                  style={{
                    borderColor: "#E5E7EB",
                  }}
                ></textarea>
                {/* Floating Label */}
                <label
                  className="absolute left-4 top-2 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs"
                  style={{ color: COLORS.textGray }}
                >
                  Enter your query
                </label>
              </div>

              {/* File Upload */}
              <div>
                <label
                  className="block mb-2 font-medium text-sm"
                  style={{ color: COLORS.primary }}
                >
                  Supporting Documents (Optional)
                </label>
                <div className="flex flex-wrap items-center gap-4">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer px-5 py-2 rounded-lg transition transform hover:scale-[1.02] duration-300 font-medium"
                    style={{
                      backgroundColor: COLORS.secondary,
                      color: "white",
                      boxShadow:
                        "0 4px 6px -1px rgba(249, 115, 22, 0.5), 0 2px 4px -2px rgba(249, 115, 22, 0.5)",
                    }}
                  >
                    Choose Files
                  </label>
                  <span
                    className="text-sm"
                    style={{ color: COLORS.textGray }}
                  >
                    No file chosen
                  </span>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    multiple
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-[1.01]"
                style={{
                  backgroundColor: COLORS.primary,
                  color: "white",
                  boxShadow:
                    "0 10px 15px -3px rgba(30, 58, 138, 0.5), 0 4px 6px -4px rgba(30, 58, 138, 0.5)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.secondary)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.primary)
                }
              >
                Click Here to Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// --------------------------------------------------------------------
// 5) NEXT STEP SECTION (UNCHANGED FROM STRUCTURE VIEW, LAYOUT REFINED)
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
            ✅ Next Step in the Journey
          </h2>

          <p
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 max-w-3xl"
            style={{ color: COLORS.textGray }}
          >
            After selecting the right stream at this stage, students step into
            Class 11–12 — where the next major decision awaits: choosing a
            specialization and planning for university.
          </p>

          <p
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-5 max-w-3xl"
            style={{ color: COLORS.textGray }}
          >
            Your next page (Class 12 Guidance) should start from this exact
            point.
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
      <div className="relative bg-white rounded-2xl max-w-4xl w-full mx-4 overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-gray-200 bg-slate-50">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Class 10 Roadmap
            </p>
            <p className="text-sm sm:text-base font-semibold text-slate-900">
              Complete academic and career roadmap after Matric
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
      <HeroIntroSection />
      <HowTaleemiGuideHelpsSection
        onOpenRoadmap={() => setRoadmapOpen(true)}
      />
      <OptionsSection />
      <TaleemiAdviceFormSection />
      <NextStepSection />
      <RoadmapModal open={roadmapOpen} onClose={() => setRoadmapOpen(false)} />
    </ServiceLayout>
  );
}
