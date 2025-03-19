import React from 'react';
import ProfitChart from "./ProfitChart";
import TrafficChart from "./TrafficChart";
import ProductChart from "./ProductChart";

const UserDashboard = () => {
  return (
    <div className='ml-[15%] w-[85%] p-4'>
      <h1 className="text-2xl font-bold">User Dashboard</h1>
      
      <div className="mt-6 grid grid-cols-2  gap-6">
        {/* Profit & Expenses Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold">Profit & Expenses</h2>
          {ProfitChart ? <ProfitChart /> : <p>Error Loading Chart</p>}
        </div>

        {/* Traffic Distribution */}
        <div className="bg-white p-6 rounded-2xl shadow-lg overflow-hidden">
          <h2 className="text-xl font-semibold">Traffic Distribution</h2>
          <p className="text-2xl font-bold mt-2">$36,358</p>
          <p className="text-green-500 text-sm">+9% last year</p>
          {TrafficChart ? <TrafficChart /> : <p>Error Loading Chart</p>}
        </div>

        {/* Product Sales */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold">Product Sales</h2>
          <p className="text-2xl font-bold mt-2">$6,820</p>
          <p className="text-red-500 text-sm">-9% last year</p>
          {ProductChart ? <ProductChart/> : <p>Error Loading Chart</p>}
        </div>
      </div>

      {/* File Upload Section */}
      <div className="mt-6 p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold">Upload File</h2>
        <input type="file" className="mt-4 p-2 border rounded-lg w-full" />
      </div>
    </div>
  );
};

export default UserDashboard;
