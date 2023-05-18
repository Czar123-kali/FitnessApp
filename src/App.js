import './App.css'
import UserGoals from './components/UserGoals'
import UserInfo from './components/UserInfo'
import { useState } from 'react'

function App() {
  const [userData, setUserData] = useState({})

  const handleUserDataChange = (userInfoData, userGoalData) => {
    setUserData({ ...userInfoData, ...userGoalData })
  }

  return (
    <div>
      <h1 className='flex justify-center text-3xl font-bold underline'>
        Fitness App
      </h1>
      {/* <UserInfo onUserInfoChange={handleUserDataChange} /> */}
      <UserGoals onUserGoalChange={handleUserDataChange} />
    </div>
  )
}

export default App
