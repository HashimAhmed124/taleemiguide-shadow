// Class-10-Guidance.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import {
  BookOpen,
  User,
  Briefcase,
  GraduationCap,
  MessageCircle,
  Layers,
  CheckCircle,
  ArrowRight,
  Users,
  Lightbulb,
  Wrench,
  BookOpen as BookIcon,
  Globe2,
} from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";

// --- UNIFIED COLOR PALETTE (shared structure with other service pages) ---
const COLORS = {
  primary: "#1E3A8A",
  primaryDark: "#0F172A",
  secondary: "#F97316",
  textGray: "#4B5563",
  grayText: "#4B5563", // alias for consistency
  lightBackground: "#EFF6FF",
  surface: "#F8FAFC",
  borderSoft: "#E5E7EB",
};

// --------------------------------------------------------------------
// 1) TOP HERO STRIP (aligned with Class 12 style)
// --------------------------------------------------------------------
const OverviewStrip = () => (
  <section className="pb-8 border-b border-gray-200 mb-8">
    <div
      className="p-6 sm:p-8 rounded-3xl"
      style={{
        backgroundColor: COLORS.surface,
        border: `1px solid ${COLORS.borderSoft}`,
        boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
      }}
    >
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <div
          className="flex items-center gap-3 p-4 rounded-2xl"
          style={{ backgroundColor: COLORS.lightBackground }}
        >
          <div
            className="flex items-center justify-center w-10 h-10 rounded-xl"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <BookOpen size={22} style={{ color: COLORS.primary }} />
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wide"
              style={{ color: COLORS.textGray }}
            >
              Stage
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              Matric / O-Levels Transition
            </p>
          </div>
        </div>

        <div
          className="flex items-center gap-3 p-4 rounded-2xl"
          style={{ backgroundColor: COLORS.lightBackground }}
        >
          <div
            className="flex items-center justify-center w-10 h-10 rounded-xl"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <User size={22} style={{ color: COLORS.secondary }} />
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wide"
              style={{ color: COLORS.textGray }}
            >
              Ideal For
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              Class 9–10 &amp; O-Level Students
            </p>
          </div>
        </div>

        <div
          className="flex items-center gap-3 p-4 rounded-2xl"
          style={{ backgroundColor: COLORS.lightBackground }}
        >
          <div
            className="flex items-center justify-center w-10 h-10 rounded-xl"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <GraduationCap size={22} style={{ color: COLORS.primary }} />
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wide"
              style={{ color: COLORS.textGray }}
            >
              Outcome
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.primaryDark }}
            >
              Clear, confident stream selection
            </p>
          </div>
        </div>
      </div>

      <p
        className="text-base sm:text-lg leading-relaxed"
        style={{ color: COLORS.textGray }}
      >
        The decision after{" "}
        <strong className="font-semibold">Matriculation or O-Levels</strong> is
        your first major academic choice. It sets the foundation for your
        intermediate (F.Sc, I.Com, ICS, Arts) and future university path.
        Choosing the right stream is critical to aligning your studies with your
        long-term career goals.
      </p>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 2) INTRO COPY (kept compact, supports hero)
// --------------------------------------------------------------------
const InitialContent = () => (
  <section className="pb-8 border-b border-gray-200 mb-8 space-y-4">
    <div
      className="mt-3 p-4 sm:p-5 rounded-2xl flex items-start gap-3"
      style={{
        background:
          "linear-gradient(135deg, rgba(37,99,235,0.05), rgba(249,115,22,0.04))",
      }}
    >
      <div
        className="flex items-center justify-center w-9 h-9 rounded-xl mt-0.5 flex-shrink-0"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <Lightbulb size={20} style={{ color: COLORS.secondary }} />
      </div>
      <div>
        <p
          className="text-sm sm:text-base font-semibold mb-1"
          style={{ color: COLORS.primaryDark }}
        >
          Our role in this decision
        </p>
        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          We help students avoid common decision traps and choose a stream that
          is{" "}
          <strong className="font-semibold">scientifically matched</strong> to
          their potential, interests, and future career direction.
        </p>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 3) PREMIUM COUNSELING ROADMAP (uses same structure language as other pages)
// --------------------------------------------------------------------

const PATH_COLORS = {
  academic: { tint: "#E8EDFF", border: "#C7D2FE", icon: "#1D4ED8" },
  technical: { tint: "#E6FAF4", border: "#A7F3D0", icon: "#0D9488" },
  vocational: { tint: "#FFF1E6", border: "#FED7AA", icon: "#F97316" },
  religious: { tint: "#FDF6D4", border: "#FDE68A", icon: "#D97706" },
  global: { tint: "#F3EFFF", border: "#DDD6FE", icon: "#7C3AED" },
};

const PATHS = [
  {
    id: "academic",
    icon: GraduationCap,
    title: "General Education Stream (HSSC)",
    subtitle: "For students with strong academic performance",
    subjects: "Pre-Medical, Pre-Engineering, ICS, I.Com, FA/Humanities",
    leadsTo:
      "MBBS, Engineering, BS Sciences, Social Sciences, IT, Business, Law",
    careers: "Doctors, Engineers, Researchers, Analysts, IT Professionals",
    recommended: [
      "You enjoy theory-based subjects",
      "You perform well in exams",
      "You want many university degree options",
    ],
  },
  {
    id: "technical",
    icon: Wrench,
    title: "Technical Education Stream",
    subtitle: "For practical, hands-on learners",
    subjects: "Electrical, Mechanical, Civil, DAE, Industrial Tech",
    leadsTo: "Applied BS, Engineering Tech, Industrial Diplomas",
    careers: "Technicians, Supervisors, Engineering Technologists",
    recommended: [
      "You like machines, tools, labs & real-world tasks",
      "You learn better by doing",
      "You want job-ready skills early",
    ],
  },
  {
    id: "vocational",
    icon: Briefcase,
    title: "Vocational & Skill-Based Programs",
    subtitle: "For fast employment pathways",
    subjects: "IT Skills, HVAC, Graphics, Digital Skills, Hospitality",
    leadsTo: "Freelancing, Technical Jobs, Startups, Overseas Work",
    careers: "Designers, IT Technicians, Skilled Trades, Technicians",
    recommended: [
      "You prefer practical skills",
      "You want quick employment",
      "You want freelancing or startup routes",
    ],
  },
  {
    id: "religious",
    icon: BookIcon,
    title: "Dars-e-Nizami / Islamic Studies",
    subtitle: "For students passionate about Islamic scholarship",
    subjects: "Arabic, Fiqh, Tafseer, Hadith, Islamic History",
    leadsTo: "Islamic Scholarship, HSSC Equivalence, University Options",
    careers: "Teachers, Scholars, Counselors, Community Leaders",
    recommended: [
      "You want structured Islamic learning",
      "You enjoy languages & history",
      "You want a respected religious academic path",
    ],
  },
  {
    id: "global",
    icon: Globe2,
    title: "International / Foreign Systems",
    subtitle: "For global-standard academic exposure",
    subjects: "A-Levels, IB, International Curricula",
    leadsTo: "Global Universities, Local Elite Universities, Scholarships",
    careers: "Business, Economics, Law, IT, Medicine (with conditions)",
    recommended: [
      "You want global opportunities",
      "You want flexible subject selection",
      "You aim for prestigious international universities",
    ],
  },
];

const Class10Roadmap = () => (
  <div className="mt-16 select-none" style={{ userSelect: "none" }}>
    {/* Header */}
    <div className="text-center mb-10 pointer-events-none">
      <h2
        className="text-3xl font-extrabold mb-2"
        style={{ color: COLORS.primaryDark }}
      >
        Your Pathways After Class 10
      </h2>

      <div
        className="w-24 mx-auto h-1 rounded-full mb-4"
        style={{ backgroundColor: COLORS.secondary }}
      />

      <p
        className="text-sm sm:text-base max-w-2xl mx-auto"
        style={{ color: COLORS.textGray }}
      >
        Explore the five major academic and professional paths available after
        Matric / O-Levels — each showing the future academic and career
        direction it unlocks for you.
      </p>
    </div>

    {/* Roadmap Spine (desktop) */}
    <div className="relative mb-10 hidden md:block pointer-events-none">
      <div
        className="w-full h-[3px] rounded-full"
        style={{ backgroundColor: COLORS.borderSoft }}
      />
      <div className="flex justify-between -mt-[10px] px-2">
        {PATHS.map((p) => (
          <div
            key={p.id}
            className="w-4 h-4 rounded-full border-2"
            style={{
              backgroundColor: "#ffffff",
              borderColor: COLORS.secondary,
            }}
          />
        ))}
      </div>
    </div>

    {/* Card Grid */}
    <div
      className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
      style={{ pointerEvents: "none" }}
    >
      {PATHS.map((path) => {
        const Icon = path.icon;
        const c = PATH_COLORS[path.id];

        return (
          <div
            key={path.id}
            className="rounded-3xl p-6 flex flex-col relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, #ffffff, ${c.tint})`,
              border: `1px solid ${c.border}`,
              boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
            }}
          >
            {/* Watermark */}
            <div
              aria-hidden="true"
              className="absolute -right-6 -top-6 w-28 h-28 rounded-full opacity-20"
              style={{
                background: `radial-gradient(circle, ${c.border}, transparent 65%)`,
              }}
            />

            {/* Icon + Title */}
            <div className="flex items-start gap-4 mb-4 relative">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                style={{
                  backgroundColor: "#ffffff",
                  border: `1px solid ${c.border}`,
                }}
              >
                <Icon size={22} style={{ color: c.icon }} />
              </div>

              <div>
                <h3
                  className="text-lg font-extrabold"
                  style={{ color: COLORS.primaryDark }}
                >
                  {path.title}
                </h3>
                <p
                  className="text-xs font-medium"
                  style={{ color: COLORS.textGray }}
                >
                  {path.subtitle}
                </p>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-4 relative">
              <div>
                <p
                  className="text-xs uppercase font-semibold"
                  style={{ color: COLORS.textGray }}
                >
                  Subjects / Structure
                </p>
                <p
                  className="text-sm mt-1"
                  style={{ color: COLORS.textGray }}
                >
                  {path.subjects}
                </p>
              </div>
              <div
                className="h-px w-full"
                style={{ backgroundColor: c.border }}
              />

              <div>
                <p
                  className="text-xs uppercase font-semibold"
                  style={{ color: COLORS.textGray }}
                >
                  Leads To
                </p>
                <p
                  className="text-sm mt-1"
                  style={{ color: COLORS.textGray }}
                >
                  {path.leadsTo}
                </p>
              </div>
              <div
                className="h-px w-full"
                style={{ backgroundColor: c.border }}
              />

              <div>
                <p
                  className="text-xs uppercase font-semibold"
                  style={{ color: COLORS.textGray }}
                >
                  Future Careers
                </p>
                <p
                  className="text-sm mt-1"
                  style={{ color: COLORS.textGray }}
                >
                  {path.careers}
                </p>
              </div>
              <div
                className="h-px w-full"
                style={{ backgroundColor: c.border }}
              />

              <div>
                <p
                  className="text-xs uppercase font-semibold mb-1"
                  style={{ color: COLORS.textGray }}
                >
                  Recommended For You If:
                </p>
                <ul
                  className="text-sm list-disc ml-4 space-y-1"
                  style={{ color: COLORS.textGray }}
                >
                  {path.recommended.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

// --------------------------------------------------------------------
// 4) CHALLENGE + ROADMAP SECTION
// --------------------------------------------------------------------
const ChallengeSection = () => (
  <section className="py-10 border-b border-gray-200 mb-10">
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8"
      style={{ color: COLORS.primaryDark }}
    >
      The Challenge: Why Students Choose Wrong
    </h2>

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* LEFT CARD */}
      <div
        className="p-5 sm:p-6 rounded-2xl h-full"
        style={{ backgroundColor: COLORS.lightBackground }}
      >
        <h3
          className="text-xl sm:text-2xl font-bold mb-4 flex items-center"
          style={{ color: COLORS.secondary }}
        >
          <Layers size={24} className="mr-3" />
          Common Decision Traps
        </h3>

        <ul
          className="space-y-3 text-sm sm:text-base"
          style={{ color: COLORS.textGray }}
        >
          <li className="flex items-start">
            <CheckCircle
              size={20}
              className="flex-shrink-0 mt-1 mr-3"
              style={{ color: COLORS.primary }}
            />
            <span>
              Following friends or trends without considering personal aptitude
              or goals.
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle
              size={20}
              className="flex-shrink-0 mt-1 mr-3"
              style={{ color: COLORS.primary }}
            />
            <span>
              Family or societal pressure to choose “prestigious” streams like
              Pre-Medical or Pre-Engineering.
            </span>
          </li>

          <li className="flex items-start">
            <CheckCircle
              size={20}
              className="flex-shrink-0 mt-1 mr-3"
              style={{ color: COLORS.primary }}
            />
            <span>
              Limited understanding of the{" "}
              <strong className="font-semibold">
                actual scope, workload and future pathways
              </strong>{" "}
              of different subjects.
            </span>
          </li>
        </ul>
      </div>

      {/* RIGHT CARD */}
      <div
        className="p-5 sm:p-6 rounded-2xl"
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
        }}
      >
        <h3
          className="text-xl sm:text-2xl font-bold mb-3 flex items-center"
          style={{ color: COLORS.secondary }}
        >
          <Users size={24} className="mr-3" />
          The Stakes Are High
        </h3>

        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          A wrong choice can mean:
        </p>

        <ul
          className="mt-3 space-y-2 text-sm sm:text-base"
          style={{ color: COLORS.textGray }}
        >
          <li>• Struggling for two years in mismatched subjects.</li>
          <li>• Lower grades and lost confidence.</li>
          <li>• Closed doors to preferred university programs later on.</li>
        </ul>

        <p
          className="mt-3 text-sm sm:text-base"
          style={{ color: COLORS.textGray }}
        >
          Making an informed decision here is an{" "}
          <strong className="font-semibold">
            investment in your education and career.
          </strong>
        </p>
      </div>
    </div>

    {/* Roadmap below cards */}
    <Class10Roadmap />
  </section>
);

// --------------------------------------------------------------------
// 5) OPTIONS SECTION (shared style with Class 12)
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
        Choose the support that fits your needs — whether you want deep guidance,
        scientific testing, or quick subject-level clarity.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          id: 1,
          title: "Expert Guidance Session",
          icon: User,
          tag: "1:1 Deep Guidance",
          description:
            "A one-on-one session to evaluate your marks, interests, learning style, and future direction with professional clarity.",
          idealFor: "Students & parents seeking a deep understanding.",
          link: "/service/online-session",
          cta: "Book a Session",
        },
        {
          id: 2,
          title: "Career Assessment Test",
          icon: Briefcase,
          tag: "Psychometric",
          description:
            "A science-based test that evaluates aptitude, interests, personality, and strengths to suggest best-fit streams.",
          idealFor: "Students who want reliable, data-backed results.",
          link: "/service/career-assessment",
          cta: "Take the Test",
        },
        {
          id: 3,
          title: "Taleemi Advice (Quick Query)",
          icon: MessageCircle,
          tag: "Fast Response",
          description:
            "Ask a specific question related to subjects, combinations, boards or confusion — get a clear quick answer.",
          idealFor: "Students with a single, specific confusion.",
          link: "/service/taleemi-advice",
          cta: "Ask a Question",
        },
      ].map((option) => (
        <div
          key={option.id}
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
            <option.icon size={30} style={{ color: COLORS.secondary }} />
          </div>

          <h3
            className="text-lg sm:text-xl font-bold mb-2"
            style={{ color: COLORS.primaryDark }}
          >
            {option.title}
          </h3>

          <span
            className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full mb-4"
            style={{
              backgroundColor: `${COLORS.secondary}15`,
              color: COLORS.secondary,
            }}
          >
            {option.tag}
          </span>

          <p
            className="text-sm mb-4 leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            {option.description}
          </p>

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
            <p
              className="text-xs sm:text-sm leading-snug"
              style={{ color: COLORS.grayText }}
            >
              {option.idealFor}
            </p>
          </div>

          <NavLink
            to={option.link}
            className="inline-flex items-center justify-center mt-auto px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.03] shadow-md"
            style={{
              backgroundColor: COLORS.secondary,
              color: "white",
            }}
          >
            {option.cta}
            <ArrowRight size={16} className="ml-2" />
          </NavLink>
        </div>
      ))}
    </div>
  </section>
);

// --------------------------------------------------------------------
// 6) NEXT STEP SECTION (same pattern as Class 12)
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
          Once you choose the right stream in Class 10, the next decision in
          Class 11–12 is selecting a{" "}
          <strong className="font-semibold">
            specialization and preparing for university admissions
          </strong>
          . We continue supporting you at each stage through structured
          guidance.
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
// 7) MAIN COMPONENT
// --------------------------------------------------------------------
export default function Class10Guidance() {
  return (
    <ServiceLayout>
      <OverviewStrip />
      <InitialContent />
      <ChallengeSection />
      <OptionsSection />
      <NextStepSection />
    </ServiceLayout>
  );
}
