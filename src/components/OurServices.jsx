import React from "react";
import { User, Landmark, GraduationCap, Briefcase } from 'lucide-react';
import video1 from "../assets/video/1.mp4"; 

export default function ForWhom() {
  
  const COLORS = {
    primary: '#1E3A8A', 
    secondary: '#f2592d', 
    backgroundLight: '#f4fcff', 
    primary2: '#11253e' 
  };

  // The categories and their descriptions
  const categoriesData = [
    { 
      title: "Class 10-12 Students", 
      description: "Choose subjects, tracks and fields confidently",
      icon: ( 
        // Icon: User (for students)
        <User className="w-8 h-8" />
      ),
    },
    { 
      title: "University Students", 
      description: "Solve academic, administrative, and credit issues",
      icon: ( 
        // Icon: Landmark (for university structure/campus)
        <Landmark className="w-8 h-8" />
      ),
    },
    { 
      title: "Graduates", 
      description: "Plan further studies, exams, or job pathways",
      icon: ( 
        // Icon: GraduationCap (for post-graduation planning)
        <GraduationCap className="w-8 h-8" />
      ),
    },
    { 
      title: "Working Professionals", 
      description: "Align education with skills and career growth",
      icon: ( 
        // Icon: Briefcase (for career and professional alignment)
        <Briefcase className="w-8 h-8" />
      ),
    },
  ];

  return (
    <section 
      // Reduced top/bottom padding from py-10 md:py-16 to py-6 md:py-10
      className="w-full py-6 md:py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#EFF6FF] to-white" 
      id="for-whom"
    >
      <div className="max-w-6xl mx-auto"> 

        {/* TOP SECTION: Heading and Description */}
        <div 
          // Reduced bottom margin from mb-6 md:mb-8 to mb-4 md:mb-6
          className="p-4 md:p-8 mb-4 md:mb-6 text-center border-b border-gray-300 md:border-none" 
          style={{ color: COLORS.primary }}
        >
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4"
          >
            Who Is TaleemiGuide For?
          </h2>
          <p 
            className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ opacity: 0.8, color: COLORS.primary2 }}
          >
            TaleemiGuide is your trusted partner for making informed academic and career decisions. Whether you are a student, graduate, or working professional, we provide clarity, direction, and expert solutions tailored to your journey.
          </p>
        </div>
        {/* Reduced bottom margin from mb-8 to mb-6 */}
        <div className="hidden md:block w-full h-[1px] bg-gray-300 mx-auto max-w-5xl mb-6" />


        {/* BOTTOM SECTION: Video Placeholder & Categories Grid */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 md:gap-12">
          
          {/* LEFT COLUMN: Video Placeholder - Replaced non-working asset path */}
          <div
            className="w-full lg:w-1/2 flex justify-center items-center p-4 md:p-8 min-h-[300px] lg:min-h-[500px] border-b border-gray-300 lg:border-none"
          >
            <video
              src={video1} // Using a working placeholder video URL
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="https://via.placeholder.com/700x500.png?text=Loading+Video"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* RIGHT COLUMN: Categories Grid */}
          <div 
            className="w-full lg:w-1/2 grid grid-cols-1 gap-6 md:gap-8 p-4 md:p-8"
          >
            {categoriesData.map((category, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 rounded-xl border-b border-gray-100 last:border-b-0"
              >
                <div 
                  className="flex-shrink-0 p-3 rounded-full flex items-center justify-center"
                  style={{ 
                    backgroundColor: COLORS.secondary + '20', 
                    color: COLORS.secondary 
                  }}
                >
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: COLORS.primary }}>
                    {category.title}
                  </h3>
                  <p className="text-base" style={{ color: COLORS.primary2, opacity: 0.8 }}>
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}