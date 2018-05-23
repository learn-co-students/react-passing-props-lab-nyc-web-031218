import React from 'react'
import FruitBasket from './FruitBasket'

export default class App extends React.Component{
  state = {
    fruit: [],
    currentFilter: null,
    filters: []
  }

  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }))
  }

  componentWillMount() {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = (event) => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket fruit={this.state.fruit} filters={this.state.filters} currentFilter={this.state.currentFilter} handleFilterChange={this.handleFilterChange} />
    )
  }
}
