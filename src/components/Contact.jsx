import { useForm } from "react-hook-form";
import "./styles/Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { nombre, apellido, correo, mensaje } = data;
    const subject = encodeURIComponent("Contacto desde el formulario web");
    const body = encodeURIComponent(`
      Nombre: ${nombre}
      Apellido: ${apellido}
      Correo: ${correo}
      Mensaje: ${mensaje}
    `);

    const mailtoLink = `mailto:tucorreo@ejemplo.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, "_blank");

    reset();
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Contáctame</h2>
      <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="contact__item">
          <input
            className="contact__input"
            placeholder="Nombre"
            type="text"
            {...register("nombre", { required: "El nombre es requerido" })}
          />
          {errors.nombre && (
            <span className="contact__error">{errors.nombre.message}</span>
          )}
        </div>
        <div className="contact__item">
          <input
            className="contact__input"
            placeholder="Apellido"
            type="text"
            {...register("apellido", { required: "El apellido es requerido" })}
          />
          {errors.apellido && (
            <span className="contact__error">{errors.apellido.message}</span>
          )}
        </div>
        <div className="contact__item">
          <input
            className="contact__input"
            placeholder="Correo"
            type="email"
            {...register("correo", {
              required: "El correo es requerido",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Introduce un correo válido",
              },
            })}
          />
          {errors.correo && (
            <span className="contact__error">{errors.correo.message}</span>
          )}
        </div>
        <div className="contact__item">
          <textarea
            className="contact__input contact__textArea"
            placeholder="Mensaje"
            {...register("mensaje", { required: "El mensaje es requerido" })}
          />
          {errors.mensaje && (
            <span className="contact__error">{errors.mensaje.message}</span>
          )}
        </div>
        <button className="contact__btn" type="submit">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;
