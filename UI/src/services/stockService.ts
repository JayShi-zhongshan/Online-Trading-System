import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export interface Stock {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const getStocks = async (): Promise<Stock[]> => {
  const response = await axios.get(`${API_URL}/stocks`);
  return response.data;
};

export const buyStock = async (stockId: number, quantity: number): Promise<void> => {
  await axios.post(`${API_URL}/stocks/buy`, { stockId, quantity });
};

export const sellStock = async (stockId: number, quantity: number): Promise<void> => {
  await axios.post(`${API_URL}/stocks/sell`, { stockId, quantity });
};
