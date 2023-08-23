import { Link } from "react-router-dom";
import ProjectCard from "../components/BriefcasePage/ProjectCard";
import './styles/BriefcasePage.css'
import { useTranslation } from "react-i18next";
import { setMenuG } from "../store/slices/menu.slice";
import { useDispatch } from "react-redux";

const BriefcasePage = () => {

  const {t} = useTranslation()
  const dispatch = useDispatch();

  const projects = [
    {
      title: "Pokedex",
      description: `${t('projectPage.descriptions.pokedex')}`,
      img: "/img/projects/pokedex.jpg",
      github: "https://github.com/Jefsteven22/pokemon-app.git",
      netlify: "https://pokedex-app-steven-contreras.netlify.app/",
      technologies: [{url: '/svg/react-01.svg', id: 1}, {url: '/svg/html-01.svg', id: 2}, {url: '/svg/css-01.svg', id: 3}, {url: '/svg/js-01.svg', id: 4}],
      id: 1
    },
    {
      title: "Rick and Morty",
      description: `${t('projectPage.descriptions.rickAndMorty')}`,
      img: "/img/projects/randm.jpg",
      github: "https://github.com/Jefsteven22/rick-and-morty-app.git",
      netlify: "https://rick-and-morty-app-steven-contreras.netlify.app/",
      technologies: [{url: '/svg/react-01.svg', id: 1}, {url: '/svg/html-01.svg', id: 2}, {url: '/svg/css-01.svg', id: 3}, {url: '/svg/js-01.svg', id: 4}],
      id: 2
    },
    {
      title: "User Cards",
      description: `${t('projectPage.descriptions.userCards')}`,
      img: "/img/projects/users-app.jpg",
      github: "https://github.com/Jefsteven22/users-cards.git",
      netlify: "https://users-cards-steven-contreras.netlify.app/",
      technologies: [{url: '/svg/react-01.svg', id: 1}, {url: '/svg/html-01.svg', id: 2}, {url: '/svg/css-01.svg', id: 3}, {url: '/svg/js-01.svg', id: 4}],
      id: 3
    },
    {
      title: "Wather app",
      description: `${t('projectPage.descriptions.watherApp')}`,
      img: "/img/projects/clima-app.jpg",
      github: "https://github.com/Jefsteven22/weather-app.git",
      netlify: "https://weather-app-steven-contreras.netlify.app/",
      technologies: [{url: '/svg/react-01.svg', id: 1}, {url: '/svg/html-01.svg', id: 2}, {url: '/svg/css-01.svg', id: 3}, {url: '/svg/js-01.svg', id: 4}],
      id: 4
    },
    {
      title: "Ecommerce Vanilla",
      description: `${t('projectPage.descriptions.ecommerceVanilla')}`,
      img: "/img/projects/ecommerce-vanilla.jpg",
      github: "https://github.com/Jefsteven22/proyecto-e-commerce-vanilla.git",
      netlify: "https://ecommerce-vanila-steven-contreras.netlify.app/",
      technologies: [{url: '/svg/html-01.svg', id: 2}, {url: '/svg/css-01.svg', id: 3}, {url: '/svg/js-01.svg', id: 4}],
      id: 5
    }
  ];

  const handleClose = () => {
    dispatch(setMenuG(false));
  };

  return (
    <div onClick={handleClose} className="project__container">
      <div className="projects">
        {
          projects.map( project => (
            <ProjectCard 
              project={project}
              key={project.id}
            />
          ))
        }
      </div>
      <button className="projects__btn"><Link to={'/contact'}>{t('projectPage.btn')}</Link></button>
    </div>
  );
};

export default BriefcasePage;
