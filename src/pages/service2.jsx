// ServiceMasterPage.jsx
import React, { useState } from "react";
import {
  BookOpen,
  User,
  Briefcase,
  GraduationCap,
  Grid,
  Search,
  Zap,
  MessageCircle,
  Bell,
  ChevronRight,
  Layers,
  Clock,
  CheckCircle,
  Star,
  CalendarCheck,
} from "lucide-react";

/**
 * Master Service Page - Full redesign (Option A)
 * - Tailwind-first design (expects Tailwind configured)
 * - Colors follow user's palette (keeps your branding)
 * - Export default: ServiceMasterPage({ onNavigate })
 */

/* ---------- THEME COLORS (reuse from your homepage) ---------- */
const COLORS = {
  primary: "#1E3A8A", // deep blue
  secondary: "#F97316", // bright orange
  textGray: "#4B5563",
  lightBackground: "#EFF6FF",
  primaryDark: "#11253e",
};

/* ---------- Service data ---------- */
const serviceData = [
  {
    id: "service-1",
    title: "Class 10 Guidance",
    subtitle: "Choose your stream after Matric with confidence.",
    icon: User,
    path: "/services/class-10-guidance",
    tag: "Students",
  },
  {
    id: "service-2",
    title: "Class 12 Guidance",
    subtitle: "Pick the right specialization & future pathways.",
    icon: GraduationCap,
    path: "/services/class-12-guidance",
    tag: "Students",
  },
  {
    id: "service-3",
    title: "Career Assessment Test",
    subtitle: "Psychometric evaluation to reveal best-fit careers.",
    icon: Briefcase,
    path: "/services/career-assessment",
    tag: "Assessment",
  },
  {
    id: "service-4",
    title: "Subject Classification",
    subtitle: "Explore 1,000+ subjects categorized professionally.",
    icon: Grid,
    path: "/services/subject-classification",
    tag: "Research",
  },
  {
    id: "service-5",
    title: "Program Finder",
    subtitle: "Search verified BS/MS/PhD programs across Pakistan.",
    icon: Search,
    path: "/services/program-finder",
    tag: "University",
  },
  {
    id: "service-6",
    title: "Graduates Guidance",
    subtitle: "Academic, admin & research support inside universities.",
    icon: BookOpen,
    path: "/services/graduates-guidance",
    tag: "Graduates",
  },
  {
    id: "service-7",
    title: "Professional Guidance",
    subtitle: "Align education with career growth & transitions.",
    icon: Briefcase,
    path: "/services/professional-guidance",
    tag: "Professionals",
  },
  {
    id: "service-8",
    title: "Taleemi Advice",
    subtitle: "Fast-track expert help for urgent education questions.",
    icon: Zap,
    path: "/services/taleemi-advice",
    tag: "Quick Help",
    featured: true,
  },
  {
    id: "service-9",
    title: "Book Online Session",
    subtitle: "One-on-one counseling with certified experts.",
    icon: MessageCircle,
    path: "/services/online-session",
    tag: "Consultation",
    featured: true,
  },
  {
    id: "service-10",
    title: "Announcements",
    subtitle: "Scholarships, admissions, internships & competitions.",
    icon: Bell,
    path: "/services/announcements",
    tag: "Updates",
  },
];

/* ---------- Small utility: Chip ---------- */
const TagChip = ({ text }) => (
  <span
    className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold"
    style={{
      backgroundColor: `${COLORS.primary}10`,
      color: COLORS.primaryDark,
    }}
  >
    <CheckCircle size={14} />
    {text}
  </span>
);

/* ---------- Hero (refined, interactive) ---------- */
const Hero = ({ onNavigate = (p) => {} }) => {
  return (
    <section
      aria-label="Hero - Master services"
      className="pt-16 pb-14"
      style={{
        background: `linear-gradient(135deg, ${COLORS.lightBackground} 0%, white 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left text */}
          <div className="lg:col-span-7">
            <p
              className="inline-block text-sm font-semibold tracking-widest mb-4 rounded-md px-3 py-1"
              style={{ background: `${COLORS.secondary}20`, color: COLORS.secondary }}
            >
              Our Services
            </p>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4"
              style={{ color: COLORS.primary }}
            >
              Complete Academic & Career Guidance — <span className="text-transparent bg-clip-text" style={{ background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})` }}>Personalized & Trusted</span>
            </h1>

            <p className="text-lg max-w-2xl mb-6" style={{ color: COLORS.textGray }}>
              From choosing subjects to finding the perfect university program and booking one-on-one sessions — TaleemiGuide helps students, graduates and professionals make academic decisions with clarity and confidence.
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <button
                onClick={() => onNavigate("/services/taleemi-advice")}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold shadow-lg transform transition hover:-translate-y-0.5"
                style={{ background: COLORS.secondary, color: "white" }}
                aria-label="Get Taleemi Advice"
              >
                <Zap size={18} /> Get Taleemi Advice
              </button>

              <button
                onClick={() => onNavigate("/services/online-session")}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full font-semibold border-2"
                style={{ borderColor: COLORS.primary, color: COLORS.primary }}
                aria-label="Book Online Session"
              >
                <MessageCircle size={18} /> Book Online Session
              </button>
            </div>

            {/* Quick stats */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ background: `${COLORS.primary}10`, color: COLORS.primary }}>
                  <Star size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: COLORS.primaryDark }}>4.9/5 Expert Rating</div>
                  <div className="text-xs" style={{ color: COLORS.textGray }}>Based on user feedback</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ background: `${COLORS.secondary}10`, color: COLORS.secondary }}>
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: COLORS.primaryDark }}>Responsive Support</div>
                  <div className="text-xs" style={{ color: COLORS.textGray }}>Typical response within 24 hrs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right visual cluster */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full flex items-center justify-center shadow-2xl" style={{ background: `${COLORS.primary}0f`, border: `3px solid ${COLORS.primary}20` }}>
              {/* main icon */}
              <div className="absolute -translate-y-2 transition-transform hover:scale-105 animate-float">
                <div className="p-6 rounded-full bg-white shadow-md">
                  <MessageCircle size={60} style={{ color: COLORS.primary }} />
                </div>
              </div>

              {/* corner icons */}
              <GraduationCap size={36} className="absolute top-6 left-6 p-2 rounded-full bg-white shadow-sm" style={{ color: COLORS.secondary }} />
              <Briefcase size={36} className="absolute bottom-6 right-6 p-2 rounded-full bg-white shadow-sm" style={{ color: COLORS.secondary }} />
              <Layers size={36} className="absolute bottom-6 left-6 p-2 rounded-full bg-white shadow-sm" style={{ color: COLORS.secondary }} />
              <User size={36} className="absolute top-6 right-6 p-2 rounded-full bg-white shadow-sm" style={{ color: COLORS.secondary }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- Services Grid (premium cards) ---------- */
const ServiceCard = ({ service, onNavigate = () => {} }) => {
  const Icon = service.icon;
  const featured = service.featured;
  return (
    <article
      onClick={() => onNavigate(service.path)}
      className={`relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer group`}
      aria-labelledby={service.id + "-title"}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" ? onNavigate(service.path) : null)}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex items-center justify-center rounded-full p-3 shrink-0"
          style={{
            background: featured ? `linear-gradient(135deg, ${COLORS.secondary}, ${COLORS.primary})` : `${COLORS.primary}10`,
            color: featured ? "white" : COLORS.primary,
          }}
        >
          <Icon size={22} />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3 id={service.id + "-title"} className="text-lg font-extrabold" style={{ color: COLORS.primaryDark }}>
              {service.title}
            </h3>
            {service.tag && <TagChip text={service.tag} />}
          </div>

          <p className="mt-2 text-sm" style={{ color: COLORS.textGray }}>
            {service.subtitle}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center text-sm font-semibold" style={{ color: featured ? COLORS.secondary : COLORS.primary }}>
        <span>View details</span>
        <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </div>
    </article>
  );
};

const ServicesGrid = ({ onNavigate }) => {
  return (
    <section className="py-12" style={{ background: COLORS.lightBackground }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold" style={{ color: COLORS.primary }}>
            Our Core Guidance Services
          </h2>
          <p className="mt-3 text-lg text-center max-w-3xl mx-auto" style={{ color: COLORS.textGray }}>
            Ten focused services to support critical academic and career decisions — each handled by certified professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((s) => (
            <ServiceCard key={s.id} service={s} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Why Choose Section (trust & convert) ---------- */
const WhyChoose = () => {
  const features = [
    { title: "Expert Network", desc: "Academicians, psychologists & industry mentors.", icon: Star },
    { title: "Verified Programs", desc: "Up-to-date database of Pakistani universities.", icon: BookOpen },
    { title: "Secure & Private", desc: "Your data and queries stay confidential.", icon: Layers },
    { title: "Flexible Sessions", desc: "Zoom, Google Meet or phone — at your convenience.", icon: CalendarCheck },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-extrabold" style={{ color: COLORS.primary }}>
            Why students & professionals choose TaleemiGuide
          </h3>
          <p className="mt-3 text-base" style={{ color: COLORS.textGray }}>
            Practical, verified and human-led guidance that helps you take action — not just advice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-5 border rounded-xl hover:shadow-md transition">
              <div className="inline-flex items-center justify-center p-3 rounded-md mb-3" style={{ background: `${COLORS.primary}10`, color: COLORS.primary }}>
                <f.icon size={20} />
              </div>
              <h4 className="font-semibold mb-1" style={{ color: COLORS.primaryDark }}>{f.title}</h4>
              <p className="text-sm" style={{ color: COLORS.textGray }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- Simple 3-step process flow (converts) ---------- */
const ProcessFlow = () => (
  <section className="py-12" style={{ background: COLORS.lightBackground }}>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-extrabold" style={{ color: COLORS.primary }}>
          How it works — 3 simple steps
        </h3>
        <p className="mt-2 text-sm" style={{ color: COLORS.textGray }}>
          A quick, transparent process so you know exactly what to expect.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
          <div className="mx-auto inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ background: `${COLORS.primary}10`, color: COLORS.primary }}>
            <span className="font-bold">1</span>
          </div>
          <h4 className="font-semibold mb-2" style={{ color: COLORS.primaryDark }}>Submit your query</h4>
          <p className="text-sm" style={{ color: COLORS.textGray }}>Use the form or upload supporting documents.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
          <div className="mx-auto inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ background: `${COLORS.secondary}10`, color: COLORS.secondary }}>
            <span className="font-bold">2</span>
          </div>
          <h4 className="font-semibold mb-2" style={{ color: COLORS.primaryDark }}>Expert review</h4>
          <p className="text-sm" style={{ color: COLORS.textGray }}>Counselors analyze and prepare personalized guidance.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
          <div className="mx-auto inline-flex items-center justify-center w-14 h-14 rounded-full mb-4" style={{ background: `${COLORS.primary}20`, color: COLORS.primary }}>
            <span className="font-bold">3</span>
          </div>
          <h4 className="font-semibold mb-2" style={{ color: COLORS.primaryDark }}>Receive guidance</h4>
          <p className="text-sm" style={{ color: COLORS.textGray }}>Get actionable steps, session options & resources.</p>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- Taleemi Advice Form (refined UI) ---------- */
const TaleemiAdviceForm = () => {
  const [fileName, setFileName] = useState("No file chosen");
  const handleFileChange = (e) => {
    const files = e.target.files;
    setFileName(files && files.length ? `${files.length} file(s) selected` : "No file chosen");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // integrate form submit logic (API) here
    alert("Form submitted (stub): we'll wire this to API");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form className="bg-white p-6 rounded-2xl shadow-md" onSubmit={handleSubmit}>
        <h4 className="text-xl font-bold mb-4" style={{ color: COLORS.primary }}>Submit your query</h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
          <input required placeholder="Full name" className="p-3 rounded-xl border focus:outline-none" />
          <input required type="email" placeholder="Email" className="p-3 rounded-xl border focus:outline-none" />
          <input placeholder="Phone (optional)" type="tel" className="p-3 rounded-xl border focus:outline-none" />
        </div>

        <div className="mb-3">
          <select defaultValue="select" className="w-full p-3 rounded-xl border">
            <option value="select" disabled>Select category</option>
            <option>Class 10-12</option>
            <option>BA/BSc</option>
            <option>BS & Equivalent</option>
            <option>MS & Equivalent</option>
            <option>PhD</option>
            <option>Working Professional</option>
          </select>
        </div>

        <div className="mb-3">
          <textarea required placeholder="Describe your issue or question" rows={4} className="w-full p-3 rounded-xl border" />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <label htmlFor="file" className="cursor-pointer px-4 py-2 rounded-lg font-semibold" style={{ background: COLORS.secondary, color: "white" }}>
            Choose files
          </label>
          <input id="file" type="file" className="hidden" multiple onChange={handleFileChange} />
          <div className="text-sm" style={{ color: COLORS.textGray }}>{fileName}</div>
        </div>

        <div className="flex gap-3">
          <button type="submit" className="px-6 py-3 rounded-full font-semibold" style={{ background: COLORS.primary, color: "white" }}>Submit</button>
          <button type="button" className="px-6 py-3 rounded-full border" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>Clear</button>
        </div>
      </form>
    </div>
  );
};

/* ---------- Online session CTA (pricing-style card) ---------- */
const OnlineSessionCard = ({ onNavigate = () => {} }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-extrabold" style={{ color: COLORS.primary }}>Book a Personalized Online Session</h3>
          <p className="mt-3 text-sm" style={{ color: COLORS.textGray }}>
            Detailed one-on-one counselling to plan admissions, specializations, career switches and academic problems.
          </p>

          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3"><CheckCircle size={18} style={{ color: COLORS.secondary }} /><span style={{ color: COLORS.primaryDark, fontWeight: 600 }}>30–60 min sessions</span></li>
            <li className="flex items-start gap-3"><CheckCircle size={18} style={{ color: COLORS.secondary }} /><span style={{ color: COLORS.textGray }}>Session recording & follow-up notes</span></li>
            <li className="flex items-start gap-3"><CheckCircle size={18} style={{ color: COLORS.secondary }} /><span style={{ color: COLORS.textGray }}>Choice of platform: Zoom / Google Meet / Call</span></li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl border shadow-sm">
          <div className="text-sm font-semibold mb-4" style={{ color: COLORS.primaryDark }}>Session — Standard</div>
          <div className="flex items-baseline gap-2">
            <div className="text-3xl font-extrabold" style={{ color: COLORS.primary }}>PKR 2,500</div>
            <div className="text-xs" style={{ color: COLORS.textGray }}>one-time</div>
          </div>

          <p className="mt-4 text-sm" style={{ color: COLORS.textGray }}>Includes pre-session assessment & 48hr follow-up support.</p>

          <button
            onClick={() => onNavigate("/services/online-session")}
            className="mt-6 w-full px-4 py-3 rounded-full font-semibold"
            style={{ background: COLORS.secondary, color: "white" }}
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

/* ---------- Page wrapper ---------- */
export default function ServiceMasterPage({ onNavigate = (p) => console.log("Navigate:", p) }) {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <Hero onNavigate={onNavigate} />
      <ServicesGrid onNavigate={onNavigate} />
      <WhyChoose />
      <ProcessFlow />
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-extrabold" style={{ color: COLORS.primary }}>Seek Taleemi Advice</h3>
            <p className="mt-3 text-sm" style={{ color: COLORS.textGray }}>
              Fast, expert help for urgent academic problems — submit your question and get a clear, human response.
            </p>
            <div className="mt-6">
              <TaleemiAdviceForm />
            </div>
          </div>

          <div>
            <OnlineSessionCard onNavigate={onNavigate} />
            {/* Optional: Testimonials or Trust badges */}
            <div className="mt-6 p-4 bg-white rounded-xl shadow-sm">
              <div className="text-sm font-semibold" style={{ color: COLORS.primaryDark }}>Trusted by students across Pakistan</div>
              <div className="mt-3 flex gap-3 text-xs text-gray-500">
                <div className="px-3 py-1 rounded-md border" style={{ borderColor: COLORS.primary + "33" }}>Verified counselors</div>
                <div className="px-3 py-1 rounded-md border" style={{ borderColor: COLORS.primary + "33" }}>Data privacy</div>
                <div className="px-3 py-1 rounded-md border" style={{ borderColor: COLORS.primary + "33" }}>Secure payment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* final CTA */}
      <section className="py-12" style={{ background: COLORS.lightBackground }}>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-extrabold" style={{ color: COLORS.primary }}>Ready to make a confident decision?</h3>
          <p className="mt-2 text-sm" style={{ color: COLORS.textGray }}>Book a session or submit your query — our experts will guide you step-by-step.</p>
          <div className="mt-6 flex justify-center gap-4">
            <button onClick={() => onNavigate("/services/taleemi-advice")} className="px-6 py-3 rounded-full font-semibold" style={{ background: COLORS.secondary, color: "white" }}>Get Advice</button>
            <button onClick={() => onNavigate("/services/online-session")} className="px-6 py-3 rounded-full border font-semibold" style={{ borderColor: COLORS.primary, color: COLORS.primary }}>Book Session</button>
          </div>
        </div>
      </section>
    </div>
  );
}
