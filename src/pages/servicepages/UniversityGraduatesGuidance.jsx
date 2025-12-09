import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { BookOpenCheck, Users, HeartHandshake, ArrowRight } from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";
import universityGraduatesHero from "../../assets/service-images/University-Graduates.jpg";

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

const baseCardStyle = {
  backgroundColor: "#FFFFFF",
  border: "1px solid #E0E7FF",
  boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
};

// --------------------------------------------------------------------
// 1) HERO SECTION
// --------------------------------------------------------------------
const HeroSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* LEFT: TEXT */}
        <div>
          <p
            className="text-sm sm:text-base leading-relaxed mb-4"
            style={{ color: COLORS.textGray }}
          >
            The journey through college and university is transformative —
            filled with opportunities, responsibilities, and challenges.
            Whether you are pursuing an Associate Degree, BS, MS/MPhil, or PhD,
            academic pressure, course requirements, administrative hurdles, and
            personal challenges often overlap. That’s exactly where
            TaleemiGuide helps — enabling students to move beyond confusion and
            excel in their higher education path.
          </p>

          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            Our team quickly understands your case, identifies the exact issue,
            and provides the precise guidance you need to move forward with
            clarity and confidence.
          </p>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="flex md:justify-end">
          <div
            className="overflow-hidden rounded-3xl border border-gray-200 bg-slate-50 w-full max-w-md"
            style={{
              boxShadow: "0 16px 40px rgba(15,23,42,0.08)",
            }}
          >
            <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96">
              <img
                src={universityGraduatesHero}
                alt="University students receiving guidance"
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
// 2) COMMON CHALLENGES SECTION
// --------------------------------------------------------------------
const CommonChallengesSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-3"
          style={{ color: COLORS.primaryDark }}
        >
          Common Challenges Faced by University Students in Pakistan
        </h2>
      </div>

      <div
        className="rounded-3xl p-6 sm:p-7"
        style={{
          backgroundColor: COLORS.surface,
          border: `1px solid ${COLORS.borderSoft}`,
          boxShadow: "0 10px 28px rgba(15,23,42,0.06)",
        }}
      >
        <p
          className="text-sm sm:text-base leading-relaxed mb-3"
          style={{ color: COLORS.textGray }}
        >
          Students encounter a wide range of academic, administrative, and
          research-related issues, including:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <ul
            className="list-disc list-inside space-y-1 text-sm sm:text-base"
            style={{ color: COLORS.textGray }}
          >
            <li>Course and Major Selection</li>
            <li>Switching between Programs</li>
            <li>Migration</li>
            <li>Maximum study period issues</li>
            <li>Degree completion requirements</li>
            <li>Lateral entry into BS programs</li>
          </ul>

          <ul
            className="list-disc list-inside space-y-1 text-sm sm:text-base"
            style={{ color: COLORS.textGray }}
          >
            <li>Certification Programs in lieu of Degrees</li>
            <li>CGPA vs Division concerns</li>
            <li>Improvement or repetition policies</li>
            <li>Research supervision matters</li>
            <li>Research publications</li>
            <li>Thesis/Project-related issues</li>
          </ul>
        </div>

        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          Without proper guidance, students often waste valuable time, lose
          opportunities, and face unnecessary academic stress. TaleemiGuide
          provides a One-Window Guidance for all such problems.
        </p>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 3) HOW TALEEMIGUIDE SUPPORTS
// --------------------------------------------------------------------
const HowSupportsSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-3"
          style={{ color: COLORS.primaryDark }}
        >
          How TaleemiGuide Supports
        </h2>
        <p
          className="text-sm sm:text-base leading-relaxed max-w-3xl"
          style={{ color: COLORS.textGray }}
        >
          Our approach is comprehensive and student-centered, focusing not only
          on academic solutions but also on personal and emotional support.
        </p>
      </div>

      {/* 3-STEP VERTICAL FLOW */}
      <div className="space-y-6">
        {/* Academic Advisement */}
        <div
          className="flex gap-4 items-start rounded-2xl p-5 sm:p-6"
          style={baseCardStyle}
        >
          <div className="flex flex-col items-center flex-none pt-1">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <BookOpenCheck size={20} style={{ color: COLORS.secondary }} />
            </div>
          </div>
          <div className="space-y-2">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              1️⃣ Academic Advisement
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              We offer expert academic guidance to all undergraduate and
              graduate students. TaleemiGuide works like 1122 for academic
              emergencies — accessible, fast, and reliable.
            </p>
          </div>
        </div>

        {/* Career Counseling */}
        <div
          className="flex gap-4 items-start rounded-2xl p-5 sm:p-6"
          style={baseCardStyle}
        >
          <div className="flex flex-col items-center flex-none pt-1">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <Users size={20} style={{ color: COLORS.secondary }} />
            </div>
          </div>
          <div className="space-y-2">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              2️⃣ Career Counseling
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              We guide students in exploring career options, understanding the
              pros and cons of various specializations, identifying suitable
              MS/MPhil or PhD pathways, preparing for internships and job
              placements, and strengthening their interview readiness — all in
              one place.
            </p>
          </div>
        </div>

        {/* EQ Support */}
        <div
          className="flex gap-4 items-start rounded-2xl p-5 sm:p-6"
          style={baseCardStyle}
        >
          <div className="flex flex-col items-center flex-none pt-1">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <HeartHandshake size={20} style={{ color: COLORS.secondary }} />
            </div>
          </div>
          <div className="space-y-2">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              3️⃣ Emotional Intelligence (EQ) Support
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              A strong EQ is vital for success in university and professional
              life, and our counselors help students build self-awareness,
              manage stress, strengthen motivation and resilience, maintain
              work-life balance, and develop confident problem-solving skills —
              with a safe space to discuss concerns and receive practical
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 4) OUR EXPERT TEAM
// --------------------------------------------------------------------
const ExpertTeamSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-3"
          style={{ color: COLORS.primaryDark }}
        >
          Our Expert Team
        </h2>
      </div>

      <div
        className="rounded-3xl p-6 sm:p-7"
        style={{
          backgroundColor: COLORS.surface,
          border: `1px solid ${COLORS.borderSoft}`,
          boxShadow: "0 10px 25px rgba(15,23,42,0.06)",
        }}
      >
        <p
          className="text-sm sm:text-base leading-relaxed mb-3"
          style={{ color: COLORS.textGray }}
        >
          TaleemiGuide’s team includes:
        </p>

        <ul
          className="list-disc list-inside space-y-1 text-sm sm:text-base mb-4"
          style={{ color: COLORS.textGray }}
        >
          <li>Educationists</li>
          <li>Academicians</li>
          <li>Industry professionals</li>
          <li>Career advisors</li>
          <li>Psychologists</li>
          <li>Certified counselors</li>
        </ul>

        <p
          className="text-sm sm:text-base leading-relaxed font-semibold"
          style={{ color: COLORS.primaryDark }}
        >
          Their combined experience ensures that every student gets accurate,
          practical, and reliable guidance.
        </p>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 5) TALEEMI ADVICE FORM SECTION (GIVEN CODE, JUST WRAPPED)
// --------------------------------------------------------------------
const TaleemiAdviceFormSection = ({ sectionRef }) => {
  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 border-b border-gray-200"
      style={{
        background: `linear-gradient(to bottom right, ${COLORS.lightBackground} 0%, white 100%)`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Title & Description Header */}
          <div className="text-center space-y-3">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold"
              style={{ color: COLORS.primary }}
            >
              Need Quick Help? (Seek Taleemi Advice)
            </h2>

            <p
              className="text-center max-w-2xl mx-auto text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              <span
                className="font-semibold"
                style={{ color: COLORS.primary }}
              >
                Taleemi Advice
              </span>{" "}
              is your academic emergency service. Whether you're choosing
              subjects, facing confusion, stuck in academic challenges, or
              planning a career transition — get expert guidance in time.
            </p>
          </div>

          {/* Form Container Card */}
          <div
            className="relative rounded-3xl p-8 md:p-12"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #BFDBFE",
              boxShadow: "0 18px 40px rgba(15,23,42,0.12)",
            }}
          >
            {/* Form Title */}
            <h3
              className="text-xl md:text-2xl font-semibold mb-8 text-center"
              style={{ color: COLORS.primary }}
            >
              Submit Your Query
            </h3>

            <form className="space-y-6">
              {/* Name, Email, Phone */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {["Name", "Email", "Phone"].map((placeholder, i) => (
                  <div key={i} className="relative">
                    <input
                      type={
                        placeholder === "Email"
                          ? "email"
                          : placeholder === "Phone"
                          ? "tel"
                          : "text"
                      }
                      placeholder=" "
                      className="w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 focus:outline-none focus:border-2 focus:ring-0 transition peer bg-white hover:border-gray-400 duration-300"
                      style={{
                        borderColor: "#E5E7EB",
                      }}
                    />
                    {/* Floating Label */}
                    <label
                      className="absolute left-4 top-2 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs"
                      style={{ color: COLORS.textGray }}
                    >
                      {placeholder}
                    </label>
                  </div>
                ))}
              </div>

              {/* Dropdown */}
              <div className="relative">
                <select
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-2 focus:ring-0 transition bg-white appearance-none hover:border-gray-400 duration-300"
                  style={{
                    borderColor: "#E5E7EB",
                    paddingTop: "1rem",
                    paddingBottom: "0.5rem",
                  }}
                >
                  <option disabled defaultValue="">
                    Select your category
                  </option>
                 <option>BA/BSc</option>
                <option>Associate Degree</option>
                <option>BS & Equivalent</option>
                </select>
              </div>

              {/* Query Textarea */}
              <div className="relative">
                <textarea
                  rows="4"
                  placeholder=" "
                  className="w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 focus:outline-none focus:border-2 focus:ring-0 transition peer bg-white hover:border-gray-400 duration-300"
                  style={{
                    borderColor: "#E5E7EB",
                  }}
                ></textarea>
                {/* Floating Label */}
                <label
                  className="absolute left-4 top-2 text-xs transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs"
                  style={{ color: COLORS.textGray }}
                >
                  Enter your query
                </label>
              </div>

              {/* File Upload */}
              <div>
                <label
                  className="block mb-2 font-medium text-sm"
                  style={{ color: COLORS.primary }}
                >
                  Supporting Documents (Optional)
                </label>
                <div className="flex flex-wrap items-center gap-4">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer px-5 py-2 rounded-lg transition transform hover:scale-[1.02] duration-300 font-medium"
                    style={{
                      backgroundColor: COLORS.secondary,
                      color: "white",
                      boxShadow:
                        "0 4px 6px -1px rgba(249, 115, 22, 0.5), 0 2px 4px -2px rgba(249, 115, 22, 0.5)",
                    }}
                  >
                    Choose Files
                  </label>
                  <span
                    className="text-sm"
                    style={{ color: COLORS.textGray }}
                  >
                    No file chosen
                  </span>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    multiple
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-[1.01]"
                style={{
                  backgroundColor: COLORS.primary,
                  color: "white",
                  boxShadow:
                    "0 10px 15px -3px rgba(30, 58, 138, 0.5), 0 4px 6px -4px rgba(30, 58, 138, 0.5)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.secondary)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = COLORS.primary)
                }
              >
                Click Here to Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// --------------------------------------------------------------------
// 6) ONLINE SESSION SECTION
// --------------------------------------------------------------------
const OnlineSessionSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="rounded-3xl p-6 sm:p-7"
        style={baseCardStyle}
      >
        <p
          className="text-sm sm:text-base leading-relaxed mb-4"
          style={{ color: COLORS.textGray }}
        >
          Most academic issues are resolved through the portal. However, if you
          want deeper discussion or personalized conversation, you may book an
          online counseling session with our experts.
        </p>

        <NavLink
          to="/service/online-session"
          className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
          style={{
            backgroundColor: COLORS.secondary,
            color: "white",
          }}
        >
          Book Online Session
          <ArrowRight size={18} className="ml-2" />
        </NavLink>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 7) NEXT STEP IN THE JOURNEY
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
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-5 max-w-3xl"
            style={{ color: COLORS.textGray }}
          >
            As students graduate and enter the professional world, new
            challenges emerge — and TaleemiGuide continues helping through our
            next service: Working Professionals.
          </p>

          <NavLink
            to="/service/working-professional-guidance"
            className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-lg font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
            style={{
              backgroundColor: COLORS.secondary,
              color: "white",
            }}
          >
            Go to Working Professionals Guidance
            <ArrowRight size={18} className="ml-2" />
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// MAIN COMPONENT
// --------------------------------------------------------------------
export default function UniversityGraduatesGuidance() {
  const adviceSectionRef = useRef(null);

  return (
    <ServiceLayout>
      <HeroSection />
      <CommonChallengesSection />
      <HowSupportsSection />
      <ExpertTeamSection />
      <TaleemiAdviceFormSection sectionRef={adviceSectionRef} />
      <OnlineSessionSection />
      <NextStepSection />
    </ServiceLayout>
  );
}
