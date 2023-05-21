import React, { useState } from 'react'

const Result = ({ userData, onTdeeCalculation }) => {
  const [showTDEE, setShowTDEE] = useState(false)
  const calculateTDEE = () => {
    const { age, gender, height, weight, activityLevel } = userData
    let activityMultiplier
    switch (activityLevel) {
      case 'sedentary':
        activityMultiplier = 1.2
        break
      case 'lightly-active':
        activityMultiplier = 1.375
        break
      case 'moderately-active':
        activityMultiplier = 1.55
        break
      case 'very-active':
        activityMultiplier = 1.725
        break
      case 'super-active':
        activityMultiplier = 1.9
        break
      default:
        activityMultiplier = 1.2
        break
    }
    const tdee =
      (10 * weight +
        6.25 * height -
        5 * age +
        (gender === 'female' ? -161 : 5)) *
      activityMultiplier

    return Math.round(tdee)
  }

  const handleShowTDEE = () => {
    setShowTDEE(true) // Set showTDEE state to true when the button is clicked
    onTdeeCalculation(tdee)
  }

  const tdee = calculateTDEE() // Calculate TDEE

  return (
    <div>
      <button
        className='bg-blue-500 text-white px-4 py-2 rounded-md'
        onClick={handleShowTDEE}
      >
        Calculate TDEE
      </button>
      {showTDEE && !isNaN(tdee) ? (
        <>
          <h2>
            You are {userData.age} y/o {userData.gender} who is{' '}
            {userData.height} cm and {userData.weight} kg with{' '}
            {userData.activityLevel} lifestyle.
          </h2>
          <h2>
            Based on your data, your best estimate for maintenance calories is{' '}
            {tdee} per day.
            <h2></h2>
          </h2>
        </>
      ) : showTDEE ? (
        <>Please input your info</>
      ) : null}
    </div>
  )
}

export default Result