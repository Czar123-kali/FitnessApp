import React from 'react'
import Result from './Result'

const UserGoals = ({
  handleUserDataChange,
  userInfo,
  userData,
  handleTdeeCalculation,
  selectedGoal,
  setSelectedGoal,
  showTDEE,
  setShowTDEE,
}) => {
  const handleGoalChange = (event) => {
    const goal = event.currentTarget.value
    setSelectedGoal(goal) // Update selectedGoal state
    handleUserDataChange(userInfo, goal) // Pass the selected goal to the parent component
  }

  return (
    <div>
      <div className='goal-page flex justify-center items-center h-[calc(50vh-2rem)]'>
        <div className='bg-gray-200 p-6 rounded-lg mx-auto max-w-screen-lg'>
          <h3 className='text-lg font-semibold mb-4'>
            Select your fitness goal:
          </h3>
          <div className='flex flex-row space-x-4'>
            <label
              className={`flex items-center ${
                selectedGoal === 'weight-loss'
                  ? 'bg-blue-500 text-white animate-bounce'
                  : 'bg-blue-200 text-blue-500'
              } px-4 py-2 rounded cursor-pointer transition-colors`}
            >
              <input
                type='radio'
                name='goal'
                value='weight-loss'
                checked={selectedGoal === 'weight-loss'}
                className='hidden'
                onClick={handleGoalChange}
                readOnly
              />
              Weight Loss
            </label>
            <label
              className={`flex items-center ${
                selectedGoal === 'muscle-gain'
                  ? 'bg-green-500 text-white animate-bounce'
                  : 'bg-green-200 text-green-500'
              } px-4 py-2 rounded cursor-pointer transition-colors`}
            >
              <input
                type='radio'
                name='goal'
                value='muscle-gain'
                checked={selectedGoal === 'muscle-gain'}
                className='hidden'
                onClick={handleGoalChange}
                readOnly
              />
              Muscle Gain
            </label>
            <label
              className={`flex items-center ${
                selectedGoal === 'flexibility'
                  ? 'bg-yellow-500 text-white animate-bounce'
                  : 'bg-yellow-200 text-yellow-500'
              } px-4 py-2 rounded cursor-pointer transition-colors`}
            >
              <input
                type='radio'
                name='goal'
                value='flexibility'
                checked={selectedGoal === 'flexibility'}
                className='hidden'
                onClick={handleGoalChange}
                readOnly
              />
              Flexibility
            </label>
            <label
              className={`flex items-center ${
                selectedGoal === 'cardiovascular'
                  ? 'bg-red-500 text-white animate-bounce'
                  : 'bg-red-200 text-red-500'
              } px-4 py-2 rounded cursor-pointer transition-colors`}
            >
              <input
                type='radio'
                name='goal'
                value='cardiovascular'
                checked={selectedGoal === 'cardiovascular'}
                className='hidden'
                onClick={handleGoalChange}
                readOnly
              />
              Cardiovascular
            </label>
          </div>
        </div>
      </div>
      <Result
        userData={userData}
        handleTdeeCalculation={handleTdeeCalculation}
        showTDEE={showTDEE}
        setShowTDEE={setShowTDEE}
      />
    </div>
  )
}

export default UserGoals
