import UserGoals from "./components/UserGoals";
import UserInfo from "./components/UserInfo";
import Nutrition from "./components/Nutrition";
import Navbar from "./components/Navbar";
import Workout from "./components/Workout";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState({
    goal: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    activityLevel: "",
    workoutFreq: 0,
  });
  const [tdee, setTdee] = useState();
  const [userInfo, setUserInfo] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    activityLevel: "",
  });
  const [selectedGoal, setSelectedGoal] = useState("");
  const [workoutFreq, setWorkoutFreq] = useState(0);

  const [showTDEE, setShowTDEE] = useState(false);

  const handleTdeeCalculation = (tdeeValue) => {
    setTdee(tdeeValue);
  };

  const handleUserDataChange = (userInfoData, userGoalData, userFreqData) => {
    const updatedUserData = { ...userInfoData, userGoalData, userFreqData };
    console.log(updatedUserData);
    setUserData(updatedUserData);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <UserInfo
              handleUserDataChange={handleUserDataChange}
              userData={userData}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          }
        />
        <Route
          path="goals"
          element={
            <UserGoals
              handleUserDataChange={handleUserDataChange}
              userInfo={userInfo}
              userData={userData}
              handleTdeeCalculation={handleTdeeCalculation}
              selectedGoal={selectedGoal}
              setSelectedGoal={setSelectedGoal}
              workoutFreq={workoutFreq}
              setWorkoutFreq={setWorkoutFreq}
              showTDEE={showTDEE}
              setShowTDEE={setShowTDEE}
            />
          }
        ></Route>
        <Route
          path="calculator"
          element={<Nutrition tdee={tdee} userData={userData} />}
        ></Route>
        <Route
          path="workouts"
          element={<Workout userData={userData} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
