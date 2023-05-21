import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleIsOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 h-16 flex justify-end items-center pr-8">
      {/* Navigation menu */}
      <ul className="text-white flex justify-around min-w-full invisible md:visible">
        <li className="ring-2 rounded-xl px-4 py-1 hover:ring-blue-300">
          <a href="/">Your Information</a>
        </li>
        <li className="ring-2 rounded-xl px-4 py-1 hover:ring-blue-300">
          <a href="/result">Your Goals</a>
        </li>
        <li className="ring-2 rounded-xl px-4 py-1 hover:ring-blue-300">
          <a href="calculator">Your Personal Calories</a>
        </li>
        <li className="ring-2 rounded-xl px-4 py-1 hover:ring-blue-300">
          <a href="workouts">Your Workouts</a>
        </li>
      </ul>

      <div
        className="space-y-2 relative md:hidden"
        role="button"
        tabIndex={0}
        onClick={handleIsOpen}
      >
        <span className="block w-8 h-1 bg-white opacity-90 rounded-sm"></span>
        <span className="block w-8 h-1 bg-white opacity-90 rounded-sm"></span>
        <span className="block w-8 h-1 bg-white opacity-90 rounded-sm"></span>
      </div>

      {isOpen && (
        <div className="modal-overlay md:hidden" ref={dropdownRef}>
          <div className="modal-content absolute w-full top-16 right-0 bg-white border-gray-200 dark:bg-gray-900 px-4 py-2">
            <ul className="text-white mt-2 mb-2">
              <li className="h-8 py-3">
                <a
                  href="/"
                  className="flex justify-center items-center rounded-md w-12/12 hover:bg-blue-400"
                >
                  Your Information
                </a>
              </li>
              <li className="h-8 py-3">
                <a
                  href="/"
                  className="flex justify-center items-center rounded-md w-12/12 hover:bg-blue-400"
                >
                  Your Goals
                </a>
              </li>
              <li className="h-8 py-3">
                <a
                  href="/"
                  className="flex justify-center items-center rounded-md w-12/12 hover:bg-blue-400"
                >
                  Your Personal Calculator
                </a>
              </li>
              <li className="h-8 py-3">
                <a
                  href="/"
                  className="flex justify-center items-center rounded-md w-12/12 hover:bg-blue-400"
                >
                  Your Workouts
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
