import React, { Component } from 'react';
import VideoPlayerLayout from './../components/video-player-layout';
import Video from './../components/video';
import Title from './../components/title';
import PlayPause from './../components/play-pause';
import Timer from './../components/timer';
import Controls from './../components/video-player-controls';
import {FORMATEANDOTIEMPO, FULLSCREEN} from './../components/constants-player';
import ProgressBar from './../components/progress-bar';
import Spinner from './../components/spinner';
import Volume from './../components/volume';
import FullScreen from './../components/full-screen';

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    levelVolume: 1,
    activeVolume: true,
    lastValue: null,
  }
  TooglePlay = event =>{
    this.setState({
      pause: !this.state.pause
    })
  }

  componentDidMount(){
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: this.video.duration,
    })
  }

  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.video.currentTime,
    })
  }

  handleProgressBar = event => {
    this.video.currentTime = event.target.value;
  }
  
  handleSeeking = () => {
    this.setState({
      loading: true
    })
  }
  
  handleSeeked = () => {
    this.setState({
      loading: false
    })
  }

  handleVolumeChange = event => {
    console.log(event.target.value);
    this.video.volume = event.target.value;
    this.setState ({
      levelVolume: this.video.volume
    })
  }

  // handleClickVolume = () => {
  //   this.video.volume = this.video.volume > 0 ? 0 : 1
  //   this.setState ({
  //     levelVolume : this.video.volume
  //   })
  // }



  // handleClickVolume = () => {
  //   const lastValue = this.video.volume;
  //   this.setState ({lastValue})
  //   if (this.video.volume !== 0) {
  //     this.video.volume = 0
  //     this.setState ({
  //       levelVolume: this.video.volume,
  //       activeVolume: false,
  //     })
  //   } else {
  //     this.video.volume = this.state.lastValue
  //     this.setState ({
  //       levelVolume: this.video.volume,
  //       activeVolume: true
  //     })
  //   }
  // }

  handleFullScreenClick = () => {
    if(!this.player.webkitRequestFullScreen){
      this.player.requestFullscreen();
    }
  }

  setRefs = element => {
    this.player = element;
  }

  handleToggleFUllScreen = event => {
    !FULLSCREEN.isFullScreen() ? FULLSCREEN.requestFullScreen(this.player) : FULLSCREEN.exitFullScreen()
  }

  render() {
    console.log(this.state.levelVolume);
    const {duration, pause, currentTime, loading, activeVolume, levelVolume} = this.state;
    return (
      <div>
        <VideoPlayerLayout
          setRefs = {this.setRefs}
        >
         
          <Title 
            titulo={this.props.title}
          />

          <Controls>
            <PlayPause 
              pause = {pause}
              handleClick={this.TooglePlay}
            />
            <Timer
              duration = {FORMATEANDOTIEMPO(duration)}
              currentTime = {FORMATEANDOTIEMPO(currentTime)}
            />
            <ProgressBar
               duration = {duration}
               currentTime = {currentTime}
               changeProgressBar = {this.handleProgressBar}
            />
            <Volume 
              handleVolumeChange = {this.handleVolumeChange}
              handleClickVolume = {this.handleClickVolume}
              volumeState = {activeVolume}
              valueVolume = {levelVolume}
            />
            <FullScreen
              handleFullScreenClick={this.handleToggleFUllScreen} 
            />
          </Controls>
          <Spinner
            active = {loading}
          />
          <Video
            src= {this.props.src} 
            autoplay = {this.props.autoplay}
            pause = {pause}
            handleLoadedMetadata = {this.handleLoadedMetadata}
            handleTimeUpdate = {this.handleTimeUpdate}
            handleSeeking = {this.handleSeeking}
            handleSeeked = {this.handleSeeked}
          />  

        </VideoPlayerLayout>
      </div>
    );
  }
}

export default VideoPlayer;