// TaleemiAdvicePage.jsx — Unified & Upgraded
// Source: :contentReference[oaicite:1]{index=1}

import React from "react";
import { NavLink } from "react-router-dom";
import {
  Zap,
  Users,
  CheckCircle,
  Smartphone,
  MessageSquare,
  MessageCircle,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";

// --- UNIFIED COLOR PALETTE (aligned with other service pages) ---
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

// ===================================================================
// 1) HERO / INTRO SECTION
// ===================================================================
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
      {/* Top mini strip */}
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <div
          className="flex items-center gap-3 p-4 rounded-2xl"
          style={{ backgroundColor: COLORS.lightBackground }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <MessageCircle size={22} style={{ color: COLORS.primary }} />
          </div>
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-wide"
              style={{ color: COLORS.textGray }}
            >
              Mode
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              Quick Academic Query
            </p>
          </div>
        </div>

        <div
          className="flex items-center gap-3 p-4 rounded-2xl"
          style={{ backgroundColor: COLORS.lightBackground }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <Users size={22} style={{ color: COLORS.secondary }} />
          </div>
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-wide"
              style={{ color: COLORS.textGray }}
            >
              Ideal For
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              Students &amp; parents with 1–2 key questions
            </p>
          </div>
        </div>

        <div
          className="flex items-center gap-3 p-4 rounded-2xl"
          style={{ backgroundColor: COLORS.lightBackground }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <Zap size={22} style={{ color: COLORS.primary }} />
          </div>
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-wide"
              style={{ color: COLORS.textGray }}
            >
              Response Time
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              Usually within 24–48 hours
            </p>
          </div>
        </div>
      </div>

      {/* Main copy */}
      <p
        className="text-base sm:text-lg leading-relaxed mb-3"
        style={{ color: COLORS.textGray }}
      >
        <strong>Taleemi Advice</strong> is our rapid query resolution service.
        It’s perfect when you have a single, specific question that needs a
        quick, expert answer — without booking a full consultation. Ideal for
        quick checks on eligibility, university deadlines, career definitions,
        or general academic queries.
      </p>

      <p
        className="text-base sm:text-lg font-semibold"
        style={{ color: COLORS.primaryDark }}
      >
        Get expert advice quickly and efficiently, straight to your inbox or
        phone.
      </p>
    </div>
  </section>
);

// ===================================================================
// 2) WHY CHOOSE TALEEMI ADVICE (USPs)
// ===================================================================
const USPSection = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-8"
      style={{ color: COLORS.primaryDark }}
    >
      Why Choose Taleemi Advice?
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Speed",
          icon: Zap,
          desc: "Get clear, actionable answers within a short time window — without long booking delays.",
          tag: "Fast response",
        },
        {
          title: "Accuracy",
          icon: CheckCircle,
          desc: "Responses are drafted by experienced academic and career counselors, not generic automated replies.",
          tag: "Expert-backed",
        },
        {
          title: "Simplicity",
          icon: MessageSquare,
          desc: "Submit your question in simple text form; we guide you only on what’s necessary to answer it well.",
          tag: "Easy to use",
        },
      ].map((usp, i) => {
        const Icon = usp.icon;
        return (
          <div
            key={i}
            className="rounded-3xl p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{
              backgroundColor: "#FFFFFF",
              border: `1px solid ${COLORS.borderSoft}`,
              boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
            }}
          >
            {/* Accent blob */}
            <div
              className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle, rgba(249,115,22,0.45), transparent 70%)",
              }}
            />

            {/* Icon Badge */}
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md mb-4"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.secondary}30`,
              }}
            >
              <Icon size={26} style={{ color: COLORS.secondary }} />
            </div>

            <h3
              className="text-lg sm:text-xl font-bold mb-1"
              style={{ color: COLORS.primaryDark }}
            >
              {usp.title}
            </h3>

            <span
              className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full mb-3"
              style={{
                backgroundColor: `${COLORS.secondary}15`,
                color: COLORS.secondary,
              }}
            >
              {usp.tag}
            </span>

            <p className="text-sm" style={{ color: COLORS.textGray }}>
              {usp.desc}
            </p>
          </div>
        );
      })}
    </div>
  </section>
);

// ===================================================================
// 3) PROCESS SECTION (3-step flow)
// ===================================================================
const ProcessSection = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-8"
      style={{ color: COLORS.primaryDark }}
    >
      The Simple 3-Step Process
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          num: 1,
          title: "Ask Your Question",
          desc: "Submit your query along with any relevant marks, grades or academic details.",
          icon: BookOpen,
        },
        {
          num: 2,
          title: "Expert Review",
          desc: "A dedicated counselor analyzes your situation and researches a precise, context-aware answer.",
          icon: Users,
        },
        {
          num: 3,
          title: "Receive Response",
          desc: "Get a detailed answer via your selected contact method (email, WhatsApp, or platform inbox).",
          icon: Smartphone,
        },
      ].map((step, i) => {
        const Icon = step.icon;
        return (
          <div
            key={i}
            className="p-6 rounded-3xl text-center"
            style={{
              backgroundColor: "#FFFFFF",
              border: `1px solid ${COLORS.borderSoft}`,
              boxShadow: "0 10px 24px rgba(0,0,0,0.05)",
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold"
              style={{
                backgroundColor: COLORS.primary,
                color: "white",
              }}
            >
              {step.num}
            </div>

            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.secondary}30`,
              }}
            >
              <Icon size={22} style={{ color: COLORS.secondary }} />
            </div>

            <h4
              className="text-lg font-bold mb-2"
              style={{ color: COLORS.primaryDark }}
            >
              {step.title}
            </h4>
            <p className="text-sm" style={{ color: COLORS.textGray }}>
              {step.desc}
            </p>
          </div>
        );
      })}
    </div>
  </section>
);

// ===================================================================
// 4) NEXT STEP SECTION (CTA → Online Session)
// ===================================================================
const NextStepSection = () => (
  <section className="pt-4 pb-14">
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
        Your Next Step in the Journey
      </h2>

      <p
        className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6"
        style={{ color: COLORS.textGray }}
      >
        If you feel your situation is complex, or you want to discuss multiple
        questions in detail, your next step is to{" "}
        <strong>book an Online Session</strong> with our expert counselors.
      </p>

      <NavLink
        to="/service/online-session"
        className="inline-flex items-center px-8 py-3 text-base font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
        style={{
          backgroundColor: COLORS.secondary,
          color: "white",
        }}
      >
        Book an Online Session
        <ArrowRight size={20} className="ml-2" />
      </NavLink>
    </div>
  </section>
);

// ===================================================================
// MAIN PAGE COMPONENT
// ===================================================================
export default function TaleemiAdvicePage() {
  return (
    <ServiceLayout title="Taleemi Advice" subtitle="Quick Advisory">
      <HeroSection />
      <USPSection />
      <ProcessSection />
      <NextStepSection />
    </ServiceLayout>
  );
}
