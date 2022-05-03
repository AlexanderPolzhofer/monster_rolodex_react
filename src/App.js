import './App.css';
import { useState, useEffect } from "react";
import CardList from './components/cardlist/CardList';
import { SearchBox } from './components/searchbox/SearchBox';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  }

  const fetchData = () => {
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then(response => response.json())
      .then(data => setMonsters(data))
  }

  useEffect(() => {
    fetchData();
  }, [])

  const filteredMonsters = monsters.filter(
    monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>MONSTERS ROLODEX</h1>
      <SearchBox placeholder={"search monsters"} handleChange={handleChange} />
      <CardList monsters={filteredMonsters} />
    </div >
  )

}

export default App;
