import React from 'react';
// 1. **CRITICAL FIX**: Ensuring all required icons are explicitly imported.
// The crash is almost certainly caused by an unimported icon (like 'Users' or 'Lightbulb')
import { 
    Briefcase, Zap, MessageCircle, Layers, HelpCircle, 
    Search, Lightbulb, ChevronRight, XCircle, Users, User 
} from 'lucide-react'; 

// --- UNIFIED COLOR PALETTE (Reused from Service.jsx) ---
const COLORS = {
    primary: '#1E3A8A', // Dark Blue
    secondary: '#F97316', // Bright Orange
    textGray: '#4B5563', // Standard paragraph text color
    lightBackground: '#EFF6FF', // Very Light Blue/Off-White
    primaryDark: '#11253e', // For darker text/headings
};

/**
 * 1. Hero Section: The Problem Statement
 */
const HeroSection = () => (
    <section 
        className="pt-16 md:pt-28 pb-16" 
        style={{ background: `linear-gradient(to bottom, ${COLORS.lightBackground} 0%, white 100%)` }}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Sub-title */}
            <p className="text-sm uppercase font-bold tracking-widest mb-3" style={{ color: COLORS.secondary }}>
                Service: Class 12 Guidance
            </p>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight" style={{ color: COLORS.primary }}>
                Turning Your Subjects Into a Clear Academic & Career Pathway
            </h1>
            
            {/* Core Problem Description */}
            <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-4" style={{ color: COLORS.textGray }}>
                <p className="font-semibold text-xl" style={{ color: COLORS.primaryDark }}>
                    After completing Class 12 (FSc, FA, A-Level, etc.), you face the most critical decision: choosing the right specialization and university for your undergraduate studies. 
                </p>
                <p>
                    Research shows students are aware of only **7–10% of actual career possibilities**, leading to limited and often misinformed decisions.
                </p>
            </div>
        </div>
    </section>
);


/**
 * 2. The Challenge Section: Key Questions and Limited Sources - REWRITTEN FOR STABILITY
 */
const ChallengeSection = () => {
    // We map titles to Lucide React components directly to avoid potential destructuring errors
    const limitedSourcesData = [
        { title: 'Relying on Friends/Seniors', Icon: Users, description: 'Limited to personal experiences, rarely know about emerging fields.' },
        { title: 'Misinformed Relatives', Icon: User, description: 'Advice often based on outdated trends or incomplete market knowledge.' },
        { title: 'Unfiltered Online Searches', Icon: Search, description: 'Thousands of results that do not match a student’s unique profile.' },
        { title: 'The “Scope” Myth', Icon: Lightbulb, description: 'Chasing popular trends rather than personal aptitude and long-term viability.' },
    ];

    const questions = [
        "Which specialization should I choose for my BS degree?",
        "Which universities should I apply to, and what are their admission timelines?",
        "What entrance tests or competitive exams are required?",
        "What is the actual scope or future of a particular field?",
        "What jobs or industries will this degree lead to?",
        "Should I pursue further studies, join the family business, or enter a skill-based path?",
        "What are the long-term career pathways for each specialization?",
    ];

    return (
        <section className="py-14 md:py-20" style={{ background: 'white' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center" style={{ color: COLORS.primaryDark }}>
                    The Biggest Hurdles You Face
                </h2>

                <div className="grid lg:grid-cols-2 gap-12">
                    
                    {/* LEFT COLUMN: Limited Sources */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: COLORS.secondary }}>
                            <XCircle size={24} className="mr-2" /> Why Traditional Advice Fails
                        </h3>
                        <div className="space-y-4">
                            {limitedSourcesData.map((source, index) => {
                                // Direct use of the component from the data structure
                                const IconComponent = source.Icon; 
                                return (
                                    <div 
                                        key={index} 
                                        className="p-5 rounded-xl transition-shadow duration-300 border-l-4"
                                        style={{ borderColor: COLORS.secondary, backgroundColor: COLORS.lightBackground + '60' }}
                                    >
                                        <h4 className="font-bold text-lg mb-1" style={{ color: COLORS.primaryDark }}>{source.title}</h4>
                                        <p className="text-sm" style={{ color: COLORS.textGray }}>{source.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Key Questions */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: COLORS.primaryDark }}>
                            <HelpCircle size={24} className="mr-2" style={{ color: COLORS.primary }} /> The Pressing Questions You Need Answered
                        </h3>
                        <ul className="space-y-4">
                            {questions.map((q, index) => (
                                <li 
                                    key={index} 
                                    className="flex items-start p-3 rounded-lg border border-transparent hover:border-gray-200 transition-all duration-200"
                                >
                                    <ChevronRight size={20} className="flex-shrink-0 mt-1" style={{ color: COLORS.primary }} />
                                    <span className="ml-3 text-base font-medium" style={{ color: COLORS.textGray }}>{q}</span>
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
 * 3. Solution Section: TaleemiGuide's Approach
 */
const SolutionSection = () => (
    <section className="py-14 md:py-20" style={{ background: COLORS.lightBackground }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: COLORS.primary }}>
                How TaleemiGuide Simplifies Your Decision
            </h2>
            <p className="text-xl leading-relaxed mb-8 font-medium" style={{ color: COLORS.primaryDark }}>
                We bring together academicians, industry experts, psychologists, and certified counselors to offer **reliable, structured, and personalized** guidance for students at the Class 12 stage.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: COLORS.textGray }}>
                Whether you are unsure about your specialization, struggling to understand university options, or confused about future careers — TaleemiGuide simplifies your entire decision-making process.
            </p>
        </div>
    </section>
);


/**
 * 4. Options/CTA Section: The Three Ways to Get Guidance
 */
const OptionsSection = () => {
    const options = [
        {
            id: 1,
            title: 'Seek Quick Information (Taleemi Advice)',
            icon: Zap,
            description: 'Get fast, reliable answers to specific educational, admission, or program comparison queries.',
            idealFor: 'Admission-related questions, eligibility concerns, program comparison, general academic queries.',
            color: COLORS.secondary,
        },
        {
            id: 2,
            title: 'Take the Career Assessment Test',
            icon: Briefcase,
            description: 'Choose your specialization based on a scientific evaluation of your interests, aptitude, strengths, and values.',
            reportDetails: [
                'Your interests and aptitude',
                'Personality strengths',
                'Top 5 most compatible career options',
                'Recommended undergraduate fields',
                'Guidance through our Subject Classification (1000+ subjects organized systematically)',
            ],
            idealFor: 'Choosing a specialization based on data, understanding long-term academic pathways.',
            color: COLORS.primary,
        },
        {
            id: 3,
            title: 'Book an Online Consultation',
            icon: MessageCircle,
            description: 'For personalized one-on-one guidance with our experts to discuss your future in detail.',
            idealFor: 'Detailed specialization selection, planning university applications, understanding admission tests, discussing your Career Assessment Report.',
            color: COLORS.primaryDark,
        },
    ];

    return (
        <section className="py-14 md:py-20" style={{ background: 'white' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center" style={{ color: COLORS.primary }}>
                    Choose Your Guidance Option
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {options.map((option) => {
                        const Icon = option.icon; // Icon is correctly imported and used here
                        return (
                            <div 
                                key={option.id} 
                                className="bg-white p-6 rounded-3xl shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl border-t-8 flex flex-col h-full"
                                style={{ borderColor: option.color, borderLeft: `1px solid ${COLORS.lightBackground}`, borderRight: `1px solid ${COLORS.lightBackground}`, borderBottom: `1px solid ${COLORS.lightBackground}` }}
                            >
                                <div className="flex items-center mb-4">
                                    <Icon size={36} className="p-2 rounded-full mr-3" style={{ color: 'white', backgroundColor: option.color }} />
                                    <h3 className="text-xl font-extrabold" style={{ color: option.color }}>
                                        {`Option ${option.id} — ${option.title.split('—')[1] ? option.title.split('—')[1].trim() : option.title}`}
                                    </h3>
                                </div>
                                
                                <p className="text-base leading-relaxed mb-6" style={{ color: COLORS.textGray }}>
                                    {option.description}
                                </p>

                                {/* Conditional rendering for Assessment Test report details */}
                                {option.id === 2 && (
                                    <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: COLORS.lightBackground }}>
                                        <h4 className="font-bold text-sm mb-2 uppercase tracking-wider" style={{ color: option.color }}>
                                            Personalized Report Includes:
                                        </h4>
                                        <ul className="space-y-1">
                                            {option.reportDetails.map((detail, i) => (
                                                <li key={i} className="flex items-start text-sm" style={{ color: COLORS.textGray }}>
                                                    <Layers size={14} className="flex-shrink-0 mt-1 mr-2" style={{ color: option.color }} />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="mb-6 mt-auto">
                                    <h4 className="font-bold text-sm mb-2 uppercase tracking-wider" style={{ color: option.color }}>
                                        Ideal for:
                                    </h4>
                                    <p className="text-sm italic" style={{ color: COLORS.textGray }}>
                                        {option.idealFor}
                                    </p>
                                </div>

                                {/* Link/Button - Placeholder for actual navigation */}
                                <button
                                    className="w-full py-3 rounded-lg font-semibold text-white transition duration-300 transform hover:scale-[1.01]"
                                    style={{ backgroundColor: option.color }}
                                >
                                    Start Now
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};


/**
 * 5. Next Step Section (Bridge to next service)
 */
const NextStepSection = () => (
    <section className="py-10 md:py-16" style={{ background: COLORS.lightBackground }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold mb-4" style={{ color: COLORS.primaryDark }}>
                Your Next Step in the Journey
            </h2>
            <p className="text-xl leading-relaxed mb-6" style={{ color: COLORS.textGray }}>
                Once your field is finalized, the next stage is to explore **ALL** subjects available in Pakistan—including traditional and emerging disciplines—using our comprehensive Subject Classification system.
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
 * Main Class 12 Guidance Page Component
 */
export default function Class12GuidancePage({ onNavigate = (path) => console.log('Navigating to:', path) }) {
    return (
        <div style={{ fontFamily: 'Inter, sans-serif' }}>
            
            <HeroSection />
            <ChallengeSection />
            <SolutionSection />
            <OptionsSection />
            <NextStepSection />

        </div>
    );
}