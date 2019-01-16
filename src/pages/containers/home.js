import React, { Component } from 'react';
import HomeLayout from './../components/home-layout';
import Categories from './../../categories/categories';
import Related from './../../related/components/related';
import ModalContainer from './../../widgets/containers/modal';
import Modal from './../../widgets/components/modal';
import Errors from './../../errors/containers/error';
import VideoPlayer from './../../player/containers/video-player';

class Home extends Component{
  state = {
    modalActive: false,
  }

  handleCloseModal = () => {
    this.setState({
      modalActive: false,
    })
  }

  handleOpenModal = (media) => {
    this.setState({
      modalActive: true,
      media
    })
  }

  render(){
    return(
      <Errors>
        <HomeLayout>
          <Related />
          <Categories 
            categories={this.props.data.categories} 
            handleOpenModal={this.handleOpenModal}
          />
          {
            this.state.modalActive &&
              <ModalContainer >
                <Modal handleClick = {this.handleCloseModal}>
                  <VideoPlayer 
                    autoplay
                    src={this.state.media.src}
                    title={this.state.media.title}
                  />
                </Modal>
              </ModalContainer>
          }
        </HomeLayout>
      </Errors>

    )
  }
}

export default Home;
