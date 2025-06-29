import { ArrowRight, ExternalLink, Github, GithubIcon } from "lucide-react"
import { cn } from "../lib/utils"

const projects = [
    /* {
        id: 1,
        title: "AI Planet project",
        description: "project given by ai planet for first round",
        image: "/projects/image.png",
        demoUrl: "#",
        githubUrl: "#",
    }, */
    {
        id: 2,
        title: "Guardian of Things",
        description: "Developed a system using which an IoT device could be made safer using regression racing for 'Red-Teaming' and 'Blue-Teaming' simultaneously. A person just needs to ask the API to do a particular task like ”Phishing” and all the tools used and information regarding the steps are shown on how to use them.",
        image: "/Projects/image.png",
        tags: ["Openai API", "Kali Linux", "NMap", "Wireshark", "BurpSuite"],
    },
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary">Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my projects which I have made in the recent times. These projects were made using various trending technologies and have a real life impact.
            </p>

            <div className={cn(
                "grid",
                projects.length === 1
                ? "place-items-center"
                : "grid-cols-1 md:grid-cols-2 gap-8"
            )}>
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover max-w-[500px] w-full">

                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-2">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                        <GithubIcon size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="https://github.com/KritAlankrit" className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank">
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
}