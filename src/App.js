import UserGoals from "./components/UserGoals";
import UserInfo from "./components/UserInfo";
import Result from "./components/Result";
import Nutrition from "./components/Nutrition";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState({});
  const [tdee, setTdee] = useState(null);

  const handleTdeeCalculation = (tdeeValue) => {
    setTdee(tdeeValue);
  };

  const handleUserDataChange = (userInfoData, userGoalData) => {
    const updatedUserData = { ...userInfoData, userGoalData };
    setUserData(updatedUserData);
  };

  const handleShowUserData = () => {
    console.log("User Data:", userData);
  };

  useEffect(() => {}, [userData]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <UserInfo
              onUserInfoChange={handleUserDataChange}
              handleUserDataChange={handleUserDataChange}
            />
          }
        />
        <Route
          path="goals"
          element={
            <UserGoals
              onUserGoalChange={handleUserDataChange}
              userInfo={UserInfo}
              userData={userData}
              handleTdeeCalculation={handleTdeeCalculation}
            />
          }
        ></Route>
        <Route path="calculator" element={<Nutrition tdee={tdee} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
