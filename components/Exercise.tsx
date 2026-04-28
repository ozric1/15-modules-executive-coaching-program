import React, { useState, useMemo, useEffect } from 'react';
import { ControlledPractice } from '../types';

interface ExerciseProps {
    data: ControlledPractice;
    lessonId: number;
}

const Exercise: React.FC<ExerciseProps> = ({ data, lessonId }) => {
    // Shuffle words only when lessonId changes to avoid reshuffling on every render
    const shuffledWords = useMemo(() => {
        return [...data.words].sort(() => Math.random() - 0.5);
    }, [data.words, lessonId]);

    const [inputs, setInputs] = useState<{[key: number]: string}>({});
    const [status, setStatus] = useState<{[key: number]: 'neutral' | 'correct' | 'incorrect'}>({});

    // Reset state on lesson change
    useEffect(() => {
        setInputs({});
        setStatus({});
    }, [lessonId]);

    const handleBlur = (index: number, correct: string) => {
        const val = inputs[index]?.trim().toLowerCase() || '';
        if (!val) {
            setStatus(prev => ({...prev, [index]: 'neutral'}));
            return;
        }

        if (val === correct.toLowerCase()) {
            setStatus(prev => ({...prev, [index]: 'correct'}));
        } else {
            setStatus(prev => ({...prev, [index]: 'incorrect'}));
        }
    };

    return (
        <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 md:p-6 relative shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-amber-900 flex items-center">
                    <i className="fa-solid fa-pen-to-square mr-2"></i> {data.title}
                </h4>
            </div>

            {/* Word Bank */}
            <div className="bg-white border border-dashed border-amber-600 p-3 rounded-md mb-6 flex flex-wrap gap-2 justify-center shadow-inner">
                {shuffledWords.map((w, i) => (
                    <span key={i} className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded text-sm font-semibold select-none">
                        {w}
                    </span>
                ))}
            </div>

            {/* Sentences - Now handling more items with a grid on larger screens if needed, but stack is safer for long sentences */}
            <div className="space-y-6 md:space-y-4">
                {data.sentences.map((sent, idx) => (
                    <div key={idx} className="text-base md:text-lg text-amber-900 leading-loose flex flex-wrap items-baseline gap-x-2">
                        <span className="font-bold text-amber-900/40 text-sm mr-1">{idx + 1}.</span>
                        <span>{sent.pre}</span>
                        <div className="relative inline-block">
                            <input 
                                type="text" 
                                className={`
                                    border-b-2 bg-transparent text-center font-bold outline-none transition-colors duration-200
                                    w-32 md:w-36 py-1
                                    ${status[idx] === 'correct' ? 'border-green-500 bg-green-100/50 text-green-700' : 
                                      status[idx] === 'incorrect' ? 'border-red-500 text-red-600' : 
                                      'border-dashed border-amber-600 text-amber-700 focus:border-solid'}
                                `}
                                placeholder="?"
                                autoCapitalize="off"
                                autoComplete="off"
                                value={inputs[idx] || ''}
                                onChange={(e) => setInputs(prev => ({...prev, [idx]: e.target.value}))}
                                onBlur={() => handleBlur(idx, sent.blank)}
                            />
                            {status[idx] === 'correct' && (
                                <i className="fa-solid fa-check text-green-600 absolute -right-4 top-1 text-xs"></i>
                            )}
                        </div>
                        <span>{sent.post}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Exercise;