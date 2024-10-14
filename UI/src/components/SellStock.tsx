import React, { useState } from 'react';
import { sellStock } from '../services/stockService';

const SellStock: React.FC = () => {
  const [stockId, setStockId] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleSell = async (e: React.FormEvent) => {
    e.preventDefault();
    await sellStock(stockId, quantity);
    alert('Stock sold successfully');
  };

  return (
    <form onSubmit={handleSell}>
      <h2>Sell Stock</h2>
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
      <button type="submit">Sell</button>
    </form>
  );
};

export default SellStock;
