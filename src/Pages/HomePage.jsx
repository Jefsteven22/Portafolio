import "./styles/HomePage.css";
import { useDispatch } from "react-redux";
import { setMenuG } from "../store/slices/menu.slice";
import { Typewriter } from "react-simple-typewriter";

const HomePage = () => {
  const dispatch = useDispatch();
  const text = ['Experiencia con React.js', 'Manejo de HTML5, CSS y JavaScript'];

  const handleClose = () => {
    dispatch(setMenuG(false));
  };

  return (
    <div className="home" onClick={handleClose}>      
      <h1>Steven Contreras</h1>
      <h2>Desarrollador Frontend</h2>
      <Typewriter
        words={text}
        loop={0}
      />
    </div>
  );
};

export default HomePage;
