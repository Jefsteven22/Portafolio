import { Swiper, SwiperSlide } from "swiper/react";
import "./style/SkillCard.css";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const SkillCard = () => {
  //! recuerda probar con las animaciones de las card el foco de la shadow para movimiento vertical y el cambio de scale aumentando la cantidad de sombra y blur
  //! recuerda arreglar las sombras de las card para mejorar el efecto de flotacion
  return (
    <section className="skillCard">
      <Swiper
        className="skillCard__carousel"
        modules={[Autoplay, EffectCoverflow, Pagination]}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 100,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1200}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
            effect: "slide",
            loop: false,
            autoplay: false,
          },
        }}
      >
        <SwiperSlide>
          <article className="skillCard__carousel-item-1">
            <div className="skillCard__more">
              <h2 className="skillCard__more-title">
                Tecnología más utilizada
              </h2>
              <h3>React.js</h3>
              <img
                className="logo-react"
                src="/img/logos/logo-react.png"
                alt="logo react"
              />
            </div>
            <div className="skillCard__less">
              <h2 className="skillCard__less-title">
                Otras herramientas usadas
              </h2>
              <ul className="skillCard__list-less">
                <li className="skillCard__list-lessItem">
                  <h3>Node.js</h3>
                  <img
                    className="logo-react"
                    src="/img/logos/logo-node.png"
                    alt="logo node"
                  />
                </li>
                <li className="skillCard__list-lessItem">
                  <h3>Angular</h3>
                  <img
                    className="logo-react"
                    src="/img/logos/logo-angular.png"
                    alt="logo angular"
                  />
                </li>
              </ul>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="skillCard__carousel-item-2">
            <div className="skillCard__lenMore">
              <h2 className="skillCard__lenMore-title">Lenguajes aprendidos</h2>
              <ul className="skillCard__lenMore-list">
                <li className="skillCard__lenMore-item">
                  <h3 className="skillCard__lenMore-itemTitle">JavaScript</h3>
                  <img
                    className="skillCard__lenMore-logo"
                    src="/img/logos/js.png"
                    alt="Logo JS"
                  />
                </li>
                <li className="skillCard__lenMore-item">
                  <h3 className="skillCard__lenMore-itemTitle">CSS3</h3>
                  <img
                    className="skillCard__lenMore-logo"
                    src="/img/logos/css.png"
                    alt="Logo CSS"
                  />
                </li>
                <li className="skillCard__lenMore-item">
                  <h3 className="skillCard__lenMore-itemTitle">HTML5</h3>
                  <img
                    className="skillCard__lenMore-logo logo-html"
                    src="/img/logos/html.png"
                    alt="Logo HTML"
                  />
                </li>
              </ul>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="skillCard__carousel-item-3">
            <h2 className="skillCard__hability-title">
              Habilidades Tecnicas en Desarrollo Web
            </h2>
            <ul className="skillCard__hability-list">
              <li className="skillCard__hability-item">
                <i className="bx-fw bx bx-sm bx-list-ul"></i> Formularios
              </li>
              <li className="skillCard__hability-item">
                <i className="bx-fw bx bx-sm bx-transfer-alt"></i> RESTful APIs
              </li>
              <li className="skillCard__hability-item">
                <i className="bx-fw bx bx-sm bx-code-alt"></i> Clean Code
              </li>
              <li className="skillCard__hability-item">
                <i className="bx-fw bx bx-sm bx-palette"></i> Diseño de UI/UX
              </li>
              <li className="skillCard__hability-item">
                <i className="bx-fw bx bx-sm bx-devices"></i> Diseño Responsivo
              </li>
              <li className="skillCard__hability-item">
                <i className="bx-fw bx bx-sm bxl-react"></i> Desarrollo con
                React
              </li>
            </ul>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SkillCard;
