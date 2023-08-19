import { Link } from "react-router-dom";
import "./styles/SkillPage.css";

const SkillPage = () => {
  const skillInfo = [
    { url: "/svg/react-01.svg", 
      id: 1,      
    },
    { url: "/svg/html-01.svg", 
      id: 2,      
    },
    { url: "/svg/css-01.svg", 
      id: 3,      
    },
    { url: "/svg/js-01.svg", 
      id: 4,      
    },
  ];

  return (
    <div className="skill">
      <p className="skill__paragraph">Cuento con experiencia en <span className="skill__value">HTML, CSS, javascript, React.</span></p>
      <div className="skill__img-container">
        {
          skillInfo.map(skill => (
            <img className="skill__img" key={skill.id} src={skill.url} alt="" />
          ))
        }
      </div>
      <p className="skill__text">Estas habilidades me permiten crear interfaces web atractivas, desarrollar aplicaciones completas, colaborar eficientemente en proyectos utilizando control de versiones con Github.</p>
      <button className="skill__btn"><Link to={'/contact'}>Hagamos un proyecto juntos</Link></button>
    </div>
  );
};

export default SkillPage;
