import React from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBriefcase,
  FaBookOpen,
  FaCalendarCheck,
  FaBullhorn,
  FaUniversity,
  FaCodeBranch,
  FaPencilRuler,
  FaSearch
} from "react-icons/fa";

// Services data
const services = [
  {
    icon: <FaBookOpen size={32} />, 
    title: "Class 10 Guidance",
    desc: "Future Begins Here — Choose the Right Path After Class 10 with Confidence.",
    link: "#",
  },
  {
    icon: <FaUniversity size={32} />, 
    title: "Class 12 Guidance",
    desc: "Decide Smart — The Right Choice After Class 12 Defines Success.",
    link: "#",
  },
  {
    icon: <FaPencilRuler size={32} />, 
    title: "Career Assessment Test",
    desc: "One Platform, Thousands of Subjects - Find Exactly Where You Fit.",
    link: "#",
  },
  {
    icon: <FaCodeBranch size={32} />,
    title: "Subject Classification",
    desc: "Find Your Place in the World of Knowledge — Simplified Subject Classification.",
    link: "#",
  },
  {
    icon: <FaSearch size={32} />, 
    title: "University Program Finder",
    desc: "Search. Compare. Decide — Every BS, MS & PhD Program in One Place.",
    link: "#",
  },
  {
    icon: <FaUserGraduate size={32} />,
    title: "University Graduates",
    desc: "Your Academic Partner — Simplifying the Complexities of Higher Education.",
    link: "#",
  },
  {
    icon: <FaBriefcase size={32} />, 
    title: "Working Professionals",
    desc: "Helping Professionals - Connect Education, Experience, and Ambition.",
    link: "#",
  },
  {
    icon: <FaChalkboardTeacher size={32} />, 
    title: "Taleemi Advice",
    desc: "A Quick-Response Service Providing Fast-Track Educational Solutions — Like 1122 for Students.",
    link: "#",
  },
  {
    icon: <FaCalendarCheck size={32} />,
    title: "Book Online Session",
    desc: "Personalized Academic & Career Guidance, Anytime, Anywhere.",
    link: "#",
  },
  {
    icon: <FaBullhorn size={32} />,
    title: "Taleemi Announcements",
    desc: "Stay updated with the latest academic opportunities and news.",
    link: "#",
  },
];

export default function OurServices() {
  return (
    // Responsive Padding: py-12 on mobile, py-20 on large screens
    <section className="relative w-full bg-gradient-to-br from-[#EFF6FF] via-[#E0F2FF] to-[#FDF6E3] py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        
        <div className="absolute w-64 h-64 bg-[#3B82F6]/10 rounded-full top-16 left-12 animate-pulse blur-2xl"></div>
        <div className="absolute w-80 h-80 bg-[#F97316]/10 rounded-full bottom-12 right-16 animate-pulse blur-3xl"></div>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Header - max-w-2xl on mobile, max-w-4xl on large screens */}
      <div className="text-center max-w-2xl lg:max-w-4xl mx-auto mb-12 relative z-10">
        <h3 className="text-[#F97316] font-semibold text-base sm:text-lg">Our Services</h3>
        {/* Responsive Heading Size: text-2xl on mobile, text-4xl on large screens */}
        <h2 className="text-[#1E3A8A] text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-2">
          Explore How TaleemiGuide Can Help You
        </h2>
        {/* Responsive Paragraph Size */}
        <p className="text-[#4B5563] mt-4 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
          At TaleemiGuide, we offer a one-window solution for students from Grade 10 to post-graduation, 
          as well as for graduates and professionals seeking career growth or job transitions. 
          Your success is our mission.
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* GRID COLUMNS: 1 (mobile) -> 2 (sm) -> 3 (md) -> 5 (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <a 
              key={index}
              href={service.link}
              className="group block"
            >
              <div className="bg-white h-full rounded-2xl shadow-xl p-6 text-center flex flex-col items-center justify-between gap-4 transform transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-b-4 hover:border-[#F97316] border-b-4 border-transparent">
                
                {/* Icon Size is static but padding is responsive if needed */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#F97316] text-white text-2xl shadow-md transition-all duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
                
                {/* Content */}
                <div className="flex-grow flex flex-col items-center justify-center">
                  {/* Card Title Size: text-base on mobile, text-lg on large screens */}
                  <h3 className="text-[#1E3A8A] text-base lg:text-lg font-semibold mb-1 group-hover:text-blue-700 transition duration-300">
                    {service.title}
                  </h3>
                  {/* Card Description Size: text-xs on mobile, text-sm on large screens */}
                  <p className="text-[#6B7280] text-xs sm:text-sm flex-grow">
                    {service.desc}
                  </p>
                </div>

                {/* Button/Link Indicator*/}
                <span className="mt-2 text-xs sm:text-sm font-medium text-[#F97316] group-hover:text-[#3B82F6] transition-colors duration-300 flex items-center">
                  Explore <span className="ml-1">&#8594;</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}