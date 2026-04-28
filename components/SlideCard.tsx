import React, { useState, useRef, useEffect } from 'react';
import { Slide } from '../types';
import { GoogleGenAI } from "@google/genai";

interface SlideCardProps {
    slide: Slide;
}

const SlideCard: React.FC<SlideCardProps> = ({ slide }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    
    // Web Audio API Refs
    const audioContextRef = useRef<AudioContext | null>(null);
    const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);
    const audioBufferRef = useRef<AudioBuffer | null>(null);
    
    // Timing Refs
    const startedAtRef = useRef<number>(0);
    const pausedAtRef = useRef<number>(0);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (sourceNodeRef.current) {
                try {
                    sourceNodeRef.current.stop();
                } catch (e) { /* ignore */ }
            }
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };
    }, []);

    // Explicitly reset audio if the slide content changes
    useEffect(() => {
        // Stop current audio if playing
        if (sourceNodeRef.current) {
            try {
                sourceNodeRef.current.onended = null;
                sourceNodeRef.current.stop();
            } catch (e) { /* ignore */ }
            sourceNodeRef.current = null;
        }
        
        // Clear the buffer so we don't play the old lesson's audio
        audioBufferRef.current = null;
        
        // Reset state
        setIsPlaying(false);
        setIsPaused(false);
        pausedAtRef.current = 0;
        startedAtRef.current = 0;
        setIsLoading(false);
    }, [slide]);

    const initAudioContext = async () => {
        if (!audioContextRef.current) {
            const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
            audioContextRef.current = new AudioContextClass({ sampleRate: 24000 });
        }
        if (audioContextRef.current.state === 'suspended') {
            await audioContextRef.current.resume();
        }
        return audioContextRef.current;
    };

    const playAudio = async (offset: number) => {
        const ctx = await initAudioContext();
        if (!audioBufferRef.current) return;

        const source = ctx.createBufferSource();
        source.buffer = audioBufferRef.current;
        source.connect(ctx.destination);

        // Schedule start
        source.start(0, offset);
        
        // Track timing
        startedAtRef.current = ctx.currentTime - offset;
        sourceNodeRef.current = source;
        setIsPlaying(true);
        setIsPaused(false);

        // Handle natural finish
        source.onended = () => {
             // Check if it finished naturally (approximate check against duration)
             if (source.buffer && Math.abs(ctx.currentTime - startedAtRef.current - source.buffer.duration) < 0.2) {
                 resetAudioState();
             }
        };
    };

    const pauseAudio = () => {
        if (!sourceNodeRef.current || !audioContextRef.current) return;

        // Calculate offset
        const elapsed = audioContextRef.current.currentTime - startedAtRef.current;
        pausedAtRef.current = elapsed;

        // Stop playback
        try {
            sourceNodeRef.current.onended = null; // Prevent triggering reset
            sourceNodeRef.current.stop();
        } catch (e) { /* ignore */ }

        setIsPlaying(false);
        setIsPaused(true);
    };

    const resetAudioState = () => {
        setIsPlaying(false);
        setIsPaused(false);
        pausedAtRef.current = 0;
        startedAtRef.current = 0;
    };

    const stopAndResetAudio = () => {
        if (sourceNodeRef.current) {
            try {
                sourceNodeRef.current.onended = null;
                sourceNodeRef.current.stop();
            } catch (e) { /* ignore */ }
        }
        resetAudioState();
    };

    const handleToggleAudio = async () => {
        if (isPlaying) {
            pauseAudio();
        } else if (isPaused && audioBufferRef.current) {
            playAudio(pausedAtRef.current);
        } else if (audioBufferRef.current) {
            // Replay from start if buffer exists but stopped
            playAudio(0);
        } else {
            // First time generation
            await generateAndPlayAudio();
        }
    };

    const generateAndPlayAudio = async () => {
        setIsLoading(true);
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            // Map voices
            const uniqueSpeakers = Array.from(new Set(slide.dialogue.map(l => l.spk)));
            const availableVoices = ['Kore', 'Fenrir', 'Puck', 'Charon'];
            const speakerVoiceConfigs = uniqueSpeakers.map((spk, index) => ({
                speaker: spk,
                voiceConfig: { 
                    prebuiltVoiceConfig: { 
                        voiceName: availableVoices[index % availableVoices.length] 
                    } 
                }
            }));

            const script = slide.dialogue.map(l => `${l.spk}: ${l.txt}`).join('\n');
            const prompt = `
                Act out the following professional business conversation. 
                Focus heavily on natural intonation, word stress, and pacing suitable for a corporate environment.
                Do not read the speaker names, just act out the lines as different characters.
                
                ${script}
            `;

            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash-preview-tts",
                contents: { parts: [{ text: prompt }] },
                config: {
                    responseModalities: ['AUDIO'],
                    speechConfig: {
                        multiSpeakerVoiceConfig: {
                            speakerVoiceConfigs: speakerVoiceConfigs
                        }
                    }
                }
            });

            const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
            if (!base64Audio) throw new Error("No audio data received");

            // Decode
            const ctx = await initAudioContext();
            const audioBytes = decode(base64Audio);
            const buffer = await decodeAudioData(audioBytes, ctx, 24000, 1);
            
            audioBufferRef.current = buffer;
            playAudio(0);

        } catch (error) {
            console.error("Audio generation failed:", error);
            alert("Unable to generate audio. Please check your connection or API key.");
            setIsLoading(false);
        } finally {
            if (!isPlaying) setIsLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm mb-6 overflow-hidden">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                <h4 className="font-bold text-slate-800">{slide.title}</h4>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Language Input</span>
            </div>
            
            <div className="p-6">
                {/* Conversation Box */}
                <div className="bg-slate-50 border-l-4 border-slate-500 p-4 rounded-r-lg mb-5 transition-colors hover:border-blue-500 relative">
                    <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-200">
                        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wide flex items-center gap-2">
                            <i className="fa-solid fa-microphone-lines"></i> Natural Conversation
                        </span>
                        
                        <div className="flex gap-2">
                            {(isPaused || isPlaying || (audioBufferRef.current && !isPlaying && !isLoading)) && (
                                <button
                                    onClick={stopAndResetAudio}
                                    title="Stop and Reset"
                                    className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 flex items-center justify-center transition-colors"
                                >
                                    <i className="fa-solid fa-square text-xs"></i>
                                </button>
                            )}

                            <button 
                                onClick={handleToggleAudio}
                                disabled={isLoading}
                                className={`
                                    text-xs px-4 py-1.5 rounded-full font-semibold flex items-center gap-2 transition-all duration-200 min-w-[90px] justify-center
                                    ${isPlaying 
                                        ? 'bg-amber-100 text-amber-700 hover:bg-amber-200 border border-amber-200' 
                                        : isPaused
                                            ? 'bg-green-100 text-green-700 hover:bg-green-200 border border-green-200'
                                            : 'bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-200 hover:shadow-sm'}
                                    ${isLoading ? 'opacity-70 cursor-wait' : ''}
                                `}
                            >
                                {isLoading ? (
                                    <>
                                        <i className="fa-solid fa-circle-notch fa-spin"></i> Loading...
                                    </>
                                ) : isPlaying ? (
                                    <>
                                        <i className="fa-solid fa-pause"></i> Pause
                                    </>
                                ) : isPaused ? (
                                    <>
                                        <i className="fa-solid fa-play"></i> Resume
                                    </>
                                ) : (
                                    <>
                                        <i className="fa-solid fa-play"></i> Listen
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {slide.dialogue.map((line, idx) => (
                        <div key={idx} className="text-[0.95rem] mb-2 font-serif text-slate-700 leading-relaxed">
                            <span className="font-sans font-bold text-slate-900 mr-2 text-xs uppercase tracking-wide bg-slate-200 px-1.5 py-0.5 rounded">{line.spk}</span>
                            <span>{line.txt}</span>
                        </div>
                    ))}
                </div>

                <p className="text-slate-600 mb-6 italic text-sm border-l-2 border-blue-200 pl-3 py-1">
                    Context: {slide.context}
                </p>

                {/* Bad vs Good */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 rounded-lg bg-red-50/50 border border-red-100 hover:bg-red-50 transition-colors">
                        <div className="flex items-center gap-2 mb-3 text-red-600 font-bold text-sm uppercase tracking-wide">
                            <i className="fa-solid fa-circle-xmark"></i> Avoid
                        </div>
                        {slide.bad.map((txt, i) => (
                            <div key={i} className="flex gap-2 text-sm text-slate-600 mb-2">
                                <i className="fa-solid fa-xmark text-red-400 mt-0.5 shrink-0"></i>
                                <span className="line-through decoration-red-300 decoration-2">{txt}</span>
                            </div>
                        ))}
                    </div>

                    <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-100 hover:bg-blue-50 transition-colors">
                        <div className="flex items-center gap-2 mb-3 text-blue-700 font-bold text-sm uppercase tracking-wide">
                            <i className="fa-solid fa-circle-check"></i> Use
                        </div>
                        {slide.good.map((txt, i) => (
                            <div key={i} className="flex gap-2 text-sm text-slate-800 mb-2">
                                <i className="fa-solid fa-check text-blue-500 mt-0.5 shrink-0"></i>
                                <span className="font-medium">{txt}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Audio Helper Functions ---

/**
 * Decodes a base64 string into a Uint8Array of bytes.
 */
function decode(base64: string): Uint8Array {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}

/**
 * Decodes raw PCM audio data into an AudioBuffer.
 */
async function decodeAudioData(
    data: Uint8Array,
    ctx: AudioContext,
    sampleRate: number,
    numChannels: number,
): Promise<AudioBuffer> {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

    for (let channel = 0; channel < numChannels; channel++) {
        const channelData = buffer.getChannelData(channel);
        for (let i = 0; i < frameCount; i++) {
            // Convert Int16 to Float32 [-1.0, 1.0]
            channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
        }
    }
    return buffer;
}

export default SlideCard;