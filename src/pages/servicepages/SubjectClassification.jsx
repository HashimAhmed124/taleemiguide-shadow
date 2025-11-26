import React from 'react';
import { 
    BookOpen, Layers, Briefcase, Map, CheckCircle, ChevronRight, 
    Lightbulb, Globe, Users, FileText, MessageCircle 
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
                Service: Subject Classification
            </p>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight" style={{ color: COLORS.primary }}>
                {`1000+ Subjects Organized`}
            </h1>
            
            {/* Core Description */}
            <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-4" style={{ color: COLORS.textGray }}>
                <p className="font-semibold text-xl" style={{ color: COLORS.primaryDark }}>
                    Understand Where Your Field Falls — Clearly and Accurately.
                </p>
                <p>
                    Choosing the right field is difficult when you only know a handful of traditional subjects, while Pakistan’s system offers over **1,000+ subjects** across dozens of disciplines.
                </p>
                <p>
                    TaleemiGuide solves this through Pakistan’s first comprehensive **Subject / Field Classification System**, helping you understand how subjects connect and what your true academic and career pathways look like.
                </p>
            </div>
        </div>
    </section>
);


/**
 * 2. Benefits Section: Why Understanding Your Field of Study Matters
 */
const BenefitsSection = () => {
    const benefits = [
        {
            title: "Clarity & Focus",
            description: "Know where your field stands, what subjects are related to it, and what you should focus on to stay aligned with long-term goals.",
            icon: Lightbulb,
        },
        {
            title: "Smarter Academic Planning",
            description: "Choose the right subjects, find the right direction, and select future programs (BS, MS, PhD) with informed confidence.",
            icon: BookOpen,
        },
        {
            title: "Better Career Alignment",
            description: "Ensure your education aligns with market demand, preparing you effectively for internships, jobs, and future opportunities.",
            icon: Briefcase,
        },
    ];

    return (
        <section className="py-14 md:py-20" style={{ background: 'white' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center" style={{ color: COLORS.primaryDark }}>
                    ✅ Why Understanding Your Field of Study Matters
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div 
                                key={index} 
                                className="p-6 rounded-xl border-b-4 shadow-md transition-shadow duration-300 hover:shadow-xl h-full"
                                style={{ borderColor: COLORS.secondary, backgroundColor: COLORS.lightBackground + '60' }}
                            >
                                <Icon size={36} className="mb-4" style={{ color: COLORS.secondary }} />
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
            </div>
        </section>
    );
};


/**
 * 3. Framework Section: Origin and Core Instruments
 */
const FrameworkSection = () => {
    const instruments = [
        { 
            number: '1', 
            title: 'Subject / Field Classification', 
            icon: Map, 
            description: 'A structured map of 1000+ subjects divided into main categories and sub-disciplines, giving you a complete view of the academic landscape.', 
            color: COLORS.primary 
        },
        { 
            number: '2', 
            title: 'Career Assessment Test', 
            icon: Briefcase, 
            description: 'Matches your interests, aptitude, and personality with the best-fit fields and identifies where those fields fall in our classification system.', 
            color: COLORS.secondary 
        },
    ];

    return (
        <section className="py-14 md:py-20" style={{ background: COLORS.lightBackground }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: COLORS.primary }}>
                        Where This Classification Comes From
                    </h2>
                    <p className="text-xl leading-relaxed font-medium max-w-3xl mx-auto" style={{ color: COLORS.primaryDark }}>
                        Our system is built on extensive research, combining the world’s leading academic classification systems into one **accurate, verified framework** — the first service of its kind in Pakistan.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="p-6 rounded-xl shadow-lg h-full" style={{ backgroundColor: 'white' }}>
                        <div className="flex items-center mb-4">
                            <Globe size={36} className="p-2 rounded-full mr-3" style={{ color: 'white', backgroundColor: COLORS.primary }} />
                            <h3 className="text-2xl font-bold" style={{ color: COLORS.primary }}>Our Goals</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <ChevronRight size={20} className="flex-shrink-0 mt-1 mr-2" style={{ color: COLORS.secondary }} />
                                <span className="text-base" style={{ color: COLORS.textGray }}>Streamline students’ academic decisions.</span>
                            </li>
                            <li className="flex items-start">
                                <ChevronRight size={20} className="flex-shrink-0 mt-1 mr-2" style={{ color: COLORS.secondary }} />
                                <span className="text-base" style={{ color: COLORS.textGray }}>Match subjects with future opportunities and market needs.</span>
                            </li>
                            <li className="flex items-start">
                                <ChevronRight size={20} className="flex-shrink-0 mt-1 mr-2" style={{ color: COLORS.secondary }} />
                                <span className="text-base" style={{ color: COLORS.textGray }}>Help users explore related fields they never knew existed.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl shadow-lg h-full" style={{ backgroundColor: 'white' }}>
                        <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: COLORS.primaryDark }}>
                            <Layers size={24} className="mr-2" /> Two Core Instruments for Maximum Clarity
                        </h3>
                        <div className="space-y-4">
                            {instruments.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.number} className="flex items-start p-4 rounded-lg border" style={{ borderColor: item.color + '50' }}>
                                        <div className="w-8 h-8 flex items-center justify-center rounded-full text-white font-bold text-lg flex-shrink-0 mr-3" style={{ backgroundColor: item.color }}>
                                            {item.number}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg" style={{ color: item.color }}>{item.title}</h4>
                                            <p className="text-sm" style={{ color: COLORS.textGray }}>{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                            <p className="text-sm pt-2 italic" style={{ color: COLORS.primaryDark }}>
                                Together, these instruments give students and professionals a complete understanding of **what suits them and where it belongs.**
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


/**
 * 4. Customized Package Section
 */
const PackageSection = () => {
    const packageItems = [
        { title: "Career Assessment Test", icon: Briefcase, desc: "A scientific test that analyzes your interests, personality, values, and strengths to identify your natural academic direction." },
        { title: "Expert Analysis", icon: Users, desc: "Our certified educationists, psychologists, and industry experts review your data to pinpoint the best-fit field for you." },
        { title: "Online Expert Session (Optional)", icon: MessageCircle, desc: "Discuss your results one-on-one with our experts to plan the right academic or career route." },
    ];
    
    const reportContents = [
        'The exact category your field belongs to in the classification system.',
        'Suggested disciplines and sub-disciplines.',
        'Related fields that match your personality and aptitude.',
        'Future study and career pathways.',
    ];

    return (
        <section className="py-14 md:py-20" style={{ background: 'white' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center" style={{ color: COLORS.primaryDark }}>
                    ✅ TaleemiGuide’s Customized Educational Package
                </h2>

                <div className="grid lg:grid-cols-2 gap-10">
                    
                    {/* LEFT: Package Components */}
                    <div className="space-y-6">
                        {packageItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="flex items-start p-5 rounded-xl shadow-md border-l-4 transition-all duration-300 hover:shadow-lg" style={{ borderColor: COLORS.primary }}>
                                    <Icon size={30} className="flex-shrink-0 mr-4 mt-1" style={{ color: COLORS.primary }} />
                                    <div>
                                        <h3 className="text-xl font-bold mb-1" style={{ color: COLORS.primaryDark }}>{item.title}</h3>
                                        <p className="text-sm" style={{ color: COLORS.textGray }}>{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT: Detailed Report Content */}
                    <div className="p-6 rounded-xl border border-gray-200" style={{ backgroundColor: COLORS.lightBackground }}>
                        <h3 className="text-2xl font-bold mb-4 flex items-center" style={{ color: COLORS.secondary }}>
                            <FileText size={24} className="mr-3" /> Detailed Report Includes:
                        </h3>
                        <ul className="space-y-3 text-base">
                            {reportContents.map((content, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle size={18} className="flex-shrink-0 mt-1 mr-2" style={{ color: COLORS.secondary }} />
                                    <span style={{ color: COLORS.textGray }}>{content}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
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
                ✅ Get Started Today
            </h2>
            <p className="text-xl leading-relaxed mb-6 font-medium space-y-2" style={{ color: COLORS.textGray }}>
                <span className="block">Let us help you discover your natural academic direction.</span>
                <span className="block">Start your journey with clarity, confidence, and complete understanding of your field.</span>
            </p>
            <p className="text-xl leading-relaxed mb-8 font-bold" style={{ color: COLORS.secondary }}>
                👉 Explore Subject Classification and take your first step toward a focused academic and professional future.
            </p>
            
            <button
                className="px-10 py-4 text-xl font-bold rounded-xl shadow-xl transition duration-300 ease-in-out transform hover:scale-[1.03]"
                style={{ backgroundColor: COLORS.secondary, color: 'white', boxShadow: `0 10px 15px -3px ${COLORS.secondary}70` }}
                // Placeholder for actual link to the classification page/dashboard
                onClick={() => console.log('Navigate to Subject Classification Portal')}
            >
                Explore Classification Now
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
                After understanding your field and related disciplines, the next step is to explore where these subjects are offered.
            </p>
            <button
                className="px-8 py-3 text-lg font-semibold rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.03] flex items-center justify-center mx-auto"
                style={{ backgroundColor: COLORS.primary, color: 'white' }}
                // Placeholder for actual link to University Program Finder page
                onClick={() => console.log('Navigate to University Program Finder page')}
            >
                Explore University Program Finder &rarr;
            </button>
        </div>
    </section>
);


/**
 * Main Subject Classification Page Component
 */
export default function SubjectClassificationPage({ onNavigate = (path) => console.log('Navigating to:', path) }) {
    return (
        <div style={{ fontFamily: 'Inter, sans-serif' }}>
            
            <HeroSection />
            <BenefitsSection />
            <FrameworkSection />
            <PackageSection />
            <CallToActionSection />
            <NextStepSection />

        </div>
    );
}