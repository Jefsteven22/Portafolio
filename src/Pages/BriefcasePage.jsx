import ProjectCard from "../components/BriefcasePage/ProjectCard";
import './styles/BriefcasePage.css'

const BriefcasePage = () => {
  const projects = [
    {
      title: "Pokedex",
      description: "Una app web donde puedes interactuar con la información de los pokemones",
      img: "",
      github: "",
      netlify: "",
      technologies: [{url: '/svg/react-01.svg', id: 1}, {url: '/svg/html-01.svg', id: 2}, {url: '/svg/css-01.svg', id: 3}, {url: '/svg/js-01.svg', id: 4}],
      id: 1
    },
    {
      title: "Rick and Morty",
      description: "Una app web donde obtienes todos los personajes que aparecen en la serie dependiendo de su universo",
      img: "",
      github: "",
      netlify: "",
      technologies: [{url: '/svg/react-01.svg', id: 1}, {url: '/svg/html-01.svg', id: 2}, {url: '/svg/css-01.svg', id: 3}, {url: '/svg/js-01.svg', id: 4}],
      id: 2
    },
    {
      title: "User Cards",
      description: "Mini juego donde puedes crear usuarios e interactuar con las cards",
      img: "",
      github: "",
      netlify: "",
      technologies: [{url: '/svg/react-01.svg', id: 1}, {url: '/svg/html-01.svg', id: 2}, {url: '/svg/css-01.svg', id: 3}, {url: '/svg/js-01.svg', id: 4}],
      id: 3
    },
    {
      title: "Wather app",
      description: "Una app web que te muestra el estado del clima a tiempo real, dependiendo de tu hubicación geografica",
      img: "",
      github: "",
      netlify: "",
      technologies: [{url: '/svg/react-01.svg', id: 1}, {url: '/svg/html-01.svg', id: 2}, {url: '/svg/css-01.svg', id: 3}, {url: '/svg/js-01.svg', id: 4}],
      id: 4
    },
    {
      title: "Ecommerce Vanilla",
      description: "Un Ecommerce creado con codigo Puro y duro (Vanilla), simulando compra, creación de usuarios, llamada a la API, etc.",
      img: "",
      github: "",
      netlify: "",
      technologies: [{url: '/svg/html-01.svg', id: 2}, {url: '/svg/css-01.svg', id: 3}, {url: '/svg/js-01.svg', id: 4}],
      id: 5
    }
  ];
  return (
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
  );
};

export default BriefcasePage;
