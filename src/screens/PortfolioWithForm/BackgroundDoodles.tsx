import * as React from "react";

const doodleSvgs = [
  // Simple circle
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" key="circle">
    <circle cx="20" cy="20" r="18" stroke="#f7c948" strokeWidth="4" />
  </svg>,
  // Zigzag
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" key="zigzag">
    <polyline points="5,35 15,5 25,35 35,5" stroke="#f7c948" strokeWidth="3" fill="none" />
  </svg>,
  // Star
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" key="star">
    <polygon points="20,5 25,35 5,15 35,15 15,35" stroke="#f7c948" strokeWidth="2" fill="none" />
  </svg>,
  // Squiggle
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" key="squiggle">
    <path d="M5 20 Q15 5 25 20 T35 20" stroke="#f7c948" strokeWidth="3" fill="none" />
  </svg>,
  // Cat face
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" key="cat">
    <ellipse cx="20" cy="24" rx="12" ry="10" stroke="#f7c948" strokeWidth="2.5" fill="none" />
    <polygon points="8,16 14,8 16,18" stroke="#f7c948" strokeWidth="2" fill="none" />
    <polygon points="32,16 26,8 24,18" stroke="#f7c948" strokeWidth="2" fill="none" />
    <ellipse cx="16" cy="25" rx="1.5" ry="2" fill="#f7c948" />
    <ellipse cx="24" cy="25" rx="1.5" ry="2" fill="#f7c948" />
    <path d="M18 30 Q20 32 22 30" stroke="#f7c948" strokeWidth="1.5" fill="none" />
  </svg>,
  // Fish
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" key="fish">
    <ellipse cx="22" cy="20" rx="10" ry="5" stroke="#f7c948" strokeWidth="2.5" fill="none" />
    <polygon points="32,20 38,15 38,25" stroke="#f7c948" strokeWidth="2" fill="none" />
    <circle cx="27" cy="20" r="1" fill="#f7c948" />
  </svg>,
  // Bird
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" key="bird">
    <ellipse cx="20" cy="25" rx="8" ry="6" stroke="#f7c948" strokeWidth="2.5" fill="none" />
    <path d="M20 25 Q18 20 12 18" stroke="#f7c948" strokeWidth="2" fill="none" />
    <path d="M20 25 Q22 20 28 18" stroke="#f7c948" strokeWidth="2" fill="none" />
    <circle cx="24" cy="25" r="1" fill="#f7c948" />
  </svg>,
  // Bunny
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" key="bunny">
    <ellipse cx="20" cy="28" rx="10" ry="7" stroke="#f7c948" strokeWidth="2.5" fill="none" />
    <ellipse cx="14" cy="16" rx="2" ry="7" stroke="#f7c948" strokeWidth="2" fill="none" />
    <ellipse cx="26" cy="16" rx="2" ry="7" stroke="#f7c948" strokeWidth="2" fill="none" />
    <ellipse cx="17" cy="29" rx="1.2" ry="1.7" fill="#f7c948" />
    <ellipse cx="23" cy="29" rx="1.2" ry="1.7" fill="#f7c948" />
    <path d="M18 33 Q20 35 22 33" stroke="#f7c948" strokeWidth="1.5" fill="none" />
  </svg>,
];

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function BackgroundDoodles() {
  // Generate random positions for doodles with more variety
  const doodles = Array.from({ length: 20 }).map((_, i) => {
    const left = getRandomInt(0, 95); // vw
    const top = getRandomInt(0, 95); // vh
    const svg = doodleSvgs[getRandomInt(0, doodleSvgs.length - 1)];
    const rotate = getRandomInt(0, 360);
    const opacity = Math.random() * 0.25 + 0.15;
    const scale = Math.random() * 0.5 + 0.8;
    const animationDelay = Math.random() * 20;
    const animationDuration = 15 + Math.random() * 10;
    
    return (
      <div
        key={i}
        className="animate-float"
        style={{
          position: "fixed",
          left: `${left}vw`,
          top: `${top}vh`,
          zIndex: 0,
          pointerEvents: "none",
          opacity,
          transform: `rotate(${rotate}deg) scale(${scale})`,
          animationDelay: `${animationDelay}s`,
          animationDuration: `${animationDuration}s`,
        }}
      >
        {svg}
      </div>
    );
  });

  return (
    <>
      {doodles}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </>
  );
}