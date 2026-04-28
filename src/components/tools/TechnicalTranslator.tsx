import React, { useState } from 'react';
import { ArrowRightLeft, Sparkles, Code, Briefcase, Megaphone, Users } from 'lucide-react';

const TechnicalTranslator: React.FC = () => {
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<{
        executiveSummary: string;
        stakeholderImpact: string;
        teamDirection: string;
    } | null>(null);

    const handleTranslate = async () => {
        if (!input.trim()) return;
        setIsLoading(true);

        try {
            const res = await fetch('http://localhost:3001/api/translator', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ technicalUpdate: input })
            });
            const data = await res.json();
            setResult(data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[600px]">
            <div className="bg-slate-900 p-4 text-white flex justify-between items-center shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <ArrowRightLeft size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold">Technical-to-Human Translator</h3>
                        <p className="text-slate-400 text-xs">Refactor technical jargon for different audiences</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                {/* Input Area */}
                <div className="w-full md:w-1/3 border-r border-slate-200 flex flex-col bg-slate-50">
                    <div className="p-4 border-b border-slate-200 shrink-0">
                        <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-1">
                            <Code size={16} className="text-slate-400" />
                            Raw Technical Update
                        </label>
                        <p className="text-xs text-slate-500">Paste your technical slack message or ticket description here.</p>
                    </div>
                    <textarea 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="e.g., We encountered a race condition in the auth microservice due to stale Redis cache during high load..."
                        className="flex-1 w-full p-4 resize-none focus:outline-none bg-transparent"
                    />
                    <div className="p-4 shrink-0">
                        <button 
                            onClick={handleTranslate}
                            disabled={isLoading || !input.trim()}
                            className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors disabled:opacity-50"
                        >
                            {isLoading ? 'Refactoring...' : <><Sparkles size={18} /> Refactor Communication</>}
                        </button>
                    </div>
                </div>

                {/* Output Area */}
                <div className="w-full md:w-2/3 overflow-y-auto custom-scrollbar p-6 bg-white space-y-6">
                    {!result && !isLoading && (
                        <div className="h-full flex flex-col items-center justify-center text-slate-400">
                            <ArrowRightLeft size={48} className="mb-4 opacity-20" />
                            <p>Translate technical updates instantly.</p>
                        </div>
                    )}

                    {isLoading && (
                        <div className="h-full flex flex-col items-center justify-center space-y-4 text-slate-400">
                            <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin"></div>
                            <p>Analyzing intent and formatting for audiences...</p>
                        </div>
                    )}

                    {result && !isLoading && (
                        <>
                            {/* Executive Version */}
                            <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-5">
                                <h4 className="flex items-center gap-2 font-bold text-indigo-900 mb-2">
                                    <Briefcase size={18} /> The Executive Summary (CEO)
                                </h4>
                                <p className="text-indigo-800 text-sm leading-relaxed">{result.executiveSummary}</p>
                            </div>

                            {/* Stakeholder Version */}
                            <div className="bg-teal-50/50 border border-teal-100 rounded-xl p-5">
                                <h4 className="flex items-center gap-2 font-bold text-teal-900 mb-2">
                                    <Megaphone size={18} /> Stakeholder Impact (Marketing/Sales)
                                </h4>
                                <p className="text-teal-800 text-sm leading-relaxed">{result.stakeholderImpact}</p>
                            </div>

                            {/* Team Version */}
                            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-5">
                                <h4 className="flex items-center gap-2 font-bold text-blue-900 mb-2">
                                    <Users size={18} /> Team Direction (Developers)
                                </h4>
                                <p className="text-blue-800 text-sm leading-relaxed">{result.teamDirection}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TechnicalTranslator;
