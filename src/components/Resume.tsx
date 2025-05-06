import React from "react";
import ResumeComponent from "./subcomponents/ResumeComponent";
import { resumeData } from "../data/Resume";

const Resume: React.FC = () => {
    return (
        <section className="" id="resume">
            <h2 className="">My Resume</h2>
            <div className="">
                {resumeData.map((resume) => (
                    <ResumeComponent key={resume.position} resume={resume} />
                ))}
            </div>
        </section>
    );
};

export default Resume;