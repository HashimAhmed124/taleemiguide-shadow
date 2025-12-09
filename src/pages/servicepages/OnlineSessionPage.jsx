import React from "react";
import { NavLink } from "react-router-dom";
import ServiceLayout from "../../components/ServiceLayout";
import onlineSessionHero from "../../assets/service-images/Online-Session.jpg"; 

const COLORS = {
  primary: "#1E3A8A",
  primaryDark: "#11253e",
  secondary: "#F97316",
  textGray: "#4B5563",
  lightBackground: "#EFF6FF",
  surface: "#F8FAFC",
  borderSoft: "#E5E7EB",
};

// 1) HERO SECTION ----------------------------------------------------
const HeroSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* LEFT – TEXT */}
        <div>
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-4"
            style={{ color: COLORS.primaryDark }}
          >
            Book Online Session
          </h2>

          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: COLORS.textGray }}
          >
            Whether you’re a student choosing a specialization, a parent seeking
            clarity, a college/university graduate facing academic challenges,
            or a working professional navigating career transitions, our expert
            counselors are here to provide clear, precise, and personalized
            guidance. An online session gives you the chance to discuss your
            concerns in detail and receive expert-led strategies tailored
            specifically to your goals.
          </p>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="flex md:justify-end">
          <div
            className="overflow-hidden rounded-3xl border border-gray-200 bg-slate-50 w-full max-w-md"
            style={{
              boxShadow: "0 16px 40px rgba(15,23,42,0.08)",
            }}
          >
            <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96">
              <img
                src={onlineSessionHero}
                alt="Online counseling session with TaleemiGuide counselors"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
//---------------------------------------------------------------------
// 2) WHY CHOOSE TALEEMIGUIDE ONLINE SESSIONS -------------------------
//---------------------------------------------------------------------
const WhyChooseSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8"
        style={{ color: COLORS.primaryDark }}
      >
        Why Choose TaleemiGuide Online Sessions?
      </h2>

      {/* Single-column qualities */}
      <div className="space-y-8 sm:space-y-10">
        {/* 1. Expert Guidance */}
        <div className="flex gap-4 sm:gap-5">
          <div className="mt-1 flex-shrink-0">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
                color: COLORS.primaryDark,
              }}
            >
              01
            </div>
          </div>

          <div className="flex-1 border-b border-gray-200 pb-6 sm:pb-7">
            <p
              className="text-sm sm:text-base font-semibold mb-2"
              style={{ color: COLORS.primaryDark }}
            >
              Expert Guidance
            </p>

            <p
              className="text-sm sm:text-base leading-relaxed mb-2"
              style={{ color: COLORS.textGray }}
            >
              Our team includes highly experienced:
            </p>

            <ul
              className="list-disc list-inside space-y-1 text-sm sm:text-base mb-3"
              style={{ color: COLORS.textGray }}
            >
              <li>Educationists</li>
              <li>Academicians</li>
              <li>Industry professionals</li>
              <li>Domain specialists</li>
              <li>Psychologists</li>
              <li>Certified counselors</li>
            </ul>

            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              Customized to your concerns, they provide deep insights, accurate
              information, and practical strategies for academic and
              professional success.
            </p>
          </div>
        </div>

        {/* 2. Total Convenience */}
        <div className="flex gap-4 sm:gap-5">
          <div className="mt-1 flex-shrink-0">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
                color: COLORS.primaryDark,
              }}
            >
              02
            </div>
          </div>

          <div className="flex-1 border-b border-gray-200 pb-6 sm:pb-7">
            <p
              className="text-sm sm:text-base font-semibold mb-2"
              style={{ color: COLORS.primaryDark }}
            >
              Total Convenience
            </p>

            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              No travel, no waiting, no scheduling stress. Book a session at a
              time that suits you — from the comfort of your home, office, or
              anywhere.
            </p>
          </div>
        </div>

        {/* 3. Personalized Support */}
        <div className="flex gap-4 sm:gap-5">
          <div className="mt-1 flex-shrink-0">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
                color: COLORS.primaryDark,
              }}
            >
              03
            </div>
          </div>

          <div className="flex-1 border-b border-gray-200 pb-6 sm:pb-7">
            <p
              className="text-sm sm:text-base font-semibold mb-2"
              style={{ color: COLORS.primaryDark }}
            >
              Personalized Support
            </p>

            <p
              className="text-sm sm:text-base leading-relaxed mb-2"
              style={{ color: COLORS.textGray }}
            >
              Every student and professional has unique circumstances. We offer
              guidance tailored to your:
            </p>

            <ul
              className="list-disc list-inside space-y-1 text-sm sm:text-base"
              style={{ color: COLORS.textGray }}
            >
              <li>Goals</li>
              <li>Strengths</li>
              <li>Academic background</li>
              <li>Career aspirations</li>
              <li>Personal challenges</li>
            </ul>
          </div>
        </div>

        {/* 4. Confidentiality Guaranteed */}
        <div className="flex gap-4 sm:gap-5">
          <div className="mt-1 flex-shrink-0">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                backgroundColor: COLORS.lightBackground,
                border: `1px solid ${COLORS.borderSoft}`,
                color: COLORS.primaryDark,
              }}
            >
              04
            </div>
          </div>

          <div className="flex-1">
            <p
              className="text-sm sm:text-base font-semibold mb-2"
              style={{ color: COLORS.primaryDark }}
            >
              Confidentiality Guaranteed
            </p>

            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: COLORS.textGray }}
            >
              Your privacy is our top priority. All sessions are conducted
              through secure and encrypted channels to ensure that your
              information and discussions remain strictly confidential.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

//---------------------------------------------------------------------
// 3) WHAT TO EXPECT IN THE SESSION -----------------------------------
//---------------------------------------------------------------------
const WhatToExpectSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className="text-2xl sm:text-3xl font-extrabold mb-4"
        style={{ color: COLORS.primaryDark }}
      >
        What to Expect in the Session
      </h2>

      <div
        className="rounded-3xl p-6 sm:p-7"
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
          During your session, you will have the opportunity to discuss:
        </p>

        <ul
          className="list-disc list-inside space-y-1 text-sm sm:text-base mb-4"
          style={{ color: COLORS.textGray }}
        >
          <li>Academic choices (At your desired level of study)</li>
          <li>Career direction and planning</li>
          <li>University admission concerns</li>
          <li>Program and specialization selection</li>
          <li>Workplace challenges and transitions</li>
          <li>Stress, motivation, confidence, or work-life balance</li>
          <li>Any academic or career-related issue</li>
        </ul>

        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          Our counselors will listen attentively, analyze your situation, and
          offer realistic, actionable strategies that guide you toward your
          goals.
        </p>
      </div>
    </div>
  </section>
);

//---------------------------------------------------------------------
// 4) HOW TO BOOK YOUR SESSION ----------------------------------------
//---------------------------------------------------------------------
const HowToBookSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className="text-2xl sm:text-3xl font-extrabold mb-6"
        style={{ color: COLORS.primaryDark }}
      >
        How to Book Your Session
      </h2>

      <div className="space-y-4">
        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          Step 1: Click “Book an Appointment” on the Home Page.
        </p>
        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          Step 2: Select your preferred date and time from the available slots.
        </p>
        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          Step 3: Fill out the short booking form and attach any documents you
          want us to review.
        </p>
        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ color: COLORS.textGray }}
        >
          Step 4: Receive a confirmation email with instructions and a secure
          link to join session.
        </p>
      </div>
    </div>
  </section>
);

//---------------------------------------------------------------------
// 5) INVEST IN YOUR FUTURE -------------------------------------------
//---------------------------------------------------------------------
const InvestInYourFutureSection = () => (
  <section className="py-10 border-b border-gray-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className="text-2xl sm:text-3xl font-extrabold mb-4"
        style={{ color: COLORS.primaryDark }}
      >
        Invest in Your Future
      </h2>

      <p
        className="text-sm sm:text-base leading-relaxed mb-6 max-w-3xl"
        style={{ color: COLORS.textGray }}
      >
        A single conversation with the right expert can change your direction —
        and your future.
        <br />
        Take the next step toward clarity, confidence, and achievement.
      </p>

      <button
        type="button"
        className="w-full sm:w-auto text-left sm:text-center rounded-3xl px-6 py-5 sm:px-8 sm:py-6 font-semibold text-sm sm:text-base transition-transform duration-200 hover:scale-[1.02]"
        style={{
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(249,115,22,0.12))",
          color: COLORS.primaryDark,
          boxShadow: "0 14px 35px rgba(15,23,42,0.18)",
          border: `1px solid ${COLORS.borderSoft}`,
        }}
      >
        Book your online session today and receive personalized guidance from
        the experts at TaleemiGuide.
      </button>
    </div>
  </section>
);

//---------------------------------------------------------------------
// 6) NEXT STEP IN THE JOURNEY ----------------------------------------
//---------------------------------------------------------------------
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
            After your session, stay connected with new scholarships,
            admissions, opportunities, and career updates through our section:
            Taleemi Announcements.
          </p>

          <NavLink
            to="/service/announcement"
            className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-lg font-semibold rounded-xl shadow-md transition-transform duration-200 hover:scale-[1.03]"
            style={{
              backgroundColor: COLORS.secondary,
              color: "white",
            }}
          >
            Go to Taleemi Announcements
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

//---------------------------------------------------------------------
// MAIN PAGE ----------------------------------------------------------
//---------------------------------------------------------------------
export default function BookOnlineSession() {
  return (
    <ServiceLayout>
      <HeroSection />
      <WhyChooseSection />
      <WhatToExpectSection />
      <HowToBookSection />
      <InvestInYourFutureSection />
      <NextStepSection />
    </ServiceLayout>
  );
}
