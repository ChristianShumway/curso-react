import React from 'react';
import './modal.css';

const Modal = props => {
  return(
    <div className="Modal">
      <div className="Modal-close" onClick={props.handleClick}></div>
      {props.children}
      <div className="Modal-button">
        <button
          onClick={props.handleClick}
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default Modal;