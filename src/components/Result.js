import React from 'react'

const Result = ({ userData, handleTdeeCalculation, setShowTDEE, showTDEE }) => {
  const { age, gender, activityLevel, height, weight } = userData
  const calculateTDEE = () => {
    if (
      age === '' ||
      gender === '' ||
      activityLevel === '' ||
      height === '' ||
      weight === ''
    ) {
      return 0
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
    handleTdeeCalculation(tdee)
    console.log(userData)
  }

  const tdee = calculateTDEE() // Calculate TDEE

  return (
    <div className='goal-page flex justify-center items-center'>
      <div className='p-6 rounded-lg mx-auto max-w-screen-lg'>
        <div className='flex justify-center'>
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded-md w-[200px]'
            onClick={handleShowTDEE}
          >
            Calculate TDEE
          </button>
        </div>
        {showTDEE && tdee != 0 ? (
          <div className='mt-6'>
            <h2 className='text-gray-500'>
              You are {userData.age} y/o {userData.gender} who is{' '}
              {userData.height} cm and {userData.weight} kg with{' '}
              {userData.activityLevel} lifestyle.
            </h2>
            <h2 className='text-gray-500'>
              Based on your data, your best estimate for maintenance calories is{' '}
              {tdee} per day.
              <h2></h2>
            </h2>
          </div>
        ) : showTDEE ? (
          <div className='mt-6'>
            <h2 className='text-red-500'>Please input your info first</h2>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Result
