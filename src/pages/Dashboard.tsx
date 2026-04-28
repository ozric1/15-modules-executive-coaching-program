import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, ArrowRightLeft, Video, Target, ArrowLeft, Bell } from 'lucide-react';
import CommunicationSandbox from '../components/tools/CommunicationSandbox';
import TechnicalTranslator from '../components/tools/TechnicalTranslator';
import VideoAnalysis from '../components/tools/VideoAnalysis';

const Dashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'overview' | 'sandbox' | 'translator' | 'video'>('overview');

    return (
        <div className="min-h-screen flex bg-slate-50 font-sans text-slate-900">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0">
                <div className="h-20 flex items-center px-6 border-b border-slate-800">
                    <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors">
                        <ArrowLeft size={18} />
                        <span className="font-bold tracking-tight text-white">Back to Market</span>
                    </Link>
                </div>
                
                <div className="p-6">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">AI Tools</p>
                    <nav className="space-y-2">
                        <button 
                            onClick={() => setActiveTab('overview')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'overview' ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`}
                        >
                            <LayoutDashboard size={20} /> Overview
                        </button>
                        <button 
                            onClick={() => setActiveTab('sandbox')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'sandbox' ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`}
                        >
                            <MessageSquare size={20} /> Comm. Sandbox
                        </button>
                        <button 
                            onClick={() => setActiveTab('translator')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'translator' ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`}
                        >
                            <ArrowRightLeft size={20} /> Tech Translator
                        </button>
                        <button 
                            onClick={() => setActiveTab('video')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'video' ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`}
                        >
                            <Video size={20} /> Video Analysis
                        </button>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
                    <h2 className="text-xl font-bold text-slate-800 capitalize">
                        {activeTab === 'overview' ? 'Progress Overview' : 
                         activeTab === 'sandbox' ? 'Communication Sandbox' : 
                         activeTab === 'translator' ? 'Technical-to-Human Translator' : 
                         'Automated Video Analysis'}
                    </h2>
                    <div className="flex items-center gap-4">
                        <button className="text-slate-400 hover:text-blue-600 transition-colors">
                            <Bell size={20} />
                        </button>
                        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-bold text-slate-800">Alex Director</p>
                                <p className="text-xs text-slate-500">Corporate Learner</p>
                            </div>
                            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-teal-400 rounded-full shadow-sm"></div>
                        </div>
                    </div>
                </header>

                {/* Dynamic Workspace */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    {activeTab === 'overview' && (
                        <div className="space-y-6 max-w-5xl mx-auto">
                            {/* Nudge Logs */}
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                                        <Target size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold">Smart "Nudge" Tracker</h3>
                                        <p className="text-slate-500 text-sm">Your weekly WhatsApp missions and feedback</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {/* Mock Log 1 */}
                                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="shrink-0 w-12 h-12 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center text-xs font-bold text-slate-600">
                                            <span className="text-green-600">OCT</span>
                                            24
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 mb-1">Mission: The 'Problem-Solution-Benefit' Framework</h4>
                                            <p className="text-sm text-slate-600 italic border-l-2 border-green-400 pl-3 mb-2">
                                                "I tried it in the 10 AM standup. It felt a bit rigid at first, but the VP of Eng nodded along when I hit the 'Benefit' part."
                                            </p>
                                            <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">Logged via Voice Note</span>
                                        </div>
                                    </div>
                                    
                                    {/* Mock Log 2 */}
                                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="shrink-0 w-12 h-12 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center text-xs font-bold text-slate-600">
                                            <span className="text-slate-400">OCT</span>
                                            17
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 mb-1">Mission: Silence as a Tool</h4>
                                            <p className="text-sm text-slate-600 italic border-l-2 border-slate-300 pl-3 mb-2">
                                                "Used the 3-second pause after stating the budget requirement. It was uncomfortable but effective."
                                            </p>
                                            <span className="text-xs font-semibold bg-slate-200 text-slate-600 px-2 py-1 rounded">Logged via Text</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'sandbox' && (
                        <div className="max-w-5xl mx-auto h-full flex flex-col">
                            <CommunicationSandbox />
                        </div>
                    )}

                    {activeTab === 'translator' && (
                        <div className="max-w-6xl mx-auto h-full flex flex-col">
                            <TechnicalTranslator />
                        </div>
                    )}

                    {activeTab === 'video' && (
                        <div className="max-w-6xl mx-auto h-full flex flex-col">
                            <VideoAnalysis />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
