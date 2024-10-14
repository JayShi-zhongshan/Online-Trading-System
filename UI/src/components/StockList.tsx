import React, { useEffect, useState } from 'react';
import { getStocks, Stock } from '../services/stockService';

const StockList: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    const fetchStocks = async () => {
      const stockData = await getStocks();
      setStocks(stockData);
    };
    fetchStocks();
  }, []);

  return (
    <div>
      <h2>Available Stocks</h2>
      <ul>
        {stocks.map(stock => (
          <li key={stock.id}>
            {stock.name} - ${stock.price} - {stock.quantity} shares available
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
