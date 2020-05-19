import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
  <div className="Card">
    <button 
      onClick={() => props.onClickDelete(props.id)}
      type="button"
    >
      delete
    </button>
  <h3>{props.title}</h3>
  <p>{props.content}</p>
  </div>
  );
}

// HUH? propTypes. 
// Shouldn't it be Card.defaultProps?
Card.propTypes = {
  onClickDelete: () => {},
}
// see: https://reactjs.org/docs/typechecking-with-proptypes.html
// https://medium.com/@matanbobi/react-defaultprops-is-dying-whos-the-contender-443c19d9e7f1

// Card.defaultProps = {
//   onClickDelete: () => {},
// }