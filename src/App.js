import React, { Component } from 'react';
import List from './composition/List';
import STORE from './STORE';  // aka 'state.store', see lines: 35—37
import './App.css';

// fn provided
const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}
// ^^^^ alternatively, could add a key/value 'counter' in the store object 
// and setState of counter: counter += 1 each time render new card.

// fn provided
// to remove key value pair from an object
// v1 /////////////////////////////////////////
// function omit(obj, keyToOmit) {
//   let {[keyToOmit]: _, ...rest} = obj;
//   return rest;
// }
// v2 /////////////////////////////////////////
function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit ? newObj : {...newObj, [key]:value}, {}
  );
}


class App extends Component {
  
  state = {
    store: STORE,
  };

  handleDeleteCard = (cardId) => {
    // console.log('handleDeleteCard called', { cardId })
    const { lists, allCards } = this.state.store;
    
    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omit(allCards, cardId);  // WHY?

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards,
      }
    })
  };

  handleAddCard = (listId) => {
    // console.log('handleAddCard called', { listId })
    const newCard = newRandomCard()

    const newLists = this.state.store.lists.map(list => {
      
      if(list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  };

  render() {
    const { store } = this.state
    // console.log(store.lists);

    // NOTE: 'key' in <List key={list.id} /> is problematic special prop, thus requiring the addition of <List key={list.id} id={list.id} />
    // see: https://reactjs.org/warnings/special-props.html
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map(list => (
            <List 
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onClickDelete={this.handleDeleteCard}
              onClickAdd={this.handleAddCard} 
            />
          ))}
        </div>
      </main>
    );
  };
}

export default App;