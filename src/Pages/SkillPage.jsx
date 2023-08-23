import { Link } from "react-router-dom";
import "./styles/SkillPage.css";
import { useTranslation } from "react-i18next";

const SkillPage = () => {

  const {t} = useTranslation()

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
      <p className="skill__paragraph">{t('skillPage.title')} <span className="skill__value">HTML, CSS, javascript, React.</span></p>
      <div className="skill__img-container">
        {
          skillInfo.map(skill => (
            <img className="skill__img" key={skill.id} src={skill.url} alt="logo de habilidad" />
          ))
        }
      </div>
      <p className="skill__text">{t('skillPage.p')} </p>
      <button className="skill__btn"><Link to={'/contact'}>{t('skillPage.btn')} </Link></button>
    </div>
  );
};

export default SkillPage;
