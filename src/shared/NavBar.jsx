import { Link } from "react-router-dom";
import "./styles/NavBar.css";
import { useSelector } from "react-redux";
import { setMenuG } from "../store/slices/menu.slice";
import { useDispatch } from "react-redux";
import DarkMode from "../components/NavBar/DarkMode";
import { useEffect, useState } from "react";
import GridMenu from "../components/NavBar/GridMenu";
import { useTranslation } from "react-i18next";
import i18next from "../services/config/translation.config";
import { setIsLoadingG } from "../store/slices/loading.slice";

const NavBar = () => {
  const [isSpanish, setIsSpanish] = useState(true);
  const menu = useSelector((reducer) => reducer.menu);
  const darkMode = useSelector((reducer) => reducer.darkMode);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isLanguage = localStorage.getItem("language");

  const handleClose = () => {
    dispatch(setMenuG(false));
  };

  useEffect(() => {
    if (isLanguage === "false") {
      i18next.changeLanguage("en");
      setIsSpanish(false);
    } else {
      i18next.changeLanguage("es");
      setIsSpanish(true);
    }
  }, [isLanguage]);

  const handleLanguage = () => {
    if (isSpanish) {
      setIsSpanish(false);
      dispatch(setIsLoadingG(true));
      localStorage.setItem("language", "false");
      i18next.changeLanguage("en");
      handleClose();
    } else {
      setIsSpanish(true);
      dispatch(setIsLoadingG(true));
      localStorage.setItem("language", "true");
      i18next.changeLanguage("es");
      handleClose();
    }
  };

  return (
    <nav className="navBar">
      <div className={`navBar__container ${menu ? "MenuOn" : ""}`}>
        <picture className="navBar__img">
          <Link to={"/"}>
            <img
              className="navBar__logo"
              src={
                darkMode
                  ? "/img/logo-steven.png"
                  : "/img/logo-steven-oscuro.png"
              }
              alt="Logo de Marca Personal"
            />
          </Link>
        </picture>
        <ul className="navBar__list">
          <li className="navBar__types">
            <span className="navBar__value" onClick={handleClose}>
              <Link to="/">
                <i className="navBar__icon bx-sm bx-fw bx bx-home"></i>
                {t("navBar.home")}
              </Link>
            </span>
          </li>
          <li className="navBar__types">
            <span className="navBar__value" onClick={handleClose}>
              <Link to="/about-us">
                <i className="navBar__icon bx-sm bx-fw  bx bx-user"></i>
                {t("navBar.about")}
              </Link>
            </span>
          </li>
          <li className="navBar__types">
            <span className="navBar__value" onClick={handleClose}>
              <Link to="/briefcase">
                <i className="navBar__icon bx-sm bx-fw bx bx-briefcase"></i>
                {t("navBar.projects")}
              </Link>
            </span>
          </li>
          <li className="navBar__types">
            <span className="navBar__value" onClick={handleClose}>
              <Link to="/skill">
                <i className="navBar__icon bx-sm bx-fw bx bx-shield-plus"></i>
                {t("navBar.skills")}
              </Link>
            </span>
          </li>
          <li className="navBar__types">
            <span className="navBar__value" onClick={handleClose}>
              <Link to="/contact">
                <i className="navBar__icon bx-sm bx-fw bx bx-envelope"></i>
                {t("navBar.contact")}
              </Link>
            </span>
          </li>
          <li className="navBar__types">
            <span className="navBar__value" onClick={handleClose}>
              <a href="/documents/HF_CV_Steven_Contreras_Frontend.pdf" download={""}>
                <i className="navBar__icon bx-sm bx-fw bx bx-cloud-download"></i>
                {t("navBar.downloadCv")}
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div className="navBar__container-icons">
        <picture onClick={handleClose} className="navBar__iso">
          <Link to="/">
            <img
              className="navBar__iso-img"
              src={
                darkMode
                  ? "/img/logo-steven.png"
                  : "/img/logo-steven-oscuro.png"
              }
              alt="Logo para telefonos"
            />
          </Link>
        </picture>
        <div className="navBar__grid">
          <GridMenu />
        </div>
        <div className="navBar__darkMode">
          <DarkMode />
        </div>
        <button
          onClick={handleLanguage}
          className="navBar__icon-mobile svg-flag"
        >
          <img
            className="navBar__img-Languaje"
            src={
              darkMode && isSpanish
                ? "/img/icono-idioma-2.png"
                : darkMode === false && isSpanish
                ? "/img/icono-idioma-1.png"
                : "/img/icono-idioma-3.png"
            }
            alt="Icono de lenguaje"
          />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
