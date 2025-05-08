import React from "react";
import { projectData } from "../data/Project";
import ProjectSlider from "./subcomponents/ProjectSlider";
import ProjectComponent from "./subcomponents/ProjectComponent";

const Projects: React.FC = () => {
    return (
        <section className="mt-40" id="projects">
            <div className="">
                <h2 className="text-3xl font-bold text-orange-200 mb-6">My Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {projectData.map(project => (
                        <ProjectComponent key={project.title} project={project} />
                    ))}
                    </div>
            </div>
            
        </section>
    );
};

export default Projects;