import * as React from "react";
import { achievements } from "../../data/data";
import { Card, CardContent } from "../../components/ui/card";

export default function AchievementsSection(): React.ReactElement {
    return (
        <section className="w-full flex flex-col items-center justify-center py-24 bg-transparent" id="achievements">
            <div className="flex flex-col items-center gap-1 mb-12">
                <h2 className="font-title-h2 text-font-high-emphasis text-center">Achievements & Projects</h2>
                <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
                <p className="text-font-medium-emphasis mt-4 text-center max-w-2xl">
                    A showcase of projects, innovations, and recognitions that shaped my journey
                </p>
            </div>
            <div className="flex justify-center w-full max-w-6xl">
                <Card className="w-full bg-white rounded-3xl shadow-lg border-0 animate-fade-in">
                    <CardContent className="p-8 w-full h-full">
                        <div className="grid gap-8 md:grid-cols-2">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="group relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover:border-[#fdc435]/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in cursor-pointer overflow-hidden"
                                    style={{ 
                                        "--animation-delay": `${3200 + index * 200}ms` 
                                    } as React.CSSProperties}
                                >
                                    {/* Background pattern */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#fdc435]/5 rounded-full -translate-y-16 translate-x-16" />
                                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#fdc435]/5 rounded-full translate-y-12 -translate-x-12" />
                                    </div>

                                    {/* Date badge */}
                                    <div className="absolute top-6 right-6">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#fdc435]/10 text-[#fdc435] text-sm font-medium border border-[#fdc435]/20">
                                            {achievement.date}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[#fdc435] transition-colors duration-500 pr-16">
                                            {achievement.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                                            {achievement.description}
                                        </p>
                                        
                                        {/* Action button */}
                                        {achievement.link && (
                                            <div className="flex items-center justify-between">
                                                <a
                                                    href={achievement.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#fdc435] to-[#febc2f] text-white rounded-xl font-medium hover:shadow-lg hover:gap-3 transition-all duration-500 group/btn"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    View Project
                                                    <svg 
                                                        className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-500" 
                                                        fill="none" 
                                                        stroke="currentColor" 
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            </div>
                                        )}
                                    </div>

                                    {/* Hover effect line */}
                                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#fdc435] to-[#febc2f] group-hover:w-full transition-all duration-500" />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}