import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  BriefcaseBusiness,
  Target,
  GraduationCap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";
import workingProfessionalsHero from "../../assets/service-images/Working-Professionals.jpg";

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
            Today’s job market is evolving rapidly — new skills, new
            technologies, and new career paths. Many professionals feel stuck,
            confused, or unsure about their next step. TaleemiGuide helps you
            make informed, confident decisions about your professional future.
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
                src={workingProfessionalsHero}
                alt="Working professional receiving guidance"
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
// 2) HOW TALEEMIGUIDE SUPPORT WORKING PROFESSIONALS
// --------------------------------------------------------------------
const HowSupportsSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-3"
          style={{ color: COLORS.primaryDark }}
        >
          How TaleemiGuide Support Working Professionals
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* Item 1 */}
        <div
          className="rounded-2xl p-5 sm:p-6 flex gap-4"
          style={baseCardStyle}
        >
          <div className="flex-none pt-1">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <Target size={20} style={{ color: COLORS.secondary }} />
            </div>
          </div>
          <div className="space-y-2">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              ✔ Career Direction & Planning
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              Identify the right career path based on your education,
              experience, interests, and long-term goals.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div
          className="rounded-2xl p-5 sm:p-6 flex gap-4"
          style={baseCardStyle}
        >
          <div className="flex-none pt-1">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <GraduationCap size={20} style={{ color: COLORS.secondary }} />
            </div>
          </div>
          <div className="space-y-2">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              ✔ Education & Qualification Alignment
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              Understand which certifications, diplomas, or degrees will
              benefit your career growth — and which ones are unnecessary.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div
          className="rounded-2xl p-5 sm:p-6 flex gap-4"
          style={baseCardStyle}
        >
          <div className="flex-none pt-1">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <Sparkles size={20} style={{ color: COLORS.secondary }} />
            </div>
          </div>
          <div className="space-y-2">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              ✔ Skill Gap Identification
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              Learn which skills you need to advance or switch careers and how
              to start building them.
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div
          className="rounded-2xl p-5 sm:p-6 flex gap-4"
          style={baseCardStyle}
        >
          <div className="flex-none pt-1">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <BriefcaseBusiness
                size={20}
                style={{ color: COLORS.secondary }}
              />
            </div>
          </div>
          <div className="space-y-2">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              ✔ Career Transitions & Field Switching
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              Whether you want to shift from one field to another or restart
              your career, we guide you with realistic, practical pathways.
            </p>
          </div>
        </div>

        {/* Item 5 */}
        <div
          className="rounded-2xl p-5 sm:p-6 flex gap-4"
          style={baseCardStyle}
        >
          <div className="flex-none pt-1">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <GraduationCap size={20} style={{ color: COLORS.secondary }} />
            </div>
          </div>
          <div className="space-y-2">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              ✔ Higher Education Guidance
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              Discover suitable postgraduate programs (MS, MPhil, MBA, etc.)
              based on your eligibility and goals.
            </p>
          </div>
        </div>

        {/* Item 6 */}
        <div
          className="rounded-2xl p-5 sm:p-6 flex gap-4"
          style={baseCardStyle}
        >
          <div className="flex-none pt-1">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <BriefcaseBusiness
                size={20}
                style={{ color: COLORS.secondary }}
              />
            </div>
          </div>
          <div className="space-y-2">
            <p
              className="text-sm sm:text-base font-semibold"
              style={{ color: COLORS.primaryDark }}
            >
              ✔ Professional Challenges
            </p>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              Get help with workplace confusion, stagnation, qualification
              mismatch, and other issues that slow career progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 3) OUR APPROACH
// --------------------------------------------------------------------
const OurApproachSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-3"
          style={{ color: COLORS.primaryDark }}
        >
          Our Approach
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
          Our guidance for professionals is built on:
        </p>

        <ul
          className="list-disc list-inside space-y-1 text-sm sm:text-base mb-4"
          style={{ color: COLORS.textGray }}
        >
          <li>Industry insights</li>
          <li>Educational expertise</li>
          <li>Psychometric understanding</li>
          <li>Personalized counselling</li>
        </ul>

        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          We help you connect your education, skills, and ambitions to create a
          career path that truly suits you.
        </p>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 4) WHO CAN BENEFIT?
// --------------------------------------------------------------------
const WhoCanBenefitSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-3"
          style={{ color: COLORS.primaryDark }}
        >
          Who Can Benefit?
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
        <ul
          className="list-disc list-inside space-y-1 text-sm sm:text-base"
          style={{ color: COLORS.textGray }}
        >
          <li>Early-career professionals</li>
          <li>Mid-career individuals planning advancement</li>
          <li>Professionals seeking higher education</li>
          <li>Those wanting to switch industries</li>
          <li>Individuals facing qualification mismatch</li>
          <li>Anyone feeling stuck or confused in their career</li>
        </ul>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// 5) SEEK TALEEMI ADVICE (GIVEN CODE)
// --------------------------------------------------------------------
const SeekTaleemiAdviceSection = ({ sectionRef }) => {
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
              Seek Taleemi Advice
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
                  <option>Class 10-12</option>
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
// 6) NEXT STEP IN THE JOURNEY
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
            As your professional life evolves, new decisions and questions will
            always appear. For ongoing support with education, skills, and
            career moves, you can continue taking help through Taleemi Advice —
            your always-available guidance support.
          </p>

          <NavLink
            to="/service/taleemi-advice"
            className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-lg font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
            style={{
              backgroundColor: COLORS.secondary,
              color: "white",
            }}
          >
            Go to Taleemi Advice
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
export default function WorkingProfessionalsGuidance() {
  const adviceSectionRef = useRef(null);

  return (
    <ServiceLayout>
      <HeroSection />
      <HowSupportsSection />
      <OurApproachSection />
      <WhoCanBenefitSection />
      <SeekTaleemiAdviceSection sectionRef={adviceSectionRef} />
      <NextStepSection />
    </ServiceLayout>
  );
}
