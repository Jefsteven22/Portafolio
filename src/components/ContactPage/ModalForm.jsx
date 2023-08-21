import './styles/ModalForm.css'



const ModalForm = ({ modal, setModal}) => {  

  const modalClose = () => {
    setModal(false)
  }
  
  return (
    <div className={`modal ${ modal ? '' : 'closedModal' }`} onClick={modalClose}>
      <div className="modal__container" onClick={e => e.stopPropagation()}>
        <h2 className="modal__title">Tu mensaje ha sido enviado con exito</h2>
        <button onClick={modalClose} className="modal__btn">Aceptar </button>
      </div>
    </div>
  )
}

export default ModalForm