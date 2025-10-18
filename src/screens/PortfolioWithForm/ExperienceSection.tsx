import * as React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { experiences } from "../../data/data";

export default function ExperienceSection() {
    return (
        <section className="experience flex flex-col items-center justify-center py-24 bg-transparent" id="experience">
            <div className="flex flex-col items-center gap-1 mb-10">
                <h2 className="font-title-h2 text-font-high-emphasis text-center">Experience</h2>
                <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
            </div>
            <div className="flex justify-center w-full max-w-4xl">
                <Card className="w-full bg-white rounded-3xl shadow-lg animate-fade-in">
                    <CardContent className="p-8 w-full h-full">
                        {experiences.map((exp, index) => (
                            <div key={index} className="mb-12 last:mb-0 animate-fade-in" style={{ "--animation-delay": `${1800 + index * 200}ms` } as React.CSSProperties}>
                                <div className="flex flex-col md:flex-row items-start gap-8">
                                    <div className="flex flex-col items-center w-full md:w-32 flex-shrink-0 mb-4 md:mb-0">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#febc2f] to-[#98711c] mb-4" />
                                        <img className="w-48 h-24 object-contain" alt="Experience" src={exp.iconSrc} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="w-full bg-[#d9d9d91a] rounded-[35px] border border-white/20 backdrop-blur-[17.5px] p-8 mb-4">
                                            <h3 className="font-bold text-black text-2xl mb-4 leading-tight">{exp.title}</h3>
                                            {exp.description && <p className="font-normal text-black text-lg leading-relaxed">{exp.description}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
