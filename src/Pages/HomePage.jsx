import "./styles/HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import { setMenuG } from "../store/slices/menu.slice";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const HomePage = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((reducer) => reducer.darkMode);
  const text = ["React.js", "HTML5", "CSS3", "JavaScript"];
  const { t } = useTranslation();
  
  const handleClose = () => {
    dispatch(setMenuG(false));
  };

  return (
    <article className="home" onClick={handleClose}>
      <div className="home__container">
        <img
          className="home__logo"
          src={darkMode ? "/img/logo-st.png" : "/img/logo-st-os.png"}
          alt="Logo"
        />
      </div>
      <h2 className="home__titule">{t("homePage.title")}</h2>
      <div className="home__animation">
        <h2 className="home__animation-title notraslate">
          {t('homePage.skills')} {""}
          <span
            className="notraslate"
            style={{
              color: `${darkMode ? "#aaead9" : "#5E9FA5"}`,
              fontWeight: "600",
            }}
          >
            <Typewriter
              words={text}
              loop={0}
              cursor={true}
              cursorStyle="|"
              deleteSpeed={70}
              cursorColor={darkMode ? "#5E9FA5" : "#021301"}
            />{" "}
          </span>
        </h2>
      </div>
      <div className="home__phrase">
        <p className="home__cita">
          "{t('homePage.phrase')}".
        </p>
        <p className="home__author">Elon Musk</p>
      </div>
      <button className="home__btn">
        <Link to={"/contact"}>{t('homePage.btn')}</Link>
      </button>
    </article>
  );
};

export default HomePage;
