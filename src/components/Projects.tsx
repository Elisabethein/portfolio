import React from "react";
import { projectData } from "../data/Project";
import ProjectSlider from "./subcomponents/ProjectSlider";

const Projects: React.FC = () => {
    return (
        <section className="mt-20" id="projects">
            <div className="">
                <h2 className="text-3xl font-bold text-orange-200 mb-6">My Projects</h2>
                <div className="grid gap-6 ">
                    <ProjectSlider projects={projectData} />
                </div>
            </div>
            
        </section>
    );
};

export default Projects;