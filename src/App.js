import React from 'react';
import List from './composition/List';
import './App.css';


class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      lists: [
        {
          id: '1',
          header: 'First list',
          cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
        },
        {
          id: '2',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '3',
          header: 'Third list',
          cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
        },
        {
          id: '4',
          header: 'Fourth list',
          cardIds: [ 'l', 'm' ],
        },
      ],
      allCards: {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
        'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
        'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
        'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
        'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
        'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
        'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
        'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
        'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
        'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
        'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
        'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
      },
    }
    console.log(this.state);
  }
  
  static defaultProps = {
    state: {
      lists: [],
      allCards: {},
    }
  };

  handleDeleteCard = (card) => {
    console.log('handleDeleteCard called', { card })
  }

  handleAddRandomCard = (list) => {
    console.log('handleAddRandomCard called', { list })
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {/* <List /> */}
          {this.state.lists.map(list => 
            <List 
              key={list.id} // why doesn't key display in console? 
              id={list.id}  // ^^^^^^^^^ ergo 
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              // callback props 
              onDeleteCard={this.handleDeleteCard}
              onAddRandomCard={this.handleAddRandomCard} 
            />
          )}
        </div>
      </main>
    );
  };
}

export default App;