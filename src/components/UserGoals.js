import React, { useState } from "react";

const UserGoals = () => {
  const [selectedGoal, setSelectedGoal] = useState("");

  const handleGoalChange = (event) => {
    setSelectedGoal(event.target.value);
  };

  return (
    <div>
      <h3>Select your fitness goal:</h3>
      <label>
        <input
          type="radio"
          name="goal"
          value="weight-loss"
          checked={selectedGoal === "weight-loss"}
          onChange={handleGoalChange}
        />
        Weight Loss
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="goal"
          value="muscle-gain"
          checked={selectedGoal === "muscle-gain"}
          onChange={handleGoalChange}
        />
        Muscle Gain
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="goal"
          value="cardio-improvement"
          checked={selectedGoal === "cardio-improvement"}
          onChange={handleGoalChange}
        />
        Cardio Improvement
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="goal"
          value="flexibility"
          checked={selectedGoal === "flexibility"}
          onChange={handleGoalChange}
        />
        Flexibility
      </label>
    </div>
  );
};

export default UserGoals;
