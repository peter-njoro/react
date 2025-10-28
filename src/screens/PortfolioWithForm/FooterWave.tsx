import * as React from "react";

export default function FooterWave() {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative w-full mt-20 overflow-hidden">
            {/* Animated Wave Container */}
            <div className={`relative w-full h-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                {/* Main Wave */}
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#fdc435" stopOpacity="0.9" />
                            <stop offset="50%" stopColor="#febc2f" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#f7c948" stopOpacity="0.9" />
                        </linearGradient>
                        <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#fdc435" stopOpacity="0.7" />
                            <stop offset="50%" stopColor="#febc2f" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#f7c948" stopOpacity="0.7" />
                        </linearGradient>
                        <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#fdc435" stopOpacity="0.5" />
                            <stop offset="50%" stopColor="#febc2f" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#f7c948" stopOpacity="0.5" />
                        </linearGradient>
                    </defs>

                    {/* Animated Wave Layer 1 - Darkest */}
                    <path
                        d="M0,120V46.29c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5C438.64,87.57,512.34,66.33,583,47.95c69.27-18,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C989.49,95,1113,134.29,1200,67.53V120Z"
                        fill="url(#waveGradient3)"
                        className="opacity-100"
                    >
                        <animate
                            attributeName="d"
                            dur="25s"
                            repeatCount="indefinite"
                            values="
            M0,120V46.29c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5C438.64,87.57,512.34,66.33,583,47.95c69.27-18,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C989.49,95,1113,134.29,1200,67.53V120Z;
            M0,120V15.81C13-5.3,27.64-25.24,47.69-40.43C99.41-79.65,165-79,224.58-59.58c31.15,10.15,60.09,26.07,89.67,39.8c40.92,19,84.73,46,130.83,49.67c36.26,2.85,70.9-9.42,98.6-31.56c31.77-25.39,62.32-62,103.63-73c40.44-10.79,81.35,6.69,119.13,24.28s75.16,39,116.92,43.05c59.73,5.85,113.28-22.88,168.9-38.84c30.2-8.66,59-6.17,87.09,7.5c22.43,10.89,48,26.93,60.65,49.24V120Z;
            M0,120V5.63C149.93-47.74,314.09-60.06,475.83-31.31c43,7.64,84.23,20.12,127.61,26.46c59,8.63,112.48-12.24,165.56-35.4C827.93,42.78,886,24.76,951.2,30c86.53,7,172.46,45.71,248.8,84.81V120Z;
            M0,120V46.29c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5C438.64,87.57,512.34,66.33,583,47.95c69.27-18,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C989.49,95,1113,134.29,1200,67.53V120Z
        "
                        />
                    </path>
                    {/* Animated Wave Layer 2 - Medium Dark */}
                    <path
                        d="M0,120V46.29c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5C438.64,87.57,512.34,66.33,583,47.95c69.27-18,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C989.49,95,1113,134.29,1200,67.53V120Z"
                        fill="url(#waveGradient2)"
                        className="opacity-90"
                    >
                        <animate
                            attributeName="d"
                            dur="20s"
                            repeatCount="indefinite"
                            values="
            M0,120V46.29c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5C438.64,87.57,512.34,66.33,583,47.95c69.27-18,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C989.49,95,1113,134.29,1200,67.53V120Z;
            M0,120V15.81C13-5.3,27.64-25.24,47.69-40.43C99.41-79.65,165-79,224.58-59.58c31.15,10.15,60.09,26.07,89.67,39.8c40.92,19,84.73,46,130.83,49.67c36.26,2.85,70.9-9.42,98.6-31.56c31.77-25.39,62.32-62,103.63-73c40.44-10.79,81.35,6.69,119.13,24.28s75.16,39,116.92,43.05c59.73,5.85,113.28-22.88,168.9-38.84c30.2-8.66,59-6.17,87.09,7.5c22.43,10.89,48,26.93,60.65,49.24V120Z;
            M0,120V5.63C149.93-47.74,314.09-60.06,475.83-31.31c43,7.64,84.23,20.12,127.61,26.46c59,8.63,112.48-12.24,165.56-35.4C827.93,42.78,886,24.76,951.2,30c86.53,7,172.46,45.71,248.8,84.81V120Z;
            M0,120V46.29c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5C438.64,87.57,512.34,66.33,583,47.95c69.27-18,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C989.49,95,1113,134.29,1200,67.53V120Z
        "
                        />
                    </path>

                    {/* Animated Wave Layer 3 - Base */}
                    <path
                        d="M0,120V46.29c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5C438.64,87.57,512.34,66.33,583,47.95c69.27-18,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C989.49,95,1113,134.29,1200,67.53V120Z"
                        fill="url(#waveGradient)"
                        className="opacity-80"
                    >
                        <animate
                            attributeName="d"
                            dur="15s"
                            repeatCount="indefinite"
                            values="
            M0,120V46.29c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5C438.64,87.57,512.34,66.33,583,47.95c69.27-18,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C989.49,95,1113,134.29,1200,67.53V120Z;
            M0,120V15.81C13-5.3,27.64-25.24,47.69-40.43C99.41-79.65,165-79,224.58-59.58c31.15,10.15,60.09,26.07,89.67,39.8c40.92,19,84.73,46,130.83,49.67c36.26,2.85,70.9-9.42,98.6-31.56c31.77-25.39,62.32-62,103.63-73c40.44-10.79,81.35,6.69,119.13,24.28s75.16,39,116.92,43.05c59.73,5.85,113.28-22.88,168.9-38.84c30.2-8.66,59-6.17,87.09,7.5c22.43,10.89,48,26.93,60.65,49.24V120Z;
            M0,120V5.63C149.93-47.74,314.09-60.06,475.83-31.31c43,7.64,84.23,20.12,127.61,26.46c59,8.63,112.48-12.24,165.56-35.4C827.93,42.78,886,24.76,951.2,30c86.53,7,172.46,45.71,248.8,84.81V120Z;
            M0,120V46.29c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5C438.64,87.57,512.34,66.33,583,47.95c69.27-18,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C989.49,95,1113,134.29,1200,67.53V120Z
        "
                        />
                    </path>
                </svg>
            


                    {/* Floating Elements - Adjusted for darker background */}
                    <div className="absolute top-4 left-1/4 w-3 h-3 bg-amber-200 rounded-full opacity-70 animate-float">
                        <animate attributeName="cy" dur="3s" repeatCount="indefinite" values="4;8;4" />
                    </div>
                    <div className="absolute top-6 left-3/4 w-2 h-2 bg-amber-300 rounded-full opacity-50 animate-float" style={{ animationDelay: '1s' }}>
                        <animate attributeName="cy" dur="4s" repeatCount="indefinite" values="6;10;6" />
                    </div>
                    <div className="absolute top-8 left-1/2 w-4 h-4 bg-amber-100 rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }}>
                        <animate attributeName="cy" dur="5s" repeatCount="indefinite" values="8;12;8" />
                    </div>

                    {/* Call to Action Text - White for visibility */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-white font-bold text-lg drop-shadow-lg">
                                Ready to create something amazing?
                            </p>
                            <p className="text-white/90 text-sm mt-1 drop-shadow-md font-medium">
                                Let's connect and build the future together
                            </p>
                        </div>
                    </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}