import React from 'react';
import './Card.css';

function Card(props) {
  return (
  <div className="Card" id={props.id}>
    <button 
      onClick={() => props.onDeleteCard(props)}
      type="button"
    >
      delete
    </button>
  <h3>{props.title}</h3>
  <p>{props.content}</p>
  </div>
  );
}

export default Card