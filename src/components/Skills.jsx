import SkillCard from "./Skills/SkillCard";
import "./styles/Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <article className="skills__container">
        <h2 className="skills__title">Habilidades</h2>
        <p className="skills__info">
          A continuación, algunas de las destrezas que he cultivado en mi
          experiencia como desarrollador Front-end.
        </p>
        <SkillCard />
      </article>
      <div className="skills__degTop" />
      <div className="skills__degBot" />
    </section>
  );
};

export default Skills;
