import { useState, useEffect } from 'react';
import styles from "./PortfolioWithForm.module.css";

export default function Hero() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="flex flex-col items-center justify-center py-24 bg-transparent px-4 sm:px-8 lg:px-16" id="hero">
            {/* Your existing hero content */}
            <img className="hidden lg:block object-cover mb-8 absolute top-0 right-0 max-w-[720px] w-full h-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]" alt="Hero Background" src="assets/svg/image.svg" />
            <div className={styles["hero-text"]}>
                <span className={styles["hero-role"]}>Python Backend Developer</span>
                <h1 className={styles["hero-title"]}>
                    Hello, my name is <br />
                    <span className={styles["hero-name"]}>Peter Chege</span>
                </h1>
                <p className={styles["hero-desc"]}>I turn caffeine and problem-solving into reliable software… usually on the first try.</p>
                <div className={styles["hero-buttons"]}>
                    <a href="#projects" className={`${styles.btn} ${styles["btn-primary"]} smooth-scroll`}>Projects</a>
                    <a href="assets/files/Peter_Chege-Resume.pdf" className={`${styles.btn} ${styles["btn-secondary"]}`} target="_blank" rel="noopener noreferrer" download>Resume</a>
                </div>
            </div>

            {/* Scroll Indicator - Centered with scroll hide */}
            <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-gray-400 transition-opacity duration-500 ${
                isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>
                <span className="text-sm font-medium">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-[#fdc435] rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>
        </section>
    );
}