import HomeCarousel from "./Home/HomeCarousel";
import "./styles/Home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      {window.innerWidth < 768 ? (
        <video
          className="home__video"
          src="/videos/home_mobile.mp4"
          autoPlay
          muted
          loop
        />
      ) : (
        <video
          className="home__video"
          src="/videos/home_pc.mp4"
          autoPlay
          muted
          loop
        />
      )}

      <article className="home__color">
        <HomeCarousel />
      </article>
    </section>
  );
};

export default Home;
