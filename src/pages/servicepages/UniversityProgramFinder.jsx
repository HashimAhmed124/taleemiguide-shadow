import React from 'react';
import { 
    Globe, Search, ZapOff, Filter, GraduationCap, Building, 
    MapPin, Users, FileText, Target, Compass, BookOpen, 
    MessageCircle, LogIn, CheckSquare, ArrowRight, Eye, 
    Layers, XCircle, Clock, DollarSign, Scale, CheckCircle
} from 'lucide-react'; 

// --- UNIFIED COLOR PALETTE ---
const COLORS = {
    primary: '#1E3A8A', // Dark Blue
    secondary: '#F97316', // Bright Orange
    textGray: '#4B5563', // Standard paragraph text color
    lightBackground: '#EFF6FF', // Very Light Blue/Off-White
    primaryDark: '#11253e', // For darker text/headings
};


/**
 * 1. Hero Section: Overview and Core Value Proposition
 */
const HeroSection = () => (
    <section 
        className="pt-16 md:pt-28 pb-16" 
        style={{ background: `linear-gradient(to bottom, ${COLORS.lightBackground} 0%, white 100%)` }}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Sub-title */}
            <p className="text-sm uppercase font-bold tracking-widest mb-3" style={{ color: COLORS.secondary }}>
                Service: University Program Finder
            </p>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight" style={{ color: COLORS.primary }}>
                Search. Compare. Decide — Every BS, MS & PhD Program in One Place.
            </h1>
            
            {/* Core Description */}
            <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-4" style={{ color: COLORS.textGray }}>
                <p className="font-semibold text-xl" style={{ color: COLORS.primaryDark }}>
                    Welcome to Pakistan’s first comprehensive University Program Finder. For the first time, explore every **BS, MS/MPhil, and PhD program** offered across all universities.
                </p>
                <p>
                    This **national-level database** is verified, updated, organized, and completely **free**, enabling students, parents, and professionals to make informed academic decisions without guesswork or unreliable sources.
                </p>
            </div>
        </div>
    </section>
);


/**
 * 2. Problem/Benefit Section: Why This Matters
 */
const ProblemBenefitSection = () => {
    const problems = [
        { title: 'Incomplete Information', icon: XCircle },
        { title: 'Outdated Websites', icon: Clock },
        { title: 'No Centralized Database', icon: ZapOff },
        { title: 'Scattered & Inconsistent Listings', icon: Layers },
    ];

    return (
        <section className="py-14 md:py-20" style={{ background: 'white' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-12" style={{ color: COLORS.primaryDark }}>
                    ✅ Why This Matters
                </h2>
                
                <p className="text-xl max-w-3xl mx-auto mb-10" style={{ color: COLORS.textGray }}>
                    Every year, thousands of students struggle during admissions due to scattered information. TaleemiGuide provides **accurate, structured, and searchable academic data**.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {problems.map((problem, index) => {
                        const Icon = problem.icon;
                        return (
                            <div key={index} className="p-4 rounded-xl shadow-inner border border-red-100 bg-red-50/50">
                                <Icon size={30} className="mx-auto mb-2" style={{ color: COLORS.secondary }} />
                                <p className="text-sm font-semibold" style={{ color: COLORS.primaryDark }}>{problem.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};


/**
 * 3. Features Section: What You Can Do
 */
const FeaturesSection = () => {
    const filters = [
        { title: 'Degree Level (BS | MS/MPhil | PhD)', icon: GraduationCap },
        { title: 'University Name (All Universities)', icon: Building },
        { title: 'Field of Study / Discipline', icon: Layers },
        { title: 'Location (Province, City, Region)', icon: MapPin },
        { title: 'University Type (Public or Private)', icon: Scale },
    ];

    const advancedFilters = [
        { title: 'Admission Deadlines', icon: Clock },
        { title: 'Merit & Eligibility Criteria', icon: CheckSquare },
        { title: 'Fee Ranges', icon: DollarSign },
        { title: 'Accreditation (HEC, PEC, PMDC, etc.)', icon: CheckCircle },
    ];

    return (
        <section className="py-14 md:py-20" style={{ background: COLORS.lightBackground }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center" style={{ color: COLORS.primary }}>
                    ✅ What You Can Do: Search, Filter & Explore Programs
                </h2>
                
                <div className="grid lg:grid-cols-2 gap-10">
                    
                    {/* Core Filters */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: COLORS.primaryDark }}>
                            <Filter size={24} className="mr-2" style={{ color: COLORS.primary }} /> Core Search Filters
                        </h3>
                        <div className="space-y-4">
                            {filters.map((f, index) => {
                                const Icon = f.icon;
                                return (
                                    <div key={index} className="flex items-center p-4 rounded-lg shadow-sm" style={{ backgroundColor: 'white' }}>
                                        <Icon size={24} className="flex-shrink-0 mr-4" style={{ color: COLORS.secondary }} />
                                        <span className="text-lg font-medium" style={{ color: COLORS.primaryDark }}>{f.title}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Advanced Filters */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: COLORS.primaryDark }}>
                            <ZapOff size={24} className="mr-2" style={{ color: COLORS.secondary }} /> Coming Soon — Advanced Filters
                        </h3>
                        <div className="space-y-4">
                            {advancedFilters.map((f, index) => {
                                const Icon = f.icon;
                                return (
                                    <div key={index} className="flex items-center p-4 rounded-lg opacity-70" style={{ backgroundColor: 'white' }}>
                                        <Icon size={24} className="flex-shrink-0 mr-4" style={{ color: COLORS.primary }} />
                                        <span className="text-lg font-medium" style={{ color: COLORS.textGray }}>{f.title}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


/**
 * 4. How It Helps You
 */
const AudienceHelpSection = () => {
    const audience = [
        { 
            title: 'For Class 12 Students', 
            icon: GraduationCap, 
            desc: 'Find all BS programs in your field of interest before applying. Compare universities, cities, and options — all in one place.' 
        },
        { 
            title: 'For University Graduates', 
            icon: BookOpen, 
            desc: 'Explore MS/MPhil and PhD programs aligned with your academic background and future goals.' 
        },
        { 
            title: 'For Parents & Counselors', 
            icon: Users, 
            desc: 'Get a reliable, verified database to guide students confidently and accurately.' 
        },
        { 
            title: 'For Policy Researchers & Institutions', 
            icon: FileText, 
            desc: 'Analyze national trends in disciplines, program distribution, and academic offerings.' 
        },
    ];

    return (
        <section className="py-14 md:py-20" style={{ background: 'white' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center" style={{ color: COLORS.primaryDark }}>
                    ✅ How It Helps You
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {audience.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div 
                                key={index} 
                                className="flex items-start p-6 rounded-xl shadow-lg border-l-4 transition-all duration-300 hover:shadow-xl"
                                style={{ borderColor: COLORS.secondary, backgroundColor: COLORS.lightBackground + '60' }}
                            >
                                <Icon size={30} className="flex-shrink-0 mr-4 mt-1" style={{ color: COLORS.secondary }} />
                                <div>
                                    <h3 className="text-xl font-bold mb-1" style={{ color: COLORS.primaryDark }}>{item.title}</h3>
                                    <p className="text-base" style={{ color: COLORS.textGray }}>{item.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};


/**
 * 5. Integration and Process Section (Combined for efficiency)
 */
const IntegrationProcessSection = () => {
    const services = [
        { title: 'Career Assessment Test', icon: Target, desc: 'Find fields that suit your personality, then use Program Finder to explore universities offering them.' },
        { title: 'Class 12 Guidance', icon: Compass, desc: 'Plan admission timelines, understand specialization options, and compare institutions.' },
        { title: 'University Graduates Guidance', icon: BookOpen, desc: 'Learn about eligibility, credit transfer, degree equivalence, or postgraduate pathways.' },
        { title: 'Book Online Session', icon: MessageCircle, desc: 'Discuss your shortlisted programs with an expert for personalized advice.' },
    ];
    
    const steps = [
        { num: 1, title: 'Login', desc: 'Access the platform at TaleemiGuide.com.' },
        { num: 2, title: 'Navigate', desc: 'Go to University Program Finder under the Services tab.' },
        { num: 3, title: 'Filter', desc: 'Select filters — degree level, field, location, or university.' },
        { num: 4, title: 'Explore & Save', desc: 'Explore, compare, and save programs that fit your profile.' },
    ];

    return (
        <section className="py-14 md:py-20" style={{ background: COLORS.lightBackground }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Integration */}
                <h2 className="text-3xl font-extrabold mb-8 text-center" style={{ color: COLORS.primary }}>
                    ✅ Seamless Integration With Other TaleemiGuide Services
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {services.map((s, index) => {
                        const Icon = s.icon;
                        return (
                            <div key={index} className="p-4 rounded-xl text-center" style={{ backgroundColor: 'white', borderBottom: `3px solid ${COLORS.secondary}` }}>
                                <Icon size={30} className="mx-auto mb-2" style={{ color: COLORS.primaryDark }} />
                                <h4 className="font-bold text-sm" style={{ color: COLORS.secondary }}>{s.title}</h4>
                                <p className="text-xs mt-1" style={{ color: COLORS.textGray }}>{s.desc}</p>
                            </div>
                        );
                    })}
                </div>
                
                {/* Process */}
                <h2 className="text-3xl font-extrabold mb-12 text-center" style={{ color: COLORS.primaryDark }}>
                    ✅ How to Use: Simple. Reliable. Accurate.
                </h2>
                <div className="flex justify-center flex-wrap gap-4 md:gap-8">
                    {steps.map((step) => (
                        <div key={step.num} className="flex flex-col items-center w-36 sm:w-48 text-center p-4">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full text-white font-bold text-2xl mb-3" style={{ backgroundColor: COLORS.primary }}>
                                {step.num}
                            </div>
                            <h3 className="text-lg font-bold mb-1" style={{ color: COLORS.secondary }}>{step.title}</h3>
                            <p className="text-sm" style={{ color: COLORS.textGray }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
                <p className="text-center text-lg mt-8 font-medium" style={{ color: COLORS.primaryDark }}>
                    Your academic options — organized in one place.
                </p>
            </div>
        </section>
    );
};


/**
 * 6. Vision and Call to Action (CTA)
 */
const VisionCallToActionSection = () => (
    <section className="py-10 md:py-16 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <h2 className="text-3xl font-extrabold mb-4 flex items-center justify-center" style={{ color: COLORS.primaryDark }}>
                <Eye size={30} className="mr-2" style={{ color: COLORS.secondary }} /> Our Vision
            </h2>
            <p className="text-xl leading-relaxed mb-8 font-medium" style={{ color: COLORS.textGray }}>
                By making this database **free and publicly accessible**, TaleemiGuide aims to build Pakistan’s most transparent and reliable academic information ecosystem, empowering every learner with clarity and access to the right academic pathways.
            </p>
            
            <h2 className="text-3xl font-extrabold mb-4" style={{ color: COLORS.primary }}>
                ✅ CTA: Start Exploring Now!
            </h2>
            <p className="text-xl leading-relaxed mb-8 font-bold" style={{ color: COLORS.secondary }}>
                Find your perfect degree from Pakistan’s largest verified database of university programs.
            </p>
            
            <button
                className="px-10 py-4 text-xl font-bold rounded-xl shadow-xl transition duration-300 ease-in-out transform hover:scale-[1.03] flex items-center justify-center mx-auto"
                style={{ backgroundColor: COLORS.secondary, color: 'white', boxShadow: `0 10px 15px -3px ${COLORS.secondary}70` }}
                // Placeholder for actual launch link
                onClick={() => console.log('Launch University Program Finder')}
            >
                Launch University Program Finder <ArrowRight size={24} className="ml-3" />
            </button>
        </div>
    </section>
);


/**
 * 7. Next Step Section (Bridge to next service)
 */
const NextStepSection = () => (
    <section className="py-10 md:py-16" style={{ background: COLORS.lightBackground }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold mb-4" style={{ color: COLORS.primaryDark }}>
                Your Next Step in the Journey
            </h2>
            <p className="text-xl leading-relaxed mb-6" style={{ color: COLORS.textGray }}>
                Once students enter university, a new set of challenges begins — and TaleemiGuide continues supporting them through our **University Graduates Guidance** service.
            </p>
            <button
                className="px-8 py-3 text-lg font-semibold rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.03] flex items-center justify-center mx-auto"
                style={{ backgroundColor: COLORS.primary, color: 'white' }}
                // Placeholder for actual link to University Graduates Guidance page
                onClick={() => console.log('Navigate to University Graduates Guidance page')}
            >
                Explore University Graduates Guidance &rarr;
            </button>
        </div>
    </section>
);


/**
 * Main University Program Finder Page Component
 */
export default function UniversityProgramFinderPage({ onNavigate = (path) => console.log('Navigating to:', path) }) {
    return (
        <div style={{ fontFamily: 'Inter, sans-serif' }}>
            
            <HeroSection />
            <ProblemBenefitSection />
            <FeaturesSection />
            <AudienceHelpSection />
            <IntegrationProcessSection />
            <VisionCallToActionSection />
            <NextStepSection />

        </div>
    );
}