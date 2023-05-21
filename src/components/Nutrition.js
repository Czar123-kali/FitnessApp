import React, { useState } from 'react'

const Nutrition = ({ tdee }) => {
  // here i set default tdee to be 2000,
  // if user did not input info before and just want to use calory log,
  // we assume their daily calory intake is set to 2000
  const usertdee = tdee === null || isNaN(tdee) ? 2000 : tdee
  const [foodLog, setFoodLog] = useState([])
  const [foodInput, setFoodInput] = useState('')
  return (
    <div>
      <div className='sm:col-span-4 flex flex-col'>
        <div className='mb-2'>
          <label
            htmlFor='food'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Add food to calculate your calorie intake today:
          </label>
        </div>
        <div className='relative flex-grow'>
          <input
            id='food'
            name='food'
            type='text'
            autoComplete='food'
            onChange={setFoodInput(e.target.value)}
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
          <button className='absolute right-0 top-0 bottom-0 px-3 py-1.5 bg-blue-500 text-white rounded-r-md'>
            Add
          </button>
        </div>
      </div>
      <p className='mt-3 text-sm leading-6 text-gray-600'>
        Example: 1lb brisket and fries. Default quantity is 100g
      </p>
    </div>
  )
}

export default Nutrition
