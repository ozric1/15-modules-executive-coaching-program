import React, { useState, useEffect } from 'react';
import { VocabItem } from '../types';

interface VocabDragDropProps {
    vocab: VocabItem[];
    lessonId: number;
}

const VocabDragDrop: React.FC<VocabDragDropProps> = ({ vocab, lessonId }) => {
    const [matches, setMatches] = useState<{[key: string]: boolean}>({});
    const [selectedId, setSelectedId] = useState<string | null>(null);
    
    // Reset state when lesson changes
    useEffect(() => {
        setMatches({});
        setSelectedId(null);
    }, [lessonId]);

    // --- Drag and Drop Handlers (Desktop) ---
    const handleDragStart = (e: React.DragEvent, id: string) => {
        e.dataTransfer.setData("vocabId", id);
        e.dataTransfer.effectAllowed = "move";
        setSelectedId(id); // Also select on drag start for visual feedback
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };

    const handleDrop = (e: React.DragEvent, targetId: string) => {
        e.preventDefault();
        const draggedId = e.dataTransfer.getData("vocabId");
        if (draggedId === targetId) {
            setMatches(prev => ({ ...prev, [targetId]: true }));
            setSelectedId(null);
        }
    };

    // --- Click Handlers (Mobile/Touch) ---
    const handleWordClick = (id: string) => {
        if (selectedId === id) {
            setSelectedId(null); // Deselect if clicked again
        } else {
            setSelectedId(id);
        }
    };

    const handleZoneClick = (targetId: string) => {
        if (selectedId === targetId) {
            setMatches(prev => ({ ...prev, [targetId]: true }));
            setSelectedId(null);
        } else if (selectedId) {
            // Wrong match - maybe shake animation or simple feedback?
            // For now, just deselect or keep selected. 
            // Let's keep it selected so they can try another.
        }
    };

    // Filter out matched words from the list
    const availableWords = vocab.filter(v => !matches[v.id]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Draggable Items Column */}
            <div className="md:col-span-1 space-y-2">
                <div className="flex justify-between items-center mb-3">
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Word Bank</h5>
                    <span className="text-[10px] text-blue-500 font-medium md:hidden">Tap word, then def.</span>
                    <span className="text-[10px] text-slate-400 hidden md:inline">Drag & Drop</span>
                </div>
                
                <div className="min-h-[100px] bg-slate-50/50 rounded p-2 border border-slate-100">
                    {availableWords.map(v => (
                        <div 
                            key={v.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, v.id)}
                            onClick={() => handleWordClick(v.id)}
                            className={`
                                p-3 rounded-md shadow-sm mb-2 cursor-pointer font-medium text-slate-700 flex items-center transition-all
                                ${selectedId === v.id 
                                    ? 'bg-blue-600 text-white border border-blue-700 shadow-md transform scale-105' 
                                    : 'bg-white border border-slate-300 hover:border-blue-400 hover:shadow-md'}
                            `}
                        >
                            <i className={`fa-solid ${selectedId === v.id ? 'fa-check' : 'fa-grip-vertical'} mr-3 opacity-70`}></i> 
                            {v.word}
                        </div>
                    ))}
                    {availableWords.length === 0 && (
                        <div className="text-center text-slate-400 text-sm py-8 italic flex flex-col items-center">
                            <i className="fa-solid fa-check-circle text-3xl mb-2 text-green-200"></i>
                            Great job!
                        </div>
                    )}
                </div>
            </div>

            {/* Drop Zones Column */}
            <div className="md:col-span-2">
                 <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Definitions</h5>
                 <div className="space-y-3">
                    {vocab.map(v => (
                        <div 
                            key={v.id}
                            onDragOver={!matches[v.id] ? handleDragOver : undefined}
                            onDrop={!matches[v.id] ? (e) => handleDrop(e, v.id) : undefined}
                            onClick={!matches[v.id] ? () => handleZoneClick(v.id) : undefined}
                            className={`
                                relative p-4 rounded-md border-2 transition-all duration-300 min-h-[60px] flex items-center
                                ${matches[v.id] 
                                    ? 'bg-green-50 border-green-500 text-green-800' 
                                    : selectedId // Highlight drop zones when a word is selected
                                        ? 'bg-blue-50/30 border-dashed border-blue-300 cursor-pointer hover:bg-blue-50'
                                        : 'bg-slate-50 border-dashed border-slate-300 text-slate-500'}
                            `}
                        >
                            {matches[v.id] ? (
                                <span className="font-bold flex items-center animate-in fade-in zoom-in duration-300">
                                    <i className="fa-solid fa-check mr-2 bg-green-200 rounded-full p-1 text-[10px]"></i> {v.word}
                                    <span className="hidden sm:inline ml-3 font-normal text-sm text-green-700 opacity-75">- {v.def}</span>
                                    <span className="sm:hidden block ml-2 font-normal text-xs text-green-700 opacity-75 line-clamp-1">{v.def}</span>
                                </span>
                            ) : (
                                <span className="text-sm pointer-events-none select-none">{v.def}</span>
                            )}
                        </div>
                    ))}
                 </div>
            </div>
        </div>
    );
};

export default VocabDragDrop;