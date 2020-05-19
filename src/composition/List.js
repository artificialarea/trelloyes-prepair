import React from 'react';
import Card from './Card';
import './List.css';


export default function List(props) {

  // NOTE: 'key' in <Card key={card.id} /> is problematic special prop, thus requiring the addition of <Card key={card.id} id={card.id} />
  // see: https://reactjs.org/warnings/special-props.html
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map((card) =>  
          <Card 
            key={card.id} 
            id={card.id}    
            title={card.title}
            content={card.content}
            onClickDelete={props.onClickDelete}
          />
        )}
        <button 
          onClick={() => props.onClickAdd(props.id)}
          type="button" 
          className="List-add-button"
        >
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

List.defaultProps = {
  onClickAdd: () => {},
}