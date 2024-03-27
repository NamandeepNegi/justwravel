import React, { useEffect, useState } from 'react';

export default function SortingComponent({ setSortBy, sortBy }) {

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm mr-4">Sort By:</span>
      <select
        value={sortBy}
        onChange={handleSortChange}
        className="border rounded-md px-2 py-1"
      >
        <option value="asc">Price (Low to High)</option>
        <option value="desc">Price (High to Low)</option>
      </select>
    </div>
  );
}