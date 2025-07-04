import React, { useState } from 'react'
import Mealcards from './Mealcards'

const Mainpage = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  const handleInput = (event) => {
    setSearch(event.target.value)
  }

  const myFun = async () => {
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    const jsonData = await get.json()
    console.log(jsonData)
    setData(jsonData.meals || [])
  }

  return (
    <div className='container'>
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

      <div>
        <Mealcards detail={data} />
      </div>
    </div>
  )
}

export default Mainpage
