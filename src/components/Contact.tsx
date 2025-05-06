import React from "react";

const Contact: React.FC = () => {
    return (
        <section className="">
            <h2 className="">Get in Touch</h2>

            <p className="">
                Elisabet Hein
            </p>
            <p className="">
                Let's get in touch!
            </p>

            <p className="">
                Email: <a href="mailto:" className="text-blue-500">elisabethein28@gmail.com</a>
            </p>

            <div className="">
                <a href="https://github.com/Elisabethein" target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a>
                <a href="https://www.linkedin.com/in/elisabet-hein-0862a3259" target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a>
            </div>
        </section>
    )
}

export default Contact;