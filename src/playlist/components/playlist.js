import React, { Component } from 'react';
import Media from './media';
import './playlist.css';

const Playlist = props => {
  const {playlist} = props;
  return(
    <div className="playlist">
      {
        playlist.map( item => {
            console.log(props.handleOpenModal);
          return (
            <Media 
              {...item} 
              key={item.id}
              openModal={props.handleOpenModal} 
            />
          )
        })
      }
    </div>     
  )
}



export default Playlist;