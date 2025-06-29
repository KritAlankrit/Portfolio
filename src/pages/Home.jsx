import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutMe } from "../components/AboutSection"
import { SkillSection } from "../components/SkillSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}

        {/* Navbar */}
        <div className="fixed top-0 left-0 w-full h-14 bg-background z-30" />
        <Navbar />

        <Navbar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutMe />
            <SkillSection />
            <ProjectsSection />
            <ContactSection />
        </main>


        {/* Footer */}
        <Footer />

    </div>
}