import type { Project } from '../../types/Project';

const ProjectComponent = ({ project }: { project: Project }) => {
    return (
        <div className="">
            <div className="">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="">
                {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectComponent;