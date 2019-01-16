import React from 'react';
import imageError from './../../images/error.jpg';
import './regular-error.css';

const RegularError = props => {
  return (
    <div className="Regular-Error">
      <img src={imageError} alt="error"/>
      <h1 className="Regular-Error-msj">HA OCURRIDO UN ERROR</h1>
    </div>
  )
}

export default RegularError;  