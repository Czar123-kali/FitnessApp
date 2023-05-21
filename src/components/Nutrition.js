import React, { useState, useEffect } from 'react'
import ItemCard from './ItemCard'
import axios from 'axios'

const Nutrition = ({ tdee }) => {
  const usertdee = tdee === null || isNaN(tdee) ? 2000 : tdee;
  const [foodLog, setFoodLog] = useState([]);
  const [foodInput, setFoodInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    if (foodInput.trim() === "") {
      return;
    }

    const query = encodeURIComponent(foodInput)

    setIsLoading(true)

    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/nutrition?query=${query}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": "IsAHlqi1pgFJ9XLPdu/O9w==Ue6nrtSq6H5uSKh9",
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json()
      setFoodLog([...foodLog, result[0]])
      setIsLoading(false)
    } catch (error) {
      console.error("Error: ", error);
      setIsLoading(false);
    }
    setFoodInput('')
  }

  const handleInputChange = (event) => {
    setFoodInput(event.target.value);
  };

  useEffect(() => {
    console.log(foodLog);
  }, [foodLog]);

  return (
    <div>
      <div className="sm:col-span-4 flex flex-col">
        <div className="mb-2">
          <label
            htmlFor="food"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Add food to calculate your calorie intake today:
          </label>
        </div>
        <div className="relative flex-grow">
          <input
            id='food'
            name='food'
            type='text'
            value={foodInput}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <button
            className="absolute right-0 top-0 bottom-0 px-3 py-1.5 bg-blue-500 text-white rounded-r-md"
            onClick={handleButtonClick}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Add"}
          </button>
        </div>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          Example: 1lb brisket and fries. Default quantity is 100g if you don't
          specify
        </p>
      </div>
      <div>
        <div className='space-x-4'>
          {foodLog.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
