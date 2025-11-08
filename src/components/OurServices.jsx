import React from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBriefcase,
  FaBookOpen,
  FaClipboardList,
  FaLaptop,
  FaChalkboard,
  FaCalendarCheck,
  FaBullhorn,
  // ADDED NEW ICONS
  FaUniversity,
  FaCodeBranch,
  FaPencilRuler,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ourservices.css";

const services = [
  {
    // CORRECTED: From FaUserGraduate to FaBookOpen (Study/Learning)
    icon: <FaBookOpen size={32} />, 
    title: "Class 10 Guidance",
    desc: "Future Begins Here — Choose the Right Path After Class 10 with Confidence.",
    link: "#",
  },
  {
    // CORRECTED: From FaChalkboardTeacher to FaUniversity (Higher Ed Focus)
    icon: <FaUniversity size={32} />, 
    title: "Class 12 Guidance",
    desc: "Decide Smart — The Right Choice After Class 12 Defines Success.",
    link: "#",
  },
  {
    // CORRECTED: From FaBriefcase to FaUserGraduate (Identifies the audience)
    icon: <FaUserGraduate size={32} />,
    title: "University Graduates",
    desc: "Your Academic Partner — Simplifying the Complexities of Higher Education.",
    link: "#",
  },
  {
    // FaBookOpen was previously here, swapping it with FaChalkboardTeacher (Personalized teaching/advice)
    icon: <FaChalkboardTeacher size={32} />, 
    title: "Taleemi Advice",
    desc: "A Quick-Response Service Providing Fast-Track Educational Solutions — Like 1122 for Students.",
    link: "#",
  },
  {
    // CORRECTED: From FaClipboardList to FaCodeBranch (Path/Stream selection)
    icon: <FaCodeBranch size={32} />,
    title: "Subject Classification",
    desc: "Find Your Place in the World of Knowledge — Simplified Subject Classification.",
    link: "#",
  },
  {
    // CORRECTED: From FaLaptop to FaPencilRuler (Testing/Evaluation)
    icon: <FaPencilRuler size={32} />, 
    title: "Career Assessment Test",
    desc: "One Platform, Thousands of Subjects - Find Exactly Where You Fit.",
    link: "#",
  },
  {
    // CORRECTED: From FaChalkboard to FaBriefcase (Professional life/Jobs)
    icon: <FaBriefcase size={32} />, 
    title: "Working Professionals",
    desc: "Helping Professionals - Connect Education, Experience, and Ambition.",
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
    <section className="relative w-full bg-gradient-to-br from-[#EFF6FF] via-[#E0F2FF] to-[#FDF6E3] py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Shapes - fewer for performance */}
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

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <h3 className="text-[#F97316] font-semibold text-lg">Our Services</h3>
        <h2 className="text-[#1E3A8A] text-xl md:text-3xl font-bold mt-2">
          Explore How TaleemiGuide Can Help You
        </h2>
        <p className="text-[#4B5563] mt-4 text-sm md:text-base leading-relaxed">
          At TaleemiGuide, we offer a one-window solution for students from Grade 10 to post-graduation, 
          as well as for graduates and professionals seeking career growth or job transitions. 
          Whether you are choosing subjects, exploring scholarships, or planning your career path, 
          TaleemiGuide is your trusted partner for smart, timely, and reliable guidance.
        </p>
      </div>

      {/* Services Slider */}
      <div className="relative z-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          speed={800}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 text-center flex flex-col items-center gap-5 transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
                {/* Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#F97316] text-white text-2xl md:text-3xl shadow-md">
                  {service.icon}
                </div>
                {/* Title */}
                <h3 className="text-[#1E3A8A] text-base md:text-lg font-semibold">{service.title}</h3>
                {/* Description */}
                <p className="text-[#6B7280] text-sm md:text-base">{service.desc}</p>
                {/* Button */}
                <a
                  href={service.link}
                  className="mt-2 inline-block px-4 py-2 md:px-5 md:py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#F97316] to-[#FB923C] hover:from-[#e66b10] hover:to-[#fca248] transition-all duration-300 shadow"
                >
                  Learn More
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button
          aria-label="Previous"
          className="prev-btn absolute top-1/2 -left-5 md:-left-6 transform -translate-y-1/2 bg-white shadow-md w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full hover:bg-[#F97316] hover:text-white transition z-10 text-lg md:text-xl"
        >
          &#8592;
        </button>
        <button
          aria-label="Next"
          className="next-btn absolute top-1/2 -right-5 md:-right-6 transform -translate-y-1/2 bg-white shadow-md w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full hover:bg-[#F97316] hover:text-white transition z-10 text-lg md:text-xl"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}