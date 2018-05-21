import React from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentDidMount(){
    this.updateItems();
    this.updateFilters();
  }

  updateItems = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  updateFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = (event) => {
console.log(event.target.value)
    this.setState({ currentFilter: event.target.value });
  }

  render(){
    console.log(this.state.fruit)

    return(
      <div>
        <Filter
          handleChange={this.handleFilterChange}
          filters={this.state.filters}
          />

        <FruitBasket
          currentFilter={this.state.currentFilter}
          filters={this.state.filters}
          fruit={this.state.fruit}
          />
      </div>
    )}

}

export default App;
