import React, { PureComponent } from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends PureComponent{
 
  handleClick = event => {
    //console.log(this.props);
    //regresamos las propiedades del media a home
    this.props.openModal(this.props)
  }

  render(){
    const { title, author, cover } = this.props;
    return(
      <div className='Media' onClick={this.handleClick}>
        <div className='Media-cover'>
          <img 
            className='Media-image'
            src={cover}
            alt='imagen media'
            width={260}
            height={160}
          />
          <h3 className='Media-title'>{title}</h3>
          <p className='Media-author '>{author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  title : PropTypes.string.isRequired,
  author : PropTypes.string.isRequired,
  cover : PropTypes.string.isRequired,
  type : PropTypes.oneOf(['video','audio']),
}

export default Media;