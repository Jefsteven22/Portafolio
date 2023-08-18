import './styles/ProjectCard.css'

const ProjectCard = ({ project }) => {


  return (
    <div className='card__container'>
      <div className="card">
        <div className="card-image">
          <div className='card__btn-container'>
            <button className="card__btn"><i className='bx bxl-gitlab'></i> Codigo</button>
            <button className="card__btn"><i className='bx bxl-netlify'></i> Abrir</button>
          </div>
        </div>
        <div className="card-description">
          <p className="text-title">{project.title}</p>
          <p className="text-body">{project.description}</p>
          <div className='card__tech-container'>
            {
              project.technologies?.map(technology => (
                <img className='card__tech' key={technology.id} src={technology.url} alt="logo de la tegnologia" />
              ))
            }
          </div>
        </div>
      </div>      
    </div>
  )
}

export default ProjectCard