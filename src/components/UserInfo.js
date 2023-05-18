import React, { useState } from 'react'

const UserInfo = ({ onUserInfoChange }) => {
  const [userInfo, setUserInfo] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    activityLevel: "",
  });

  const { age, gender, height, weight, activityLevel } = userInfo;

  const handleUserInfoChange = (e) => {
    const { id, value } = e.target;
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, [id]: value }));
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-gray-200 p-6 rounded-lg w-1/2'>
        <h3 className='text-lg font-semibold mb-4'>
          Input your info below to calculate how many calories you burn a day:
        </h3>
        <div className='flex flex-col space-y-4'>
          <div className='flex flex-col'>
            <label htmlFor='age'>Age</label>
            <input
              type='number'
              id='age'
              value={age}
              onChange={handleUserInfoChange}
              className='border border-gray-400 rounded-md p-2'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='gender'>Gender</label>
            <select
              id='gender'
              value={gender}
              onChange={handleUserInfoChange}
              className='border border-gray-400 rounded-md p-2'
            >
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='height'>Height (cm)</label>
            <input
              type='number'
              id='height'
              value={height}
              onChange={handleUserInfoChange}
              className='border border-gray-400 rounded-md p-2'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='weight'>Weight (kg)</label>
            <input
              type='number'
              id='weight'
              value={weight}
              onChange={handleUserInfoChange}
              className='border border-gray-400 rounded-md p-2'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='activity-level'>Activity Level</label>
            <select
              id='activityLevel'
              value={activityLevel}
              onChange={handleUserInfoChange}
              className='border border-gray-400 rounded-md p-2'
            >
              <option value='sedentary'>
                Sedentary (little or no exercise)
              </option>
              <option value='lightly-active'>
                Lightly Active (light exercise or sports 1-3 days a week)
              </option>
              <option value='moderately-active'>
                Moderately Active (moderate exercise or sports 3-5 days a week)
              </option>
              <option value='very-active'>
                Very Active (hard exercise or sports 6-7 days a week)
              </option>
              <option value='super-active'>
                Super Active (very hard exercise or sports, physical job or
                training twice a day)
              </option>
            </select>
          </div>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
            Calculate
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
