import React, { useRef, useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaChevronUp, FaAngleDown } from "react-icons/fa";

const FoodData = ({ title = "Select an item", options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(title);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelection = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block w-48" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="bg-white w-full flex justify-between items-center px-4 py-2 border rounded-lg shadow-md text-sm"
      >
        <span className="text-sm">{selected}</span>
        {isOpen ? (
          <FaChevronUp className="text-sm" />
        ) : (
          <FaAngleDown className="text-sm" />
        )}
      </button>

      {isOpen && (
        <ul className="absolute w-full bg-white border shadow-md rounded-lg mt-1">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelection(option)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FoodData;
