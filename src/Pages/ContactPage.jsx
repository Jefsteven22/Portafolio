import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles/ContactPage.css";
import ModalForm from "../components/ContactPage/ModalForm";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const {t} = useTranslation()
  const [modal, setModal] = useState(false)
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();   
    setModal(false)
    emailjs
      .sendForm(
        "service_jgwf139",
        "template_wqbnq6o",
        form.current,
        "uBY0SFLEXP0xgHA-6"
      )
      .then(
        (result) => {
          setModal(true);
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
            <a className="contact__link" target="_blank" href="https://www.linkedin.com/in/jefsteven22/">{t('ContactPage.contact.linkedin.link')}</a>
            <span className="contact__value-info">https://www.linkedin.com/in/jefsteven22/</span>
          </li>
          <li className="contact__value">
            <span className="contact__value-title">{t('ContactPage.contact.email.title')}</span>
            <span className="contact__value-info">jefsteven22@gmail.com</span>
          </li>
          <li className="contact__value">
            <span className="contact__value-title">Telegram</span>
            <span className="contact__value-info">+593 98 785 5595</span>
          </li>
          <li className="contact__value">
            <span className="contact__value-title">WhatsApp</span>
            <a className="contact__link" target="_blank" href="https://wa.me/593987855595">{t('ContactPage.contact.whatsapp.link')}</a>
            <span className="contact__value-info">+593 98 785 5595</span>
          </li>
        </ul>
      </div>
      <form className="field" ref={form} onSubmit={sendEmail}>
        <h2 className="form__title">{t('ContactPage.form.title')}</h2>
        <label className="field__label">{t('ContactPage.form.name.title')}</label>
        <input className="field__input"
          required
          placeholder={t('ContactPage.form.name.imput')}
          type="text"
          name="user_name"
        />
        <label className="field__label">{t('ContactPage.form.email.title')}</label>
        <input className="field__input"
          required
          placeholder={t('ContactPage.form.email.imput')}
          type="email"
          name="user_email"
        />
        <label className="field__label">{t('ContactPage.form.sms.title')}</label>
        <textarea placeholder={t('ContactPage.form.sms.imput')} required rows={5} cols={15} className="field__comment" name="message" autoComplete="off" />
        <button className="contact__btn">{t('ContactPage.form.btn')}</button>
      </form>
      <ModalForm 
        modal={modal}
        setModal={setModal}
      />
    </div>
  );
};

export default ContactPage;
