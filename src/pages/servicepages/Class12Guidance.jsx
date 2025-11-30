// =================== CLASS 12 GUIDANCE – UI/UX ENHANCED ======================
// Cites original file: :contentReference[oaicite:1]{index=1}

import React from "react";
import { NavLink } from "react-router-dom";
import {
  Briefcase,
  Zap,
  MessageCircle,
  Layers,
  HelpCircle,
  Search,
  Lightbulb,
  XCircle,
  Users,
  User,
  ArrowRight,
} from "lucide-react";

import ServiceLayout from "../../components/ServiceLayout";

// BRAND COLORS
const COLORS = {
  primary: "#1E3A8A",
  secondary: "#F97316",
  textGray: "#4B5563",
  lightBackground: "#EFF6FF",
  surface: "#F8FAFC",
  primaryDark: "#11253e",
};

// =================== Top Intro Section ===================
const InitialContent = () => (
  <section className="pb-10 border-b border-gray-200 mb-10">
    <div
      className="p-6 sm:p-8 rounded-3xl mb-6"
      style={{
        backgroundColor: COLORS.surface,
        border: "1px solid #E2E8F0",
        boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
      }}
    >
      <h2
        className="text-2xl sm:text-3xl font-extrabold mb-3"
        style={{ color: COLORS.primaryDark }}
      >
        Transitioning from Class 12 to University
      </h2>

      <p
        className="text-base sm:text-lg leading-relaxed"
        style={{ color: COLORS.textGray }}
      >
        The transition from Intermediate (F.Sc, I.Com, ICS, FA, etc.) to
        university is one of the most important decisions in a student’s life.
        Students often face confusion regarding their{' '}
        <strong className="font-semibold">
          specialization, career scope, admission requirements, university
          selection, and future goals.
        </strong>
      </p>

      <p
        className="text-base sm:text-lg font-semibold mt-4"
        style={{ color: COLORS.primaryDark }}
      >
        Our guidance cuts through the noise and gives you a clear, structured,
        personalized plan for your higher-education journey.
      </p>
    </div>
  </section>
);

// =================== Challenge Section ===================
const ChallengeSection = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-8"
      style={{ color: COLORS.primaryDark }}
    >
      The Confusion Zone: Questions We Solve
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Column 1 */}
      <div
        className="p-6 rounded-3xl"
        style={{
          backgroundColor: COLORS.lightBackground,
          boxShadow: "0 10px 28px rgba(15,23,42,0.08)",
          border: "1px solid rgba(0,0,0,0.04)",
        }}
      >
        <h3
          className="text-xl font-bold mb-4 flex items-center"
          style={{ color: COLORS.primaryDark }}
        >
          <XCircle
            size={24}
            className="mr-3"
            style={{ color: COLORS.secondary }}
          />
          Critical Decisions
        </h3>

        <ul
          className="space-y-3 text-sm sm:text-base"
          style={{ color: COLORS.textGray }}
        >
          {[
            "Which specialization should I choose for my BS degree?",
            "Which universities match my grades and interests?",
            "What entrance tests are required?",
            "How do I evaluate scope and future job opportunities?",
          ].map((q, i) => (
            <li key={i} className="flex items-start">
              <ArrowRight
                size={16}
                className="flex-shrink-0 mt-1 mr-3"
                style={{ color: COLORS.primary }}
              />
              {q}
            </li>
          ))}
        </ul>
      </div>

      {/* Column 2 */}
      <div
        className="p-6 rounded-3xl"
        style={{
          backgroundColor: COLORS.lightBackground,
          boxShadow: "0 10px 28px rgba(15,23,42,0.08)",
          border: "1px solid rgba(0,0,0,0.04)",
        }}
      >
        <h3
          className="text-xl font-bold mb-4 flex items-center"
          style={{ color: COLORS.primaryDark }}
        >
          <Lightbulb
            size={24}
            className="mr-3"
            style={{ color: COLORS.secondary }}
          />
          Future Clarity
        </h3>

        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          We help students clarify university choices, degree pathways, admission
          strategies, entry test requirements, and long-term career progression.
          Our guidance covers everything: degree options, university shortlisting,
          job-market realities, and opportunities for higher studies abroad.
        </p>
      </div>
    </div>

    {/* ROADMAP PLACEHOLDER */}
    <div
      className="mt-10 rounded-3xl p-10 text-center"
      style={{
        backgroundColor: "#ffffff",
        border: "2px dashed #CBD5E1",
        color: COLORS.grayText,
      }}
    >
      <p className="text-lg font-semibold">
        [Roadmap Placeholder — Class 12 University Admission Journey]
      </p>
      <p className="text-sm mt-2">We will replace this with a premium roadmap next.</p>
    </div>
  </section>
);

// =================== Options Section ===================
const OptionsSection = () => (
  <section className="py-12 border-b border-gray-200 mb-12">
    <div className="text-center mb-10">
      <h2
        className="text-3xl font-extrabold mb-2"
        style={{ color: COLORS.primaryDark }}
      >
        Your Guidance Options
      </h2>
      <p className="text-sm sm:text-base max-w-2xl mx-auto" style={{ color: COLORS.textGray }}>
        Choose the support that fits your goals — from in-depth sessions to quick answers and
        powerful search tools.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          id: 1,
          title: "University Program Finder",
          icon: Search,
          description:
            "Explore every BS program in Pakistan and short-list universities based on eligibility, field, and interest.",
          link: "/service/university-program-finder",
          tag: "Explore programs",
        },
        {
          id: 2,
          title: "Book an Online Session",
          icon: User,
          description:
            "Get personalized, one-on-one guidance about universities, fields, admission chances & career direction.",
          link: "/service/online-session",
          tag: "1:1 Guidance",
        },
        {
          id: 3,
          title: "Taleemi Advice (Quick Query)",
          icon: MessageCircle,
          description:
            "Send any question related to admissions, degrees, tests, deadlines and get a quick expert response.",
          link: "/service/taleemi-advice",
          tag: "Quick help",
        },
      ].map((opt) => (
        <div
          key={opt.id}
          className="rounded-3xl p-7 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E0E7FF",
            boxShadow: "0 14px 32px rgba(15,23,42,0.08)",
          }}
        >
          {/* Corner accent blob */}
          <div
            className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(249,115,22,0.45), transparent 70%)",
            }}
          />

          {/* Icon badge */}
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-5"
            style={{
              backgroundColor: COLORS.lightBackground,
              border: `1px solid ${COLORS.secondary}30`,
            }}
          >
            <opt.icon size={30} style={{ color: COLORS.secondary }} />
          </div>

          {/* Title */}
          <h3
            className="text-lg font-bold mb-2 leading-tight"
            style={{ color: COLORS.primaryDark }}
          >
            {opt.title}
          </h3>

          {/* Tag */}
          <span
            className="inline-block text-[11px] font-semibold px-2 py-1 rounded-full mb-4"
            style={{
              backgroundColor: `${COLORS.secondary}15`,
              color: COLORS.secondary,
            }}
          >
            {opt.tag}
          </span>

          {/* Description */}
          <p className="text-sm mb-6 leading-relaxed" style={{ color: COLORS.textGray }}>
            {opt.description}
          </p>

          {/* CTA */}
          <NavLink
            to={opt.link}
            className="inline-flex items-center text-sm font-semibold mt-auto px-4 py-2 rounded-xl transition duration-200"
            style={{
              backgroundColor: COLORS.secondary,
              color: "white",
              boxShadow: "0 4px 14px rgba(249,115,22,0.3)",
            }}
          >
            Learn More <ArrowRight size={18} className="ml-2" />
          </NavLink>
        </div>
      ))}
    </div>
  </section>
);


// =================== Next Step Section ===================
const NextStepSection = () => (
  <section className="pt-6 pb-12">
    <div
      className="p-8 rounded-3xl text-center"
      style={{
        background:
          "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 60%, #FFFFFF 100%)",
        border: "1px solid #E2E8F0",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      }}
    >
      <h2
        className="text-2xl sm:text-3xl font-extrabold mb-4"
        style={{ color: COLORS.primaryDark }}
      >
        Your Next Step in the Journey
      </h2>

      <p
        className="text-base sm:text-lg leading-relaxed mb-6 max-w-3xl mx-auto"
        style={{ color: COLORS.textGray }}
      >
        After choosing the right BS specialization and shortlisting universities,
        your next step is exploring Pakistan’s{" "}
        <strong>complete subject ecosystem</strong>. We help you understand
        all conventional and emerging disciplines using our structured
        Subject Classification System.
      </p>

      <NavLink
        to="/service/subject-classification"
        className="inline-flex items-center px-8 py-3 text-base sm:text-lg font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
        style={{
          backgroundColor: COLORS.secondary,
          color: "white",
        }}
      >
        Explore Subject Classification
        <ArrowRight size={20} className="ml-2" />
      </NavLink>
    </div>
  </section>
);

// =================== Page Wrapper ===================
export default function Class12Guidance() {
  return (
    <ServiceLayout>
      <InitialContent />
      <ChallengeSection />
      <OptionsSection />
      <NextStepSection />
    </ServiceLayout>
  );
}
