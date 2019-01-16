import React from 'react';
import Playlist from './../playlist/components/playlist';
import './category.css';

const Category = props => {
  const {title, description, playlist} = props;
  return(
    <div className="Category">
      <p className='Category-description'>{description}</p>
      <h3 className='Category-title'>{title}</h3>
      <Playlist 
        playlist={playlist}
        handleOpenModal={props.handleOpenModal} 
      />
    </div>
  )
}

export default Category;