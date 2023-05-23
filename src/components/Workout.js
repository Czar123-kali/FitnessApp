import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Workout = ({ userData }) => {
  const [userWorkout, setUserWorkout] = useState([])
  const [isOpen, setIsOpen] = useState({})

  const workoutType = userData.userGoalData

  const handleWorkoutType = (workoutType) => {
    switch (workoutType) {
      case 'weight-loss':
        getApiRequest()
        break
      case 'muscle-gain':
        getApiRequest('strength')
        break
      case 'flexibility':
        getApiRequest('stretching')
        break
      case 'cardiovascular':
        getApiRequest('cardio')
        break
      default:
        console.error('Error, no choice made')
        break
    }
  }

  const getApiRequest = async (workoutType) => {
    try {
      const response = await axios.get(
        'https://api.api-ninjas.com/v1/exercises?type=' + workoutType,
        {
          headers: {
            'X-Api-Key': 'rEii+32dIABnTr1CeWS3Zw==xUpGZQVV9GzWIEj3',
          },
        }
      )
      setUserWorkout(response.data)
      console.log(userWorkout)
    } catch (error) {
      console.error(error)
    }
  }

  const showInstructions = (e, key) => {
    setIsOpen((prevOpen) => ({
      ...prevOpen,
      [key]: !prevOpen[key],
    }))
    console.log(isOpen)
  }

  useEffect(() => {
    handleWorkoutType(workoutType)
  }, [])

  return (
    <div>
      <div className='absolute left-5 top-1/2 transform -translate-y-1/2'>
        <Link to='/calculator' className='inline-block'>
          <button className='bg-gray-500 text-white rounded-full w-12 h-12 flex items-center justify-center'>
            <svg
              className='h-6 w-6 text-white transform rotate-180'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </Link>
      </div>
      <section className='workoutSection flex  mt-8 flex-wrap justify-center items-center h-[calc(100vh-4rem)]'>
        <div className='workoutCards flex flex-col flex-wrap justify-center items-center gap-6 p-5 '>
          {userWorkout.map((workout, key) => {
            return (
              <div
                className='card flex flex-col justify-end pb-6 px-7 rounded-md border-e h-full pt-44 w-96 max-w-full shadow-md'
                key={key}
                onClick={(e) => showInstructions(e, key)}
              >
                <h1>{workout.name}</h1>
                <h1>{workout.difficulty}</h1>
                <h1>{workout.muscle}</h1>
                {isOpen[key] ? (
                  <h1 className='pt-8'>{workout.instructions}</h1>
                ) : null}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Workout
