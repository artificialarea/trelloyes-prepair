import React from "react";
import Card from "./Card";
import "./List.css";


class List extends React.Component {

  static defaultProps = {
    key: '',
    header: '',
    cards: [],
  };

  render() {
    return (
      <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">
          {/* <Card /> */}
          {this.props.cards.map((card) =>  
            <Card 
              key={card.id}
              title={card.title}
              content={card.content}
              // passing callback props down
              onDeleteCard={this.props.onDeleteCard}
            />
          )}
          <button 
            onClick={() => this.props.onAddRandomCard(this.props)}
            type="button" 
            className="List-add-button"
          >
            + Add Random Card
          </button>
        </div>
      </section>
    );
  }
}

export default List;