import React, { useState } from "react";

const PriceRangeFilter = () => {
  const [lowerValue, setLowerValue] = useState(100);
  const [upperValue, setUpperValue] = useState(500);

  const handleLowerChange = (event) => {
    let newLower = parseInt(event.target.value);
    let newUpper = upperValue;

    if (newLower > newUpper - 4) {
      newUpper = newLower + 4;
      if (newUpper > 500) newUpper = 500;
      setUpperValue(newUpper);
    }
    setLowerValue(newLower);
  };

  const handleUpperChange = (event) => {
    let newUpper = parseInt(event.target.value);
    let newLower = lowerValue;

    if (newUpper < newLower + 4) {
      newLower = newUpper - 4;
      if (newLower < 100) newLower = 100;
      setLowerValue(newLower);
    }
    setUpperValue(newUpper);
  };

  return (
    <div className="bg-gray-100 p-6 flex flex-col items-center rounded-lg shadow-lg max-w-sm mx-auto">
      <fieldset className="w-full">
        {/* Sliders */}
        <div className="w-full flex px-2 items-center">
          <input
            type="range"
            min="100"
            max="500"
            className="w-[100%] cursor-pointer"
            value={lowerValue}
            onChange={handleLowerChange}
          />
          <input
            type="range"
            min="100"
            max="500"
            className="w-[100%] cursor-pointer"
            value={upperValue}
            onChange={handleUpperChange}
          />
        </div>

        {/* Price Display */}
        <div className="flex flex-col items-center mt-4">
          <span className="text-sm font-semibold text-gray-700">FILTER</span>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center bg-white px-2 py-1 border rounded-lg w-14">
              <input
                id="one"
                value={lowerValue}
                readOnly
                className="w-full text-center outline-none bg-transparent"
              />
              <label htmlFor="one" className="ml-1 text-gray-600">$</label>
            </div>

            <span className="text-lg font-medium">-</span>

            <div className="flex items-center bg-white px-2 py-1 border rounded-lg w-14">
              <input
                id="two"
                value={upperValue}
                readOnly
                className="w-full text-center outline-none bg-transparent"
              />
              <label htmlFor="two" className="ml-1 text-gray-600">$</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default PriceRangeFilter;
