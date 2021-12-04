import './App.css';
import React from "react";
import CardList from './components/cardlist/CardList';
import { SearchBox } from './components/searchbox/SearchBox';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount = () => {
    let url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>MONSTERS ROLODEX</h1>
        <SearchBox placeholder={"search monsters"} handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div >
    );
  }
}

export default App;
