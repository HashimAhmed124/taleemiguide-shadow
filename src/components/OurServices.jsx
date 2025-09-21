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
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ourservices.css"; // keep custom CSS if needed

const services = [
  {
    icon: <FaUserGraduate size={32} />,
    title: "Class 10 Guidance",
    desc: "Helping students of Grade 10 make the right subject and career decisions.",
    link: "#",
  },
  {
    icon: <FaChalkboardTeacher size={32} />,
    title: "Class 12 Guidance",
    desc: "Support for Grade 12 students in choosing streams, careers, and next steps.",
    link: "#",
  },
  {
    icon: <FaBriefcase size={32} />,
    title: "University Graduate Support",
    desc: "Guidance for graduates seeking career growth, higher studies, or jobs.",
    link: "#",
  },
  {
    icon: <FaBookOpen size={32} />,
    title: "Taleemi Advice",
    desc: "Personalized educational guidance tailored to your academic journey.",
    link: "#",
  },
  {
    icon: <FaClipboardList size={32} />,
    title: "Subject Classification",
    desc: "Understand subject groups and how they align with career choices.",
    link: "#",
  },
  {
    icon: <FaLaptop size={32} />,
    title: "Career Assessment Test",
    desc: "Evaluate your skills and passions to discover the right career path.",
    link: "#",
  },
  {
    icon: <FaChalkboard size={32} />,
    title: "Working Professionals Guidance",
    desc: "Support for professionals planning job transitions or upskilling.",
    link: "#",
  },
  {
    icon: <FaCalendarCheck size={32} />,
    title: "Book Online Sessions",
    desc: "One-on-one counseling sessions with certified career experts.",
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
      {/* Background Floating Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-72 h-72 bg-[#3B82F6]/10 rounded-full top-10 left-20 animate-bounce-slow blur-2xl"></div>
        <div className="absolute w-96 h-96 bg-[#F97316]/10 rounded-full bottom-10 right-20 animate-bounce-slow blur-3xl"></div>
        {[...Array(15)].map((_, i) => (
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

      {/* Top Section */}
      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <h3 className="text-[#F97316] font-semibold text-lg">Our Services</h3>
        <h2 className="text-[#1E3A8A] text-3xl md:text-4xl font-bold mt-2">
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
          spaceBetween={30}
          loop={true}
          speed={1000}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2.3 },
            1024: { slidesPerView: 3.3 },
          }}
          className="pb-12"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl shadow-2xl p-8 text-center flex flex-col items-center gap-5 transform transition-transform duration-500 hover:-translate-y-3 hover:shadow-3xl hover:scale-105">
                {/* Icon */}
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#F97316] text-white text-3xl shadow-md transition-transform duration-300 hover:scale-110">
                  {service.icon}
                </div>
                {/* Title */}
                <h3 className="text-[#1E3A8A] text-lg font-semibold">{service.title}</h3>
                {/* Description */}
                <p className="text-[#6B7280] text-sm">{service.desc}</p>
                {/* Button */}
                <a
                  href={service.link}
                  className="mt-4 inline-block px-5 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#F97316] to-[#FB923C] hover:from-[#e66b10] hover:to-[#fca248] transition-all duration-300 shadow hover:shadow-lg"
                >
                  Learn More
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="prev-btn absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white shadow-md w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#F97316] hover:text-white transition z-10 text-xl">
          &#8592;
        </button>
        <button className="next-btn absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white shadow-md w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#F97316] hover:text-white transition z-10 text-xl">
          &#8594;
        </button>
      </div>
    </section>
  );
}
