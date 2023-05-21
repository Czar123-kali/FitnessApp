import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 h-16 flex justify-end items-center pr-8">
      {/* Navigation menu */}
      {/* <ul className="text-white flex justify-around min-w-full">
        <li className="ring-2 rounded-xl px-4 py-1 hover:ring-blue-300">
          <a href="info-page">Your Information</a>
        </li>
        <li className="ring-2 rounded-xl px-4 py-1 hover:ring-blue-300">
          <a href="goals-page">Your Goals</a>
        </li>
        <li className="ring-2 rounded-xl px-4 py-1 hover:ring-blue-300">
          <a href="#">Your Personal Calories</a>
        </li>
        <li className="ring-2 rounded-xl px-4 py-1 hover:ring-blue-300">
          <a href="#">Your Workouts</a>
        </li>
      </ul> */}

      <div
        className="space-y-2 relative"
        role="button"
        tabIndex={0}
        onClick={handleIsOpen}
      >
        <span className="block w-8 h-1 bg-white opacity-90 rounded-sm"></span>
        <span className="block w-8 h-1 bg-white opacity-90 rounded-sm"></span>
        <span className="block w-8 h-1 bg-white opacity-90 rounded-sm"></span>
      </div>

      {isOpen && (
        <div className="modal-overlay w-2/12">
          <div className="modal-content absolute top-16 bg-white border-gray-200 dark:bg-gray-900 px-4 py-2">
            <button
              className="modal-close absolute top-2 right-2 text-gray-500"
              onClick={handleIsOpen}
            >
              X
            </button>
            <ul className="text-white mt-2">
              <li>Your Information</li>
              <li>Your Goals</li>
              <li>Your Personal Calories</li>
              <li>Your Workouts</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
