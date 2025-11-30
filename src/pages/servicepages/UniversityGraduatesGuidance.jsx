// UniversityGraduatesGuidance.jsx — Enriched & Unified

import React from "react";
import { NavLink } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  Users,
  MessageCircle,
  Clock,
  FileText,
  CheckCircle,
  Briefcase,
  Zap,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";

// --- UNIFIED COLOR PALETTE ---
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
            <GraduationCap size={22} style={{ color: COLORS.primary }} />
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
              Final Year &amp; Graduates
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
            <Briefcase size={22} style={{ color: COLORS.secondary }} />
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
              Career Launch &amp; Higher Studies
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
            <Users size={22} style={{ color: COLORS.primary }} />
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
              Fresh Graduates &amp; Final-Year Students
            </p>
          </div>
        </div>
      </div>

      {/* Main copy */}
      <p
        className="text-base sm:text-lg leading-relaxed mb-3"
        style={{ color: COLORS.textGray }}
      >
        Navigating the transition from university to a career, or planning
        further education (MS/MPhil/PhD), is complex. Our guidance service for
        university graduates focuses on post-bachelor degree challenges,
        including{" "}
        <strong>
          job search strategies, higher studies planning, and resolving academic
          issues
        </strong>
        .
      </p>

      <p
        className="text-base sm:text-lg font-semibold"
        style={{ color: COLORS.primaryDark }}
      >
        We provide the targeted support graduates need to make their first
        professional move successful.
      </p>
    </div>
  </section>
);

// ===================================================================
// 2) “WHERE ARE YOU RIGHT NOW?” SECTION
// ===================================================================
const SituationSection = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-2"
      style={{ color: COLORS.primaryDark }}
    >
      Where Are You Right Now?
    </h2>
    <p
      className="text-sm sm:text-base mb-8 max-w-2xl"
      style={{ color: COLORS.textGray }}
    >
      Most of the graduates we work with fall into one of these situations. This
      helps us shape the guidance to your reality, not just your degree title.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Final-Year Student",
          icon: Clock,
          desc: "You are still completing your last semester or final year and want to plan jobs or higher studies in advance.",
          bullets: [
            "Confused about MS vs job directly",
            "Unsure which skills to build before graduating",
          ],
        },
        {
          title: "Fresh Graduate (0–2 years)",
          icon: Briefcase,
          desc: "You’ve graduated recently and are looking for your first role or considering a switch after a short job.",
          bullets: [
            "CV/LinkedIn not getting responses",
            "Not sure which roles fit your degree",
          ],
        },
        {
          title: "Stuck or Unsure",
          icon: MessageCircle,
          desc: "You may have a gap after graduation or feel stuck in an unrelated job and want to realign your path.",
          bullets: [
            "Mismatch between degree & job",
            "Thinking of a major career shift",
          ],
        },
      ].map((item, i) => {
        const Icon = item.icon;
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
              {item.title}
            </h3>
            <p
              className="text-sm mb-3"
              style={{ color: COLORS.textGray }}
            >
              {item.desc}
            </p>
            <ul
              className="space-y-1 text-sm"
              style={{ color: COLORS.textGray }}
            >
              {item.bullets.map((b, idx) => (
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
// 3) CHALLENGES SECTION
// ===================================================================
const ChallengesSection = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-8"
      style={{ color: COLORS.primaryDark }}
    >
      Common Challenges for Graduates
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          title: "Job Market Entry",
          icon: Briefcase,
          details: [
            "Writing a professional CV/Resume",
            "Interview preparation and mock sessions",
            "Salary expectations and negotiation",
          ],
        },
        {
          title: "Higher Education Planning",
          icon: GraduationCap,
          details: [
            "Selecting the right specialization for MS/MPhil",
            "SOP and Research Proposal writing assistance",
            "Admission criteria for foreign universities",
          ],
        },
        {
          title: "Academic Hurdles",
          icon: ClipboardList,
          details: [
            "CGPA vs Division concerns",
            "Improvement or repetition policies",
            "Errors in transcripts or degree titles",
          ],
        },
        {
          title: "Career Confusion",
          icon: Users,
          details: [
            "Qualification mismatch (degree vs job interest)",
            "Deciding between entrepreneurship and employment",
            "Navigating family pressure post-graduation",
          ],
        },
      ].map((group, index) => {
        const Icon = group.icon;
        return (
          <div
            key={index}
            className="p-6 sm:p-7 rounded-3xl h-full"
            style={{
              backgroundColor: "#FFFFFF",
              border: `1px solid ${COLORS.borderSoft}`,
              boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
            }}
          >
            <Icon
              size={30}
              className="mb-4"
              style={{ color: COLORS.primary }}
            />
            <h3
              className="text-xl font-bold mb-3"
              style={{ color: COLORS.primaryDark }}
            >
              {group.title}
            </h3>
            <ul
              className="space-y-2 text-sm"
              style={{ color: COLORS.textGray }}
            >
              {group.details.map((detail, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle
                    size={14}
                    className="flex-shrink-0 mt-1 mr-2"
                    style={{ color: COLORS.secondary }}
                  />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </section>
);

// ===================================================================
// 4) “WAYS WE CAN HELP YOU RIGHT NOW” (Options)
// ===================================================================
const SupportOptionsSection = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-2"
      style={{ color: COLORS.primaryDark }}
    >
      Ways We Can Help You Right Now
    </h2>
    <p
      className="text-sm sm:text-base mb-8 max-w-2xl"
      style={{ color: COLORS.textGray }}
    >
      Choose the support that matches your immediate priority. You can always
      combine more than one option as you move forward.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {[
        {
          title: "Career Roadmap Session",
          icon: Users,
          desc: "One-on-one session to map out your next 2–5 years, including jobs, skills, and higher studies options.",
          link: "/service/online-session",
          cta: "Book Session",
        },
        {
          title: "CV & Profile Review",
          icon: FileText,
          desc: "Detailed feedback on your CV/Resume and LinkedIn profile to increase interview callbacks.",
          link: "/service/taleemi-advice",
          cta: "Request Review",
        },
        {
          title: "Higher Studies Planning",
          icon: BookOpen,
          desc: "Shortlist MS/MPhil/PhD options, understand requirements, and discuss timelines and funding possibilities.",
          link: "/service/university-program-finder",
          cta: "Explore Programs",
        },
        {
          title: "Quick Taleemi Advice",
          icon: MessageCircle,
          desc: "Ask a focused question about jobs, degrees, gaps, or switching careers and get a clear response.",
          link: "/service/taleemi-advice",
          cta: "Ask a Question",
        },
      ].map((opt, i) => {
        const Icon = opt.icon;
        return (
          <div
            key={i}
            className="rounded-3xl p-6 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E0E7FF",
              boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
            }}
          >
            <div
              className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle, rgba(249,115,22,0.4), transparent 70%)",
              }}
            />

            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md mb-4"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.secondary}30`,
              }}
            >
              <Icon size={24} style={{ color: COLORS.secondary }} />
            </div>

            <h3
              className="text-base sm:text-lg font-bold mb-2"
              style={{ color: COLORS.primaryDark }}
            >
              {opt.title}
            </h3>

            <p
              className="text-sm mb-4 flex-1"
              style={{ color: COLORS.textGray }}
            >
              {opt.desc}
            </p>

            <NavLink
              to={opt.link}
              className="inline-flex items-center justify-center mt-auto px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03] shadow-md"
              style={{
                backgroundColor: COLORS.secondary,
                color: "white",
              }}
            >
              {opt.cta}
              <ArrowRight size={16} className="ml-2" />
            </NavLink>
          </div>
        );
      })}
    </div>
  </section>
);

// ===================================================================
// 5) EXPERT PROCESS SECTION
// ===================================================================
const ExpertProcessSection = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-8"
      style={{ color: COLORS.primaryDark }}
    >
      Our 3-Step Expert Process
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {[
        {
          title: "Profile Analysis",
          icon: FileText,
          desc: "Detailed review of your degree, grades, internships, and desired career path.",
        },
        {
          title: "Personalized Strategy",
          icon: Zap,
          desc: "A tailored plan for job applications, further studies, or addressing academic issues.",
        },
        {
          title: "Ongoing Support",
          icon: MessageCircle,
          desc: "Follow-up advice and query resolution via Taleemi Advice or a quick online session.",
        },
      ].map((service, index) => {
        const Icon = service.icon;
        return (
          <div
            key={index}
            className="p-6 sm:p-7 rounded-3xl h-full transition duration-300 hover:shadow-xl"
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
// 6) NEXT STEP SECTION (CTA, unified style)
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
        As graduates step into the professional world, new challenges emerge
        around growth, switching roles, or changing careers. TaleemiGuide
        continues supporting you through our{" "}
        <strong>Working Professionals Guidance</strong> service.
      </p>

      <NavLink
        to="/service/working-professional-guidance"
        className="inline-flex items-center px-8 py-3 text-base font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
        style={{
          backgroundColor: COLORS.secondary,
          color: "white",
        }}
      >
        Explore Guidance for Working Professionals
        <ArrowRight size={20} className="ml-2" />
      </NavLink>
    </div>
  </section>
);

// ===================================================================
// MAIN PAGE COMPONENT
// ===================================================================
export default function UniversityGraduatesGuidance() {
  return (
    <ServiceLayout
      title="University Graduates Guidance"
      subtitle="Career Launch & Higher Studies"
    >
      <HeroSection />
      <SituationSection />
      <ChallengesSection />
      <SupportOptionsSection />
      <ExpertProcessSection />
      <NextStepSection />
    </ServiceLayout>
  );
}
