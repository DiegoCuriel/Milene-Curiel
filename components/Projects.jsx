import React from "react";
import directedImg from "../public/assets/projects/directed.jpg";
import collaboratedImg from "../public/assets/projects/collaborated.jpg";
import photographedImg from "../public/assets/projects/photographed.jpg";
import moreImg from "../public/assets/projects/more.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[text-black]">
          Projects
        </p>
        <h2 className="py-4">I have...</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Directed"
            backgroundImg={directedImg}
            projectUrl="/directed"
          />
          <ProjectItem
            title="Collaborated on"
            backgroundImg={collaboratedImg}
            projectUrl="/collaborated"
          />
          <ProjectItem
            title="Photographed"
            backgroundImg={photographedImg}
            projectUrl="/photographed"
          />
          <ProjectItem
            title="& more..."
            backgroundImg={moreImg}
            projectUrl="/more"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
