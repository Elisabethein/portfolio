import type { Project } from "../../types/Project";
import ProjectComponent from "./ProjectComponent";

const ProjectSlider = ({ projects }: { projects: Project[] }) => {

    return (
        <div className="w-full overflow-hidden">
            <div
                className="flex gap-6 sm:gap-4 md:gap-6 lg:gap-6 animate-scroll"
                style={{
                    animation: "scroll-horizontal 40s linear infinite",
                }}
            >
                {[...projects, ...projects].map((project, index) => (
                    <div
                        key={index}
                        className="w-1/3 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 flex-shrink-0 px-3 box-border"
                    >
                        <ProjectComponent project={project} />
                    </div>
                    ))}
            </div>
        </div>
    );
};

export default ProjectSlider;
