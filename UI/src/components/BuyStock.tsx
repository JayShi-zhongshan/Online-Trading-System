import React, { useState } from 'react';
import { buyStock } from '../services/stockService';

const BuyStock: React.FC = () => {
  const [stockId, setStockId] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleBuy = async (e: React.FormEvent) => {
    e.preventDefault();
    await buyStock(stockId, quantity);
    alert('Stock purchased successfully');
  };

  return (
    <form onSubmit={handleBuy}>
      <h2>Buy Stock</h2>
      <input
        type="number"
        placeholder="Stock ID"
        value={stockId}
        onChange={(e) => setStockId(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button type="submit">Buy</button>
    </form>
  );
};

export default BuyStock;
