import React, { useState } from 'react';
import { Video, UploadCloud, FileText, Zap, AlertTriangle } from 'lucide-react';

const VideoAnalysis: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<{
        crutchWords: string[];
        feedback: string;
        suggestions: string[];
    } | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setResult(null); // Reset result on new file
        }
    };

    const handleUpload = async () => {
        if (!file) return;
        setIsLoading(true);

        const formData = new FormData();
        formData.append('video', file);

        try {
            // Mock delay to simulate Whisper + Gemini processing
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            const res = await fetch('http://localhost:3001/api/analyze-video', {
                method: 'POST',
                body: formData
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
            <div className="bg-purple-900 p-4 text-white flex justify-between items-center shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <Video size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold">Automated Video Analysis</h3>
                        <p className="text-purple-200 text-xs">Upload a presentation for AI feedback</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                {/* Upload Area */}
                <div className="w-full md:w-1/3 border-r border-slate-200 flex flex-col bg-slate-50 p-6">
                    <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-purple-200 rounded-xl bg-white p-6 text-center hover:bg-purple-50 transition-colors">
                        <UploadCloud size={48} className="text-purple-400 mb-4" />
                        <h4 className="font-bold text-slate-700 mb-1">Upload Recording</h4>
                        <p className="text-xs text-slate-500 mb-6">MP4, WebM, or MOV up to 100MB</p>
                        
                        <input 
                            type="file" 
                            accept="video/*" 
                            onChange={handleFileChange}
                            className="hidden" 
                            id="video-upload"
                        />
                        <label 
                            htmlFor="video-upload"
                            className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-semibold cursor-pointer hover:bg-purple-200 transition-colors"
                        >
                            Select File
                        </label>
                        {file && (
                            <p className="mt-4 text-sm font-medium text-slate-800 truncate w-full">
                                {file.name}
                            </p>
                        )}
                    </div>
                    
                    <button 
                        onClick={handleUpload}
                        disabled={isLoading || !file}
                        className="mt-4 w-full bg-purple-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors disabled:opacity-50"
                    >
                        {isLoading ? 'Analyzing Pipeline...' : 'Generate Report'}
                    </button>
                </div>

                {/* Analysis Report Area */}
                <div className="w-full md:w-2/3 overflow-y-auto custom-scrollbar p-6 bg-white space-y-6">
                    {!result && !isLoading && (
                        <div className="h-full flex flex-col items-center justify-center text-slate-400">
                            <FileText size={48} className="mb-4 opacity-20" />
                            <p>Your analysis report will appear here.</p>
                        </div>
                    )}

                    {isLoading && (
                        <div className="h-full flex flex-col items-center justify-center space-y-4 text-slate-400">
                            <div className="w-8 h-8 border-4 border-slate-200 border-t-purple-600 rounded-full animate-spin"></div>
                            <p>Transcribing audio and analyzing rhetoric...</p>
                        </div>
                    )}

                    {result && !isLoading && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Presentation Analysis Report</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Crutch Words */}
                                <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                                    <h4 className="flex items-center gap-2 font-bold text-red-900 mb-3">
                                        <AlertTriangle size={18} /> Crutch Words Detected
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {result.crutchWords.map((word, i) => (
                                            <span key={i} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                                                "{word}"
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Energy/Feedback */}
                                <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                                    <h4 className="flex items-center gap-2 font-bold text-amber-900 mb-2">
                                        <Zap size={18} /> Delivery & Energy
                                    </h4>
                                    <p className="text-amber-800 text-sm leading-relaxed">{result.feedback}</p>
                                </div>
                            </div>

                            {/* Suggestions */}
                            <div className="bg-green-50 border border-green-100 rounded-xl p-5">
                                <h4 className="font-bold text-green-900 mb-4">Recommended Rhetorical Transitions</h4>
                                <ul className="space-y-3">
                                    {result.suggestions.map((suggestion, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-green-800">
                                            <span className="shrink-0 w-6 h-6 rounded-full bg-green-200 flex items-center justify-center font-bold text-green-700">
                                                {i + 1}
                                            </span>
                                            <span className="pt-0.5">{suggestion}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoAnalysis;
