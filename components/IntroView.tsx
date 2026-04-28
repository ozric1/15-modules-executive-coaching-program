import React from 'react';

const IntroView: React.FC = () => {
    const modules = [
        {
            num: "01",
            title: "The Executive Bedrock",
            units: "Units 1-3: First Impressions, Motivation, Negotiation",
            desc: "Establish your baseline authority. Master the 'Bridge Technique' for networking, learn to drive team loyalty beyond financial incentives, and acquire the 'If...Then...' grammatical structures required for high-stakes bargaining."
        },
        {
            num: "02",
            title: "Strategic Influence",
            units: "Units 4-6: Pitching Innovation, Client Diplomacy, Ethics",
            desc: "Move from participation to persuasion. Learn the 'Problem-Solution-Benefit' framework for pitching ideas, master the art of indirect questioning to defuse angry clients, and articulate corporate values with future-focused certainty."
        },
        {
            num: "03",
            title: "Operational Command",
            units: "Units 7-8: Decision Making, Outsourcing",
            desc: "Control the chaos. Develop specific 'Chairing' vocabulary to manage circular meetings, use Quantifiers to allocate resources precisely, and wield the Passive Voice to deliver objective, depersonalized reports on structural changes."
        },
        {
            num: "04",
            title: "Growth & Transition",
            units: "Units 9-12: Projects, Networking, Virtual Comm, Leading Change",
            desc: "Navigate the messy middle of business. Learn to report 'Red' project statuses without losing face, manage the specific etiquette of virtual interruptions, and use the Future Perfect to project calm during turbulent restructuring."
        },
        {
            num: "05",
            title: "Global Management",
            units: "Units 13-15: Data Storytelling, Culture, Feedback",
            desc: "Refine the narrative. Transform dry data into dynamic stories using 'Rocket/Plummet' vocabulary, navigate cross-cultural faux pas with narrative tenses, and deliver the 'Sandwich' method of constructive criticism."
        }
    ];

    return (
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 text-center max-w-4xl mx-auto mt-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 font-serif-display tracking-tight">Zentia World</h1>
            <h2 className="text-xl text-slate-500 uppercase tracking-widest mb-8 font-medium">Master Corporate Presence</h2>
            
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                A comprehensive 15-module curriculum designed for modern professionals. Master the art of negotiation, diplomacy, and impactful communication.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow duration-300">
                    <i className="fa-solid fa-handshake text-3xl text-blue-600 mb-4"></i>
                    <h3 className="font-bold text-slate-800 mb-2 text-lg">Build Relations</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Master networking, small talk, and cultural etiquette to build lasting business bonds.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow duration-300">
                    <i className="fa-solid fa-gavel text-3xl text-amber-600 mb-4"></i>
                    <h3 className="font-bold text-slate-800 mb-2 text-lg">Negotiate & Lead</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Learn to command authority, make requests, and manage performance reviews effectively.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow duration-300">
                    <i className="fa-solid fa-chart-line text-3xl text-emerald-600 mb-4"></i>
                    <h3 className="font-bold text-slate-800 mb-2 text-lg">Drive Results</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Present data, pitch new ideas, and manage projects with clarity and precision.</p>
                </div>
            </div>

            <div className="text-left border-t border-slate-100 pt-10 px-4 mb-16">
                <h3 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-xs">Instructor's Note</h3>
                <p className="text-slate-600 leading-relaxed italic font-serif text-lg">
                    "This course bridges the critical gap between functional English proficiency and executive-level command. We move beyond theory to focus on the art of application: mastering negotiations, delivering impactful presentations, and navigating complex business scenarios. 
                    <br/><br/>
                    Our objective is to arm you with the subtle yet powerful tools that distinguish a good speaker from a truly great leader. Prepare to find your voice and command your audience."
                </p>
                <div className="mt-6 font-serif-display text-2xl text-slate-800 italic text-right">Nezar Abdeljalil</div>
            </div>

            {/* Course Outline Section */}
            <div className="text-left bg-slate-50/50 rounded-2xl p-8 border border-slate-100">
                <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                    <i className="fa-solid fa-map-location-dot text-slate-400 text-xl"></i>
                    <h3 className="font-bold text-slate-800 uppercase tracking-widest text-sm">Course Syllabus & Roadmap</h3>
                </div>

                <div className="space-y-8 relative">
                    {/* Vertical Line for Desktop */}
                    <div className="hidden md:block absolute left-[19px] top-4 bottom-4 w-px bg-slate-200"></div>

                    {modules.map((mod, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row gap-6 relative z-10 group">
                            {/* Number Badge */}
                            <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                                <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 text-slate-400 font-bold flex items-center justify-center text-sm shadow-sm group-hover:border-blue-500 group-hover:text-blue-600 transition-colors">
                                    {mod.num}
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="pb-4 md:pb-0">
                                <h4 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-blue-700 transition-colors">{mod.title}</h4>
                                <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-2">{mod.units}</p>
                                <p className="text-slate-600 text-sm leading-relaxed">{mod.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IntroView;