import { Parallax } from "react-scroll-parallax";
import { allProjects } from "../services/allProyects";
import ProjectCard from "./Proyects/ProjectCard";
import "./styles/Projects.css";

const Projects = () => {
  const projectInfo = allProjects;
  return (
    <section className="projects" id="projects">
      <Parallax speed={-15}>
        <h2 className="projects__title">Proyectos Realizados</h2>
        <div className="projects__container">
          {projectInfo.map((project) => (
            <ProjectCard className="test" key={project.id} project={project} />
          ))}
        </div>
      </Parallax>
    </section>
  );
};

export default Projects;
