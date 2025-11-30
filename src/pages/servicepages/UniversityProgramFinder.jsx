// UniversityProgramFinder.jsx — Unified UI/UX
// Source: :contentReference[oaicite:1]{index=1}

import React from "react";
import { NavLink } from "react-router-dom";
import {
  Globe,
  Search,
  Filter,
  GraduationCap,
  Building,
  Target,
  Compass,
  BookOpen,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import ServiceLayout from "../../components/ServiceLayout";

// --- UNIFIED COLOR PALETTE (shared with other service pages) ---
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
// 1) HERO / OVERVIEW SECTION
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
      {/* Top mini strip (stats) */}
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <div
          className="flex items-center gap-3 p-4 rounded-2xl"
          style={{ backgroundColor: COLORS.lightBackground }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <Globe size={22} style={{ color: COLORS.primary }} />
          </div>
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-wide"
              style={{ color: COLORS.textGray }}
            >
              Coverage
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              HEC-recognized universities
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
            <GraduationCap size={22} style={{ color: COLORS.secondary }} />
          </div>
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-wide"
              style={{ color: COLORS.textGray }}
            >
              Levels
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              BS · MS/MPhil · PhD
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
            <Search size={22} style={{ color: COLORS.primary }} />
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
              Search &amp; compare programs
            </p>
          </div>
        </div>
      </div>

      {/* Main copy */}
      <h1
        className="text-2xl sm:text-3xl font-extrabold mb-3"
        style={{ color: COLORS.primaryDark }}
      >
        University Program Finder
      </h1>

      <p
        className="text-base sm:text-lg leading-relaxed mb-3"
        style={{ color: COLORS.textGray }}
      >
        The University Program Finder is your{" "}
        <strong>all-in-one database for academic programs</strong> offered by
        accredited universities and colleges in Pakistan, and selected programs
        abroad. We aggregate data on degrees, admission criteria, fee
        structures, and campus locations to simplify your application process.
      </p>

      <p
        className="text-base sm:text-lg font-semibold"
        style={{ color: COLORS.primaryDark }}
      >
        Stop manually searching dozens of university websites. Find the right
        degree, at the right university — in one place.
      </p>
    </div>
  </section>
);

// ===================================================================
// 2) FEATURES SECTION (Premium cards)
// ===================================================================
const FeaturesSection = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-8"
      style={{ color: COLORS.primaryDark }}
    >
      Key Features of the Finder
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Advanced Filtering",
          icon: Filter,
          desc: "Search by discipline, city, degree level (BS, MS, PhD), public/private status, and more.",
          tag: "Powerful search",
        },
        {
          title: "Side-by-Side Comparison",
          icon: Compass,
          desc: "Compare fees, entry requirements, program duration, and campus details for multiple universities.",
          tag: "Compare options",
        },
        {
          title: "Real-Time Admission Info",
          icon: Building,
          desc: "Stay updated on admission timelines, application deadlines and (where available) merit-related information.",
          tag: "Stay updated",
        },
      ].map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className="rounded-3xl p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{
              backgroundColor: "#FFFFFF",
              border: `1px solid ${COLORS.borderSoft}`,
              boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
            }}
          >
            {/* Accent blob */}
            <div
              className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle, rgba(249,115,22,0.45), transparent 70%)",
              }}
            />

            {/* Icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md mb-4"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.secondary}30`,
              }}
            >
              <Icon size={30} style={{ color: COLORS.secondary }} />
            </div>

            {/* Title */}
            <h3
              className="text-lg sm:text-xl font-bold mb-1"
              style={{ color: COLORS.primaryDark }}
            >
              {feature.title}
            </h3>

            {/* Tag */}
            <span
              className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full mb-3"
              style={{
                backgroundColor: `${COLORS.secondary}15`,
                color: COLORS.secondary,
              }}
            >
              {feature.tag}
            </span>

            {/* Description */}
            <p className="text-sm" style={{ color: COLORS.textGray }}>
              {feature.desc}
            </p>
          </div>
        );
      })}
    </div>
  </section>
);

// ===================================================================
// 3) INTEGRATION / WHO IT'S FOR
// ===================================================================
const IntegrationProcessSection = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-8"
      style={{ color: COLORS.primaryDark }}
    >
      How It Fits Into Your Journey
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Intermediate students */}
      <div
        className="p-6 rounded-3xl h-full"
        style={{
          backgroundColor: COLORS.lightBackground,
          boxShadow: "0 10px 26px rgba(15,23,42,0.06)",
          border: `1px solid ${COLORS.borderSoft}`,
        }}
      >
        <h3
          className="text-xl sm:text-2xl font-bold mb-3 flex items-center"
          style={{ color: COLORS.primaryDark }}
        >
          <Target size={22} className="mr-2" style={{ color: COLORS.primary }} />
          For Intermediate Students
        </h3>
        <p className="text-sm sm:text-base" style={{ color: COLORS.textGray }}>
          Explore BS programs in your field of interest before applying.
          Shortlist universities, compare cities and understand your options
          clearly — instead of relying on scattered information.
        </p>
      </div>

      {/* University graduates */}
      <div
        className="p-6 rounded-3xl h-full"
        style={{
          backgroundColor: COLORS.lightBackground,
          boxShadow: "0 10px 26px rgba(15,23,42,0.06)",
          border: `1px solid ${COLORS.borderSoft}`,
        }}
      >
        <h3
          className="text-xl sm:text-2xl font-bold mb-3 flex items-center"
          style={{ color: COLORS.primaryDark }}
        >
          <BookOpen size={22} className="mr-2" style={{ color: COLORS.primary }} />
          For University Graduates
        </h3>
        <p className="text-sm sm:text-base" style={{ color: COLORS.textGray }}>
          Search MS/MPhil and PhD programs aligned with your academic
          background, research interests and long-term goals — locally and,
          where possible, abroad.
        </p>
      </div>

      {/* Need support */}
      <div
        className="p-6 rounded-3xl h-full"
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 10px 26px rgba(15,23,42,0.08)",
          border: `1px solid ${COLORS.borderSoft}`,
        }}
      >
        <h3
          className="text-xl sm:text-2xl font-bold mb-3 flex items-center"
          style={{ color: COLORS.primaryDark }}
        >
          <MessageCircle
            size={22}
            className="mr-2"
            style={{ color: COLORS.primary }}
          />
          Need Guidance with Choices?
        </h3>
        <p className="text-sm sm:text-base mb-4" style={{ color: COLORS.textGray }}>
          Our guidance team can help you interpret admission rules, calculate
          merit, and choose universities that fit both your profile and your
          future plans.
        </p>

        <NavLink
          to="/service/online-session"
          className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold shadow-md transition-transform duration-200 hover:scale-[1.03]"
          style={{
            backgroundColor: COLORS.secondary,
            color: "white",
          }}
        >
          Book a Guidance Session
          <ArrowRight size={16} className="ml-2" />
        </NavLink>
      </div>
    </div>
  </section>
);

// ===================================================================
// 4) NEXT STEP / CTA SECTION (same pattern as other pages)
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
        className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-6"
        style={{ color: COLORS.textGray }}
      >
        Once students enter university, a new set of academic, administrative and
        emotional challenges begins — and TaleemiGuide continues supporting them
        through our{" "}
        <strong>University Graduates Guidance</strong> service.
      </p>

      <NavLink
        to="/service/university-graduates-guidance"
        className="inline-flex items-center px-8 py-3 text-base font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
        style={{
          backgroundColor: COLORS.secondary,
          color: "white",
        }}
      >
        Explore University Graduates Guidance
        <ArrowRight size={20} className="ml-2" />
      </NavLink>
    </div>
  </section>
);

// ===================================================================
// MAIN PAGE COMPONENT
// ===================================================================
export default function UniversityProgramFinder() {
  return (
    <ServiceLayout>
      <HeroSection />
      <FeaturesSection />
      <IntegrationProcessSection />
      <NextStepSection />
    </ServiceLayout>
  );
}
