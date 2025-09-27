import * as React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import styles from "./PortfolioWithForm.module.css";


// Data for about section
const about = [
    {
        title: "About Me",
        description:
            "Peter Njoroge is an aspiring data scientist with a strong foundation in computer science and a passion for solving real-world problems using data. Currently pursuing his bachelor's degree in Computer Science, Peter is building a personal brand around leveraging machine learning and analytics to address challenges in Africa, particularly in natural resource management and sustainability. His long-term goal is to become a leading data science professional who contributes to both industry innovation and impactful projects that improve livelihoods. Peter has already developed a facial recognition attendance system, FaceTrack Lite, as a demonstration of his skills in computer vision and artificial intelligence. He has also participated in collaborative projects through ALX, where he explored applying data science to global challenges such as deforestation and cultural preservation. These experiences highlight his ability to merge technical knowledge with social impact, while working effectively in diverse teams. Driven, adaptable, and motivated by curiosity, Peter continues to grow his expertise in data science while aspiring to create solutions that empower communities and advance Africa's role in the global digital economy.",
        video:
            "https://drive.google.com/file/d/1XKoh7LC0Hjbozc50UG_Q5cuAmZPznAB8/view?usp=drive_link",
    },
];
// Data for projects
const projects = [
    {
        title: "Facetrack-Lite",
        description:
            "An app that recognizes students, logs unidentified faces, and manages attendance sessions. Dockerized for easy deployment.",
    image: "assets/images/facetrack-lite.webp",
        // image: "https://c.animaapp.com/mftog3eawa0jbJ/img/pexels-elly-fairytale-3823207-1.png",
        imagePosition: "right",
    },
    {
        title: "Task & Project Management Tool",
        description:
            "Role-based access, notifications, and real-time search. Optimized queries for faster task management.",
        // image: "https://c.animaapp.com/mftog3eawa0jbJ/img/rectangle-7.png",
    image: "assets/images/management.webp",
        imagePosition: "left",
    },
    {
        title: "Django REST APIs, Role-Based Access, and AJAX Search Projects.",
        description:
            "REST APIs, AJAX search, and role-based access experiments. More on my GitHub.",
        // image: "https://c.animaapp.com/mftog3eawa0jbJ/img/rectangle-7-1.png",
    image: "assets/images/other-projects.webp",
        imagePosition: "right",
    },
];

// Data for experience items
const experiences = [
    {
        title: "ALX Africa – Data Science Fellow 2025–Present",
        description:
            "Collaborated on real-world projects, practiced data cleaning (aka, dealing with digital garbage), and mastered version control — in both GitHub and team morale.",
        circlePosition: "top-[3040px] left-[259px]",
        cardPosition: "top-[3024px] left-[401px]",
        titlePosition: "top-[3040px] left-[459px]",
        descPosition: "top-[3152px] left-[465px]",
        iconPosition: "top-[3190px] left-[273px]",
    iconSrc: "assets/svg/rectangle-21.svg",
    },
    {
        title: "SafetyPlus Consulting – Intern 2025",
        description:
            "Assisted with software dev and IT support. Helped fix workflows, troubleshoot issues, and occasionally pretended to look very busy while code compiled.",
        circlePosition: "top-[3666px] left-[314px]",
        cardPosition: "top-[3389px] left-[396px]",
        titlePosition: "top-[3407px] left-[465px]",
        descPosition: "top-[3532px] left-[465px]",
        iconPosition: "top-[3816px] left-[328px]",
    iconSrc: "assets/svg/rectangle-21.svg",
    },
    {
        title: "Other Personal Projects as showcased on my github profile",
        description: "",
        circlePosition: "top-[3485px] left-[798px]",
        cardPosition: "top-[3766px] left-[410px]",
        titlePosition: "top-[3797px] left-[465px]",
        descPosition: "",
        iconPosition: "top-[3635px] left-[812px]",
    iconSrc: "assets/svg/rectangle-21.svg",
    },
];

// Data for skills
const skills = [
    {
        name: "Python",
    icon: "assets/svg/logo_python_icon.svg",
        position: "top-[4320px] left-[371px]",
        labelPosition: "top-[4519px] left-[439px]",
    },
    {
        name: "django",
    icon: "assets/svg/django_fill_icon.svg",
        position: "top-[4320px] left-[616px]",
        labelPosition: "top-[4523px] left-[704px]",
    },
    {
        name: "Postgres",
    icon: "assets/svg/devicon-postgresql.svg",
        position: "top-[4320px] left-[913px]",
        labelPosition: "top-[4519px] left-[999px]",
    },
    {
        name: "Git",
    icon: "assets/svg/git_social media_icon.svg",
        position: "top-[4586px] left-[371px]",
        labelPosition: "top-[4783px] left-[442px]",
    },
    {
        name: "Data Analysis",
    icon: "assets/svg/data_analysis.svg",
        position: "top-[4586px] left-[616px]",
        labelPosition: "top-[4797px] left-[673px]",
    },
];

// Data for contact icons
const contactIcons = [
    {
    icon: "assets/svg/email_gmail_mail_logo_social_icon.svg",
        position: "top-[5262px] left-[267px]",
    },
    {
    icon: "assets/svg/code_repository_github_repository_resource_icon.svg",
        position: "top-[5262px] left-[578px]",
    },
    {
    icon: "assets/svg/icons8-linkedin.svg",
        position: "top-[5260px] left-[889px]",
    },
];

// Data for navigation items
const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contacts", href: "#contacts" },
];



export const PortfolioWithForm = (): React.ReactElement => {
    const [aboutExpanded, setAboutExpanded] = React.useState(false);
    const aboutWords = about[0].description.split(' ');
    const aboutPreview = aboutWords.slice(0, 20).join(' ') + (aboutWords.length > 20 ? '...' : '');
    return (
        <div className="bg-bg-gray min-h-screen w-full flex flex-col items-center" data-model-id="1:62">
            {/* Header */}
            <header className="w-full h-16 flex justify-between items-center px-4 sm:px-8 lg:px-16 bg-transparent shadow-sm sticky top-0 z-10">
                <div className="[font-family:'Comfortaa',Helvetica] font-bold text-font-high-emphasis text-lg whitespace-nowrap">
                    Peter Chege
                </div>
                <nav className="flex gap-12">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="font-body-18px font-[number:var(--body-18px-font-weight)] text-font-high-emphasis text-[length:var(--body-18px-font-size)] tracking-[var(--body-18px-letter-spacing)] leading-[var(--body-18px-line-height)] whitespace-nowrap [font-style:var(--body-18px-font-style)] hover:text-brand-yellow transition-colors cursor-pointer"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </header>

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center py-24 bg-transparent px-4 sm:px-8 lg:px-16" id="hero">
                {/* Decorative images: hide on small screens to avoid layout shift */}
                <img
                    className="hidden lg:block object-cover mb-8 absolute top-0 right-0 max-w-[720px] w-full h-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]"
                    alt="Hero Background"
                    src="assets/svg/image.svg"
                />
                {/* Intro illustration recreated with responsive HTML/SVG for better scaling */}
                <div className={styles["hero-text"]}>
                    <span className={styles["hero-role"]}>Python Backend Developer</span>
                    <h1 className={styles["hero-title"]}>
                        Hello, my name is <br />
                        <span className={styles["hero-name"]}>Peter Chege</span>
                    </h1>
                    <p className={styles["hero-desc"]}>
                        I turn caffeine and problem-solving into reliable software… usually on the first try.
                    </p>
                    <div className={styles["hero-buttons"]}>
                        <a href="#projects" className={`${styles.btn} ${styles["btn-primary"]} smooth-scroll`}>
                            Projects
                        </a>
                        <a href="assets/files/Peter_Chege-Resume.pdf" className={`${styles.btn} ${styles["btn-secondary"]}`} target="_blank" rel="noopener noreferrer" download>
                            Resume
                        </a>
                        {/* <a href="https://linkedin.com/in/chege-peter" className={`${styles.btn} ${styles["btn-secondary"]}`} target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a> */}
                    </div>
                </div>

            </section>

            {/* About Section */}
            <section className="flex flex-col items-center justify-center py-24 bg-transparent mt-0 md:mt-0 w-full px-4 sm:px-8 lg:px-16" id="about">
                <div className="flex flex-col items-center gap-1 mb-10">
                    <h2 className="font-title-h2 font-[number:var(--title-h2-font-weight)] text-font-high-emphasis text-[length:var(--title-h2-font-size)] text-center tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] whitespace-nowrap [font-style:var(--title-h2-font-style)]">
                        {about[0].title}
                    </h2>
                    <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-4xl">
                    <Card className="w-full bg-white rounded-3xl shadow-lg animate-fade-in">
                        <CardContent className="p-8 w-full h-full flex flex-col md:flex-row">
                            <div className="flex-1 pr-0 md:pr-8 mb-8 md:mb-0">
                                <p className="font-normal text-font-medium-emphasis text-lg leading-[27px]">
                                    {aboutExpanded ? about[0].description : aboutPreview}
                                </p>
                                {aboutWords.length > 20 && (
                                    <button
                                        className="mt-4 px-4 py-2 bg-brand-yellow text-black rounded-2xl font-semibold shadow hover:bg-yellow-400 transition-colors"
                                        onClick={() => setAboutExpanded((prev) => !prev)}
                                    >
                                        {aboutExpanded ? 'Show Less' : 'Read More'}
                                    </button>
                                )}
                            </div>
                            <div className="flex-1 pl-0 md:pl-8 flex justify-center items-center">
                                <iframe
                                    className="w-full h-48 md:h-64 rounded-2xl"
                                    src={about[0].video}
                                    title="About Me Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Projects Section */}
            <section className="flex flex-col items-center justify-center py-24 bg-transparent px-4 sm:px-8 lg:px-16" id="projects">
                <div className="flex flex-col items-center gap-1 mb-10">
                    <h2 className="font-title-h2 font-[number:var(--title-h2-font-weight)] text-font-high-emphasis text-[length:var(--title-h2-font-size)] text-center tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] whitespace-nowrap [font-style:var(--title-h2-font-style)]">
                        Projects
                    </h2>
                    <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
                </div>
                <div className="flex flex-col gap-12 w-full max-w-4xl">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="flex flex-col md:flex-row w-full bg-white rounded-3xl overflow-hidden shadow-lg animate-fade-in"
                            style={{ "--animation-delay": `${800 + index * 200}ms` } as React.CSSProperties}
                        >
                            <CardContent className="p-0 flex w-full h-full">
                                {project.imagePosition === "left" ? (
                                    <>
                                        <img
                                            className="w-full md:w-1/2 h-64 md:h-[524px] object-cover order-first"
                                            alt="Project"
                                            src={project.image}
                                        />
                                        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 order-last">
                                            <h3 className="[font-family:'Playfair_Display',Helvetica] font-bold text-font-high-emphasis text-2xl md:text-[40px] leading-tight mb-4">
                                                {project.title}
                                            </h3>
                                            <p className="font-normal text-font-medium-emphasis text-lg leading-[27px] mb-6">
                                                {project.description}
                                            </p>
                                            {project.title === "Facetrack-Lite" ? (
                                                <a
                                                    href="https://github.com/peter-njoro/facetrack-lite"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Button
                                                        variant="outline"
                                                        className="rounded-3xl border border-solid border-[#25282b] hover:bg-brand-yellow hover:border-brand-yellow transition-colors"
                                                    >
                                                        <span className="[font-family:'Roboto',Helvetica] font-medium text-font-high-emphasis text-lg leading-[27px] whitespace-nowrap">
                                                            View Project
                                                        </span>
                                                    </Button>
                                                </a>
                                            ) : project.title === "Task & Project Management Tool" ? (
                                                <a
                                                    href="https://github.com/peter-njoro/Task-Project-Management-Tool"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Button
                                                        variant="outline"
                                                        className="rounded-3xl border border-solid border-[#25282b] hover:bg-brand-yellow hover:border-brand-yellow transition-colors"
                                                    >
                                                        <span className="[font-family:'Roboto',Helvetica] font-medium text-font-high-emphasis text-lg leading-[27px] whitespace-nowrap">
                                                            View Project
                                                        </span>
                                                    </Button>
                                                </a>
                                            ) : project.title === "Django REST APIs, Role-Based Access, and AJAX Search Projects." ? (
                                                <a
                                                    href="https://github.com/peter-njoro?tab=repositories"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Button
                                                        variant="outline"
                                                        className="rounded-3xl border border-solid border-[#25282b] hover:bg-brand-yellow hover:border-brand-yellow transition-colors"
                                                    >
                                                        <span className="[font-family:'Roboto',Helvetica] font-medium text-font-high-emphasis text-lg leading-[27px] whitespace-nowrap">
                                                            View Project
                                                        </span>
                                                    </Button>
                                                </a>
                                            ) : null}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 order-last md:order-first">
                                            <h3 className="[font-family:'Playfair_Display',Helvetica] font-bold text-font-high-emphasis text-2xl md:text-[40px] leading-tight mb-4">
                                                {project.title}
                                            </h3>
                                            <p className="font-normal text-font-medium-emphasis text-lg leading-[27px] mb-6">
                                                {project.description}
                                            </p>
                                            {project.title === "Facetrack-Lite" ? (
                                                <a
                                                    href="https://github.com/peter-njoro/facetrack-lite"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Button
                                                        variant="outline"
                                                        className="rounded-3xl border border-solid border-[#25282b] hover:bg-brand-yellow hover:border-brand-yellow transition-colors"
                                                    >
                                                        <span className="[font-family:'Roboto',Helvetica] font-medium text-font-high-emphasis text-lg leading-[27px] whitespace-nowrap">
                                                            View Project
                                                        </span>
                                                    </Button>
                                                </a>
                                            ) : project.title === "Task & Project Management Tool" ? (
                                                <a
                                                    href="https://github.com/peter-njoro/Task-Project-Management-Tool"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Button
                                                        variant="outline"
                                                        className="rounded-3xl border border-solid border-[#25282b] hover:bg-brand-yellow hover:border-brand-yellow transition-colors"
                                                    >
                                                        <span className="[font-family:'Roboto',Helvetica] font-medium text-font-high-emphasis text-lg leading-[27px] whitespace-nowrap">
                                                            View Project
                                                        </span>
                                                    </Button>
                                                </a>
                                            ) : project.title === "Django REST APIs, Role-Based Access, and AJAX Search Projects." ? (
                                                <a
                                                    href="https://github.com/peter-njoro?tab=repositories"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Button
                                                        variant="outline"
                                                        className="rounded-3xl border border-solid border-[#25282b] hover:bg-brand-yellow hover:border-brand-yellow transition-colors"
                                                    >
                                                        <span className="[font-family:'Roboto',Helvetica] font-medium text-font-high-emphasis text-lg leading-[27px] whitespace-nowrap">
                                                            View Project
                                                        </span>
                                                    </Button>
                                                </a>
                                            ) : null}
                                        </div>
                                        <img
                                            className="w-full md:w-1/2 h-64 md:h-[524px] object-cover order-first md:order-last"
                                            alt="Project"
                                            src={project.image}
                                        />
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Experience Section */}
            <section className="experience flex flex-col items-center justify-center py-24 bg-transparent" id="experience">
                <div className="flex flex-col items-center gap-1 mb-10">
                    <h2 className="font-title-h2 font-[number:var(--title-h2-font-weight)] text-font-high-emphasis text-[length:var(--title-h2-font-size)] text-center tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] whitespace-nowrap [font-style:var(--title-h2-font-style)]">
                        Experience
                    </h2>
                    <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
                </div>
                <div className="flex justify-center w-full max-w-4xl">
                    <Card className="w-full bg-white rounded-3xl shadow-lg animate-fade-in">
                        <CardContent className="p-8 w-full h-full">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="mb-12 last:mb-0 animate-fade-in"
                                    style={{ "--animation-delay": `${1800 + index * 200}ms` } as React.CSSProperties}
                                >
                                    <div className="flex flex-col md:flex-row items-start gap-8">
                                        <div className="flex flex-col items-center w-full md:w-32 flex-shrink-0 mb-4 md:mb-0">
                                            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#febc2f] to-[#98711c] mb-4" />
                                            <img
                                                className="w-48 h-24 object-contain"
                                                alt="Experience"
                                                src={exp.iconSrc}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <div className="w-full bg-[#d9d9d91a] rounded-[35px] border border-white/20 backdrop-blur-[17.5px] p-8 mb-4">
                                                <h3 className="[font-family:'Playfair_Display',Helvetica] font-bold text-black text-2xl mb-4 leading-tight">
                                                    {exp.title}
                                                </h3>
                                                {exp.description && (
                                                    <p className="font-normal text-black text-lg leading-relaxed">
                                                        {exp.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Skills Section */}
            <section className="w-full flex flex-col items-center justify-center py-24 bg-transparent" id="skills">
                <div className="flex flex-col items-center gap-1 mb-10">
                    <h2 className="font-title-h2 font-[number:var(--title-h2-font-weight)] text-font-high-emphasis text-[length:var(--title-h2-font-size)] text-center tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] whitespace-nowrap [font-style:var(--title-h2-font-style)]">
                        Skills
                    </h2>
                    <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
                </div>
                <div className="flex justify-center w-full max-w-4xl">
                    <Card className="w-full bg-white rounded-3xl shadow-lg animate-fade-in">
                        <CardContent className="p-8 w-full h-full">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full items-center justify-items-center">
                                {skills.map((skill, index) => (
                                    <div
                                        key={skill.name}
                                        className="flex flex-col items-center gap-4 animate-fade-in"
                                        style={{ "--animation-delay": `${2800 + index * 200}ms` } as React.CSSProperties}
                                    >
                                        <img
                                            className="w-32 h-32 object-contain hover:scale-110 transition-transform duration-300"
                                            alt={skill.name}
                                            src={skill.icon}
                                        />
                                        <div className="font-normal text-font-medium-emphasis text-lg text-center">
                                            {skill.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Contact Section */}
            <section className="w-full flex flex-col items-center justify-center py-24 bg-transparent" id="contacts">
                <div className="flex flex-col items-center gap-1 mb-10">
                    <h2 className="font-title-h2 font-[number:var(--title-h2-font-weight)] text-font-high-emphasis text-[length:var(--title-h2-font-size)] text-center tracking-[var(--title-h2-letter-spacing)] leading-[var(--title-h2-line-height)] whitespace-nowrap [font-style:var(--title-h2-font-style)]">
                        Contact
                    </h2>
                    <div className="w-[100px] h-1 bg-[#fdc435] rounded-sm" />
                </div>
                <div className="flex justify-center w-full max-w-4xl">
                    <Card className="w-full bg-white rounded-3xl shadow-lg animate-fade-in">
                        <CardContent className="p-8 w-full h-full">
                            <div className="flex flex-col md:flex-row justify-around items-center h-full gap-8">
                                {/* Email */}
                                <a
                                    href="mailto:peterchegen12@gmail.com"
                                    className="flex flex-col items-center gap-6 animate-fade-in"
                                    style={{ "--animation-delay": `3700ms` } as React.CSSProperties}
                                >
                                    <img
                                        className="w-24 h-24 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                                        alt="Email"
                                        src={contactIcons[0].icon}
                                    />
                                    <div className="font-normal text-font-medium-emphasis text-lg">
                                        Email
                                    </div>
                                </a>
                                {/* GitHub */}
                                <a
                                    href="https://github.com/peter-njoro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-6 animate-fade-in"
                                    style={{ "--animation-delay": `3900ms` } as React.CSSProperties}
                                >
                                    <img
                                        className="w-24 h-24 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                                        alt="GitHub"
                                        src={contactIcons[1].icon}
                                    />
                                    <div className="font-normal text-font-medium-emphasis text-lg">
                                        GitHub
                                    </div>
                                </a>
                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/chege-peter/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-6 animate-fade-in"
                                    style={{ "--animation-delay": `4100ms` } as React.CSSProperties}
                                >
                                    <img
                                        className="w-24 h-24 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                                        alt="LinkedIn"
                                        src={contactIcons[2].icon}
                                    />
                                    <div className="font-normal text-font-medium-emphasis text-lg">
                                        LinkedIn
                                    </div>
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Footer Wave */}
            <div className="w-full mt-12">
                <img
                    className="w-full h-auto"
                    alt="Vector"
                    src="assets/svg/vector.svg"
                />
            </div>
        </div>
    );
};