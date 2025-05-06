import React from "react";
import ProjectComponent from "./subcomponents/ProjectComponent";
import { projectData } from "../data/Project";

const Projects: React.FC = () => {
    return (
        <section className="" id="projects">
            <h2 className="">My Projects</h2>
            <div className="">
                {projectData.map((project) => (
                    <ProjectComponent key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;