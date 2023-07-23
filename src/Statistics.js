import React, { useState } from 'react';
import axios from 'axios';

const Statistics = () => {
  const [month, setMonth] = useState('');
  const [totalSaleAmount, setTotalSaleAmount] = useState(0);
  const [totalSoldItems, setTotalSoldItems] = useState(0);
  const [totalNotSoldItems, setTotalNotSoldItems] = useState(0);

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const fetchStatistics = async () => {
    try {
      const response = await axios.get(
        'https://s3.amazonaws.com/roxiler.com/product_transaction.json'
      );
  
      const selectedMonthData = response.data.filter((item) => {
        const saleDate = new Date(item.dateOfSale);
        return saleDate.getMonth() + 1 === Number(month);
      });
  
      const totalSaleAmount = selectedMonthData.reduce(
        (acc, item) => acc + parseFloat(item.saleAmount),
        0
      );
  
      const totalSoldItems = selectedMonthData.filter((item) => item.sold).length;
      const totalNotSoldItems = selectedMonthData.filter((item) => !item.sold).length;
  
      setTotalSaleAmount(totalSaleAmount);
      setTotalSoldItems(totalSoldItems);
      setTotalNotSoldItems(totalNotSoldItems);
    } catch (error) {
      console.error('Error fetching statistics:', error);
    }
  };
  

  return (
    <div>
      <label>
        Select Month:
        <select value={month} onChange={handleMonthChange}>
            <option value="">--Select Month--</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
        </select>
      </label>
      <button onClick={fetchStatistics}>Fetch Statistics</button>
      <div>
        <h2>Statistics for {month}</h2>
        <p>Total Sale Amount: {totalSaleAmount}</p>
        <p>Total Sold Items: {totalSoldItems}</p>
        <p>Total Not Sold Items: {totalNotSoldItems}</p>
      </div>
    </div>
  );
};

export default Statistics;
