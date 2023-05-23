import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserInfo = ({
  handleUserDataChange,
  userData,
  userInfo,
  setUserInfo,
}) => {
  const { age, gender, height, weight, activityLevel } = userInfo;
  const [savedMessage, setSavedMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    handleUserDataChange({ ...userInfo, [name]: value });
  };

  const handleSaveInformation = () => {
    if (age && gender && height && weight && activityLevel) {
      // Logic to save the information
      setSavedMessage("Information saved");
      setErrorMessage("");
    } else {
      setErrorMessage("Please fill in all the fields.");
      setSavedMessage("");
    }
  };

  return (
    <div className="info-page flex justify-center items-center h-[calc(100vh-4rem)]">
      <div className="bg-gray-200 p-6 rounded-lg w-1/2">
        <h3 className="text-lg font-semibold mb-4">
          Input your info below to calculate how many calories you burn a day:
        </h3>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={handleUserInfoChange}
              className="border border-gray-400 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              value={gender}
              onChange={handleUserInfoChange}
              className="border border-gray-400 bg-white rounded-md p-2"
            >
              <option defaultValue="" disabled selected required>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="height">Height (cm)</label>
            <input
              type="number"
              name="height"
              value={height}
              onChange={handleUserInfoChange}
              className="border border-gray-400 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={weight}
              onChange={handleUserInfoChange}
              className="border border-gray-400 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="activity-level">Activity Level</label>
            <select
              name="activityLevel"
              value={activityLevel}
              onChange={handleUserInfoChange}
              className="border border-gray-400 bg-white rounded-md p-2"
              defaultValue={"sedentary"}
            >
              <option defaultValue="" selected required>
                Choose an activity level
              </option>
              <option value="sedentary">
                Sedentary (little or no exercise)
              </option>
              <option value="lightly-active">
                Lightly Active (light exercise or sports 1-3 days a week)
              </option>
              <option value="moderately-active">
                Moderately Active (moderate exercise or sports 3-5 days a week)
              </option>
              <option value="very-active">
                Very Active (hard exercise or sports 6-7 days a week)
              </option>
              <option value="super-active">
                Super Active (very hard exercise or sports, physical job or
                training twice a day)
              </option>
            </select>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSaveInformation}
          >
            Save Information
          </button>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {savedMessage && <p className="text-green-500">{savedMessage}</p>}
        </div>
      </div>
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
        <Link to="/goals" className="inline-block">
          <button className="bg-gray-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
            {/* Alternative right arrow */}
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
