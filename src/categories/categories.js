import React from 'react';
import Category from './category';
import './categories.css';
import SearchContainer from './../widgets/containers/search';

const Categories = props => {
    //console.log(props.data.categories);
    const {categories} = props;
  return(
    <div className="Categories">
      <SearchContainer />
      {
        categories.map( category => {
          //console.log(category);
          return (
            <Category 
              key={category.id}
              handleOpenModal={props.handleOpenModal} 
              {...category} 
            />
          )
        })
      }
    </div>
  )
}

export default Categories;