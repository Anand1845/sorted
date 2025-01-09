import React from 'react';

export const Proj = () => {
  return (
    <div className="bg-zinc-800 py-16">
      <h2 className="text-center text-white text-5xl font-bold mb-12 mt-40">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 mb-40">

       
        <div className="bg-slate-700 p-6 rounded-lg shadow-md hover:transform hover:scale-105 mt-36">
          <h3 className="text-white text-2xl font-bold mb-4">Project 1</h3>
          <p className="text-gray-300 mb-4">Build UI interface</p>
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.GP-ovcZwDbzqu1BJzfc_LAHaE8&pid=Api&P=0&h=180"
            alt="UI interface"
            className="h-48 w-full rounded-lg object-cover"
          />
        </div>

        
        <div className="bg-slate-700 p-6 rounded-lg shadow-md hover:transform hover:scale-105 mt-36">
          <h3 className="text-white text-2xl font-bold mb-4">Project 2</h3>
          <p className="text-gray-300 mb-4">Built website</p>
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.gksOxdTXUt7DWe7Nmc0tHgHaE7&pid=Api&P=0&h=180"
            alt="Website"
            className="h-48 w-full rounded-lg object-cover"
          />
        </div>

       
        <div className="bg-slate-700 p-6 rounded-lg shadow-md hover:transform hover:scale-105 mt-36">
          <h3 className="text-white text-2xl font-bold mb-4">Project 3</h3>
          <p className="text-gray-300 mb-4">Built app</p>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.tJXLjBKf4zgPnl5HEB3I9QHaEK&pid=Api&P=0&h=180"
            alt="App"
            className="h-48 w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};
