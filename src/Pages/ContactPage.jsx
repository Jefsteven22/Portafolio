import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./styles/ContactPage.css";
import ModalForm from "../components/ContactPage/ModalForm";

const ContactPage = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();   

    emailjs
      .sendForm(
        "service_jgwf139",
        "template_wqbnq6o",
        form.current,
        "uBY0SFLEXP0xgHA-6"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact__container">
        <ul className="contact__list">
          <li className="contact__value">
            <span className="contact__value-title">Linkedin</span>
            <a className="contact__link" target="_blank" href="https://www.linkedin.com/in/jefsteven22/">Ir con un Click</a>
            <span className="contact__value-info">https://www.linkedin.com/in/jefsteven22/</span>
          </li>
          <li className="contact__value">
            <span className="contact__value-title">Correo</span>
            <span className="contact__value-info">jefsteven22@gmail.com</span>
          </li>
          <li className="contact__value">
            <span className="contact__value-title">Telegram</span>
            <span className="contact__value-info">+593 98 785 5595</span>
          </li>
          <li className="contact__value">
            <span className="contact__value-title">WhatsApp</span>
            <a className="contact__link" target="_blank" href="https://wa.me/593987855595">Ir con un Click</a>
            <span className="contact__value-info">+593 98 785 5595</span>
          </li>
        </ul>
      </div>
      <form className="field" ref={form} onSubmit={sendEmail}>
        <label className="field__label">Nombre Completo</label>
        <input className="field__input"
          required
          placeholder="Nombre y Apellido"
          type="text"
          name="user_name"
        />
        <label className="field__label">Email</label>
        <input className="field__input"
          required
          placeholder="correo@mail.com"
          type="email"
          name="user_email"
        />
        <label className="field__label">Mensaje</label>
        <textarea placeholder="Escribe tu mensaje" required rows={5} cols={15} className="field__comment" name="message" autoComplete="off" />
        <button className="contact__btn">Enviar</button>
      </form>
      <ModalForm />
    </div>
  );
};

export default ContactPage;
