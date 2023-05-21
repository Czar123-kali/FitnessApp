import React, { useState } from 'react'

const Result = ({ userData }) => {
  const [showTDEE, setShowTDEE] = useState(false)
  const calculateTDEE = () => {
    const { age, gender, height, weight, activityLevel } = userData
    if (!age || !gender || !height || !weight || !activityLevel) {
      return 'Please input your information'
    }
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
        break // Add the missing break statement
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
      {showTDEE && tdee && <h2>TDEE: {tdee}</h2>}
    </div>
  )
}

export default Result
