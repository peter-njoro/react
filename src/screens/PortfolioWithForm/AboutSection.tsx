import * as React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { about } from "../../data/data";
import { Button } from "../../components/ui/button";

export default function AboutSection() {
    const [aboutExpanded, setAboutExpanded] = React.useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
    const aboutWords = about[0].description.split(' ');
    const aboutPreview = aboutWords.slice(0, 25).join(' ') + (aboutWords.length > 25 ? '...' : '');

    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };

    return (
        <section className="flex flex-col items-center justify-center py-24 bg-transparent mt-0 md:mt-0 w-full px-4 sm:px-8 lg:px-16" id="about">
            <div className="flex flex-col items-center gap-1 mb-12">
                <h2 className="font-title-h2 text-font-high-emphasis text-center">My Journey & Vision</h2>
                <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
                <p className="text-font-medium-emphasis mt-4 text-center max-w-2xl">
                    From aspiring data scientist to creating impactful solutions for Africa's challenges
                </p>
            </div>
            
            <div className="flex justify-center w-full max-w-6xl">
                <Card className="w-full bg-white rounded-3xl shadow-lg border-0 overflow-hidden animate-fade-in group hover:shadow-2xl transition-all duration-500">
                    <CardContent className="p-0">
                        <div className="flex flex-col lg:flex-row">
                            {/* Text Content Section */}
                            <div className="flex-1 p-8 lg:p-12 relative overflow-hidden">
                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#fdc435]/5 to-transparent rounded-full -translate-y-16 translate-x-16" />
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#fdc435]/5 to-transparent rounded-full translate-y-12 -translate-x-12" />
                                
                                <div className="relative z-10">
                                    {/* Section Header */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#fdc435] to-[#febc2f] rounded-2xl flex items-center justify-center shadow-lg">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-800">{about[0].title}</h3>
                                            <p className="text-gray-500 text-sm">Data Scientist & Problem Solver</p>
                                        </div>
                                    </div>

                                    {/* About Text with Gradient Background */}
                                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 mb-6">
                                        <p className="text-gray-700 text-lg leading-relaxed transition-all duration-500">
                                            {aboutExpanded ? about[0].description : aboutPreview}
                                        </p>
                                    </div>

                                    {/* Key Highlights */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-medium text-blue-800">AI & Machine Learning</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-medium text-green-800">African Innovation</span>
                                        </div>
                                    </div>

                                    {/* Read More Button */}
                                    {aboutWords.length > 25 && (
                                        <Button
                                            onClick={() => setAboutExpanded((prev) => !prev)}
                                            className="rounded-2xl bg-gradient-to-r from-[#fdc435] to-[#febc2f] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group/btn overflow-hidden relative"
                                        >
                                            {/* Animated background */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-[#febc2f] to-[#fdc435] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                                            
                                            <span className="relative z-10 flex items-center gap-2">
                                                {aboutExpanded ? 'Show Less' : 'Read Full Story'}
                                                <svg 
                                                    className={`w-4 h-4 transform transition-transform duration-500 ${
                                                        aboutExpanded ? 'rotate-180' : ''
                                                    }`}
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </Button>
                                    )}
                                </div>
                            </div>

                            {/* Video Section */}
                            <div className="flex-1 p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-white border-l-0 lg:border-l border-gray-100">
                                <div className="relative group/video">
                                    {/* Video Container with Enhanced Styling */}
                                    <div className="relative rounded-2xl overflow-hidden shadow-lg bg-black">
                                        {/* Loading State */}
                                        {!isVideoLoaded && (
                                            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center z-10">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 border-4 border-[#fdc435] border-t-transparent rounded-full animate-spin" />
                                                    <span className="text-gray-600 font-medium">Loading video...</span>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {/* Video with Enhanced Styling */}
                                        <iframe 
                                            className={`w-full h-64 lg:h-80 rounded-2xl transition-all duration-700 ${
                                                isVideoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                            }`}
                                            src={about[0].video} 
                                            title="About Me Video" 
                                            width="640" 
                                            height="360" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                            allowFullScreen 
                                            frameBorder="0"
                                            onLoad={handleVideoLoad}
                                        />
                                        
                                        {/* Video Overlay Effects */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/video:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    {/* Video Info Card */}
                                    <div className="mt-6 p-4 bg-white rounded-xl shadow-md border border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="font-semibold text-gray-800">My Pitch Video</h4>
                                                <p className="text-sm text-gray-600">Learn about my vision and journey</p>
                                            </div>
                                            <div className="w-10 h-10 bg-[#fdc435] rounded-full flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Elements */}
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#fdc435] rounded-full opacity-0 group-hover/video:opacity-100 transition-opacity duration-500 animate-ping" />
                                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#fdc435] rounded-full opacity-0 group-hover/video:opacity-100 transition-opacity duration-500 delay-200 animate-ping" />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}