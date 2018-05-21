import React from 'react';

import FruitBasket from './FruitBasket';


class App extends React.Component {
  state = {
    filters: [],
    fruit: [],
    currentFilter: null
  }


  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }


  render(){
    return(
      <FruitBasket handleChange={this.handleFilterChange} filter={this.state.currentFilter} filt={this.state.filters} item={this.state.fruit}/>
    )
  }
}

export default App;
