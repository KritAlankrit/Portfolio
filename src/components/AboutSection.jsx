import { Briefcase, Code, ServerCog, ShieldCheck, User } from "lucide-react"


export const AboutMe = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer & Cyber Security Enthusiast</h3>
                    <p className="text-muted-foreground">With over a year of hands-on experience in full-stack web development, I’ve worked on a variety of projects ranging from API-integrated enhanced technical tools to secure AI-driven IoT platforms. I enjoy taking on challenges that push me to think critically and build with purpose.</p>
                    <p className="text-muted-foreground">I thrive on creating innovative solutions to real-world problems, whether it’s designing intuitive interfaces or optimizing system performance. My journey has been defined by continuous learning, writing clean and scalable code, and staying updated with the latest technologies in both frontend and backend development.</p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">Get In Touch</a>
                        <a href="\Alankrit_Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download Resume</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex item-start gap-4">
                            <div className="w-24 h-12 flex items-center justify-center rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web development</h4>
                                <p className="text-muted-foreground">Creating responsive and dynamic websites using modern frameworks and delivering seamless user experiences across devices.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex item-start gap-4">
                            <div className="w-24 h-12 flex items-center justify-center rounded-full bg-primary/10">
                                <ShieldCheck className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Cyber Security</h4>
                                <p className="text-muted-foreground">Enthusiastic about ethical hacking and secure coding practices while exploring vulnerabilities to build safer digital systems.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex item-start gap-4">
                            <div className="w-24 h-12 flex items-center justify-center rounded-full bg-primary/10">
                                <ServerCog className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> DevOps & Continuous Learning</h4>
                                <p className="text-muted-foreground">Currently diving into Docker, Kubernetes, and CI/CD pipelines tools to understand the bridge between development and deployment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}