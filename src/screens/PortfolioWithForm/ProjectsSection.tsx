import * as React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { projects } from "../../data/data";

export default function ProjectsSection() {
    const projectLinks = {
        "Facetrack-Lite": "https://github.com/peter-njoro/facetrack-lite",
        "Task & Project Management Tool": "https://github.com/peter-njoro/Task-Project-Management-Tool",
        "Django REST APIs, Role-Based Access, and AJAX Search Projects.": "https://github.com/peter-njoro?tab=repositories"
    };

    return (
        <section className="flex flex-col items-center justify-center py-24 bg-transparent px-4 sm:px-8 lg:px-16" id="projects">
            <div className="flex flex-col items-center gap-1 mb-12">
                <h2 className="font-title-h2 text-font-high-emphasis text-center">Featured Projects</h2>
                <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
                <p className="text-font-medium-emphasis mt-4 text-center max-w-2xl">
                    Building solutions that combine technical excellence with real-world impact
                </p>
            </div>
            <div className="flex flex-col gap-16 w-full max-w-6xl">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="group relative animate-fade-in"
                        style={{ "--animation-delay": `${800 + index * 200}ms` } as React.CSSProperties}
                    >
                        {/* Background glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#fdc435]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                        
                        <Card className="flex flex-col md:flex-row w-full bg-white rounded-3xl overflow-hidden shadow-lg border-0 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
                            <CardContent className="p-0 flex flex-col md:flex-row w-full h-full relative">
                                {/* Image Container with Overlay */}
                                <div className={`w-full md:w-1/2 relative overflow-hidden ${project.imagePosition === "left" ? "order-first" : "order-first md:order-last"}`}>
                                    <img 
                                        className="w-full h-64 md:h-[400px] object-cover transition-all duration-700 group-hover:scale-110" 
                                        alt="Project" 
                                        src={project.image} 
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    {/* Tech Stack Floating Tags */}
                                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                        {project.title.includes("Facetrack") && (
                                            <>
                                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">OpenCV</span>
                                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">Django</span>
                                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">Docker</span>
                                            </>
                                        )}
                                        {project.title.includes("Task") && (
                                            <>
                                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">Django</span>
                                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">PostgreSQL</span>
                                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">WebSockets</span>
                                            </>
                                        )}
                                        {project.title.includes("Django REST") && (
                                            <>
                                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">Django REST</span>
                                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">AJAX</span>
                                                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">RBAC</span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className={`w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 ${project.imagePosition === "left" ? "order-last" : "order-last md:order-first"}`}>
                                    {/* Project Index */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 bg-gradient-to-br from-[#fdc435] to-[#febc2f] rounded-full flex items-center justify-center text-white font-bold text-sm">
                                            {index + 1}
                                        </div>
                                        <span className="text-sm font-medium text-gray-500">PROJECT {String(index + 1).padStart(2, '0')}</span>
                                    </div>

                                    <h3 className="font-bold text-gray-800 text-2xl md:text-3xl lg:text-4xl leading-tight mb-6 group-hover:text-gray-900 transition-colors duration-500">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="font-normal text-gray-600 text-lg leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-500">
                                        {project.description}
                                    </p>

                                    {/* Action Button with Icon */}
                                    <a 
                                        href={projectLinks[project.title as keyof typeof projectLinks]} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="self-start"
                                    >
                                        <Button 
                                            variant="outline" 
                                            className="group/btn relative rounded-2xl border-2 border-gray-800 bg-transparent hover:bg-gradient-to-r hover:from-[#fdc435] hover:to-[#febc2f] hover:border-transparent hover:shadow-xl transition-all duration-500 overflow-hidden"
                                        >
                                            {/* Button background animation */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#fdc435] to-[#febc2f] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                                            
                                            <span className="relative z-10 font-semibold text-gray-800 group-hover/btn:text-white text-lg leading-[27px] whitespace-nowrap flex items-center gap-3">
                                                {project.title === "Django REST APIs, Role-Based Access, and AJAX Search Projects." ? 'Explore All Projects' : 'View Project'}
                                                <svg 
                                                    className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-500" 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </span>
                                        </Button>
                                    </a>
                                </div>

                                {/* Corner Accent */}
                                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#fdc435] to-[#febc2f] transform rotate-45 translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
}