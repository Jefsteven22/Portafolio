import "./styles/UserInfo.css";

const UserInfo = () => {
  return (
    <section className="userInfo" id="userInfo">
      <h2 className="userInfo__title">Detalles Personales</h2>

      <picture className="userInfo__container">
        <img
          className="userInfo__img"
          src="/img/fotoUser.jpg"
          alt="Foto del Programado"
        />
      </picture>

      <div className="userInfo__containerInfo">
        <span className="userInfo__containerInfo-greet">Hola !</span>
        <span className="userInfo__containerInfo-greet">
          Soy Steven Contreras
        </span>
        <span className="userInfo__containerInfo-degree">
          Desarrollador Web Frontend
        </span>
        <ul className="userInfo__list">
          <li className="userInfo__list-item">
            Descripción en una palabra: <span>Enfocado</span>
          </li>
          <li className="userInfo__list-item">
            Disponibilidad para Viajar: <span>Si</span>
          </li>
          <li className="userInfo__list-item">
            Mayor Virtud: <span>Sinceridad</span>
          </li>
        </ul>
      </div>
      <div className="userInfo__containerSocial">
        <h2 className="userInfo__title">Encuéntrame en</h2>
        <ul className="userInfo__listSocial">
          <li className="userInfo__listSocial-item">
            <a href="https://www.linkedin.com/in/jefsteven22/" target="_blank">
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </li>
          <li className="userInfo__listSocial-item">
            <a href="https://github.com/Jefsteven22" target="_blank">
              <i className="bx bxl-github"></i>
            </a>
          </li>
          <li className="userInfo__listSocial-item">
            <a href="https://wa.me/+593987855595" target="_blank">
              <i className="bx bxl-whatsapp"></i>
            </a>
          </li>
          <li className="userInfo__listSocial-item">
            <a
              href="mailto:jsfsteven22@gmail.com?subject=Estoy%20interesado%20en%20tus%20servicios%20como%20desarrollador&body=Hola%20Steven%20Contreras%2C%20mi%20nombre%20es%20--Insertar%20nombre--%20soy%20--insertar%20puesto%20de%20trabajo--%20en%20la%20empresa%20--insertar%20nombre%20de%20la%20empresa--.%20Nos%20gustar%C3%ADa%20contactarnos%20contigo.%0APor%20favor%20env%C3%ADanos%20tu%20CV%20a%20este%20contacto%3A%20--insertar%20contacto--"
              target="_blank"
            >
              <i className="bx bxl-gmail"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default UserInfo;
