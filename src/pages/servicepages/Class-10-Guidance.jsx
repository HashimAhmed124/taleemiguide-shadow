 import React from 'react';
import { BookOpen, User, Briefcase, GraduationCap, Zap, MessageCircle, Layers, HelpCircle, Users, CheckCircle, Lightbulb } from 'lucide-react';

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
                Service: Class 10 Guidance
            </p>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight" style={{ color: COLORS.primary }}>
                Your First Major Academic Decision Starts Here
            </h1>
            
            {/* Core Problem Description */}
            <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-4" style={{ color: COLORS.textGray }}>
                <p className="font-semibold text-xl" style={{ color: COLORS.primaryDark }}>
                    After completing Grade 10, choosing a stream shapes your future studies, university options, and eventual career path. 
                </p>
                <p>
                    However, most students and parents face the same challenge: **minimum reliable information and maximum confusion.**
                </p>
            </div>
        </div>
    </section>
);

// -------------------------------------------------------------------------------- //

/**
 * 2. The Challenge Section: Decision Traps and Key Questions
 */
const ChallengeSection = () => {
    const traps = [
        { title: 'Family Expectations', icon: Users },
        { title: 'Friends’ Choices', icon: User },
        { title: 'Trends and “Scope”', icon: Lightbulb },
        { title: 'Incomplete Guidance', icon: HelpCircle },
    ];

    const questions = [
        "Which stream should I choose after Matric (Engineering, Medical, Commerce, Humanities, etc.)?",
        "What subjects are included in each option?",
        "What future careers does each choice lead to?",
        "Which opportunities close automatically after selecting a particular stream?",
        "Will I perform well in the field I choose — how do I know?",
        "Which combinations are better for my long-term plans?",
        "Should I prepare for any entrance or aptitude tests after Class 10?",
    ];

    return (
        <section className="py-14 md:py-20" style={{ background: 'white' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center" style={{ color: COLORS.primaryDark }}>
                    Where Confusion Creeps In
                </h2>

                <div className="grid lg:grid-cols-2 gap-12">
                    
                    {/* LEFT COLUMN: Decision Traps (Why students choose wrong) */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: COLORS.secondary }}>
                            <Layers size={24} className="mr-2" /> 4 Common Decision Traps
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {traps.map((trap, index) => {
                                const Icon = trap.icon;
                                return (
                                    <div 
                                        key={index} 
                                        className="p-5 rounded-xl border-b-4 transition-shadow duration-300 hover:shadow-lg"
                                        style={{ borderColor: COLORS.secondary, backgroundColor: COLORS.lightBackground + '60' }}
                                    >
                                        <Icon size={32} className="mb-2" style={{ color: COLORS.secondary }} />
                                        <h4 className="font-bold text-lg" style={{ color: COLORS.primaryDark }}>{trap.title}</h4>
                                    </div>
                                );
                            })}
                        </div>
                        <p className="mt-8 text-lg leading-relaxed" style={{ color: COLORS.textGray }}>
                            This uncertainty makes stream selection one of the most stressful decision points for both students and parents.
                        </p>
                    </div>

                    {/* RIGHT COLUMN: Key Questions (What they need to know) */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: COLORS.primaryDark }}>
                            <HelpCircle size={24} className="mr-2" style={{ color: COLORS.primary }} /> The Confusing Questions
                        </h3>
                        <ul className="space-y-4">
                            {questions.map((q, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: COLORS.secondary }} />
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

// -------------------------------------------------------------------------------- //

/**
 * 3. Solution Section: TaleemiGuide's Approach
 */
const SolutionSection = () => (
    <section className="py-14 md:py-20" style={{ background: COLORS.lightBackground }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: COLORS.primary }}>
                ✅ How TaleemiGuide Helps
            </h2>
            <p className="text-xl leading-relaxed mb-8 font-medium" style={{ color: COLORS.primaryDark }}>
                TaleemiGuide is Pakistan’s first tech-based educational guidance platform built by educationists, academicians, and certified counselors.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: COLORS.textGray }}>
                We help students choose the right path after Matric with **clarity, confidence, and a complete understanding of future consequences,** offering three support options to match your needs.
            </p>
        </div>
    </section>
);

// -------------------------------------------------------------------------------- //

/**
 * 4. Options/CTA Section: The Three Ways to Get Guidance
 */
const OptionsSection = ({ onNavigate }) => { // ⬅️ onNavigate prop added
    const options = [
        {
            id: 1,
            title: 'Seek Quick Information (Taleemi Advice)',
            icon: Zap,
            description: 'Get fast, expert answers to specific questions about streams, subjects, or entry tests needs.',
            idealFor: 'Immediate questions, clarification on streams, subject combination queries.',
            color: COLORS.secondary,
        },
        {
            id: 2,
            title: 'Take the Career Assessment Test',
            icon: Briefcase,
            description: 'Choose your stream based on your interests, aptitude, strengths, and personality.',
            idealFor: 'Scientific, data-based stream decision, long-term pathway planning.',
            color: COLORS.primary,
        },
        {
            id: 3,
            title: 'Book an Online Consultation',
            icon: MessageCircle,
            description: 'For one-on-one, deep-dive guidance with our expert counselors.',
            idealFor: 'Students needing deep clarity, parents wanting expert advice, discussing the Assessment Report.',
            color: COLORS.primaryDark,
        },
    ];

    return (
        <section className="py-14 md:py-20" style={{ background: 'white' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center" style={{ color: COLORS.primary }}>
                    Choose Your Path to Clarity
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {options.map((option) => (
                        <div 
                            key={option.id} 
                            className="bg-white p-6 rounded-3xl shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl border-t-8 flex flex-col h-full"
                            style={{ borderColor: option.color, borderLeft: `1px solid ${COLORS.lightBackground}`, borderRight: `1px solid ${COLORS.lightBackground}`, borderBottom: `1px solid ${COLORS.lightBackground}` }}
                        >
                            <div className="flex items-center mb-4">
                                <option.icon size={36} className="p-2 rounded-full mr-3" style={{ color: 'white', backgroundColor: option.color }} />
                                <h3 className="text-xl font-extrabold" style={{ color: option.color }}>
                                    {/* 💥 Updated: Simplify title display */}
                                    {option.title}
                                </h3>
                            </div>
                            
                            <p className="text-base leading-relaxed mb-6 flex-grow" style={{ color: COLORS.textGray }}>
                                {option.description}
                            </p>

                            <div className="mb-6">
                                <h4 className="font-bold text-sm mb-2 uppercase tracking-wider" style={{ color: option.color }}>
                                    Ideal for:
                                </h4>
                                <p className="text-sm italic" style={{ color: COLORS.textGray }}>
                                    {option.idealFor}
                                </p>
                            </div>

                            {/* Link/Button - Now uses onNavigate prop */}
                            <button
                                className="w-full py-3 rounded-lg font-semibold text-white transition duration-300 transform hover:scale-[1.01]"
                                style={{ backgroundColor: option.color }}
                                onClick={() => {
                                    let path;
                                    switch (option.id) {
                                        case 1:
                                            // ➡️ Navigate to Contact page with a query parameter for advice
                                            path = '/contact-us?service=advice'; 
                                            break;
                                        case 2:
                                            // ➡️ Navigate to Assessment page
                                            path = '/assessment'; 
                                            break;
                                        case 3:
                                            // ➡️ Navigate to Appointment booking page
                                            path = '/appointment'; 
                                            break;
                                        default:
                                            path = '/';
                                    }
                                    onNavigate(path);
                                }}
                            >
                                Start Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// -------------------------------------------------------------------------------- //

/**
 * 5. Next Step Section (Bridge to next service)
 */
const NextStepSection = ({ onNavigate }) => ( // ⬅️ onNavigate prop added
    <section className="py-10 md:py-16" style={{ background: COLORS.lightBackground }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold mb-4" style={{ color: COLORS.primaryDark }}>
                Your Next Step in the Journey
            </h2>
            <p className="text-xl leading-relaxed mb-6" style={{ color: COLORS.textGray }}>
                After selecting the right stream in Class 10, the next major decision awaits you in Class 11–12: **choosing a specialization and planning for university admissions.**
            </p>
            <button
                className="px-8 py-3 text-lg font-semibold rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.03]"
                style={{ backgroundColor: COLORS.primary, color: 'white' }}
                // ➡️ Use onNavigate to go to the next service page
                onClick={() => onNavigate('/service/class-12')}
            >
                Explore Class 12 Guidance &rarr;
            </button>
        </div>
    </section>
);

// -------------------------------------------------------------------------------- //

/**
 * Main Class 10 Guidance Page Component
 */
export default function Class10GuidancePage({ onNavigate = (path) => console.log('Navigating to:', path) }) {
    return (
        <div style={{ fontFamily: 'Inter, sans-serif' }}>
            
            <HeroSection />
            <ChallengeSection />
            <SolutionSection />
            {/* ⬅️ onNavigate prop passed to sub-components */}
            <OptionsSection onNavigate={onNavigate} />
            <NextStepSection onNavigate={onNavigate} />

        </div>
    );
}