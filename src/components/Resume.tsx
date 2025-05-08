import React from "react";
import ResumeComponent from "./subcomponents/ResumeComponent";
import { resumeData } from "../data/Resume";

const Resume: React.FC = () => {
    return (
        <section className="mt-40" id="resume">
            <div className="">
                
            <h2 className="text-3xl font-bold text-orange-200 mb-4">My Resume</h2>
            <a href="/Elisabet_Hein_CV_2025.pdf"
                download
                className="inline-flex items-center gap-2 bg-orange-100/20 font-medium px-4 py-2 rounded-full m-1 transition-transform duration-200 hover:scale-105 hover:animate-wiggle"
                >
                    Download PDF
                </a>

            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resumeData.map((resume) => (
                    <ResumeComponent key={resume.position} resume={resume} />
                ))}
            </div>
        </section>
    );
};

export default Resume;