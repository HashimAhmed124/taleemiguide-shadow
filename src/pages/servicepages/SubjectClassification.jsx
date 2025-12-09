import React from "react";
import { NavLink } from "react-router-dom";
import { Layers, Target, Compass, ArrowRight } from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";


import subjectClassificationHero from "../../assets/service-images/Classification-of-Subjects.jpg";

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

// --------------------------------------------------------------------
// 1) HERO SECTION
// --------------------------------------------------------------------
const HeroSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
        {/* LEFT: MAIN TEXT */}
        <div>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            Choosing the right academic field or career is difficult when
            students know only a handful of traditional subjects — while in
            actual 1000+ subjects exist across dozens of disciplines, which
            leads to different careers. Going through this huge list becomes
            confusing without proper structure or categorization. TaleemiGuide
            is the first platform that removes this confusion for students /
            working professionals by introducing Pakistan’s first comprehensive
            Subject / Field Classification System, built using leading
            international models and refined by experts. This system helps you
            understand exactly where your field belongs, how different subjects
            connect, and what your academic and career pathways look like.
            Whether you’re a student, educator, or working professional, this
            service brings clarity to your academic direction.
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
                src={subjectClassificationHero}
                alt="Subject Classification – understanding fields and disciplines"
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
// 2) WHY UNDERSTANDING YOUR FIELD MATTERS
// --------------------------------------------------------------------
const WhyUnderstandingSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-3"
          style={{ color: COLORS.primaryDark }}
        >
          Why Understanding Your Field of Study Matters
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div
          className="rounded-2xl p-5 flex flex-col h-full"
          style={{
            backgroundColor: COLORS.surface,
            border: `1px solid ${COLORS.borderSoft}`,
            boxShadow: "0 10px 25px rgba(15,23,42,0.05)",
          }}
        >
          <div className="flex items-start gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-none"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <Layers size={20} style={{ color: COLORS.secondary }} />
            </div>
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              ✔ Clarity &amp; Focus
            </p>
          </div>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            Know where your field stands, what subjects are related to it, and
            what you should focus on — helping you stay aligned with your
            long-term career goals.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="rounded-2xl p-5 flex flex-col h-full"
          style={{
            backgroundColor: COLORS.surface,
            border: `1px solid ${COLORS.borderSoft}`,
            boxShadow: "0 10px 25px rgba(15,23,42,0.05)",
          }}
        >
          <div className="flex items-start gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-none"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <Target size={20} style={{ color: COLORS.secondary }} />
            </div>
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              ✔ Smarter Academic Planning
            </p>
          </div>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            Choose the right subjects, find the right direction, and select
            future programs (BS, MS, PhD) with confidence.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="rounded-2xl p-5 flex flex-col h-full"
          style={{
            backgroundColor: COLORS.surface,
            border: `1px solid ${COLORS.borderSoft}`,
            boxShadow: "0 10px 25px rgba(15,23,42,0.05)",
          }}
        >
          <div className="flex items-start gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-none"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <Compass size={20} style={{ color: COLORS.secondary }} />
            </div>
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              ✔ Better Career Alignment
            </p>
          </div>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            Understanding your field ensures that your education aligns with
            market demand, helping you prepare for internships, jobs, and future
            opportunities.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 3) TWO CORE INSTRUMENTS SECTION
// --------------------------------------------------------------------
const TwoInstrumentsSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-3"
          style={{ color: COLORS.primaryDark }}
        >
          Two Core Instruments for Maximum Clarity
        </h2>
      </div>

      <div className="space-y-6 mb-8">
        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          TaleemiGuide offers two tools that complement each other:
        </p>

        {/* Instrument 1 */}
        <div className="flex gap-3 sm:gap-4 items-start">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-none"
            style={{
              backgroundColor: COLORS.lightBackground,
              color: COLORS.primaryDark,
              border: `1px solid ${COLORS.borderSoft}`,
            }}
          >
            1️⃣
          </div>
          <div>
            <p
              className="text-sm sm:text-base font-semibold mb-1"
              style={{ color: COLORS.primaryDark }}
            >
              Subject / Field Classification
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              A structured map of 1000+ subjects divided into main categories
              and sub-disciplines, giving you a complete view of the academic
              landscape.
            </p>
          </div>
        </div>

        {/* Instrument 2 */}
        <div className="flex gap-3 sm:gap-4 items-start">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-none"
            style={{
              backgroundColor: COLORS.lightBackground,
              color: COLORS.primaryDark,
              border: `1px solid ${COLORS.borderSoft}`,
            }}
          >
            2️⃣
          </div>
          <div>
            <p
              className="text-sm sm:text-base font-semibold mb-1"
              style={{ color: COLORS.primaryDark }}
            >
              Career Assessment Test
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              Matches your interests, aptitude, and personality with the fields
              that suit you best and identifies where those fields fall in our
              classification system.
            </p>
          </div>
        </div>

        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          Together, these instruments give students and professionals a complete
          understanding of what suits them and where it belongs.
        </p>
      </div>

      {/* Get Started + CTA Card */}
      <div className="space-y-4">
        <div>
          <p
            className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-1"
            style={{ color: COLORS.secondary }}
          >
            Get Started Today
          </p>
          <p
            className="text-sm sm:text-base leading-relaxed max-w-3xl"
            style={{ color: COLORS.textGray }}
          >
            Let us help you discover your natural academic direction. Start your
            journey with clarity, confidence, and complete understanding of your
            field.
          </p>
        </div>

        {/* Long horizontal clickable card */}
        <button
          type="button"
          className="w-full rounded-3xl px-6 py-5 sm:px-8 sm:py-6 text-left flex items-center justify-between gap-4 transition-transform duration-200 hover:scale-[1.01]"
          style={{
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(249,115,22,0.10))",
            border: `1px solid ${COLORS.borderSoft}`,
            boxShadow: "0 14px 35px rgba(15,23,42,0.10)",
          }}
        >
          <p
            className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed max-w-3xl"
            style={{ color: COLORS.primaryDark }}
          >
            Explore Subject Classification and take your first step toward a
            focused academic and professional future.
          </p>
          <span className="hidden sm:inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-semibold">
            Learn More
          </span>
        </button>
      </div>
    </div>
  </section>
);

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
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 max-w-3xl"
            style={{ color: COLORS.textGray }}
          >
            After understanding your field and related disciplines, the next
            step is to explore where these subjects are offered.
          </p>

          <p
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-5 max-w-3xl"
            style={{ color: COLORS.textGray }}
          >
            This leads directly to our next service:
            <br />
            ✅ University Program Finder — Pakistan’s largest database of BS, MS
            &amp; PhD programs across all universities.
          </p>

          <NavLink
            to="/service/university-program-finder"
            className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-lg font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
            style={{
              backgroundColor: COLORS.secondary,
              color: "white",
            }}
          >
            Go to University Program Finder
            <ArrowRight size={18} className="ml-2" />
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 5) MAIN COMPONENT
// --------------------------------------------------------------------
export default function SubjectClassification() {
  return (
    <ServiceLayout>
      <HeroSection />
      <WhyUnderstandingSection />
      <TwoInstrumentsSection />
      <NextStepSection />
    </ServiceLayout>
  );
}
