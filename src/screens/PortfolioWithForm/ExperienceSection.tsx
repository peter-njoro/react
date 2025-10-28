import * as React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { experiences } from "../../data/data";

export default function ExperienceSection() {
    return (
        <section className="experience flex flex-col items-center justify-center py-24 bg-transparent" id="experience">
            <div className="flex flex-col items-center gap-1 mb-12">
                <h2 className="font-title-h2 text-font-high-emphasis text-center">Professional Journey</h2>
                <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
                <p className="text-font-medium-emphasis mt-4 text-center max-w-2xl">
                    My path through education, internships, and hands-on projects
                </p>
            </div>
            <div className="flex justify-center w-full max-w-6xl">
                <Card className="w-full bg-white rounded-3xl shadow-lg border-0 animate-fade-in">
                    <CardContent className="p-8 w-full h-full">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-8 md:left-32 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#fdc435] to-[#febc2f] transform translate-x-4" />
                            
                            {experiences.map((exp, index) => (
                                <div 
                                    key={index} 
                                    className="relative mb-12 last:mb-0 group animate-fade-in"
                                    style={{ 
                                        "--animation-delay": `${1800 + index * 200}ms` 
                                    } as React.CSSProperties}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-8 md:left-32 top-8 transform -translate-x-1.5 z-10">
                                        <div className="w-4 h-4 bg-[#fdc435] rounded-full border-4 border-white shadow-lg group-hover:scale-150 transition-transform duration-500" />
                                    </div>

                                    <div className="flex flex-col md:flex-row items-start gap-6 ml-16 md:ml-0">
                                        {/* Icon/Image section */}
                                        <div className="flex flex-col items-center w-full md:w-40 flex-shrink-0 mb-4 md:mb-0">
                                            <div className="relative mb-4">
                                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#fdc435] to-[#febc2f] shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500" />
                                                <div className="absolute inset-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/20" />
                                            </div>
                                            <div className="w-32 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-500">
                                                <img 
                                                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-500" 
                                                    alt="Experience" 
                                                    src={exp.iconSrc} 
                                                />
                                            </div>
                                        </div>

                                        {/* Content section */}
                                        <div className="flex-1">
                                            <div className="w-full bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 backdrop-blur-[17.5px] p-8 group-hover:border-[#fdc435]/30 group-hover:shadow-xl transition-all duration-500">
                                                <h3 className="font-bold text-gray-800 text-2xl mb-4 leading-tight group-hover:text-[#fdc435] transition-colors duration-500">
                                                    {exp.title}
                                                </h3>
                                                {exp.description && (
                                                    <p className="font-normal text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                                                        {exp.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}