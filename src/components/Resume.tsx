import React from "react";
import ResumeComponent from "./subcomponents/ResumeComponent";
import { resumeData } from "../data/Resume";

const Resume: React.FC = () => {
    return (
        <section className="" id="resume">
            <div className="">
                
            <h2 className="">My Resume</h2>
            <a href="/Elisabet_Hein_CV_2025.pdf"
                download
                className=""
                >
                    Download PDF
                </a>

            </div>
            <div className="">
                {resumeData.map((resume) => (
                    <ResumeComponent key={resume.position} resume={resume} />
                ))}
            </div>
        </section>
    );
};

export default Resume;