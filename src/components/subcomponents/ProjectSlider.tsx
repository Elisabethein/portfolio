import { useEffect, useRef, useState } from "react";
import type { Project } from "../../types/Project";
import ProjectComponent from "./ProjectComponent";

const ProjectSlider = ({ projects }: { projects: Project[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const trackWidth = trackRef.current.scrollWidth;

    const maxScroll = trackWidth - containerWidth;

    setScrollDistance(maxScroll > 0 ? maxScroll : 0);
  }, [projects]);

  return (
    <div className="overflow-hidden w-full relative group" ref={containerRef}>
      <div
        ref={trackRef}
        style={{
            animation: scrollDistance
                ? `pingpong-scroll ${scrollDistance / 10}s linear infinite alternate`
                : "none",
            ["--scroll-distance" as any]: `-${scrollDistance}px`,
            }}

        className="flex w-max animate-pingpong-scroll group-hover:paused"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-[100vw] sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 box-border"
          >
            <ProjectComponent project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
