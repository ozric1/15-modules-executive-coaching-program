import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../../components/Sidebar';
import LessonView from '../../components/LessonView';
import ChatWidget from '../../components/ChatWidget';
import { COURSE_DATA } from '../../constants';
import { Link } from 'react-router-dom';

const CourseViewer: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // 1. Initialize State from LocalStorage for persistence
    const [currentLessonId, setCurrentLessonId] = useState<number>(() => {
        const saved = localStorage.getItem('zentia_last_lesson');
        return saved ? parseInt(saved, 10) : 0;
    });

    const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
        const saved = localStorage.getItem('zentia_completed');
        return saved ? JSON.parse(saved) : [];
    });

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // 2. Persist state changes
    useEffect(() => {
        localStorage.setItem('zentia_last_lesson', currentLessonId.toString());
    }, [currentLessonId]);

    useEffect(() => {
        localStorage.setItem('zentia_completed', JSON.stringify(completedLessons));
    }, [completedLessons]);

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = 0;
        }
    }, [currentLessonId]);

    const lessonData = COURSE_DATA[currentLessonId];

    const handleLessonSelect = (id: number) => {
        setCurrentLessonId(id);
        setIsMobileMenuOpen(false);
    };

    const handleLessonComplete = () => {
        // Mark current as complete if not already
        if (!completedLessons.includes(currentLessonId)) {
            setCompletedLessons(prev => [...prev, currentLessonId]);
        }

        // Logic to find next lesson
        const sequence = [
            0, 
            1, 2, 3, 101, 
            4, 5, 6, 102, 
            7, 8, 103, 
            9, 10, 11, 12, 104, 
            13, 14, 15, 105
        ];

        const currentIndex = sequence.indexOf(currentLessonId);
        if (currentIndex !== -1 && currentIndex < sequence.length - 1) {
            const nextId = sequence[currentIndex + 1];
            setCurrentLessonId(nextId);
        } else {
            // Course finished
            alert("Congratulations! You have completed the entire Zentia World Executive Program.");
        }
    };

    if (!lessonData) {
        return (
            <div className="flex w-full h-full bg-slate-50 items-center justify-center">
                <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-slate-200">
                    <div className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fa-solid fa-triangle-exclamation text-xl"></i>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">Lesson Data Not Found</h2>
                    <p className="text-slate-600 mb-6">Could not load content for Lesson ID: {currentLessonId}</p>
                    <button 
                        onClick={() => { setCurrentLessonId(0); window.location.reload(); }}
                        className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Return to Introduction
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex w-full h-screen bg-slate-50 relative">
            {/* Desktop Sidebar */}
            <div className="hidden md:block h-full shadow-xl z-30">
                <Sidebar 
                    currentLesson={currentLessonId} 
                    onSelectLesson={handleLessonSelect}
                    completedLessons={completedLessons}
                />
            </div>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 flex md:hidden">
                    <div 
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                        onClick={() => setIsMobileMenuOpen(false)}
                    ></div>
                    <div className="relative w-72 h-full bg-slate-900 shadow-2xl animate-in slide-in-from-left duration-300">
                        <button 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white"
                        >
                            <i className="fa-solid fa-xmark text-xl"></i>
                        </button>
                        <Sidebar 
                            currentLesson={currentLessonId} 
                            onSelectLesson={handleLessonSelect}
                            completedLessons={completedLessons}
                        />
                    </div>
                </div>
            )}

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-full relative overflow-hidden w-full">
                {/* Top Sticky Header */}
                <header className="bg-white/90 backdrop-blur-md border-b border-slate-200 h-16 flex items-center justify-between px-4 md:px-8 sticky top-0 z-20 shrink-0 shadow-sm">
                    <div className="flex items-center gap-4 overflow-hidden">
                        <button 
                            className="md:hidden text-slate-600 hover:text-blue-600 p-2 -ml-2 transition-colors"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <i className="fa-solid fa-bars text-xl"></i>
                        </button>
                        <Link to="/" className="hidden md:flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors mr-4">
                            <i className="fa-solid fa-arrow-left"></i>
                            Marketplace
                        </Link>
                        <h2 className="text-sm md:text-lg font-bold text-slate-800 truncate border-l pl-4 border-slate-200">
                            {lessonData.title}
                        </h2>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        {completedLessons.includes(currentLessonId) && (
                            <span className="hidden sm:flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200 animate-in fade-in">
                                <i className="fa-solid fa-circle-check"></i> COMPLETED
                            </span>
                        )}
                        <button className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-2">
                            <i className="fa-regular fa-folder-open"></i>
                            <span className="hidden sm:inline">Resources</span>
                        </button>
                        <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs border border-blue-200 shadow-sm cursor-pointer hover:bg-blue-200 transition-colors">
                            TR
                        </div>
                    </div>
                </header>

                {/* Scrollable Content */}
                <div ref={scrollContainerRef} className="flex-1 overflow-y-auto custom-scrollbar px-4 md:px-12 scroll-smooth pb-20">
                    <LessonView 
                        data={lessonData} 
                        lessonId={currentLessonId} 
                        onComplete={handleLessonComplete}
                        isCompleted={completedLessons.includes(currentLessonId)}
                    />
                </div>
            </main>

            {/* Global Chat Bot */}
            <ChatWidget />
        </div>
    );
};

export default CourseViewer;
