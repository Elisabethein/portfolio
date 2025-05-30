import type { Project } from '../../types/Project';

const ProjectComponent = ({ project }: { project: Project }) => {
    return (
        <div className="relative h-full flex flex-col w-full max-w-full">
            <div className="absolute -inset-1 rounded-xl bg-orange-100 blur-lg opacity-10" />

            <div className="bg-orange-100/20 shadow-lg shadow-orange-300/10 rounded-xl p-6 relative overflow-hidden flex flex-col flex-grow">
                <div className="absolute inset-0 rounded-xl pointer-events-none shadow-inner shadow-orange-200/10" />

                <div className="mb-2 z-10">
                    <h3 className="text-xl font-semibold text-orange-300">{project.title}</h3>
                </div>

                <div className="z-10 mb-4">
                    <p className="text-base text-white leading-loose">{project.description}</p>
                </div>

                <div className="mt-auto z-10 pt-4 space-y-2">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="bg-orange-100/10 text-orange-100 px-3 py-2 rounded-full text-xs">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-orange-200 underline text-base hover:text-orange-300 transition"
                        >
                            GitHub →
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};


export default ProjectComponent;
