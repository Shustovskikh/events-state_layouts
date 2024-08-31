import React from 'react';
import ShopItem from './ShopItem';

function ListView({ items }) {
  return (
    <div className="list-view">
      {items.map((product, index) => (
        <ShopItem product={product} key={index} />
      ))}
    </div>
  );
}

export default ListView;
