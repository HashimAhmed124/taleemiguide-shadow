// CareerAssessmentTest.jsx — Enhanced & Unified
// Source: :contentReference[oaicite:1]{index=1}

import React from "react";
import { NavLink } from "react-router-dom";
import {
  User,
  CheckCircle,
  ArrowRight,
  BarChart2,
  Brain,
  Puzzle,
  ClipboardCheck,
  Lightbulb,
  BookOpen,
} from "lucide-react";

import ServiceLayout from "../../components/ServiceLayout";

const COLORS = {
  primary: "#1E3A8A",
  primaryDark: "#0F172A",
  secondary: "#F97316",
  textGray: "#4B5563",
  grayText: "#4B5563",
  lightBackground: "#EFF6FF",
  surface: "#F8FAFC",
  borderSoft: "#E5E7EB",
};

// ==================================================================
// 1) TOP HERO SECTION (Hybrid: Professional + Friendly)
// ==================================================================
const HeroSection = () => (
  <section className="pb-10 border-b border-gray-200 mb-10">
    <div
      className="p-6 sm:p-8 rounded-3xl"
      style={{
        backgroundColor: COLORS.surface,
        border: `1px solid ${COLORS.borderSoft}`,
        boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
      }}
    >
      <h2
        className="text-3xl font-extrabold mb-3"
        style={{ color: COLORS.primaryDark }}
      >
        Career Assessment Test
      </h2>

      <p
        className="text-base sm:text-lg leading-relaxed mb-4"
        style={{ color: COLORS.grayText }}
      >
        Our scientific, psychometric assessment evaluates your{" "}
        <strong>interests, aptitude, personality, and study preferences</strong>{" "}
        to help you discover the academic and professional fields that align
        with who you truly are.
      </p>

      <div
        className="p-4 sm:p-5 rounded-2xl flex items-start gap-3 mt-4"
        style={{
          background:
            "linear-gradient(135deg, rgba(30,58,138,0.08), rgba(249,115,22,0.08))",
        }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: "#fff" }}
        >
          <Brain size={20} style={{ color: COLORS.secondary }} />
        </div>
        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          This test goes beyond “which field is trending” — it helps you find
          fields you will naturally succeed in, enjoy, and grow in.
        </p>
      </div>
    </div>
  </section>
);

// ==================================================================
// 2) WHY THIS TEST MATTERS
// ==================================================================
const WhyItMatters = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-6"
      style={{ color: COLORS.primaryDark }}
    >
      Why Take a Career Assessment?
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: BarChart2,
          title: "Insightful",
          text: "See patterns in your strengths and weaknesses that aren't obvious through grades alone.",
        },
        {
          icon: Puzzle,
          title: "Holistic",
          text: "Evaluates aptitude, personality, preferences, and interests to create a full picture.",
        },
        {
          icon: ClipboardCheck,
          title: "Accurate & Data-Driven",
          text: "Results are based on psychology-backed models and validated assessment frameworks.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="p-6 rounded-3xl"
          style={{
            backgroundColor: COLORS.lightBackground,
            border: `1px solid ${COLORS.borderSoft}`,
            boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
          }}
        >
          <item.icon
            size={32}
            className="mb-4"
            style={{ color: COLORS.secondary }}
          />

          <h3
            className="text-lg font-bold mb-2"
            style={{ color: COLORS.primaryDark }}
          >
            {item.title}
          </h3>

          <p className="text-sm" style={{ color: COLORS.grayText }}>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </section>
);

// ==================================================================
// 3) WHAT THE TEST MEASURES (Professional + Organized)
// ==================================================================
const WhatItMeasures = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-6"
      style={{ color: COLORS.primaryDark }}
    >
      What This Test Measures
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          title: "Interests",
          text: "Find out what types of activities, subjects, and environments energize you.",
        },
        {
          title: "Aptitude",
          text: "Understand your natural strengths and areas where you excel.",
        },
        {
          title: "Personality",
          text: "See how your traits align with different academic and career paths.",
        },
        {
          title: "Work / Study Preferences",
          text: "Discover how you prefer to learn, work, communicate, and solve problems.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="p-6 rounded-3xl"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2E8F0",
            boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
          }}
        >
          <h3
            className="text-lg font-bold mb-2"
            style={{ color: COLORS.primaryDark }}
          >
            {item.title}
          </h3>
          <p className="text-sm" style={{ color: COLORS.grayText }}>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </section>
);

// ==================================================================
// 4) HOW THE TEST WORKS (Modern Step Progression)
// ==================================================================
const StepsSection = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-8"
      style={{ color: COLORS.primaryDark }}
    >
      How the Test Works
    </h2>

    <div className="grid md:grid-cols-4 gap-8">
      {[
        {
          icon: User,
          title: "Step 1",
          text: "You fill basic details (grade, interests, goals).",
        },
        {
          icon: ClipboardCheck,
          title: "Step 2",
          text: "You complete interest, aptitude & personality questions.",
        },
        {
          icon: Lightbulb,
          title: "Step 3",
          text: "Our system analyzes your responses using proven frameworks.",
        },
        {
          icon: BookOpen,
          title: "Step 4",
          text: "You receive a detailed report with recommended fields & explanation.",
        },
      ].map((step, i) => (
        <div
          key={i}
          className="rounded-3xl p-6 text-center"
          style={{
            backgroundColor: COLORS.lightBackground,
            border: `1px solid ${COLORS.borderSoft}`,
            boxShadow: "0 12px 26px rgba(0,0,0,0.05)",
          }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{
              backgroundColor: "#FFFFFF",
              border: `1px solid ${COLORS.secondary}30`,
            }}
          >
            <step.icon size={26} style={{ color: COLORS.secondary }} />
          </div>

          <h3
            className="font-bold text-lg mb-1"
            style={{ color: COLORS.primaryDark }}
          >
            {step.title}
          </h3>

          <p className="text-sm" style={{ color: COLORS.textGray }}>
            {step.text}
          </p>
        </div>
      ))}
    </div>
  </section>
);

// ==================================================================
// 5) CTA SECTION (same as NextStepSection style)
// ==================================================================
const CTASection = () => (
  <section className="pb-14 pt-4">
    <div
      className="p-8 rounded-3xl text-center relative overflow-hidden"
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

      <h2
        className="text-2xl sm:text-3xl font-extrabold mb-4"
        style={{ color: COLORS.primaryDark }}
      >
        Ready to Discover Your Best-Fit Field?
      </h2>

      <p
        className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-6"
        style={{ color: COLORS.textGray }}
      >
        Take the test to unlock accurate insights about your strengths, interests,
        natural abilities and future pathways.
      </p>

      <NavLink
        to="/assessment/start"
        className="inline-flex items-center px-8 py-3 text-base font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
        style={{
          backgroundColor: COLORS.secondary,
          color: "white",
        }}
      >
        Start the Test
        <ArrowRight size={20} className="ml-2" />
      </NavLink>
    </div>
  </section>
);

// ==================================================================
// MAIN PAGE COMPONENT
// ==================================================================
export default function CareerAssessmentTest() {
  return (
    <ServiceLayout>
      <HeroSection />
      <WhyItMatters />
      <WhatItMeasures />
      <StepsSection />
      <CTASection />
    </ServiceLayout>
  );
}
