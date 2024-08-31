import React from 'react';

function ShopItem({ product }) {
  return (
    <div className="list-item">
      <img src={product.img} alt={product.name} />
      <div className="list-item-content">
        <h3 className="list-item-header">{product.name}</h3>
        <p className="list-item-color">{product.color}</p>
        <p className="list-item-price">${product.price}</p>
      </div>
      <button>Add to cart</button>
    </div>
  );
}

export default ShopItem;
