import React from 'react';
import logo from './../../images/logo.png';
import './related.css';

const Related = props => {
  return(
    <div className="Related">
      <div className="Related-logo">
        <img src={logo} alt="platzi video"/>
      </div>
    </div>
  )
}

export default Related;