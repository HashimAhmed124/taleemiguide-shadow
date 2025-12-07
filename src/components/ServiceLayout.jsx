// ServiceLayout.jsx

import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronRight, Zap } from "lucide-react";

// THEME
const COLORS = {
  primary: "#1E3A8A",
  secondary: "#F97316",
  textGray: "#4B5563",
  lightBackground: "#EFF6FF",
  primaryDark: "#0F172A",
  softBorder: "#E5E7EB",
};

// SERVICE LIST
// SERVICE LIST
const serviceData = [
  {
    id: "service-1",
    title: "Class 10 Guidance",
    path: "/service/class-10-guidance",
    subtitle: "Your First Major Academic Decision Starts Here.",
  },
  {
    id: "service-2",
    title: "Class 12 Guidance",
    path: "/service/class-12-guidance",
    subtitle: "Select your specialization and prepare for university admissions.",
  },
  {
    id: "service-3",
    title: "Career Assessment Test",
    path: "/service/career-assessment",
    subtitle: "Discover your strengths, interests, and best-fit academic paths.",
  },
  {
    id: "service-4",
    title: "Subject Classification",
    path: "/service/subject-classification",
    subtitle: "Explore and understand 1000+ academic subjects across all fields.",
  },
  {
    id: "service-5",
    title: "University Program Finder",
    path: "/service/university-program-finder",
    subtitle: "Search every BS, MS/MPhil & PhD program in Pakistan — verified & updated.",
  },
  {
    id: "service-6",
    title: "University Graduates Guidance",
    path: "/service/university-graduates-guidance",
    subtitle: "Resolve academic, administrative, and research challenges with expert help.",
  },
  {
    id: "service-7",
    title: "Working Professionals Guidance",
    path: "/service/working-professional-guidance",
    subtitle: "Align your education, skills, and experience with career growth.",
  },
  {
    id: "service-8",
    title: "Taleemi Advice",
    path: "/service/taleemi-advice",
    subtitle: "Ask any academic question and get quick, expert guidance.",
  },
  {
    id: "service-9",
    title: "Book Online Session",
    path: "/service/online-session",
    subtitle: "Talk to an expert counselor one-on-one for personalized guidance.",
  },
  {
    id: "service-10",
    title: "Taleemi Announcements",
    path: "/service/announcement",
    subtitle: "Stay updated with important academic deadlines and notifications.",
  },
];


// AUTO SCROLL TO TOP
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// SIDEBAR (DESKTOP)
const ServiceSidebar = () => {
  const location = useLocation();

  return (
    <nav
      className="p-4 rounded-2xl sticky top-[6rem] hidden lg:block"
      style={{
        backgroundColor: "white",
        border: `1px solid ${COLORS.softBorder}`,
        boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
      }}
    >
      <div className="mb-5 pb-4 border-b border-gray-100">
        <h3
          className="text-lg font-extrabold flex items-center"
          style={{ color: COLORS.primaryDark }}
        >
          <span
            className="inline-flex items-center justify-center w-8 h-8 rounded-xl mr-2"
            style={{ backgroundColor: COLORS.lightBackground }}
          >
            <Zap size={18} style={{ color: COLORS.secondary }} />
          </span>
          Guidance Navigator
        </h3>

        <p className="mt-1.5 text-sm" style={{ color: COLORS.textGray }}>
          Browse all guidance services in one place.
        </p>
      </div>

      {/* SIDEBAR LINKS */}
      <ul className="space-y-1.5">
        {serviceData.map((service) => {
          const isActive = location.pathname === service.path;

          return (
            <li key={service.id}>
              <NavLink
                to={service.path}
                className={`flex items-center py-2.5 px-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive ? "shadow-sm" : "hover:bg-gray-50"
                }`}
                style={{
                  color: isActive ? COLORS.primaryDark : COLORS.textGray,
                  borderLeft: isActive ? `3px solid ${COLORS.primary}` : "3px solid transparent",
                  backgroundColor: isActive ? COLORS.lightBackground : "transparent",
                }}
              >
                <ChevronRight
                  size={18}
                  className={`mr-2 transition-transform duration-300 ${
                    isActive ? "translate-x-0.5" : "group-hover:translate-x-0.5"
                  }`}
                  style={{
                    color: isActive ? COLORS.primary : COLORS.secondary,
                  }}
                />
                <span className="truncate">{service.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>

      {/* CTA BOX */}
      <div
        className="mt-8 p-4 rounded-2xl text-center border border-dashed"
        style={{
          background:
            "linear-gradient(135deg, rgba(249,115,22,0.06), rgba(37,99,235,0.04))",
          borderColor: COLORS.secondary,
        }}
      >
        <p className="text-sm font-semibold mb-2" style={{ color: COLORS.primaryDark }}>
          Need urgent guidance?
        </p>

        <p className="text-xs mb-3" style={{ color: COLORS.textGray }}>
          Talk to a counselor instantly.
        </p>

        <NavLink
          to="/service/taleemi-advice"
          className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold rounded-xl transition-transform duration-300 shadow-md hover:scale-[1.02]"
          style={{
            backgroundColor: COLORS.secondary,
            color: "white",
          }}
        >
          <Zap size={16} className="mr-1.5" />
          Seek Taleemi Advice
        </NavLink>
      </div>
    </nav>
  );
};

// MOBILE TABS
const ServiceMobileTabs = () => {
  const location = useLocation();

  return (
    <div className="lg:hidden mb-4 -mx-4">
      <div className="flex items-center space-x-2 overflow-x-auto px-4 pb-2 no-scrollbar">
        {serviceData.map((service) => {
          const isActive = location.pathname === service.path;

          return (
            <NavLink
              key={service.id}
              to={service.path}
              className="whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-300"
              style={{
                backgroundColor: isActive ? COLORS.primary : "white",
                color: isActive ? "#FFFFFF" : COLORS.textGray,
                borderColor: isActive ? COLORS.primary : COLORS.softBorder,
                boxShadow: isActive ? "0 10px 25px rgba(15, 23, 42, 0.18)" : "none",
              }}
            >
              {service.title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

// DETECT CURRENT SERVICE
const useCurrentService = () => {
  const location = useLocation();
  return serviceData.find((s) => s.path === location.pathname) || null;
};

// MAIN LAYOUT
const ServiceLayout = ({ children }) => {
  const currentService = useCurrentService();

  return (
    <div
      className="w-full min-h-screen"
      style={{
        fontFamily: "Inter, sans-serif",
        background:
          "radial-gradient(circle at top left, #DBEAFE 0, #EFF6FF 40%, #FFFFFF 80%)",
      }}
    >
      <ScrollToTop />

      {/* 🔵 UPDATED: remove max-w-7xl and let it go full-width */}
      <div className="w-full mx-auto px-3 sm:px-4 lg:px-6 xl:px-10 2xl:px-16 pt-6 pb-10 lg:pb-16">
        <h1
          className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2"
          style={{ color: COLORS.primaryDark }}
        >
          {currentService ? currentService.title : "Our Guidance Services"}
        </h1>

        <p
  className="text-sm sm:text-base max-w-2xl mb-6"
  style={{ color: COLORS.textGray }}
>
  {currentService?.subtitle ||
    "Explore all our academic and career guidance services."}
</p>


        {/* MOBILE TABS */}
        <ServiceMobileTabs />

        {/* 🔵 UPDATED: slightly smaller gap so columns sit closer */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 xl:gap-8">
          {/* 🔵 UPDATED: sidebar narrower, pushes main wider */}
          <div className="lg:w-[20%] xl:w-[18%]">
            <ServiceSidebar />
          </div>

          {/* 🔵 UPDATED: main area wider */}
          <main
            className="lg:w-[80%] xl:w-[82%] rounded-3xl relative overflow-hidden"
            style={{
              backgroundColor: "white",
              boxShadow: "0 22px 45px rgba(15,23,42,0.12)",
              border: `1px solid ${COLORS.softBorder}`,
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 w-56 h-56 rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(circle, rgba(37,99,235,0.15), transparent 70%)",
              }}
            />

            <div className="relative p-5 sm:p-7 lg:p-9">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
