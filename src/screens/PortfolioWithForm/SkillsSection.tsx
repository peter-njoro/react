import * as React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { skills } from "../../data/data";

export default function SkillsSection() {
    return (
        <section className="w-full flex flex-col items-center justify-center py-24 bg-transparent" id="skills">
            <div className="flex flex-col items-center gap-1 mb-12">
                <h2 className="font-title-h2 text-font-high-emphasis text-center">Skills & Technologies</h2>
                <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
                <p className="text-font-medium-emphasis mt-4 text-center max-w-2xl">
                    Technologies I work with to bring ideas to life
                </p>
            </div>
            <div className="flex justify-center w-full max-w-6xl">
                <Card className="w-full bg-white rounded-3xl shadow-lg border-0 animate-fade-in">
                    <CardContent className="p-8 w-full h-full">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 h-full">
                            {skills.map((skill, index) => (
                                <div
                                    key={skill.name}
                                    className="group relative flex flex-col items-center gap-6 p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover:border-[#fdc435]/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in cursor-pointer"
                                    style={{ 
                                        "--animation-delay": `${2800 + index * 200}ms`,
                                        transitionDelay: `${index * 100}ms`
                                    } as React.CSSProperties}
                                >
                                    {/* Hover effect background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#fdc435]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    {/* Skill icon with gradient border */}
                                    <div className="relative z-10 p-4 bg-white rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:scale-110">
                                        <img 
                                            className="w-16 h-16 object-contain filter group-hover:brightness-110 transition-all duration-500" 
                                            alt={skill.name} 
                                            src={skill.icon} 
                                        />
                                    </div>
                                    
                                    {/* Skill name with improved styling */}
                                    <div className="relative z-10 text-center">
                                        <span className="font-semibold text-gray-800 group-hover:text-[#fdc435] transition-colors duration-500 text-lg">
                                            {skill.name}
                                        </span>
                                        <div className="w-0 group-hover:w-12 h-0.5 bg-[#fdc435] rounded-full mx-auto mt-2 transition-all duration-500" />
                                    </div>

                                    {/* Progress bar indicator */}
                                    <div className="relative z-10 w-full mt-2">
                                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                                            <div 
                                                className="bg-gradient-to-r from-[#fdc435] to-[#febc2f] h-1.5 rounded-full transition-all duration-1000 ease-out"
                                                style={{ 
                                                    width: '0%',
                                                    animationDelay: `${2800 + index * 200}ms`
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.width = `${75 + Math.random() * 20}%`;
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.width = '0%';
                                                }}
                                            />
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