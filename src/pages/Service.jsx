import React, { useState } from 'react';
import { BookOpen, User, Briefcase, GraduationCap, Grid, Search, Zap, MessageCircle, Bell, ChevronRight, Layers, ArrowRight } from 'lucide-react';

// NOTE: Navbar and Footer components are assumed to be handled externally (e.g., in App.jsx)

// --- UNIFIED COLOR PALETTE (From Homepage Analysis) ---
const COLORS = {
    primary: '#1E3A8A', // Dark Blue (Main Brand Color)
    secondary: '#F97316', // Bright Orange (Accent & CTA Color)
    textGray: '#4B5563', // Standard paragraph text color
    lightBackground: '#EFF6FF', // Very Light Blue/Off-White (Section Background)
    primaryDark: '#11253e', // For darker text/headings
};

// --- Service Data ---
const serviceData = [
    { id: 'service-1', title: '1. Class 10 Guidance', description: 'Your first major academic decision — choose the right stream after Matric.', icon: User, path: '/service/class-10-guidance' },
    { id: 'service-2', title: '2. Class 12 Guidance', description: 'Select the right specialization before entering university.', icon: GraduationCap, path: '/service/class-12-guidance' },
    { id: 'service-3', title: '3. Career Assessment Test', description: 'Discover your best-fit fields through a psychometric evaluation.', icon: Briefcase, path: '/service/career-assessment' },
    { id: 'service-4', title: '4. Subject Classification', description: 'Explore 1,000+ categorized subjects.', icon: Grid, path: '/service/subject-classification' },
    { id: 'service-5', title: '5. University Program Finder', description: 'Search BS/MS/PhD programs in all Pakistani universities.', icon: Search, path: '/service/program-finder' },
    { id: 'service-6', title: '6. University Graduates Guidance', description: 'Resolve academic and research challenges during university life.', icon: BookOpen, path: '/service/graduates-guidance' },
    { id: 'service-7', title: '7. Working Professionals Guidance', description: 'Align skills, education, and career growth.', icon: Briefcase, path: '/service/professional-guidance' },
    { id: 'service-8', title: '8. Taleemi Advice', description: 'Fast-track help for any academic issue.', icon: Zap, path: '/service/taleemi-advice' },
    { id: 'service-9', title: '9. Book Online Session', description: '1-on-1 counseling with expert advisors.', icon: MessageCircle, path: '/service/online-session' },
    { id: 'service-10', title: '10. Taleemi Announcements', description: 'Latest scholarships, admissions, and opportunities.', icon: Bell, path: '/service/announcements' },
];

// --- REFINED: Background Pattern Component for visual depth ---
const BackgroundPattern = ({ color }) => (
    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {/* Simple triangle pattern or similar shape for modern look */}
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="pattern-circles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <circle cx="10" cy="10" r="3" fill={color} opacity="0.1" />
                    <circle cx="60" cy="60" r="3" fill={color} opacity="0.1" />
                </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
    </div>
);


// --------------------------------------------------------------------------------------------------

/**
 * 1. Hero Section Component (Background: Light Blue Gradient) - Minor Refinements
 */
const ServiceHero = ({ onNavigate }) => {
    return (
        <section 
            className="pt-16 md:pt-28 pb-16 relative overflow-hidden" 
            style={{ 
                background: `linear-gradient(to bottom right, ${COLORS.lightBackground} 0%, white 100%)`,
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
                    
                    {/* LEFT SIDE: Text Content and CTA */}
                    <div className="lg:w-7/12 max-w-2xl mx-auto lg:mx-0">
                        {/* Sub-title */}
                        <p className="text-sm uppercase font-bold tracking-widest mb-2" style={{ color: COLORS.secondary }}>
                            Our Comprehensive Services
                        </p>
                        
                        {/* Main Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight" style={{ color: COLORS.primary }}>
                            Your One-Window Platform for Academic & Career Guidance
                        </h1>
                        
                        {/* Description */}
                        <div className="text-lg leading-relaxed space-y-4 mb-8" style={{ color: COLORS.textGray }}>
                            <p className="font-medium" style={{ color: COLORS.primaryDark }}>
                                Whether you’re choosing subjects, selecting a university degree, dealing with academic challenges, planning a career shift, or exploring national opportunities — **TaleemiGuide stands with you at every step.**
                            </p>
                            
                            <p>
                                Our services are backed by the combined expertise of educationists, senior academicians, industry specialists, psychologists, and certified career coaches, ensuring guidance that is **personalized, accurate, and timely.**
                            </p>
                        </div>

                        {/* CTA Button - Secondary Color for strong emphasis */}
                        <button
                            onClick={() => onNavigate('/services/taleemi-advice')} 
                            className="px-10 py-4 text-lg font-semibold rounded-xl shadow-2xl transition duration-300 ease-in-out transform hover:scale-[1.03] flex items-center justify-center gap-2 mx-auto lg:mx-0"
                            style={{ 
                                backgroundColor: COLORS.secondary, 
                                color: 'white',
                                boxShadow: `0 10px 20px -5px ${COLORS.secondary}50`,
                            }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = COLORS.primary}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = COLORS.secondary}
                        >
                            Get Expert Guidance Now <Zap size={20} />
                        </button>
                        
                    </div>

                    {/* RIGHT SIDE: Visual Element (Icon Cluster - maintained from original) */}
                    <div className="lg:w-5/12 w-full flex justify-center lg:justify-end">
                        <div 
                            className="w-72 h-72 md:w-96 md:h-96 rounded-full flex items-center justify-center relative shadow-2xl"
                            style={{ 
                                backgroundColor: COLORS.primary + '10', // Very light primary background
                                border: `4px solid ${COLORS.primary + '20'}`
                            }}
                        >
                            {/* Central Main Icon */}
                            <MessageCircle 
                                size={80} 
                                className="z-10 absolute transition-all duration-500 hover:scale-105" 
                                style={{ color: COLORS.primary }} 
                            />

                            {/* Corner Icons (Academic, Career, Support, User) */}
                            <GraduationCap size={48} className="absolute top-8 left-10 md:top-12 md:left-12 z-20 p-2 rounded-full shadow-lg" style={{ backgroundColor: 'white', color: COLORS.secondary }} />
                            <Briefcase size={48} className="absolute bottom-8 right-10 md:bottom-12 md:right-12 z-20 p-2 rounded-full shadow-lg" style={{ backgroundColor: 'white', color: COLORS.secondary }} />
                            <Layers size={48} className="absolute bottom-8 left-10 md:bottom-12 md:left-12 z-20 p-2 rounded-full shadow-lg" style={{ backgroundColor: 'white', color: COLORS.secondary }} />
                            <User size={48} className="absolute top-8 right-10 md:top-12 md:right-12 z-20 p-2 rounded-full shadow-lg" style={{ backgroundColor: 'white', color: COLORS.secondary }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --------------------------------------------------------------------------------------------------

/**
 * REFINED: Service Card component for the Core Services Grid
 * Enhancement: Improved hover effect (ring, lift, and shadow)
 */
const ServiceCard = ({ service, onNavigate }) => {
    const IconComponent = service.icon;
    // Highlight 'Taleemi Advice' and 'Book Online Session'
    const isSpecial = service.id === 'service-8' || service.id === 'service-9';
    const accentColor = isSpecial ? COLORS.secondary : COLORS.primary;
    const accentColorLight = isSpecial ? COLORS.secondary + '30' : COLORS.primary + '20'; 

    return (
        <div 
            onClick={() => onNavigate(service.path)}
            className={`
                bg-white p-6 rounded-3xl shadow-xl transition-all duration-500 cursor-pointer
                transform hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-offset-4 
                group flex flex-col justify-start
            `}
            style={{ 
                minHeight: '270px', 
                position: 'relative',
                overflow: 'hidden',
                // Conditional base styling (Stronger for special cards)
                borderColor: accentColorLight, 
                borderWidth: isSpecial ? '3px' : '1px', 
                boxShadow: isSpecial 
                    ? `0 20px 40px -15px rgba(0,0,0,0.2)` // More pronounced shadow for special
                    : `0 10px 20px -8px rgba(0,0,0,0.08)`, 
                // Set the dynamic ring color for hover effect
                '--tw-ring-color': accentColor, 
                ringColor: accentColor,
            }}
        >
            {/* Icon Circle */}
            <div className="mb-4">
                <div 
                    className={`p-4 rounded-full mb-3 inline-block shadow-lg transition duration-300`} 
                    style={{ backgroundColor: accentColor, color: 'white' }}
                >
                    <IconComponent size={28} />
                </div>
                
                {/* Title */}
                <h3 className={`text-xl font-extrabold mb-2`} style={{ color: COLORS.primaryDark }}>
                    {service.title.substring(3)} 
                    {isSpecial && (
                        <span className="ml-2 inline-block text-xs font-bold uppercase py-1 px-2 rounded-full" style={{ backgroundColor: COLORS.secondary + '20', color: COLORS.secondary }}>
                            Premium
                        </span>
                    )}
                </h3>
            </div>
            
            {/* Description */}
            <div className='flex-grow'>
                <p className="text-base leading-relaxed mb-4" style={{ color: COLORS.textGray }}>
                    {service.description}
                </p>
            </div>

            {/* Action Link */}
            <div 
                className="flex items-center text-sm font-bold transition-colors duration-300 mt-4 w-full justify-start group-hover:underline" 
                style={{ color: accentColor }}
            >
                View Service Details <ArrowRight size={18} className="ml-1 mt-0.5 transition-transform group-hover:translate-x-1" />
            </div>
        </div>
    );
};

// --------------------------------------------------------------------------------------------------

/**
 * 3. Core Services Grid Section (Background: Light Blue) - Refined with Background Pattern
 */
const CoreServicesSection = ({ onNavigate }) => (
    <section 
        className="relative py-14 md:py-20 overflow-hidden" 
        style={{ background: COLORS.lightBackground }} 
    >
        {/* Added Subtle Background Pattern for Depth */}
        <BackgroundPattern color={COLORS.primary} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h3 className="text-3xl md:text-5xl font-extrabold mb-4 text-center" style={{ color: COLORS.primary }}>
                Our Core Guidance Services
            </h3>
            <p className="text-center max-w-4xl mx-auto text-xl mb-12 leading-relaxed font-medium" style={{ color: COLORS.textGray }}>
                These ten services are designed to support you at every critical junction of your academic and professional journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceData.map((service) => (
                    <ServiceCard 
                        key={service.id} 
                        service={service} 
                        onNavigate={onNavigate} 
                    />
                ))}
            </div>
        </div>
    </section>
);

// --------------------------------------------------------------------------------------------------

/**
 * REUSABLE FORM: Taleemi Advice Form (Kept Consistent)
 */
const TaleemiAdviceForm = () => {
    const [fileName, setFileName] = useState("No file chosen");

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(`${e.target.files.length} file(s) selected`);
        } else {
            setFileName("No file chosen");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted via TaleemiAdviceForm");
        // Add actual submission logic here
    };

    return (
        <div
            className="relative bg-white shadow-xl rounded-3xl p-8 md:p-12 border border-blue-300 transition-shadow duration-500 max-w-3xl mx-auto"
        >
            {/* Form Title */}
            <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center" style={{ color: COLORS.primary }}>
                Submit Your Query
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name, Email, Phone - 3-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {["Name", "Email", "Phone"].map((placeholder, i) => (
                        <div key={i} className="relative">
                            <input
                                type={placeholder === "Email" ? "email" : placeholder === "Phone" ? "tel" : "text"}
                                placeholder=" "
                                required={placeholder !== "Phone"}
                                className="w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 focus:outline-none focus:border-2 focus:ring-0 transition peer bg-white hover:border-gray-400 duration-300"
                                style={{ 
                                    borderColor: '#E5E7EB', 
                                    '--tw-focus-ring-color': COLORS.primary 
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

                {/* Dropdown - Category Selection */}
                <div className="relative">
                    <select 
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-2 focus:ring-0 transition bg-white appearance-none hover:border-gray-400 duration-300"
                        style={{ 
                            borderColor: '#E5E7EB',
                            paddingTop: '1rem', 
                            paddingBottom: '0.5rem',
                        }}
                        defaultValue="select-category" 
                    >
                        <option value="select-category" disabled>Select your category</option>
                        <option>Class 10-12</option>
                        <option>BA/BSc</option>
                        <option>Associate Degree</option>
                        <option>BS & Equivalent</option>
                        <option>MS & Equivalent</option>
                        <option>PhD</option>
                        <option>Working Professional</option>
                    </select>
                </div>

                {/* Query Textarea */}
                <div className="relative">
                    <textarea
                        rows="4"
                        placeholder=" "
                        required
                        className="w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 focus:outline-none focus:border-2 focus:ring-0 transition peer bg-white hover:border-gray-400 duration-300"
                        style={{ 
                            borderColor: '#E5E7EB', 
                            '--tw-focus-ring-color': COLORS.primary 
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
                    <label className="block mb-2 font-medium text-sm" style={{ color: COLORS.primary }}>
                        Supporting Documents (Optional)
                    </label>
                    <div className="flex items-center gap-4">
                        <label
                            htmlFor="file-upload-service" 
                            className="cursor-pointer px-5 py-2 rounded-lg transition transform hover:scale-[1.02] duration-300 font-medium"
                            style={{ 
                                backgroundColor: COLORS.secondary, 
                                color: 'white',
                                boxShadow: '0 4px 6px -1px rgba(249, 115, 22, 0.5), 0 2px 4px -2px rgba(249, 115, 22, 0.5)'
                            }}
                        >
                            Choose Files
                        </label>
                        <span className="text-sm" style={{ color: COLORS.textGray }}>{fileName}</span>
                        <input id="file-upload-service" type="file" className="hidden" multiple onChange={handleFileChange} />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-[1.01]"
                    style={{
                        backgroundColor: COLORS.primary,
                        color: 'white',
                        boxShadow: `0 10px 15px -3px rgba(30, 58, 138, 0.5), 0 4px 6px -4px rgba(30, 58, 138, 0.5)`,
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = COLORS.secondary}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = COLORS.primary}
                >
                    Click Here to Submit
                </button>
            </form>
        </div>
    );
};

// --------------------------------------------------------------------------------------------------

/**
 * 4. Seek Taleemi Advice Section (Background: Pure White) - Minor Refinements
 */
const TaleemiAdviceSection = () => {
    const audienceList = [
        { title: "School Students", icon: User },
        { title: "College/Uni Students", icon: GraduationCap },
        { title: "Graduates", icon: BookOpen },
        { title: "Working Professionals", icon: Briefcase },
    ];

    return (
        <section 
            className="relative w-full py-14 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" 
            style={{ background: 'white' }} 
        >
            <div className="max-w-4xl mx-auto space-y-10">
                
                {/* Title & Description Header */}
                <div className="text-center space-y-4">
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold"
                        style={{ color: COLORS.primary }}
                    >
                        Fast, Expert Help — Anytime You Need It
                    </h2>

                    <div
                        className="text-center max-w-3xl mx-auto text-lg leading-relaxed space-y-5"
                        style={{ color: COLORS.textGray }}
                    >
                        <p className="font-medium text-xl" style={{ color: COLORS.primaryDark }}>
                            Don’t let academic or career challenges hold you back.
                        </p>

                        <p className="text-lg">
                            TaleemiGuide provides precise, reliable, and **personalized solutions** to your queries so you can move forward without confusion. We are here to support every individual, including:
                        </p>
                        
                        {/* Target Audience Grid (Maintained with clean UI) */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-6">
                            {audienceList.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div 
                                        key={index} 
                                        className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:border-opacity-100 transform hover:scale-[1.05] group" // Added scale hover
                                        style={{ 
                                            borderColor: COLORS.lightBackground, 
                                            backgroundColor: COLORS.lightBackground + '80', 
                                        }}
                                    >
                                        <Icon size={24} className="mb-1.5 transition-colors" style={{ color: COLORS.secondary }} />
                                        <span className="text-sm font-semibold transition-colors" style={{ color: COLORS.primaryDark }}>
                                            {item.title}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Form Component */}
                <TaleemiAdviceForm />
                
            </div>
        </section>
    );
};

// --------------------------------------------------------------------------------------------------


/**
 * 5. Online Session Section (Background: Light Blue) - Minor Refinements
 */
const OnlineSessionSection = ({ onNavigate }) => (
    <section 
        className="py-16 md:py-24" 
        style={{ background: COLORS.lightBackground }} 
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* The content container: A pure white, separated block */}
            <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl border border-gray-100"> 
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    
                    {/* LEFT COLUMN: Text and Value Props */}
                    <div className="lg:w-7/12">
                        <h3 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight" style={{ color: COLORS.primaryDark }}>
                            Book a Personalized Online Session
                        </h3>
                        <p className="mb-6 leading-relaxed text-xl font-semibold" style={{ color: COLORS.primary }}>
                            Your Future, Our Guidance — Get detailed, one-on-one counseling.
                        </p>
                        
                        <p className="mb-10 leading-relaxed text-lg" style={{ color: COLORS.textGray }}>
                            The right advice at the right time can transform your academic or professional journey. Our experienced counselors help you overcome complex challenges, refine goals, and develop a strong, realistic plan for success.
                        </p>
                        
                        {/* Refined Value Proposition Grid */}
                        <div className="grid grid-cols-2 gap-4"> 
                            {['Personalized guidance', 'Clear career direction', 'Actionable solutions', 'Confidence for your next steps'].map((item, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-start p-3 rounded-xl border transition duration-300 hover:shadow-md hover:border-opacity-100" 
                                    style={{ 
                                        borderColor: COLORS.primary + '30', 
                                        backgroundColor: 'white',
                                        transform: 'translateY(0)',
                                        transition: 'transform 0.2s',
                                        boxShadow: `0 4px 6px -1px ${COLORS.primary}10`, // Subtle box shadow
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'} // More pronounced lift
                                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <Layers size={20} className="flex-shrink-0 mt-0.5" style={{ color: COLORS.secondary }} />
                                    <span className="ml-3 text-base font-semibold" style={{ color: COLORS.primaryDark }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: CTA Block - visually distinct */}
                    <div 
                         className="lg:w-5/12 w-full flex flex-col items-center justify-center p-10 rounded-3xl text-center shadow-inner" // Rounded-3xl and shadow-inner for depth
                         style={{ 
                             backgroundColor: 'white', 
                             border: `4px solid ${COLORS.secondary}`, // Strong Orange Border
                             boxShadow: `0 0 0 10px ${COLORS.secondary}15`, // Ring glow
                         }}
                    >
                        <MessageCircle size={70} className="mb-4 animate-pulse" style={{ color: COLORS.secondary }} />
                        <p className="text-2xl font-bold mb-6" style={{ color: COLORS.primary }}>
                            Ready to take the next step?
                        </p>
                        
                        {/* CTA Button - Secondary Color for strong emphasis */}
                        <button
                            onClick={() => onNavigate('/services/online-session')} 
                            className="w-full px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.03] flex items-center justify-center space-x-3 text-lg text-center"
                            style={{
                                backgroundColor: COLORS.secondary,
                                color: 'white',
                                boxShadow: `0 10px 15px -3px ${COLORS.secondary}50`,
                            }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = COLORS.primary}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = COLORS.secondary}
                        >
                            <span>Schedule your session now</span>
                        </button>
                        
                        <p className="mt-4 text-sm" style={{ color: COLORS.textGray }}>
                            Sessions available via Zoom, Google Meet, or call.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);




/**
 * Main Service Page Component
 */
export default function ServicePage({ onNavigate = (path) => console.log('Navigating to:', path) }) {
    return (
        <div style={{ fontFamily: 'Inter, sans-serif' }}>
            
            {/* 1. Hero Section (Light Blue Gradient) */}
            <ServiceHero onNavigate={onNavigate} />

            {/* 3. Core Services Section (Light Blue with Pattern) */}
            <CoreServicesSection onNavigate={onNavigate} />
            
            {/* 4. Seek Taleemi Advice Section (Pure White) */}
            <TaleemiAdviceSection />

            {/* 5. Online Session Section (Light Blue, with White inner content block) */}
            <OnlineSessionSection onNavigate={onNavigate} />

            {/* Footer Section - Assumed to be imported/used externally */}
        </div>
    );
}