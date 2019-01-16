import React, { Component } from 'react';
import Search from './../components/search';

class SearchContainer extends Component{
  
  state = {
    inputValue : '',
  } 

  handleOnchangeInputSearch = event =>{
    this.setState({
      inputValue : event.target.value,
    })
  }
  
  handleSubmitForm = event => {
    event.preventDefault();
    console.log(this.input.value, 'submit');
  }

  setInputRef = element => {
    this.input = element;
  }

  render(){
    return(
      <Search 
        handleSubmit = {this.handleSubmitForm}
        setRef = {this.setInputRef}
        inputValue = {this.state.inputValue}
        handleOnchange = {this.handleOnchangeInputSearch}
      />
    )
  }
}

export default SearchContainer;
