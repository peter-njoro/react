import * as React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { projects } from "./data";

export default function ProjectsSection() {
    return (
        <section className="flex flex-col items-center justify-center py-24 bg-transparent px-4 sm:px-8 lg:px-16" id="projects">
            <div className="flex flex-col items-center gap-1 mb-10">
                <h2 className="font-title-h2 text-font-high-emphasis text-center">Projects</h2>
                <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
            </div>
            <div className="flex flex-col gap-12 w-full max-w-4xl">
                {projects.map((project, index) => (
                    <Card key={index} className="flex flex-col md:flex-row w-full bg-white rounded-3xl overflow-hidden shadow-lg animate-fade-in" style={{ "--animation-delay": `${800 + index * 200}ms` } as React.CSSProperties}>
                        <CardContent className="p-0 flex flex-col md:flex-row w-full h-full">
                            {project.imagePosition === "left" ? (
                                <>
                                    <img className="w-full md:w-1/2 h-64 md:h-[524px] object-cover order-first" alt="Project" src={project.image} />
                                    <div className="w-full md:w-1/2 flex flex-col justify-center p-8 order-last">
                                        <h3 className="font-bold text-font-high-emphasis text-2xl md:text-[40px] leading-tight mb-4">{project.title}</h3>
                                        <p className="font-normal text-font-medium-emphasis text-lg leading-[27px] mb-6">{project.description}</p>
                                        <a href={project.title === "Facetrack-Lite" ? "https://github.com/peter-njoro/facetrack-lite" : project.title === "Task & Project Management Tool" ? "https://github.com/peter-njoro/Task-Project-Management-Tool" : "https://github.com/peter-njoro?tab=repositories"} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" className="rounded-3xl border border-solid border-[#25282b] hover:bg-brand-yellow hover:border-brand-yellow transition-colors">
                                                <span className="font-medium text-font-high-emphasis text-lg leading-[27px] whitespace-nowrap">{project.title === "Django REST APIs, Role-Based Access, and AJAX Search Projects." ? 'View All Projects' : 'View Project'}</span>
                                            </Button>
                                        </a>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="w-full md:w-1/2 flex flex-col justify-center p-8 order-last md:order-first">
                                        <h3 className="font-bold text-font-high-emphasis text-2xl md:text-[40px] leading-tight mb-4">{project.title}</h3>
                                        <p className="font-normal text-font-medium-emphasis text-lg leading-[27px] mb-6">{project.description}</p>
                                        <a href={project.title === "Facetrack-Lite" ? "https://github.com/peter-njoro/facetrack-lite" : project.title === "Task & Project Management Tool" ? "https://github.com/peter-njoro/Task-Project-Management-Tool" : "https://github.com/peter-njoro?tab=repositories"} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" className="rounded-3xl border border-solid border-[#25282b] hover:bg-brand-yellow hover:border-brand-yellow transition-colors">
                                                <span className="font-medium text-font-high-emphasis text-lg leading-[27px] whitespace-nowrap">{project.title === "Django REST APIs, Role-Based Access, and AJAX Search Projects." ? 'View All Projects' : 'View Project'}</span>
                                            </Button>
                                        </a>
                                    </div>
                                    <img className="w-full md:w-1/2 h-64 md:h-[524px] object-cover order-first md:order-last" alt="Project" src={project.image} />
                                </>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
