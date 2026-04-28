import React, { useState, useEffect } from 'react';
import { VocabContextExercise, VocabItem } from '../types';

interface VocabContextBuilderProps {
    data: VocabContextExercise;
    vocabList: VocabItem[];
    lessonId: number;
}

const VocabContextBuilder: React.FC<VocabContextBuilderProps> = ({ data, vocabList, lessonId }) => {
    const [inputs, setInputs] = useState<{[key: number]: string}>({});
    const [status, setStatus] = useState<{[key: number]: 'neutral' | 'correct' | 'incorrect'}>({});

    useEffect(() => {
        setInputs({});
        setStatus({});
    }, [lessonId]);

    const handleBlur = (index: number, expectedWord: string) => {
        const val = inputs[index]?.trim().toLowerCase() || '';
        if (!val) {
            setStatus(prev => ({...prev, [index]: 'neutral'}));
            return;
        }

        // Allow some flexibility (case insensitive)
        if (val === expectedWord.toLowerCase()) {
            setStatus(prev => ({...prev, [index]: 'correct'}));
        } else {
            setStatus(prev => ({...prev, [index]: 'incorrect'}));
        }
    };

    return (
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <i className="fa-solid fa-layer-group text-lg"></i>
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 text-lg">{data.title}</h4>
                    <p className="text-sm text-slate-500">Complete the sentences using the vocabulary words learned above.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                 {/* Reference List */}
                 <div className="md:col-span-2 bg-white p-3 rounded border border-indigo-100 flex flex-wrap gap-3 justify-center">
                    {vocabList.map(v => (
                        <span key={v.id} className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded uppercase tracking-wide">
                            {v.word}
                        </span>
                    ))}
                 </div>
            </div>

            <div className="space-y-4">
                {data.sentences.map((sent, idx) => (
                    <div key={idx} className="bg-white p-4 rounded border border-indigo-100 shadow-sm flex flex-col md:flex-row md:items-baseline gap-2 leading-relaxed text-slate-700">
                        <span>{idx + 1}. {sent.pre}</span>
                        <div className="relative inline-block">
                             <input 
                                type="text" 
                                className={`
                                    border-b-2 bg-transparent text-center font-bold outline-none transition-colors duration-200
                                    w-full md:w-40 py-1 text-indigo-900
                                    ${status[idx] === 'correct' ? 'border-green-500 bg-green-50' : 
                                      status[idx] === 'incorrect' ? 'border-red-500 bg-red-50' : 
                                      'border-indigo-300 focus:border-indigo-600'}
                                `}
                                placeholder="..."
                                value={inputs[idx] || ''}
                                onChange={(e) => setInputs(prev => ({...prev, [idx]: e.target.value}))}
                                onBlur={() => handleBlur(idx, sent.blank)}
                            />
                            {status[idx] === 'correct' && (
                                <i className="fa-solid fa-check text-green-600 absolute right-0 -top-3 text-xs animate-bounce"></i>
                            )}
                        </div>
                        <span>{sent.post}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VocabContextBuilder;