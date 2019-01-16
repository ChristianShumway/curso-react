import React from 'react';
import './search.css';

const Search = props => (
  <form className="Search" onSubmit={props.handleSubmit}>
    <input 
      ref= {props.setRef}
      type="text"
      placeholder="Busqueda..."
      className="Search-input"
      value={props.inputValue.replace(' ', '-')}
      onChange = {props.handleOnchange}
    />
  </form>
)

export default Search;