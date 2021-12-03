import './App.css';
import React from "react";
import CardList from './components/cardlist/CardList';

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

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>MONSTER ROLODEX</h1>
        <div className="input-field">
          <input type="search" placeholder="search monsters" onChange={e => this.setState({ searchField: e.target.value })} />
        </div>
        <CardList monsters={filteredMonsters} />
      </div >
    );
  }

}

export default App;
