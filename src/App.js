import React, { Component } from 'react';
import List from './composition/List';
import './App.css';


class App extends React.Component {

  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const { store } = this.props;   
    return (
      <main class="App">
        <header class="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div class="App-list">
          {/* <List /> */}
          {store.lists.map(list => 
            <List 
              key={list.id}
              header={list.header}
              cards = {list.cardIds.map(id => store.allCards[id])}
            />
          )}
        </div>
      </main>
    );
  };
}

export default App;