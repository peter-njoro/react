import * as React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { contactIcons } from "../../data/data";

export default function ContactSection() {
    return (
        <section className="w-full flex flex-col items-center justify-center py-24 bg-transparent" id="contacts">
            <div className="flex flex-col items-center gap-1 mb-10">
                <h2 className="font-title-h2 text-font-high-emphasis text-center">Contact</h2>
                <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
            </div>
            <div className="flex justify-center w-full max-w-4xl">
                <Card className="w-full bg-white rounded-3xl shadow-lg animate-fade-in">
                    <CardContent className="p-8 w-full h-full">
                        <div className="flex flex-col md:flex-row justify-around items-center h-full gap-8">
                            <a href="mailto:peterchegen12@gmail.com" className="flex flex-col items-center gap-6 animate-fade-in" style={{ "--animation-delay": `3700ms` } as React.CSSProperties}>
                                <img className="w-24 h-24 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" alt="Email" src={contactIcons[0].icon} />
                                <div className="font-normal text-font-medium-emphasis text-lg">Email</div>
                            </a>
                            <a href="https://github.com/peter-njoro" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-6 animate-fade-in" style={{ "--animation-delay": `3900ms` } as React.CSSProperties}>
                                <img className="w-24 h-24 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" alt="GitHub" src={contactIcons[1].icon} />
                                <div className="font-normal text-font-medium-emphasis text-lg">GitHub</div>
                            </a>
                            <a href="https://www.linkedin.com/in/chege-peter/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-6 animate-fade-in" style={{ "--animation-delay": `4100ms` } as React.CSSProperties}>
                                <img className="w-24 h-24 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer" alt="LinkedIn" src={contactIcons[2].icon} />
                                <div className="font-normal text-font-medium-emphasis text-lg">LinkedIn</div>
                            </a>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
