// WorkingProfessionalsGuidance.jsx — Unified & Enriched UI/UX
// Source: :contentReference[oaicite:1]{index=1}

import React from "react";
import { NavLink } from "react-router-dom";
import {
  Briefcase,
  Target,
  BookOpen,
  Zap,
  TrendingUp,
  Users,
  MessageCircle,
  Layers,
  CheckCircle,
  ArrowRight,
  Clock,
  RefreshCw,
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
            <Briefcase size={22} style={{ color: COLORS.primary }} />
          </div>
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-wide"
              style={{ color: COLORS.textGray }}
            >
              Stage
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              Working Professionals
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
            <Clock size={22} style={{ color: COLORS.secondary }} />
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
              1–25+ years of experience
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
            <Target size={22} style={{ color: COLORS.primary }} />
          </div>
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-wide"
              style={{ color: COLORS.textGray }}
            >
              Focus
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              Growth, Pivot &amp; Stability
            </p>
          </div>
        </div>
      </div>

      {/* Main copy (cleaned from original) */}
      <p
        className="text-base sm:text-lg leading-relaxed mb-3"
        style={{ color: COLORS.textGray }}
      >
        Career guidance doesn&apos;t stop after graduation. This service is
        designed for individuals in the workforce facing challenges like{" "}
        <strong>career stagnation, skill gaps, job dissatisfaction,</strong> or{" "}
        <strong>planning a pivot</strong>. We provide strategic advice to help
        you maximize your potential and define your next professional chapter.
      </p>

      <p
        className="text-base sm:text-lg font-semibold"
        style={{ color: COLORS.primaryDark }}
      >
        Whether you are 5 years or 20 years into your career, we offer a fresh,
        objective perspective to keep you moving forward.
      </p>
    </div>
  </section>
);

// ===================================================================
// 2) “WHERE ARE YOU IN YOUR CAREER?” SECTION
// ===================================================================
const CareerStageSection = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-2"
      style={{ color: COLORS.primaryDark }}
    >
      Where Are You in Your Career Right Now?
    </h2>
    <p
      className="text-sm sm:text-base mb-8 max-w-2xl"
      style={{ color: COLORS.textGray }}
    >
      We work with professionals at different stages. Understanding where you
      stand helps us design guidance that is practical and realistic for you.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Early Career (1–5 years)",
          icon: TrendingUp,
          desc: "You’re still building your foundation and want to make smart early moves instead of random job hopping.",
          bullets: [
            "Struggling to find your direction",
            "Unsure which skills to prioritize",
          ],
        },
        {
          title: "Mid-Career (5–15 years)",
          icon: Layers,
          desc: "You’ve built experience but feel stuck in a role, organization, or industry that no longer fits.",
          bullets: [
            "Plateaued growth or promotion delays",
            "Thinking about a career pivot",
          ],
        },
        {
          title: "Senior / Pivoting",
          icon: RefreshCw,
          desc: "You are considering a major shift: leadership, consulting, entrepreneurship, or moving abroad.",
          bullets: [
            "Want a structured transition plan",
            "Balancing financial & family realities",
          ],
        },
      ].map((stage, i) => {
        const Icon = stage.icon;
        return (
          <div
            key={i}
            className="p-6 rounded-3xl h-full"
            style={{
              backgroundColor: "#FFFFFF",
              border: `1px solid ${COLORS.borderSoft}`,
              boxShadow: "0 10px 26px rgba(0,0,0,0.06)",
            }}
          >
            <Icon
              size={26}
              className="mb-3"
              style={{ color: COLORS.secondary }}
            />
            <h3
              className="text-lg sm:text-xl font-bold mb-2"
              style={{ color: COLORS.primaryDark }}
            >
              {stage.title}
            </h3>
            <p className="text-sm mb-3" style={{ color: COLORS.textGray }}>
              {stage.desc}
            </p>
            <ul className="space-y-1 text-sm" style={{ color: COLORS.textGray }}>
              {stage.bullets.map((b, idx) => (
                <li key={idx}>• {b}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </section>
);

// ===================================================================
// 3) TARGETED SUPPORT SERVICES (from original, upgraded UI)
// ===================================================================
const SupportServicesSection = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-2"
      style={{ color: COLORS.primaryDark }}
    >
      Targeted Support for Professionals
    </h2>
    <p
      className="text-sm sm:text-base mb-8 max-w-2xl"
      style={{ color: COLORS.textGray }}
    >
      We focus on strategic, real-world issues faced by professionals across
      industries and experience levels.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          title: "Career Change Strategy",
          icon: Target,
          desc: "Planning a pivot to a new industry? We help assess your transferable skills and build a realistic transition roadmap.",
        },
        {
          title: "Higher Study Abroad",
          icon: BookOpen,
          desc: "Guidance on choosing and applying for MS/PhD programs abroad based on your eligibility, profile and goals.",
        },
        {
          title: "Professional Challenges",
          icon: Users,
          desc: "Get help with workplace confusion, stagnation, qualification mismatch, and other issues that slow career progress.",
        },
        {
          title: "Skill Gap Analysis",
          icon: TrendingUp,
          desc: "Identify critical skills needed for advancement in your field and get recommendations for upskilling routes.",
        },
      ].map((service, index) => {
        const Icon = service.icon;
        return (
          <div
            key={index}
            className="p-6 rounded-3xl h-full"
            style={{
              backgroundColor: COLORS.lightBackground,
              border: `1px solid ${COLORS.borderSoft}`,
              boxShadow: "0 10px 26px rgba(0,0,0,0.06)",
            }}
          >
            <Icon
              size={30}
              className="mb-4"
              style={{ color: COLORS.secondary }}
            />
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: COLORS.primaryDark }}
            >
              {service.title}
            </h3>
            <p className="text-sm" style={{ color: COLORS.textGray }}>
              {service.desc}
            </p>
          </div>
        );
      })}
    </div>
  </section>
);

// ===================================================================
// 4) COMMON CHALLENGES SECTION (for professionals)
// ===================================================================
const ChallengesSection = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-8"
      style={{ color: COLORS.primaryDark }}
    >
      Common Career Challenges We See
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Stagnation & Lack of Growth",
          bullets: [
            "Same role for years without promotion",
            "Organization restructuring or instability",
            "Feeling underused or overlooked",
          ],
        },
        {
          title: "Mismatch & Dissatisfaction",
          bullets: [
            "Job doesn’t match your strengths or interests",
            "Degree vs job role mismatch",
            "Unsure if you should stay or leave",
          ],
        },
        {
          title: "Planning a Big Move",
          bullets: [
            "Moving abroad or changing countries",
            "Switching industries completely",
            "Balancing risk, family and finances",
          ],
        },
      ].map((block, i) => (
        <div
          key={i}
          className="p-6 rounded-3xl h-full"
          style={{
            backgroundColor: "#FFFFFF",
            border: `1px solid ${COLORS.borderSoft}`,
            boxShadow: "0 10px 26px rgba(0,0,0,0.06)",
          }}
        >
          <h3
            className="text-lg sm:text-xl font-bold mb-3"
            style={{ color: COLORS.primaryDark }}
          >
            {block.title}
          </h3>
          <ul
            className="space-y-2 text-sm"
            style={{ color: COLORS.textGray }}
          >
            {block.bullets.map((b, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle
                  size={14}
                  className="flex-shrink-0 mt-1 mr-2"
                  style={{ color: COLORS.secondary }}
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

// ===================================================================
// 5) OUR APPROACH (3-step process)
// ===================================================================
const ApproachSection = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-8"
      style={{ color: COLORS.primaryDark }}
    >
      How We Work With You
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {[
        {
          title: "1. Assessment",
          icon: Layers,
          desc: "We review your career history, roles, experience, constraints, and future aspirations.",
        },
        {
          title: "2. Strategy",
          icon: Zap,
          desc: "We build a practical roadmap covering options, timelines, skill-building and decision checkpoints.",
        },
        {
          title: "3. Support",
          icon: MessageCircle,
          desc: "We stay available through follow-ups & Taleemi Advice to support your execution and adjustments.",
        },
      ].map((step, i) => {
        const Icon = step.icon;
        return (
          <div
            key={i}
            className="p-6 rounded-3xl h-full transition duration-300 hover:shadow-xl"
            style={{
              backgroundColor: "#FFFFFF",
              border: `1px solid ${COLORS.borderSoft}`,
              boxShadow: "0 10px 26px rgba(0,0,0,0.06)",
            }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.secondary}30`,
              }}
            >
              <Icon size={30} style={{ color: COLORS.secondary }} />
            </div>
            <h3
              className="text-lg sm:text-xl font-bold mb-2"
              style={{ color: COLORS.primaryDark }}
            >
              {step.title}
            </h3>
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
// 6) CTA SECTION (Unified gradient style)
// ===================================================================
const CTASection = () => (
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
        Ready to Take Control of Your Career?
      </h2>

      <p
        className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6"
        style={{ color: COLORS.textGray }}
      >
        Don&apos;t wait for &quot;something to change on its own&quot;. Talk to
        a guidance expert, clarify your options, and move forward with a
        realistic, confident plan.
      </p>

      <NavLink
        to="/service/taleemi-advice"
        className="inline-flex items-center px-8 py-3 text-base font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
        style={{
          backgroundColor: COLORS.secondary,
          color: "white",
        }}
      >
        Seek Taleemi Advice
        <ArrowRight size={20} className="ml-2" />
      </NavLink>
    </div>
  </section>
);

// ===================================================================
// MAIN PAGE COMPONENT
// ===================================================================
export default function WorkingProfessionalsGuidance() {
  return (
    <ServiceLayout
      title="Working Professionals Guidance"
      subtitle="Career Advancement & Transitions"
    >
      <HeroSection />
      <CareerStageSection />
      <SupportServicesSection />
      <ChallengesSection />
      <ApproachSection />
      <CTASection />
    </ServiceLayout>
  );
}
