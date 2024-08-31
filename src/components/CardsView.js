import React from 'react';
import '../App.css';

export default function CardsView({ cards }) {
  return (
    <div className="cards-view">
      {cards.map((card, index) => (
        <div key={index} className="shop-card">
          <div className="card-header">
            <h3>{card.name}</h3>
            <p>{card.color}</p>
          </div>
          <img src={card.img} alt={card.name} />
          <div className="card-footer">
            <span className="price">${card.price}</span>
            <button>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
