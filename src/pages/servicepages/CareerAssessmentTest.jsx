import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, ClipboardList, Brain, FileText } from "lucide-react";
import ServiceLayout from "../../components/ServiceLayout";
import careerHero from "../../assets/service-images/Career-Assessment-Test.jpg"; 

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
      {/* Top row: text + image */}
      <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
        {/* LEFT: main text */}
        <div>
          <p
            className="text-sm sm:text-base leading-relaxed mb-4"
            style={{ color: COLORS.textGray }}
          >
            In today’s world of thousands of colleges, hundreds of universities
            and thousands of programs, along with rapidly emerging fields,
            choosing the right specialization is one of the hardest decisions
            students and parents face.
            <br />
          </p>

          <p
            className="text-sm sm:text-base font-semibold leading-relaxed mb-3"
            style={{ color: COLORS.primaryDark }}
          >
            The good news? TaleemiGuide has made it easier, clearer, and
            scientific.
          </p>

          <p
            className="text-sm sm:text-base leading-relaxed mb-4"
            style={{ color: COLORS.textGray }}
          >
            Our Career Assessment Test is based on internationally recognized models, 
            validated methodologies, and years of experience in psychology, counseling, 
            and academic advising. The test helps you understand who you are, 
            what career paths match your personality, interests, values, and strengths, 
            and which academic direction fits your future.

            <br />
            <br />

            Whether you are a Matric student choosing a stream, 
            an intermediate student selecting a BS degree, 
            a university student reconsidering your field, 
            or a professional exploring career transitions — this test gives you the clarity you need. 
          </p>

        </div>

        {/* RIGHT: hero image */}
        <div className="flex md:justify-end">
          <div
            className="overflow-hidden rounded-3xl border border-gray-200 bg-slate-50 w-full max-w-md"
            style={{
              boxShadow: "0 16px 40px rgba(15,23,42,0.08)",
            }}
          >
            <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96">
              <img
                src={careerHero}
                alt="Career Assessment Test – helping you choose the right specialization"
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
// 2) WHY TAKE TALEEMIGUIDE’S CAREER ASSESSMENT TEST?
// --------------------------------------------------------------------
const WhyTakeSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Title */}
      <div className="mb-6 sm:mb-8">
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-3"
          style={{ color: COLORS.primaryDark }}
        >
          Why Take TaleemiGuide’s Career Assessment Test?
        </h2>
      </div>

      {/* SINGLE COLUMN CONTENT */}
      <div className="space-y-8">

        {/* Point 1 */}
        <div className="space-y-2">
          <p
            className="text-sm sm:text-base font-semibold flex items-start gap-2"
            style={{ color: COLORS.primaryDark }}
          >
            ✔ In-Depth Personality & Interest Analysis
          </p>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            Understand your personality type, work preferences, motivations,
            and natural strengths — and match them with real career options.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full" style={{ backgroundColor: COLORS.borderSoft }} />

        {/* Point 2 */}
        <div className="space-y-2">
          <p
            className="text-sm sm:text-base font-semibold flex items-start gap-2"
            style={{ color: COLORS.primaryDark }}
          >
            ✔ Scientifically Designed & Expert-Backed
          </p>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            Created by psychologists, career counselors, educationists, and
            industry experts using global career frameworks.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full" style={{ backgroundColor: COLORS.borderSoft }} />

        {/* Point 3 */}
        <div className="space-y-2">
          <p
            className="text-sm sm:text-base font-semibold"
            style={{ color: COLORS.primaryDark }}
          >
            ✔ Personalized Career Report
          </p>

          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            Receive a comprehensive report with:
          </p>

          <ul
            className="list-disc list-inside space-y-1 text-sm sm:text-base"
            style={{ color: COLORS.textGray }}
          >
            <li>Your top interests</li>
            <li>Strengths & aptitude</li>
            <li>Personality traits</li>
            <li>Top best-fit career paths</li>
            <li>Recommended academic fields</li>
            <li>Suitable degree programs</li>
            <li>
              Guidance using TaleemiGuide’s Subject Classification (1000+
              subjects)
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="h-px w-full" style={{ backgroundColor: COLORS.borderSoft }} />

        {/* Point 4 */}
        <div className="space-y-2">
          <p
            className="text-sm sm:text-base font-semibold"
            style={{ color: COLORS.primaryDark }}
          >
            ✔ Easy for All Levels
          </p>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            Written in simple language — perfect for students from Matric to
            Post-Graduation.
          </p>
        </div>

      </div>
    </div>
  </section>
);


// --------------------------------------------------------------------
// 3) HOW IT WORKS SECTION
// --------------------------------------------------------------------
const HowItWorksSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="mb-8">
        <h2
          className="text-2xl sm:text-3xl font-extrabold mb-3"
          style={{ color: COLORS.primaryDark }}
        >
          How It Works
        </h2>
      </div>

      {/* Timeline wrapper */}
      <div className="relative mb-10">
        {/* Vertical line  */}
        <div
          className="absolute left-4 sm:left-5 top-0 bottom-0"
          style={{
            borderLeft: `2px dashed ${COLORS.borderSoft}`,
          }}
        />

        <div className="space-y-8">
          {/* STEP 1 */}
          <div className="relative flex gap-4 sm:gap-6">
            {/* Step marker */}
            <div className="flex flex-col items-center flex-none">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10"
                style={{
                  backgroundColor: COLORS.lightBackground,
                  color: COLORS.primaryDark,
                  border: `1px solid ${COLORS.borderSoft}`,
                  boxShadow: "0 4px 10px rgba(15,23,42,0.10)",
                }}
              >
                1
              </div>
            </div>

            {/* Content */}
            <div
              className="flex-1 rounded-2xl px-4 py-3 sm:px-5 sm:py-4"
              style={{
                backgroundColor: COLORS.surface,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <p
                className="text-sm sm:text-base font-semibold mb-2"
                style={{ color: COLORS.primaryDark }}
              >
                Sign Up
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: COLORS.textGray }}
              >
                Login at TaleemiGuide.com
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative flex gap-4 sm:gap-6">
            {/* Step marker */}
            <div className="flex flex-col items-center flex-none">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10"
                style={{
                  backgroundColor: COLORS.lightBackground,
                  color: COLORS.primaryDark,
                  border: `1px solid ${COLORS.borderSoft}`,
                  boxShadow: "0 4px 10px rgba(15,23,42,0.10)",
                }}
              >
                2
              </div>
            </div>

            {/* Content */}
            <div
              className="flex-1 rounded-2xl px-4 py-3 sm:px-5 sm:py-4"
              style={{
                backgroundColor: COLORS.surface,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <p
                className="text-sm sm:text-base font-semibold mb-2"
                style={{ color: COLORS.primaryDark }}
              >
                Complete the Test
              </p>

              <p
                className="text-sm sm:text-base leading-relaxed mb-2"
                style={{ color: COLORS.textGray }}
              >
                Click Career Assessment Test and begin.
              </p>

              <p
                className="text-sm sm:text-base leading-relaxed mb-1"
                style={{ color: COLORS.textGray }}
              >
                Relax and attempt it at your own pace:
              </p>

              <ul
                className="list-disc list-inside text-sm sm:text-base space-y-1"
                style={{ color: COLORS.textGray }}
              >
                <li>Takes 30–45 minutes</li>
                <li>You may pause anytime</li>
                <li>Your responses auto-save</li>
              </ul>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="relative flex gap-4 sm:gap-6">
            {/* Step marker */}
            <div className="flex flex-col items-center flex-none">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10"
                style={{
                  backgroundColor: COLORS.lightBackground,
                  color: COLORS.primaryDark,
                  border: `1px solid ${COLORS.borderSoft}`,
                  boxShadow: "0 4px 10px rgba(15,23,42,0.10)",
                }}
              >
                3
              </div>
            </div>

            {/* Content */}
            <div
              className="flex-1 rounded-2xl px-4 py-3 sm:px-5 sm:py-4"
              style={{
                backgroundColor: COLORS.surface,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <p
                className="text-sm sm:text-base font-semibold mb-2"
                style={{ color: COLORS.primaryDark }}
              >
                Receive Your Report
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: COLORS.textGray }}
              >
                Your personalized career report will be available on your
                dashboard within 24 hours.
              </p>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="relative flex gap-4 sm:gap-6">
            {/* Step marker */}
            <div className="flex flex-col items-center flex-none">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10"
                style={{
                  backgroundColor: COLORS.lightBackground,
                  color: COLORS.primaryDark,
                  border: `1px solid ${COLORS.borderSoft}`,
                  boxShadow: "0 4px 10px rgba(15,23,42,0.10)",
                }}
              >
                4
              </div>
            </div>

            {/* Content */}
            <div
              className="flex-1 rounded-2xl px-4 py-3 sm:px-5 sm:py-4"
              style={{
                backgroundColor: COLORS.surface,
                border: `1px solid ${COLORS.borderSoft}`,
              }}
            >
              <p
                className="text-sm sm:text-base font-semibold mb-2"
                style={{ color: COLORS.primaryDark }}
              >
                Discuss Your Results (Optional)
              </p>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: COLORS.textGray }}
              >
                If you want deeper insight, book an online session with our expert
                counselors who will walk you through your results and guide your
                next steps.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal CTA card  */}
      <div
        className="rounded-3xl px-6 py-6 sm:px-8 sm:py-7 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(249,115,22,0.10))",
          border: `1px solid ${COLORS.borderSoft}`,
          boxShadow: "0 14px 35px rgba(15,23,42,0.10)",
        }}
      >
        <p
          className="text-sm sm:text-lg font-semibold leading-relaxed max-w-3xl mx-auto"
          style={{ color: COLORS.primaryDark }}
        >
          Take the Career Assessment Test, unlock your strengths, discover your
          ideal field,
          <br className="hidden sm:block" />
          choose your future with confidence
        </p>
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
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-5 max-w-3xl"
            style={{ color: COLORS.textGray }}
          >
            Once you know your best-fit fields, the next step is to explore all
            subjects available in Pakistan — traditional and emerging — through
            our Subject Classification system.
          </p>

          <NavLink
            to="/service/subject-classification"
            className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-lg font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
            style={{
              backgroundColor: COLORS.secondary,
              color: "white",
            }}
          >
            Explore Subject Classification
            <ArrowRight size={18} className="ml-2" />
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

// --------------------------------------------------------------------
// MAIN PAGE COMPONENT
// --------------------------------------------------------------------
export default function CareerAssessmentTestPage() {
  return (
    <ServiceLayout>
      <HeroSection />
      <WhyTakeSection />
      <HowItWorksSection />
      <NextStepSection />
    </ServiceLayout>
  );
}
