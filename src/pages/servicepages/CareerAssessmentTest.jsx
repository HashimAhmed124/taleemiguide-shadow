import React from 'react';
import { 
    Briefcase, GraduationCap, Zap, MessageCircle, Layers, HelpCircle, 
    CheckCircle, UserPlus, FileText, CheckSquare, Search, RefreshCw, 
    ClipboardList, User, ChevronRight // All necessary icons imported
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
 * 1. Hero Section: The Core Value Proposition
 */
const HeroSection = () => (
    <section 
        className="pt-16 md:pt-28 pb-16" 
        style={{ background: `linear-gradient(to bottom, ${COLORS.lightBackground} 0%, white 100%)` }}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Sub-title */}
            <p className="text-sm uppercase font-bold tracking-widest mb-3" style={{ color: COLORS.secondary }}>
                Service: Assessment
            </p>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight" style={{ color: COLORS.primary }}>
                Know Yourself Before Choosing a Degree
            </h1>
            
            {/* Core Description */}
            <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-4" style={{ color: COLORS.textGray }}>
                <p className="font-semibold text-xl" style={{ color: COLORS.primaryDark }}>
                    Our Career Assessment Test provides a scientific, clear pathway by understanding who you are, what career paths match your personality, interests, values, and strengths.
                </p>
                <p>
                    Based on internationally recognized models and validated methodologies, this test cuts through the confusion of thousands of programs and rapidly emerging fields.
                </p>
            </div>
        </div>
    </section>
);


/**
 * 2. Benefits Section: Why This Test is the Right Choice
 */
const BenefitsSection = () => {
    const benefits = [
        {
            title: "In-Depth Personality & Interest Analysis",
            description: "Understand your personality type, work preferences, motivations, and natural strengths, matching them with real career options.",
            icon: ClipboardList,
            color: COLORS.primary,
        },
        {
            title: "Scientifically Designed & Expert-Backed",
            description: "Created by psychologists, career counselors, educationists, and industry experts using globally recognized career frameworks.",
            icon: CheckCircle,
            color: COLORS.secondary,
        },
        {
            title: "Easy for All Academic Levels",
            description: "Written in simple language and perfect for students from Matric (Class 10) to Post-Graduation and beyond.",
            icon: GraduationCap,
            color: COLORS.primary,
        },
    ];

    return (
        <section className="py-14 md:py-20" style={{ background: 'white' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center" style={{ color: COLORS.primaryDark }}>
                    ✅ Why Take TaleemiGuide’s Career Assessment Test?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div 
                                key={index} 
                                className="p-6 rounded-xl border-t-4 shadow-md transition-shadow duration-300 hover:shadow-xl h-full"
                                style={{ borderColor: benefit.color, backgroundColor: COLORS.lightBackground + '60' }}
                            >
                                <Icon size={36} className="mb-4" style={{ color: benefit.color }} />
                                <h3 className="text-xl font-bold mb-3" style={{ color: COLORS.primaryDark }}>
                                    {benefit.title}
                                </h3>
                                <p className="text-base" style={{ color: COLORS.textGray }}>
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Report Details */}
                <div className="max-w-4xl mx-auto p-8 rounded-xl border border-gray-200" style={{ backgroundColor: COLORS.lightBackground }}>
                    <h3 className="text-2xl font-bold mb-4 flex items-center" style={{ color: COLORS.primary }}>
                        <FileText size={24} className="mr-3" /> Personalized Career Report (What You Get)
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
                        {[
                            'Your top interests', 'Strengths & aptitude', 'Personality traits',
                            'Top 5 best-fit career paths', 'Recommended academic fields', 
                            'Suitable degree programs', 
                            <span key="sub-class">Guidance using Subject Classification (1000+ subjects)</span>
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <ChevronRight size={18} className="flex-shrink-0 mt-1 mr-2" style={{ color: COLORS.secondary }} />
                                <span style={{ color: COLORS.textGray }}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
};


/**
 * 3. Audience Section: Who Should Take This Test
 */
const AudienceSection = () => {
    const audienceGroups = [
        { 
            title: "Students (Matric to Postgraduate)", 
            icon: GraduationCap, 
            details: [
                'Confused about subject selection.',
                'Unsure which field suits them.',
                'Need clarity before choosing a BS, MS, or diploma.',
                'Need to align strengths with future goals.'
            ],
            color: COLORS.primary,
        },
        { 
            title: "Professionals Seeking a Change", 
            icon: RefreshCw, 
            details: [
                'Want to switch careers.',
                'Want to find meaningful, suitable work.',
                'Need clarity on certifications or further studies.'
            ],
            color: COLORS.secondary,
        },
        { 
            title: "Job Seekers", 
            icon: Search, 
            details: [
                'Want to understand their unique strengths.',
                'Want roles aligned with personality & aptitude.',
                'Need direction for upskilling.'
            ],
            color: COLORS.primaryDark,
        },
    ];

    return (
        <section className="py-14 md:py-20" style={{ background: COLORS.lightBackground }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center" style={{ color: COLORS.primary }}>
                    ✅ Who Should Take This Test?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {audienceGroups.map((group, index) => {
                        const Icon = group.icon;
                        return (
                            <div 
                                key={index} 
                                className="p-6 rounded-xl shadow-lg border-b-4 h-full"
                                style={{ borderColor: group.color, backgroundColor: 'white' }}
                            >
                                <div className="flex items-center mb-4">
                                    <Icon size={30} className="mr-3" style={{ color: group.color }} />
                                    <h3 className="text-xl font-extrabold" style={{ color: group.color }}>
                                        {group.title}
                                    </h3>
                                </div>
                                <ul className="space-y-2">
                                    {group.details.map((detail, i) => (
                                        <li key={i} className="flex items-start text-sm" style={{ color: COLORS.textGray }}>
                                            <ChevronRight size={16} className="flex-shrink-0 mt-1 mr-2" style={{ color: group.color }} />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};


/**
 * 4. Process Section: How It Works
 */
const ProcessSection = () => {
    const steps = [
        { title: 'Sign Up', desc: 'Login at TaleemiGuide.com to access the dashboard.', icon: UserPlus, color: COLORS.primary },
        { title: 'Complete the Test', desc: 'Attempt the assessment at your own pace (30-45 minutes). Your responses auto-save.', icon: CheckSquare, color: COLORS.primary },
        { title: 'Receive Your Report', desc: 'Your personalized report, including all analyses, will be available within 24 hours.', icon: FileText, color: COLORS.primary },
        { title: 'Discuss Your Results (Optional)', desc: 'Book an online session with expert counselors for deeper insight and next steps guidance.', icon: MessageCircle, color: COLORS.primary },
    ];

    return (
        <section className="py-14 md:py-20" style={{ background: 'white' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center" style={{ color: COLORS.primaryDark }}>
                    ✅ How It Works (4 Simple Steps)
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="text-center p-6 rounded-xl shadow-md border-t-2" style={{ borderColor: COLORS.secondary }}>
                                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full text-white font-bold text-xl" style={{ backgroundColor: COLORS.secondary }}>
                                    <span className="text-2xl">{index + 1}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.primary }}>
                                    {step.title}
                                </h3>
                                <p className="text-sm" style={{ color: COLORS.textGray }}>
                                    {step.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};


/**
 * 5. Call to Action Section
 */
const CallToActionSection = () => (
    <section className="py-10 md:py-16 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold mb-4" style={{ color: COLORS.primaryDark }}>
                ✅ Sign Up Today
            </h2>
            <p className="text-xl leading-relaxed mb-6 font-medium space-y-2" style={{ color: COLORS.textGray }}>
                <span className="block">Unlock your strengths.</span>
                <span className="block">Discover your ideal field.</span>
                <span className="block">Choose your future with confidence.</span>
            </p>
            <p className="text-xl leading-relaxed mb-8 font-bold" style={{ color: COLORS.secondary }}>
                👉 Take the Career Assessment Test and begin your journey toward a fulfilling academic and professional path.
            </p>
            
            <button
                className="px-10 py-4 text-xl font-bold rounded-xl shadow-xl transition duration-300 ease-in-out transform hover:scale-[1.03]"
                style={{ backgroundColor: COLORS.secondary, color: 'white', boxShadow: `0 10px 15px -3px ${COLORS.secondary}70` }}
                // Placeholder for actual link to the test sign-up page
                onClick={() => console.log('Navigate to Test Sign-Up Page')}
            >
                Start Your Assessment Now
            </button>
        </div>
    </section>
);


/**
 * 6. Next Step Section (Bridge to next service)
 */
const NextStepSection = () => (
    <section className="py-10 md:py-16" style={{ background: COLORS.lightBackground }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold mb-4" style={{ color: COLORS.primaryDark }}>
                Your Next Step in the Journey
            </h2>
            <p className="text-xl leading-relaxed mb-6" style={{ color: COLORS.textGray }}>
                Once you know your best-fit fields from the assessment, the next logical step is to explore **ALL** subjects available in Pakistan—including traditional and emerging disciplines—through our Subject Classification system.
            </p>
            <button
                className="px-8 py-3 text-lg font-semibold rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.03] flex items-center justify-center mx-auto"
                style={{ backgroundColor: COLORS.primary, color: 'white' }}
                // Placeholder for actual link to Subject Classification page
                onClick={() => console.log('Navigate to Subject Classification page')}
            >
                Explore Subject Classification &rarr;
            </button>
        </div>
    </section>
);


/**
 * Main Career Assessment Test Page Component
 */
export default function CareerAssessmentPage({ onNavigate = (path) => console.log('Navigating to:', path) }) {
    return (
        <div style={{ fontFamily: 'Inter, sans-serif' }}>
            
            <HeroSection />
            <BenefitsSection />
            <AudienceSection />
            <ProcessSection />
            <CallToActionSection />
            <NextStepSection />

        </div>
    );
}