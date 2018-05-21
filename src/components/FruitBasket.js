import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';


const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.handleChange} filt={props.filt}/>
      <FilteredFruitList
        filter={props.filter} item={props.item}/>
    </div>
  );
}

export default FruitBasket;
