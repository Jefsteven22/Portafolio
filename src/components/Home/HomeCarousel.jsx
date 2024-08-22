import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "./style/HomeCarousel.css";
import "swiper/css";
import "swiper/css/pagination";

const HomeCarousel = () => {
  return (
    <div className="homeCarousel">
      <Swiper
        className="homeCarousel__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide>
          <div className="homeCarousel__item">
            <h1 className="homeCarousel__item-title">
              Desarrollador web Front-end
            </h1>
            <p className="homeCarousel__item-phrase">
              Soy un apasionado de la programación, con experiencia en la
              creación de aplicaciones web.
              <br />
              <br />
              <br />
              Estoy especializado en tecnologias como HTML5, CSS3, JavaScript y
              en Frameworks como React.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homeCarousel__item">
            <h2 className="homeCarousel__item-title">Objetivo General</h2>
            <p className="homeCarousel__item-phrase">
              Mi objetivo principal es crear soluciones innovadoras que mejoren
              la experiencia del usuario y optimicen los procesos empresariales
              <br />
              <br />
              <br />
              Trabajar en proyectos desafiantes que me permitan utilizar mis
              conocimientos para sastifacer la experiencia del usuario.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homeCarousel__item">
            <h2 className="homeCarousel__item-title">Habilidades Blandas</h2>
            <ul className="homeCarousel__list">
              <li className="homeCarousel__list-item">
                Formación autodidacta continua
              </li>
              <li className="homeCarousel__list-item">
                Resolución de problemas
              </li>
              <li className="homeCarousel__list-item">Exigencia autocrítica</li>
              <li className="homeCarousel__list-item">Trabajo bajo presión</li>
              <li className="homeCarousel__list-item">Trabajo en equipo</li>
              <li className="homeCarousel__list-item">Manejo de estrés</li>
              <li className="homeCarousel__list-item">Liderazgo</li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homeCarousel__item">
            <p className="homeCarousel__item-phrase references">
              "Si algo es lo suficientemente importante, incluso si las
              probabilidades están en tu contra, debes seguir intentándolo".
              <br />
              <br />
              <br />
              <span className="by">Elon Musk</span>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
