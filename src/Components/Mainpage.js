import React, { useState } from 'react'
import Mealcards from './Mealcards'

const Mainpage = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [msg, setMsg] = useState('')

  const handleInput = (event) => {
    setSearch(event.target.value)
  }

  const myFun = async () => {
    if (search === '') {
      setMsg('Please enter a search term')
    } else {
      const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      const jsonData = await get.json()
      // console.log(jsonData)
      setData(jsonData.meals)
      setMsg('')

    }

  }

  return (
    <>
      <h1 className="head container mx-auto">🍽️ FOOD RECIPE APP</h1>

      <div className='container mx-auto px-4 py-8'>
        <div className='search-bar'>
          <input
            type="text"
            placeholder='Search for recipes...'
            onChange={handleInput}
            className='input'
          />
          <button
            onClick={myFun}
            className='search-btn'
          >
            Search
          </button>
        </div>
        <h4 className='text-center mt-5'>{msg}</h4>

        <div>
          <Mealcards detail={data} />
        </div>
      </div>
    </>
  )
}

export default Mainpage
