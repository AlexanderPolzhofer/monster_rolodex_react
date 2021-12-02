import './App.css';
import React from "react";
import CardList from './components/cardlist/CardList';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }

  componentDidMount = () => {
    let url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }))
  }

  render() {
    return (
      <div className="App">
        <h1>MONSTER ROLODEX</h1>
        <CardList monsters={this.state.monsters} />
      </div >
    );
  }

}

export default App;
