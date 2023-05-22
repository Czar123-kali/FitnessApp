import React from "react";

const UserInfo = ({
  handleUserDataChange,
  userData,
  userInfo,
  setUserInfo,
}) => {
  const { age, gender, height, weight, activityLevel } = userInfo;

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    handleUserDataChange({ ...userInfo, [name]: value });
  };

  return (
    <div className="info-page flex justify-center items-center h-[calc(100vh-4rem)]">
      <div className="bg-gray-200 p-6 rounded-lg w-1/2">
        <h3 className="text-lg font-semibold mb-4">
          Input your info below to calculate how many calories you burn a day:
        </h3>
        form
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={handleUserInfoChange}
              className="border border-gray-400 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              value={gender}
              onChange={handleUserInfoChange}
              className="border border-gray-400 bg-white rounded-md p-2"
            >
              <option defaultValue="" disabled selected required>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="height">Height (cm)</label>
            <input
              type="number"
              name="height"
              value={height}
              onChange={handleUserInfoChange}
              className="border border-gray-400 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={weight}
              onChange={handleUserInfoChange}
              className="border border-gray-400 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="activity-level">Activity Level</label>
            <select
              name="activityLevel"
              value={activityLevel}
              onChange={handleUserInfoChange}
              className="border border-gray-400 bg-white rounded-md p-2"
              defaultValue={"sedentary"}
            >
              <option defaultValue="" disabled selected required>
                Choose an activity level
              </option>
              <option value="sedentary">
                Sedentary (little or no exercise)
              </option>
              <option value="lightly-active">
                Lightly Active (light exercise or sports 1-3 days a week)
              </option>
              <option value="moderately-active">
                Moderately Active (moderate exercise or sports 3-5 days a week)
              </option>
              <option value="very-active">
                Very Active (hard exercise or sports 6-7 days a week)
              </option>
              <option value="super-active">
                Super Active (very hard exercise or sports, physical job or
                training twice a day)
              </option>
            </select>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Save Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
