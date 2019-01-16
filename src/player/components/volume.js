import React from 'react';
import IconVolume from './../../icons/components/volume';
import IconMute from './../../icons/components/mute';
import './volume.css';

const Volume = props => (
  <button 
    className="Volume"
    onClick={props.handleClickVolume}
  >
    {
      props.volumeState ?
        <IconVolume 
          size={20}
          color='white'
        />
      :
        <IconMute 
          size={20}
          color='white'
        />
    }
    <div className="Volume-range">
      <input 
        type="range"
        min={0}
        max={1}
        value={props.valueVolume}
        step={0.05}
        onChange={props.handleVolumeChange}
      />
    </div>
  </button>
)

export default Volume;