import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter, TwitterIcon, X } from "lucide-react"
import { cn } from "../lib/utils"


export const ContactSection = () => {
    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Excited to connect with developers, learners, or anyone passionate about tech. Always open to ideas, feedback, or a quick chat!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                    <div className="space-y-6 justify-center pl-14 sm:pl-10 md:pl-16 lg:pl-24">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="pl-3">
                                <h4 className="font-medium"> Email</h4>
                                <a href="mailto:alankrit.off@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    alankrit.off@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="pl-8">
                                <h4 className="font-medium"> Phone</h4>
                                <a href="tel:+917376961118" className="text-muted-foreground hover:text-primary transition-colors">
                                    (+91) 7376961118
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium"> Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Lucknow, Uttar Pradesh, India
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="text-2xl font-semibold mb-4">Connect With Me</h4>
                        <div className="flex space-x-8 justify-center">
                            <a href="https://www.linkedin.com/in/alankrit168/" target="_blank" className="hover:text-primary transition-colors">
                                <Linkedin />
                            </a>
                            <a href="https://www.instagram.com/alan.krrrit/" target="_blank" className="hover:text-primary transition-colors">
                                <Instagram />
                            </a>
                            <a href="https://x.com/Alankrit168" target="_blank" className="hover:text-primary transition-colors">
                                <Twitter />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                    <form action="" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                            <input 
                            type="text" 
                            id="name" 
                            name="name"
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                            placeholder="Abc Xyz ..." />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                            <input 
                            type="email" 
                            id="email" 
                            name="email"
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                            placeholder="abc@gmail.com" />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                            <textarea  
                            id="message"
                            name="message" 
                            required 
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" 
                            placeholder="Hello, I would like to ..." />
                        </div>

                        <button type="submit" className={cn(
                            "cosmic-button w-full flex items-center justify-center gap-2",

                        )}>
                            Send Message
                            <Send size={16}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>

    </section>
}