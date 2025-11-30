// src/pages/about-us.jsx (or About.jsx)

import React from "react";
import {
  Users,
  Target,
  Lightbulb,
  Compass,
  BookOpenCheck,
  Globe2,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const COLORS = {
  primary: "#1E3A8A",      // same navy as home
  secondary: "#F97316",    // orange accent
  textGray: "#4B5563",
  lightBackground: "#EFF6FF",
  primary2: "#11253e",
};

// Simple section wrapper to keep spacing consistent
const Section = ({ children, bg = "white" }) => (
  <section
    className="py-12 md:py-16 border-b border-gray-100"
    style={{ backgroundColor: bg }}
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

// =========================================
// HERO – aligned with homepage Hero
// =========================================
const AboutHero = () => (
  <section
    className="py-10 md:py-16 border-b border-gray-100"
    style={{ backgroundColor: COLORS.lightBackground }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* LEFT: text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
            style={{ color: COLORS.primary }}
          >
            The System Behind{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #F97316 0%, #1D4ED8 100%)",
              }}
            >
              Smarter Educational Decisions
            </span>
            .
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed mb-5"
            style={{ color: COLORS.primary2, opacity: 0.9 }}
          >
            TaleemiGuide is a structured guidance platform that connects your
            subjects, degrees and skills with the futures they actually lead to
            — from Class 10 all the way to working life.
          </p>

          <ul className="space-y-3 text-left max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
            {[
              "Built specifically for Pakistani students, graduates and professionals.",
              "Combines expert humans, psychometrics and verified information — not random opinions.",
              "Maps school, college, university and skill routes into clear, understandable pathways.",
              "Supports you at multiple stages: Class 10, Class 12, University, and Working Professional.",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start"
                style={{ color: COLORS.primary2 }}
              >
                <span
                  className="h-5 w-5 mr-3 flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{ color: COLORS.secondary }}
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: “system” visual instead of images */}
        <div className="lg:w-1/2 w-full mt-6 lg:mt-0 flex justify-center">
          <div className="w-full max-w-md lg:max-w-lg relative">
            {/* Soft background blob */}
            <div className="absolute -top-10 -right-8 w-40 h-40 bg-blue-200/60 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-6 w-40 h-40 bg-orange-200/60 rounded-full blur-3xl" />

            <div className="relative bg-white rounded-3xl shadow-xl border border-blue-100 p-6 md:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: COLORS.lightBackground }}
                >
                  <Users size={22} style={{ color: COLORS.secondary }} />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wide"
                    style={{ color: COLORS.textGray }}
                  >
                    One-Window Guidance
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: COLORS.textGray, opacity: 0.8 }}
                  >
                    Students · Graduates · Professionals
                  </p>
                </div>
              </div>

              {/* mini “cards” showing system layers */}
              <div className="space-y-3 text-sm">
                <HeroMiniRow
                  title="Academic Structure"
                  text="Boards, streams, subjects and programs organised into a clear map."
                />
                <HeroMiniRow
                  title="Career Pathways"
                  text="Fields, roles and sectors linked with relevant study routes."
                />
                <HeroMiniRow
                  title="Human + Data Insight"
                  text="Psychology, profiles and real market knowledge combined."
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-[11px] text-center">
                <div className="rounded-xl py-2 px-3 bg-blue-50 text-blue-900 font-semibold">
                  Class 10 → 12
                </div>
                <div className="rounded-xl py-2 px-3 bg-orange-50 text-orange-900 font-semibold">
                  BS / MS / PhD
                </div>
                <div className="rounded-xl py-2 px-3 bg-emerald-50 text-emerald-800 font-semibold">
                  Skills & Exams
                </div>
                <div className="rounded-xl py-2 px-3 bg-slate-50 text-slate-700 font-semibold">
                  Working Professionals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HeroMiniRow = ({ title, text }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.secondary }} />
    <div>
      <p
        className="text-xs font-semibold mb-0.5"
        style={{ color: COLORS.primary2 }}
      >
        {title}
      </p>
      <p className="text-xs" style={{ color: COLORS.textGray }}>
        {text}
      </p>
    </div>
  </div>
);

// =========================================
// OUR STORY / VISION / MISSION
// =========================================
const StorySection = () => (
  <Section bg="white">
    <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] items-start">
      <div>
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-3"
          style={{ color: COLORS.primary2 }}
        >
          Why TaleemiGuide Exists
        </h2>
        <p
          className="text-sm sm:text-base leading-relaxed mb-3"
          style={{ color: COLORS.textGray }}
        >
          In Pakistan, many academic and career decisions are still made based
          on pressure, hearsay and incomplete information. Students follow
          trends, parents rely on limited exposure, and professionals struggle
          to connect their education with real opportunities.
        </p>
        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          TaleemiGuide was created to change that — by building a{" "}
          <strong className="font-semibold">
            system of guidance, not just individual advice
          </strong>
          . We connect data, experience and empathy so that every learner can
          see their options clearly and choose with confidence.
        </p>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl bg-[#EFF6FF] border border-blue-100 p-5">
          <div className="flex items-center gap-3 mb-2">
            <Target size={22} style={{ color: COLORS.secondary }} />
            <h3
              className="text-sm font-semibold"
              style={{ color: COLORS.primary2 }}
            >
              Our Vision
            </h3>
          </div>
          <p className="text-sm" style={{ color: COLORS.textGray }}>
            A Pakistan where every learner — regardless of city or background —
            can access authentic, structured academic and career guidance.
          </p>
        </div>

        <div className="rounded-2xl bg-white border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-2">
            <Lightbulb size={22} style={{ color: COLORS.secondary }} />
            <h3
              className="text-sm font-semibold"
              style={{ color: COLORS.primary2 }}
            >
              Our Mission
            </h3>
          </div>
          <p className="text-sm" style={{ color: COLORS.textGray }}>
            To organize academic options, professional pathways and local
            realities into a clear guidance system that students, parents and
            professionals can rely on.
          </p>
        </div>
      </div>
    </div>
  </Section>
);

// =========================================
// WHAT WE DO (aligned with OurServices tone)
// =========================================
const WhatWeDoSection = () => (
  <Section bg="#F9FAFB">
    <div className="text-center mb-10">
      <h3
        className="font-semibold text-sm sm:text-base mb-1"
        style={{ color: COLORS.secondary }}
      >
        What We Do
      </h3>
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold"
        style={{ color: COLORS.primary }}
      >
        From Confusion to Clear Pathways
      </h2>
      <p
        className="mt-3 text-sm sm:text-base max-w-3xl mx-auto"
        style={{ color: COLORS.textGray }}
      >
        TaleemiGuide connects individual services like Class 10 Guidance,
        Career Assessment, Subject Classification and Program Finder into one
        complete journey.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          icon: <BookOpenCheck className="w-7 h-7" />,
          title: "Structure the Information",
          text: "We categorize subjects, degrees and opportunities so they make sense together.",
        },
        {
          icon: <Compass className="w-7 h-7" />,
          title: "Match You to Pathways",
          text: "Using your background, interests and goals, we highlight realistic options.",
        },
        {
          icon: <Lightbulb className="w-7 h-7" />,
          title: "Guide Your Next Steps",
          text: "Through Taleemi Advice, online sessions and tools, we help you move forward.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col gap-3"
        >
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: COLORS.lightBackground }}
          >
            {React.cloneElement(item.icon, { style: { color: COLORS.secondary } })}
          </div>
          <h3
            className="text-base font-semibold"
            style={{ color: COLORS.primary2 }}
          >
            {item.title}
          </h3>
          <p className="text-sm" style={{ color: COLORS.textGray }}>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </Section>
);

// =========================================
// WHO WE SUPPORT (aligned with ForWhom)
// =========================================
const WhoWeSupportSection = () => (
  <Section>
    <div className="text-center mb-8">
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3"
        style={{ color: COLORS.primary }}
      >
        Who Is TaleemiGuide For?
      </h2>
      <p
        className="text-sm sm:text-base max-w-3xl mx-auto"
        style={{ color: COLORS.primary2, opacity: 0.85 }}
      >
        Whether you are just choosing your first stream or planning a complete
        career shift, TaleemiGuide is designed to support you with clarity and
        respect.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {[
        {
          Icon: GraduationCap,
          title: "Class 10–12 &amp; A-Level Students",
          text: "Choosing streams, subjects, boards and future directions with confidence.",
        },
        {
          Icon: Globe2,
          title: "University Students &amp; Graduates",
          text: "Handling academic issues, credit confusion, further studies and specialization choices.",
        },
        {
          Icon: Briefcase,
          title: "Working Professionals",
          text: "Planning cross-field shifts, further education, certifications and growth strategies.",
        },
        {
          Icon: Users,
          title: "Parents &amp; Families",
          text: "Getting structured, unbiased guidance instead of conflicting opinions.",
        },
      ].map(({ Icon, title, text }, index) => (
        <div
          key={index}
          className="flex gap-4 bg-white rounded-2xl shadow-sm border border-gray-200 p-5"
        >
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: COLORS.lightBackground }}
          >
            <Icon size={22} style={{ color: COLORS.secondary }} />
          </div>
          <div>
            <h3
              className="text-sm sm:text-base font-semibold mb-1"
              style={{ color: COLORS.primary2 }}
            >
              {title}
            </h3>
            <p
              className="text-xs sm:text-sm leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              {text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

// =========================================
// HOW WE WORK – small 3-step (mirrors TheProcess tone)
// =========================================
const HowWeWorkSection = () => (
  <Section bg="#FDF6E3">
    <div className="max-w-4xl mx-auto text-center mb-8">
      <h3
        className="text-sm font-semibold tracking-wide mb-1"
        style={{ color: COLORS.secondary }}
      >
        How We Work
      </h3>
      <h2
        className="text-2xl sm:text-3xl font-extrabold mb-3"
        style={{ color: COLORS.primary }}
      >
        Quality Guidance, Simple Process
      </h2>
      <p
        className="text-sm sm:text-base"
        style={{ color: COLORS.textGray }}
      >
        You don’t need to understand the entire education system. You just need
        to tell us where you are and where you hope to go — we help with the
        rest.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
      {[
        {
          step: "01",
          title: "Understand You",
          text: "We learn about your academics, interests, constraints and goals.",
        },
        {
          step: "02",
          title: "Map Options",
          text: "We connect your profile with suitable subjects, programs and paths.",
        },
        {
          step: "03",
          title: "Plan Next Moves",
          text: "We recommend practical next steps and support you as you act.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm border border-amber-100 p-6 flex flex-col gap-3"
        >
          <div
            className="inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: "#FFFBEB",
              color: COLORS.secondary,
            }}
          >
            Step {item.step}
          </div>
          <h3
            className="text-base font-semibold"
            style={{ color: COLORS.primary2 }}
          >
            {item.title}
          </h3>
          <p className="text-sm" style={{ color: COLORS.textGray }}>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </Section>
);

// =========================================
// MAIN ABOUT PAGE
// =========================================
export default function AboutUs() {
  return (
    <div className="font-sans">
      <AboutHero />
      <StorySection />
      <WhatWeDoSection />
      <WhoWeSupportSection />
      <HowWeWorkSection />
    </div>
  );
}
