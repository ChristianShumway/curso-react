import React, { Component } from 'react';
import './video.css';

class Video extends Component {
  
  componentWillReceiveProps(nextProps){
    if(this.props.pause !== nextProps.pause){
      this.tooglePlay();
    }
  }

  tooglePlay = () => {
    if(this.props.pause){
      this.video.play()
    } else{
      this.video.pause()
    }
  }

  setRef = element => {
    this.video = element;
  }

  render() {
    
    const { 
      handleLoadedMetadata, 
      handleTimeUpdate, 
      handleSeeked, 
      handleSeeking 
    } = this.props;

    return (
      <div className="Video">
        <video 
          src={this.props.src}
          autoPlay={this.props.autoplay}
          ref = {this.setRef}
          onLoadedMetadata = {handleLoadedMetadata} // duración del video
          onTimeUpdate = {handleTimeUpdate} //propiedad que nos da el tiempo que se esta transcurriendo
          onSeeking = {handleSeeking} //moviendo
          onSeeked = {handleSeeked} //ya termino de hacer el movimiento
        />
      </div>
    );
  }
}

export default Video;