import React from 'react';
import StockList from '../components/StockList';
import BuyStock from '../components/BuyStock';
import SellStock from '../components/SellStock';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Online Trading System</h1>
      <StockList />
      <BuyStock />
      <SellStock />
    </div>
  );
};

export default Dashboard;
