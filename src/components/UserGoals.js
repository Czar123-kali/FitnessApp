import React, { useState } from 'react'

const UserGoals = ({ onUserGoalChange }) => {
  const [selectedGoal, setSelectedGoal] = useState(""); // Add selectedGoal state

  const handleGoalChange = (event) => {
    setSelectedGoal(event.target.value); // Update selectedGoal state
    onUserGoalChange(event.target.value); // Pass the selected goal to the parent component
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">
          Select your fitness goal:
        </h3>
        <div className="flex flex-row space-x-4">
          <label
            className={`flex items-center ${
              selectedGoal === "weight-loss"
                ? "bg-blue-500 text-white animate-bounce"
                : "bg-blue-200 text-blue-500"
            } px-4 py-2 rounded cursor-pointer transition-colors`}
            onClick={() => setSelectedGoal("weight-loss")}
          >
            <input
              type="radio"
              name="goal"
              value="weight-loss"
              checked={selectedGoal === "weight-loss"}
              onChange={handleGoalChange}
              className="hidden"
            />
            Weight Loss
          </label>
          <label
            className={`flex items-center ${
              selectedGoal === "muscle-gain"
                ? "bg-green-500 text-white animate-bounce"
                : "bg-green-200 text-green-500"
            } px-4 py-2 rounded cursor-pointer transition-colors`}
            onClick={() => setSelectedGoal("muscle-gain")}
          >
            <input
              type="radio"
              name="goal"
              value="muscle-gain"
              checked={selectedGoal === "muscle-gain"}
              onChange={handleGoalChange}
              className="hidden"
            />
            Muscle Gain
          </label>
          <label
            className={`flex items-center ${
              selectedGoal === "flexibility"
                ? "bg-yellow-500 text-white animate-bounce"
                : "bg-yellow-200 text-yellow-500"
            } px-4 py-2 rounded cursor-pointer transition-colors`}
            onClick={() => setSelectedGoal("flexibility")}
          >
            <input
              type="radio"
              name="goal"
              value="flexibility"
              checked={selectedGoal === "flexibility"}
              onChange={handleGoalChange}
              className="hidden"
            />
            Flexibility
          </label>
          <label
            className={`flex items-center ${
              selectedGoal === "cardiovascular"
                ? "bg-red-500 text-white animate-bounce"
                : "bg-red-200 text-red-500"
            } px-4 py-2 rounded cursor-pointer transition-colors`}
            onClick={() => setSelectedGoal("cardiovascular")}
          >
            <input
              type="radio"
              name="goal"
              value="cardiovascular"
              checked={selectedGoal === "cardiovascular"}
              onChange={handleGoalChange}
              className="hidden"
            />
            Cardiovascular
          </label>
        </div>
      </div>
    </div>
  );
}

export default UserGoals
