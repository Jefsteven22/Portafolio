import "./style/ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <section className="projectCard">
      <img src={project.img} alt="Logo clima" className="projectCard__img" />
      <h3 className="projectCard__title">{project.title}</h3>
      <ul className="projectCard__list">
        {project.technologies.map((technology) => (
          <li className="projectCard__list-item" key={technology.id}>
            <img
              className="projectCard__list-itemLogo"
              src={technology.url}
              alt="logo de la tecnología"
            />
          </li>
        ))}
      </ul>
      <div className="projectCard__info">
        <p className="projectCard__info-pharase">{project.description}</p>
        <div className="projectCard__info-container">
          <a
            className="projectCard__info-containerBtn"
            target="_blank"
            href={project.github}
          >
            Código
          </a>
          <a
            className="projectCard__info-containerBtn"
            target="_blank"
            href={project.netlify}
          >
            Abrir
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
