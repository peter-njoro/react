import * as React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { contactIcons } from "../../data/data";

export default function ContactSection() {
    const contactData = [
        {
            icon: contactIcons[0].icon,
            label: "Email",
            href: "mailto:peterchegen12@gmail.com",
            description: "peterchegen12@gmail.com",
            color: "from-red-400 to-red-600"
        },
        {
            icon: contactIcons[1].icon,
            label: "GitHub",
            href: "https://github.com/peter-njoro",
            description: "@peter-njoro",
            color: "from-gray-700 to-gray-900"
        },
        {
            icon: contactIcons[2].icon,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/chege-peter/",
            description: "chege-peter",
            color: "from-blue-600 to-blue-800"
        }
    ];

    return (
        <section className="w-full flex flex-col items-center justify-center py-24 bg-transparent" id="contacts">
            <div className="flex flex-col items-center gap-1 mb-12">
                <h2 className="font-title-h2 text-font-high-emphasis text-center">Let's Connect</h2>
                <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
                <p className="text-font-medium-emphasis mt-4 text-center max-w-2xl">
                    Get in touch for collaborations, opportunities, or just to say hello!
                </p>
            </div>
            <div className="flex justify-center w-full max-w-6xl">
                <Card className="w-full bg-white rounded-3xl shadow-lg border-0 animate-fade-in">
                    <CardContent className="p-8 w-full h-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
                            {contactData.map((contact, index) => (
                                <a
                                    key={contact.label}
                                    href={contact.href}
                                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                    className="group relative flex flex-col items-center text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 animate-fade-in cursor-pointer overflow-hidden"
                                    style={{ 
                                        "--animation-delay": `${3700 + index * 200}ms` 
                                    } as React.CSSProperties}
                                >
                                    {/* Animated background gradient on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                    
                                    {/* Floating particles background */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                        {[...Array(3)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="absolute w-2 h-2 bg-current rounded-full opacity-20"
                                                style={{
                                                    top: `${20 + i * 30}%`,
                                                    left: `${10 + i * 40}%`,
                                                    animation: `float 3s ease-in-out ${i * 0.5}s infinite`
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {/* Icon container with gradient border */}
                                    <div className="relative z-10 mb-6 p-5 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                                        <img 
                                            className="w-16 h-16 object-contain group-hover:brightness-110 transition-all duration-500" 
                                            alt={contact.label} 
                                            src={contact.icon} 
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="font-bold text-gray-800 group-hover:text-gray-900 text-xl mb-2 transition-colors duration-500">
                                            {contact.label}
                                        </h3>
                                        <p className="text-gray-600 group-hover:text-gray-700 mb-4 transition-colors duration-500">
                                            {contact.description}
                                        </p>
                                        <div className="inline-flex items-center gap-2 text-sm font-medium text-[#fdc435] group-hover:gap-3 transition-all duration-500">
                                            Reach out
                                            <svg 
                                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Border animation */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-[#fdc435] to-transparent animate-pulse" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(180deg); }
                }
            `}</style>
        </section>
    );
}