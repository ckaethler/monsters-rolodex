import React, { Component } from 'react';
import { CardList } from './components/CardList/CardList';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'asc1'
        },
        {
          name: 'Dracula',
          id: 'asr2',
        },
        {
          name: 'Zombie',
          id: 'asr3'
        }
      ]
    }
  };

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    return(
      <div className="App">
        <CardList name='Cat'>
          {this.state.monsters.map((monster, index) => {
              return <h1 key={monster.id}>{monster.name}</h1>
          })}
        </CardList>
      </div>
    );
  }
}

export default App;
