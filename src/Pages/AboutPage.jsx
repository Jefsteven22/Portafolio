import { Link } from 'react-router-dom'
import './styles/AboutPage.css'

const AboutPage = () => {
  return (
    <article className='about'>
      <div className='about__header'>
        <h1 className='about__title'>Steven Contreras</h1>
        <h2 className='about__titule'>Desarrollador Frontend</h2>
        <p className='about__paragraph'>Soy un pasionado de la programación, con experiencia en la creación de aplicaciones web.</p>
        <p className='about__paragraph'>Estoy especializado en tecnologias como HTML5, CSS, JavaScript y en Libreias como React.</p>
      </div>
      <div className='about__goals'>
        <h2 className='about__goals-title'>Objetivos</h2>
        <p className='about__paragraph'>Mi objetivo principal es crear soluciones innovadoras que mejoren la experiencia del usuario y optimicen los procesos empresariales.</p>
        <p className='about__paragraph'>
          Trabajar en proyectos desafiantes que me permitan utilizar mis conocimientos para sastifacer la experiencia del usuario.
        </p>
      </div>
      <div className='about__ability'>
        <h2 className='about__ability-title'>Habilidades Blandas</h2>
        <ul className='about__ability-list'>
          <li className='about__ability-value'>Formación autodidacta continua</li>
          <li className='about__ability-value'>Exigencia autocrítica</li>
          <li className='about__ability-value'>Liderazgo</li>
          <li className='about__ability-value'>Trabajo en equipo</li>
          <li className='about__ability-value'>Trabajo bajo presión</li>
          <li className='about__ability-value'>Manejo de estrés</li>
          <li className='about__ability-value'>Resolución de problemas</li>
        </ul>
      </div>
      <button className="about__btn"><Link to={'/contact'}>Información de Contacto</Link></button>
    </article>
  )
}

export default AboutPage