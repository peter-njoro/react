import * as React from "react";
import Header from "./Header";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import FooterWave from "./FooterWave";
import BackgroundDoodles from "./BackgroundDoodles";
import CaseStudiesSection from "./CaseStudiesSection";
import AchievementsSection from "./AchievementsSection";


export const PortfolioWithForm = (): React.ReactElement => {
    return (
        <div className="bg-bg-gray min-h-screen w-full flex flex-col items-center relative" data-model-id="1:62">
            <BackgroundDoodles />
            <Header />
            <Hero />
            <AboutSection />
            <ProjectsSection />
            <CaseStudiesSection />
            <AchievementsSection />
            <ExperienceSection />
            <SkillsSection />
            <ContactSection />
            <FooterWave />
        </div>
    );
};

export default PortfolioWithForm;
