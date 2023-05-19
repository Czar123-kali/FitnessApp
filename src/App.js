import UserGoals from './components/UserGoals'
import UserInfo from './components/UserInfo'
import { useState, useEffect } from 'react'

function App() {
  const [userData, setUserData] = useState({})

  const handleUserDataChange = (userInfoData, userGoalData) => {
    const updatedUserData = { ...userInfoData, userGoalData }
    setUserData(updatedUserData)
  }

  const handleShowUserData = () => {
    console.log('User Data:', userData)
  }

  useEffect(() => {}, [userData])

  return (
    <div>
      <h1 className='flex justify-center text-3xl font-bold underline'>
        Fitness App
      </h1>
      <UserInfo onUserInfoChange={handleUserDataChange} />
      <UserGoals onUserGoalChange={handleUserDataChange} userInfo={userData} />
      <button
        className='bg-blue-500 text-white px-4 py-2 rounded-md'
        onClick={handleShowUserData}
      >
        Calculate
      </button>
    </div>
  )
}

export default App
