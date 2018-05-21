import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {

state = {
  filters: [],
  items: [],
  selectedFilter: null,
  fruit: [],
  currentFilter: null
}
  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
      fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));
  }
  fetchFilters = () => {

  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  render() {
    return (
      <div>
        <FruitBasket fetchFilters={this.fetchFilters} handleFilterChange={this.handleFilterChange} items={this.state.items} selectedFilter={this.state.selectedFilter} filters={this.state.filters}/>
      </div>
    )
  }
}

export default App;
