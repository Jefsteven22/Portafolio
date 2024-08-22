import { useState } from "react";
import MenuHamb from "./Header/MenuHamb";
import "./styles/Header.css";

const Header = () => {
  const [isOn, setIsOn] = useState(false);

  const handleOpen = () => {
    setIsOn(false);
  };
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 0) {
      header.classList.add("header--sticky");
    } else {
      header.classList.remove("header--sticky");
    }
  });

  return (
    <section className="header">
      <a href="/">
        <img
          className="header__logo"
          src="/img/iso-red.png"
          alt="Logo Steven"
        />
      </a>

      <nav className={`header__nav ${isOn ? "nav__on" : ""}`}>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" onClick={handleOpen}>
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" onClick={handleOpen}>
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="#projects" onClick={handleOpen}>
              Projects
            </a>
          </li>
          <li className="nav__item">
            <a href="#userInfo" onClick={handleOpen}>
              Personal details
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" onClick={handleOpen}>
              Contact
            </a>
          </li>
          <li className="nav__item">
            <a
              href="/docs/HF_CV_Steven_Contreras_Frontend.pdf"
              download={""}
              onClick={handleOpen}
            >
              Descargar CV
            </a>
          </li>
        </ul>
      </nav>
      <MenuHamb setIsOn={setIsOn} isOn={isOn} />
    </section>
  );
};

export default Header;
