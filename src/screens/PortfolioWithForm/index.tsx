import * as React from "react";
import Header from "./Header";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import FooterWave from "./FooterWave";

export const PortfolioWithForm = (): React.ReactElement => {
    return (
        <div className="bg-bg-gray min-h-screen w-full flex flex-col items-center" data-model-id="1:62">
            <Header />
            <Hero />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <SkillsSection />
            <ContactSection />
            <FooterWave />
        </div>
    );
};

export default PortfolioWithForm;
