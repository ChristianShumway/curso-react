import React from 'react';
import FullScreenIcon from './../../icons/components/full-screen';
import './full-screen.css';

const FullScreen = props => (
  <div 
    className="FullScreen"
    onClick={props.handleFullScreenClick}
  >
    <FullScreenIcon 
      color='white'
      size={18}
    />
  </div>
)

export default FullScreen;