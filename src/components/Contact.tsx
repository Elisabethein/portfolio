import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
    return (
        <section className="mt-40" id="contact">
            <div className="relative w-full mb-12">
                <div className="w-full h-0.5 bg-orange-100/30 relative z-10" />
                <div className="absolute inset-0 h-2 bg-orange-100 opacity-40 blur-lg animate-pulse" />
            </div>

            <div className="space-y-1">
                <p className="text-xl font-semibold text-orange-300">Elisabet Hein</p>
                <p className="text-md text-orange-200">Let's get in touch!</p>
                <p className="text-sm text-orange-100">
                    Email: <a href="mailto:elisabethein28@gmail.com" className="text-orange-300 underline hover:text-orange-400 transition">elisabethein28@gmail.com</a>
                </p>
            </div>

            <div className="flex justify-center gap-6 text-3xl mt-4">
                <a href="https://github.com/Elisabethein" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub className="hover:text-orange-400 transition transform hover:scale-110" />
                </a>
                <a href="https://www.linkedin.com/in/elisabet-hein-0862a3259" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="ml-4">
                    <FaLinkedin className="hover:text-orange-400 transition transform hover:scale-110" />
                </a>
            </div>
        </section>
    )
}

export default Contact;