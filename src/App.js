import React, { Component } from 'react';
import Dropdown from './components/Dropdown'
import List from './components/List'
import './App.css';

const Companies = ['Scan', 'Zaarly', 'Red Tricycle', 'Directly', 'Voxer', 'Famo.us', 'Calm']

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dropdown>
          Dicta doloremque ullam et. Officia quo eligendi molestias nobis aut. Earum minima qui harum ut alias saepe voluptate. Soluta impedit et in suscipit consequatur aut. A ut neque est.
        </Dropdown>

        <Dropdown>
          <List list={Companies}/>
        </Dropdown>

        <div style={{ position: 'absolute', bottom: '1rem', right: '1rem' }}>
          <Dropdown>
            <List list={Companies}/>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default App;
