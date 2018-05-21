import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
    return (
      <div className="fruit-basket">
        <Filter fetchFilters={props.fetchFilters} handleChange={props.handleFilterChange} filters={props.filters}/>
        <FilteredFruitList
          filter={props.selectedFilter} fruits={props.fruits} items={props.items} />
      </div>
    );
}
FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: undefined,

}
export default FruitBasket;
