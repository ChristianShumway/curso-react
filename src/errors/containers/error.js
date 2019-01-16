import React, { Component } from 'react';
import RegularError from './../components/regular-error';

class Error extends Component {
  state = {
    handleError : false,
  }
  componentDidCatch(error, info){
    this.setState({
      handleError : true,
    })
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, info);
    //alert(info)
  }

  render() {
    if (this.state.handleError){
      return (
        <div className='Error'>
          <RegularError />
        </div>
      );
    } else {
      // console.log(this.props.children);
      return this.props.children;
    }
  }
}

export default Error;

