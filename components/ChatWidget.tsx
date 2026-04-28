import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Content, Part } from "@google/genai";

interface Message {
    id: string;
    role: 'user' | 'model';
    type: 'text' | 'audio';
    content: string; // Text content or Transcript
    audioUrl?: string; // For playing back user's audio
}

const SYSTEM_INSTRUCTION = `
You are Zentia, an elite Business English Corporate Trainer and Executive Coach. 
Your goal is to help professionals refine their communication to be more authoritative, diplomatic, and precise.

1. **Text Queries:** Answer questions about business English, grammar, etiquette, and strategy directly.
2. **Audio/Voice Input:** 
   - When the user sends an audio recording, you MUST listen to it (it will be provided as an audio file).
   - Analyze their **Pronunciation**, **Intonation**, **Word Stress**, and **Phrasing**.
   - Provide constructive feedback.
   - If they sound professional, give them a "Well Done" and explain why it was effective.
   - If they make mistakes, politely correct them and offer a "Polished Version" of how a C-level executive would say it.
   - Focus on word stress (e.g., "re-CORD" vs "REC-ord") and diplomatic language.

Tone: Professional, encouraging, sophisticated, yet concise.
`;

const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { 
            id: 'init', 
            role: 'model', 
            type: 'text', 
            content: "Welcome to Zentia AI. I am your executive coach. You can ask me questions or record your voice for pronunciation feedback." 
        }
    ]);
    const [input, setInput] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    // Audio Refs
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen]);

    // --- Gemini Logic ---
    const sendToGemini = async (newMessages: Message[]) => {
        setIsLoading(true);
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            // Build History for Gemini
            // We need to map our internal Message structure to the SDK's Content format
            const history: Content[] = newMessages.slice(0, -1).map(m => {
                if (m.type === 'audio') {
                    // For history, we usually just pass the text transcript if we had it, 
                    // or we skip audio blobs in history to save tokens unless strictly necessary.
                    // For simplicity in this chat, we'll represent past audio as text notes if available,
                    // or just the user's text prompt.
                    return {
                        role: m.role,
                        parts: [{ text: "[User sent an audio clip for analysis]" }]
                    };
                }
                return {
                    role: m.role,
                    parts: [{ text: m.content }]
                };
            });

            const lastMsg = newMessages[newMessages.length - 1];
            let parts: Part[] = [];

            if (lastMsg.type === 'audio' && lastMsg.audioUrl) {
                // Convert blob URL back to base64 (stored in memory or re-fetch)
                // Since we don't have the blob directly here easily without prop drilling, 
                // we'll assume the handleStopRecording passed the base64 to a helper or we handle it there.
                // REFACTOR: Logic moved to handleSendAudio to call api directly.
                return; 
            } else {
                parts = [{ text: lastMsg.content }];
            }

            const response = await ai.models.generateContent({
                model: 'gemini-3-pro-preview',
                contents: [...history, { role: 'user', parts }],
                config: { systemInstruction: SYSTEM_INSTRUCTION }
            });

            const text = response.text || "I apologize, I couldn't process that.";
            
            setMessages(prev => [...prev, {
                id: Date.now().toString(),
                role: 'model',
                type: 'text',
                content: text
            }]);

        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, {
                id: Date.now().toString(),
                role: 'model',
                type: 'text',
                content: "I'm having trouble connecting to the coaching server. Please try again."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    // --- Audio Handling ---
    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            chunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (e) => {
                if (e.data.size > 0) chunksRef.current.push(e.data);
            };

            mediaRecorderRef.current.onstop = handleStopRecording;
            mediaRecorderRef.current.start();
            setIsRecording(true);
        } catch (err) {
            console.error("Mic access denied", err);
            alert("Microphone access is required for voice analysis.");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            // Stop all tracks to release mic
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
        }
    };

    const handleStopRecording = async () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(blob);
        const base64Audio = await blobToBase64(blob);

        // Add User Message immediately
        const newUserMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            type: 'audio',
            content: "Analyze my pronunciation.",
            audioUrl: audioUrl
        };

        setMessages(prev => [...prev, newUserMsg]);
        setIsLoading(true);

        // Send to Gemini with Audio
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            const response = await ai.models.generateContent({
                model: 'gemini-3-pro-preview',
                contents: [
                    {
                        role: 'user',
                        parts: [
                            { 
                                inlineData: {
                                    mimeType: 'audio/webm',
                                    data: base64Audio
                                } 
                            },
                            { text: "Please analyze this audio recording for business English pronunciation, tone, and clarity." }
                        ]
                    }
                ],
                config: { systemInstruction: SYSTEM_INSTRUCTION }
            });

            const text = response.text || "I heard you, but I couldn't generate feedback.";

            setMessages(prev => [...prev, {
                id: Date.now() + 'bot',
                role: 'model',
                type: 'text',
                content: text
            }]);

        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, {
                id: Date.now() + 'err',
                role: 'model',
                type: 'text',
                content: "I encountered an error analyzing your audio. Please ensure the recording is clear."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    // --- Text Handling ---
    const handleSendText = () => {
        if (!input.trim()) return;
        
        const newMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            type: 'text',
            content: input
        };

        const updatedMessages = [...messages, newMsg];
        setMessages(updatedMessages);
        setInput('');
        sendToGemini(updatedMessages);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendText();
        }
    };

    // --- Helper ---
    const blobToBase64 = (blob: Blob): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64String = reader.result as string;
                // Remove data url prefix (e.g. "data:audio/webm;base64,")
                const base64 = base64String.split(',')[1];
                resolve(base64);
            };
            reader.onerror = reject;
        });
    };

    return (
        <>
            {/* Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center z-50 transition-all duration-300
                    ${isOpen ? 'bg-slate-800 rotate-90' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-110'}
                `}
            >
                <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-robot'} text-white text-xl`}></i>
            </button>

            {/* Chat Window */}
            <div 
                className={`
                    fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] 
                    bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right
                    ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}
                `}
            >
                {/* Header */}
                <div className="bg-slate-900 p-4 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 relative">
                            <span className="font-serif text-white font-bold italic text-lg">Z</span>
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></div>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-sm">Zentia Coach</h3>
                            <p className="text-slate-400 text-xs">AI Corporate Trainer</p>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                        <i className="fa-solid fa-minus"></i>
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                    {messages.map((msg) => (
                        <div 
                            key={msg.id} 
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div 
                                className={`
                                    max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm
                                    ${msg.role === 'user' 
                                        ? 'bg-blue-600 text-white rounded-br-none' 
                                        : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none'}
                                `}
                            >
                                {msg.type === 'audio' && msg.audioUrl && (
                                    <div className="mb-2">
                                        <div className="flex items-center gap-2 bg-black/10 p-2 rounded-lg">
                                            <button 
                                                onClick={() => new Audio(msg.audioUrl).play()}
                                                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                                            >
                                                <i className="fa-solid fa-play text-white text-xs"></i>
                                            </button>
                                            <div className="h-1 bg-white/30 flex-1 rounded-full overflow-hidden">
                                                <div className="h-full w-1/2 bg-white rounded-full"></div>
                                            </div>
                                            <span className="text-xs font-mono opacity-80">Audio</span>
                                        </div>
                                    </div>
                                )}
                                
                                <div dangerouslySetInnerHTML={{ __html: msg.content.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }} />
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm flex gap-2 items-center">
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-slate-200">
                    <div className="relative flex items-center gap-2">
                        {isRecording ? (
                            <div className="flex-1 h-12 bg-red-50 border border-red-200 rounded-full flex items-center justify-between px-4 animate-pulse">
                                <span className="text-red-600 font-bold text-sm flex items-center gap-2">
                                    <div className="w-3 h-3 bg-red-600 rounded-full animate-ping"></div>
                                    Recording...
                                </span>
                                <button 
                                    onClick={stopRecording}
                                    className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                                >
                                    <i className="fa-solid fa-stop"></i>
                                </button>
                            </div>
                        ) : (
                            <>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ask about grammar or 'Send Audio'..."
                                    className="flex-1 bg-slate-100 text-slate-800 placeholder-slate-400 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    disabled={isLoading}
                                />
                                {input.trim() ? (
                                    <button 
                                        onClick={handleSendText}
                                        disabled={isLoading}
                                        className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 shadow-md transition-colors"
                                    >
                                        <i className="fa-solid fa-paper-plane text-sm"></i>
                                    </button>
                                ) : (
                                    <button 
                                        onClick={startRecording}
                                        disabled={isLoading}
                                        className="w-10 h-10 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center hover:bg-slate-300 hover:text-slate-800 shadow-sm transition-all"
                                        title="Record Audio"
                                    >
                                        <i className="fa-solid fa-microphone text-sm"></i>
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                    <div className="text-center mt-2">
                        <span className="text-[10px] text-slate-400">Powered by Gemini 3 Pro</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatWidget;