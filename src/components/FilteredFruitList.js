import React from 'react';


const FilteredFruitList = (props) => {

    const list = !props.filter || props.filter === 'all' ? props.item : props.item.filter(i => i.fruit_type === props.filter);

    return (
      <ul className="fruit-list">
        {list.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    );

}

export default FilteredFruitList;
