import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";
import announcementHero from "../../assets/service-images/Announcements.jpg"; 

const COLORS = {
  primary: "#1E3A8A",
  primaryDark: "#11253e",
  secondary: "#F97316",
  textGray: "#4B5563",
  lightBackground: "#EFF6FF",
  surface: "#F8FAFC",
  borderSoft: "#E5E7EB",
};

//---------------------------------------------------------------------
// 1) HERO SECTION ----------------------------------------------------
//---------------------------------------------------------------------
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
            TaleemiGuide continuously scans national and international platforms
            to bring you the latest academic and career opportunities. Whether
            you are a Matric student planning your future, an intermediate
            student exploring next steps, a university student seeking
            advancement, or a professional looking for growth, this page keeps
            you updated with timely and verified opportunities. Stay connected
            for scholarships, internships, admissions, competitions, workshops,
            training programs, conferences, and skill-building events — all
            curated to help you grow academically and professionally.
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
                src={announcementHero}
                alt="Taleemi announcements and opportunities"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

//---------------------------------------------------------------------
// 2) OPPORTUNITIES FOR MATRIC & INTERMEDIATE -------------------------
//---------------------------------------------------------------------
const OpportunitiesMatricIntermediateSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className="text-2xl sm:text-3xl font-extrabold mb-4"
        style={{ color: COLORS.primaryDark }}
      >
        Opportunities for Matric & Intermediate Students
      </h2>

      <div
        className="rounded-3xl p-6 sm:p-7 mb-5"
        style={{
          backgroundColor: COLORS.surface,
          border: `1px solid ${COLORS.borderSoft}`,
          boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
        }}
      >
        <p
          className="text-sm sm:text-base leading-relaxed mb-3"
          style={{ color: COLORS.textGray }}
        >
          Stay informed about:
        </p>

        <ul
          className="list-disc list-inside space-y-1 text-sm sm:text-base mb-4"
          style={{ color: COLORS.textGray }}
        >
          <li>Scholarship programs</li>
          <li>College admission announcements</li>
          <li>Talent &amp; academic competitions</li>
          <li>Short courses &amp; youth development programs</li>
          <li>National testing schedules</li>
          <li>Skill-based opportunities</li>
          <li>Olympiads and learning events</li>
        </ul>

        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          These opportunities help Class 10–12 students discover pathways early
          and make informed decisions about their next academic steps.
        </p>
      </div>

      <button
        type="button"
        className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md transition-transform duration-200 hover:scale-[1.03]"
        style={{
          backgroundColor: COLORS.secondary,
          color: "white",
        }}
      >
        Click Here
        <ArrowRight size={16} className="ml-2" />
      </button>
    </div>
  </section>
);

//---------------------------------------------------------------------
// 3) OPPORTUNITIES FOR COLLEGE & UNIVERSITY STUDENTS -----------------
//---------------------------------------------------------------------
const OpportunitiesCollegeUniversitySection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className="text-2xl sm:text-3xl font-extrabold mb-4"
        style={{ color: COLORS.primaryDark }}
      >
        Opportunities for College &amp; University Students
      </h2>

      <div
        className="rounded-3xl p-6 sm:p-7 mb-5"
        style={{
          backgroundColor: COLORS.surface,
          border: `1px solid ${COLORS.borderSoft}`,
          boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
        }}
      >
        <p
          className="text-sm sm:text-base leading-relaxed mb-3"
          style={{ color: COLORS.textGray }}
        >
          Find updated opportunities related to:
        </p>

        <ul
          className="list-disc list-inside space-y-1 text-sm sm:text-base mb-4"
          style={{ color: COLORS.textGray }}
        >
          <li>BS, MS &amp; PhD admissions</li>
          <li>International and national scholarships</li>
          <li>Research internships &amp; fellowships</li>
          <li>Conferences and seminars</li>
          <li>Skill development programs</li>
          <li>Entrepreneurship &amp; innovation challenges</li>
          <li>Final-year project competitions</li>
          <li>Part-time and full-time internship openings</li>
        </ul>

        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          Perfect for students looking to enhance their academic profiles, build
          experience, or open doors for higher studies.
        </p>
      </div>

      <button
        type="button"
        className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md transition-transform duration-200 hover:scale-[1.03]"
        style={{
          backgroundColor: COLORS.secondary,
          color: "white",
        }}
      >
        Click Here
        <ArrowRight size={16} className="ml-2" />
      </button>
    </div>
  </section>
);

//---------------------------------------------------------------------
// 4) GENERAL & OPEN OPPORTUNITIES ------------------------------------
//---------------------------------------------------------------------
const GeneralOpenOpportunitiesSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className="text-2xl sm:text-3xl font-extrabold mb-4"
        style={{ color: COLORS.primaryDark }}
      >
        General &amp; Open Opportunities
      </h2>

      <div
        className="rounded-3xl p-6 sm:p-7 mb-5"
        style={{
          backgroundColor: COLORS.surface,
          border: `1px solid ${COLORS.borderSoft}`,
          boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
        }}
      >
        <p
          className="text-sm sm:text-base leading-relaxed mb-3"
          style={{ color: COLORS.textGray }}
        >
          This category covers valuable opportunities for learners,
          professionals, educators, and researchers, including:
        </p>

        <ul
          className="list-disc list-inside space-y-1 text-sm sm:text-base mb-4"
          style={{ color: COLORS.textGray }}
        >
          <li>Government-funded scholarships</li>
          <li>International exchange programs</li>
          <li>Online certifications &amp; skill tracks</li>
          <li>Job fairs &amp; career expos</li>
          <li>Training workshops</li>
          <li>Volunteering &amp; leadership programs</li>
          <li>Nationwide calls for proposals, competitions, and grants</li>
        </ul>

        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          These announcements support lifelong learners and those seeking
          advancement in any stage of their journey.
        </p>
      </div>

      <button
        type="button"
        className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md transition-transform duration-200 hover:scale-[1.03]"
        style={{
          backgroundColor: COLORS.secondary,
          color: "white",
        }}
      >
        Click Here
        <ArrowRight size={16} className="ml-2" />
      </button>
    </div>
  </section>
);

//---------------------------------------------------------------------
// 5) STAY CONNECTED --------------------------------------------------
//---------------------------------------------------------------------
const StayConnectedSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className="text-2xl sm:text-3xl font-extrabold mb-4"
        style={{ color: COLORS.primaryDark }}
      >
        Stay Connected
      </h2>

      <div
        className="rounded-3xl p-6 sm:p-7"
        style={{
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.06), rgba(249,115,22,0.10))",
          border: `1px solid ${COLORS.borderSoft}`,
          boxShadow: "0 12px 30px rgba(15,23,42,0.10)",
        }}
      >
        <p
          className="text-sm sm:text-base leading-relaxed mb-3"
          style={{ color: COLORS.textGray }}
        >
          For detailed updates, guidance, personalized advice, and tips on
          applying successfully:
        </p>

        <ul
          className="list-none space-y-1 text-sm sm:text-base mb-4"
          style={{ color: COLORS.textGray }}
        >
          <li>👉 Join our mailing list</li>
          <li>👉 Follow us on social media</li>
          <li>👉 Visit this page regularly for new opportunities</li>
        </ul>

        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          TaleemiGuide ensures that you never miss an opportunity that can
          uplift your academic or professional journey.
        </p>
      </div>
    </div>
  </section>
);

//---------------------------------------------------------------------
// 6) YOUR COMPLETE JOURNEY WITH TALEEMIGUIDE -------------------------
//---------------------------------------------------------------------
const JourneyAndCTASection = () => {
  const journeySteps = [
    { path: "/service/class-10-guidance", title: "Class 10" },
    { path: "/service/class-12-guidance", title: "Class 12" },
    { path: "/service/career-assessment", title: "Career Assessment" },
    { path: "/service/subject-classification", title: "Subject Classification" },
    { path: "/service/university-program-finder", title: "Program Finder" },
    { path: "/service/university-graduates-guidance", title: "University Support" },
    { path: "/service/working-professional-guidance", title: "Professional Guidance" },
    { path: "/service/taleemi-advice", title: "Fast-Track Help" },
    { path: "/service/online-session", title: "Online Sessions" },
    { path: "/service/announcement", title: "Opportunity Hub" },
  ];

  return (
    <section className="pt-4 pb-14">
      <div
        className="p-8 rounded-3xl relative overflow-hidden"
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
          className="text-2xl sm:text-3xl font-extrabold mb-4 text-center"
          style={{ color: COLORS.primaryDark }}
        >
          Your Complete Journey With TaleemiGuide
        </h2>

        {/* Journey visualization */}
        <div
          className="flex flex-wrap justify-center items-center gap-2 mb-6 p-4 rounded-2xl bg-white"
          style={{
            boxShadow: "inset 0 0 0 1px rgba(229,231,235,0.7)",
          }}
        >
          {journeySteps.map((step, index) => (
            <React.Fragment key={step.title}>
              <NavLink
                to={step.path}
                className={`px-3 py-1 text-xs sm:text-sm font-semibold rounded-full transition duration-200 ${
                  step.path === "/service/announcement" ? "shadow-md" : ""
                }`}
                style={
                  step.path === "/service/announcement"
                    ? {
                        backgroundColor: COLORS.secondary,
                        color: "white",
                      }
                    : {
                        backgroundColor: "#E5E7EB",
                        color: "#374151",
                      }
                }
              >
                {step.title}
              </NavLink>
              {index < journeySteps.length - 1 && (
                <ArrowRight size={14} className="text-gray-400" />
              )}
            </React.Fragment>
          ))}
        </div>

        <p
          className="text-sm sm:text-base leading-relaxed mb-6 font-bold text-center"
          style={{ color: COLORS.primary }}
        >
          TaleemiGuide walks with you at every step of your academic and
          professional life.
        </p>

        <button
          className="px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-lg font-bold rounded-xl shadow-xl transition duration-300 ease-in-out transform hover:scale-[1.03] flex items-center justify-center mx-auto"
          style={{
            backgroundColor: COLORS.secondary,
            color: "white",
            boxShadow: `0 10px 15px -3px ${COLORS.secondary}70`,
          }}
          onClick={() => console.log("Navigate to Live Announcements Feed")}
        >
          View All Opportunities Live
          <ArrowRight size={20} className="ml-3" />
        </button>
      </div>
    </section>
  );
};

//---------------------------------------------------------------------
// MAIN PAGE ----------------------------------------------------------
//---------------------------------------------------------------------
export default function TaleemiAnnouncement() {
  return (
    <ServiceLayout>
      <HeroSection />
      <OpportunitiesMatricIntermediateSection />
      <OpportunitiesCollegeUniversitySection />
      <GeneralOpenOpportunitiesSection />
      <StayConnectedSection />
      <JourneyAndCTASection />
    </ServiceLayout>
  );
}
