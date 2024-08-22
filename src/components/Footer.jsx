import "./styles/Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <a href="/">
        <img
          className="footer__logo"
          src="/img/logo-red.png"
          alt="Logo Steven"
        />
      </a>
      <ul className="footer__list">
        <li className="footer__list-item">
          <a href="#home">Home</a>
        </li>
        <li className="footer__list-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="footer__list-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="footer__list-item">
          <a href="#userInfo">Personal details</a>
        </li>
        <li className="footer__list-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <span className="copyright">
        <i className="bx-fw bx bx-copyright"></i>
        2024 Steven Contreras. All rights reserved.
      </span>
    </section>
  );
};

export default Footer;
