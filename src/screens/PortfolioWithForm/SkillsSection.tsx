import * as React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { skills } from "./data";

export default function SkillsSection() {
    return (
        <section className="w-full flex flex-col items-center justify-center py-24 bg-transparent" id="skills">
            <div className="flex flex-col items-center gap-1 mb-10">
                <h2 className="font-title-h2 text-font-high-emphasis text-center">Skills</h2>
                <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
            </div>
            <div className="flex justify-center w-full max-w-4xl">
                <Card className="w-full bg-white rounded-3xl shadow-lg animate-fade-in">
                    <CardContent className="p-8 w-full h-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full items-center justify-items-center">
                            {skills.map((skill, index) => (
                                <div key={skill.name} className="flex flex-col items-center gap-4 animate-fade-in" style={{ "--animation-delay": `${2800 + index * 200}ms` } as React.CSSProperties}>
                                    <img className="w-32 h-32 object-contain hover:scale-110 transition-transform duration-300" alt={skill.name} src={skill.icon} />
                                    <div className="font-normal text-font-medium-emphasis text-lg text-center">{skill.name}</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
