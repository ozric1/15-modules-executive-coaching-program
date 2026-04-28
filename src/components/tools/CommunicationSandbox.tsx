import React, { useState } from 'react';
import { MessageSquare, Send, BrainCircuit, Activity } from 'lucide-react';

const CommunicationSandbox: React.FC = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<{role: 'user' | 'ai', text: string}[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [lastScore, setLastScore] = useState<{score: string, feedback: string} | null>(null);

    const handleSend = async () => {
        if (!message.trim()) return;

        const userMsg = message;
        setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
        setMessage('');
        setIsLoading(true);

        try {
            const res = await fetch('http://localhost:3001/api/sandbox', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    message: userMsg,
                    context: "You are a skeptical CTO. The user is a technical leader asking for a budget increase for a new tool. Be direct and demand clear ROI."
                })
            });
            const data = await res.json();
            
            setChatHistory(prev => [...prev, { role: 'ai', text: data.response }]);
            setLastScore({ score: data.score, feedback: data.feedback });
        } catch (error) {
            console.error(error);
            setChatHistory(prev => [...prev, { role: 'ai', text: "Sorry, the simulation is currently offline." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[600px]">
            <div className="bg-blue-900 p-4 text-white flex justify-between items-center shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <MessageSquare size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold">Communication Sandbox</h3>
                        <p className="text-blue-200 text-xs">Scenario: Asking CTO for Budget</p>
                    </div>
                </div>
                {lastScore && (
                    <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                        <Activity size={16} className="text-teal-300" />
                        <span className="text-sm font-bold">Score: {lastScore.score}</span>
                    </div>
                )}
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50 custom-scrollbar">
                {chatHistory.length === 0 && (
                    <div className="text-center text-slate-500 mt-10">
                        <BrainCircuit size={48} className="mx-auto text-slate-300 mb-4" />
                        <p>Start the conversation. The AI is playing the role of a skeptical CTO.</p>
                    </div>
                )}
                
                {chatHistory.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                            msg.role === 'user' 
                                ? 'bg-blue-600 text-white rounded-br-none' 
                                : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
                        }`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none px-5 py-3 shadow-sm flex items-center gap-2 text-slate-500">
                            <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                            <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                        </div>
                    </div>
                )}
            </div>

            {lastScore && (
                <div className="bg-blue-50 border-t border-blue-100 p-4 shrink-0">
                    <p className="text-sm text-blue-900"><span className="font-bold">Coach's Feedback:</span> {lastScore.feedback}</p>
                </div>
            )}

            <div className="p-4 bg-white border-t border-slate-200 shrink-0">
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type your response..."
                        className="flex-1 border border-slate-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    <button 
                        onClick={handleSend}
                        disabled={isLoading || !message.trim()}
                        className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommunicationSandbox;
