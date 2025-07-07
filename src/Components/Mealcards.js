import React from 'react'
import { NavLink } from 'react-router-dom'

const Mealcards = ({ detail }) => {
  console.log(detail)
  return (
    <div className="meals">
      {!detail ? "Not Found" :
        detail.map((curItem) => {
          return (
            <div key={curItem.idMeal} className="meal-img">
              <img
                src={curItem.strMealThumb}
                alt={curItem.strMeal}
                className="inner-img"
              />
              <p className="meal-p">{curItem.strMeal}</p>
              <NavLink to={`/${curItem.idMeal}`} className="meal-link">
                <button className="meal-btn">
                  Recipe
                </button>
              </NavLink>

            </div>
          )
        })
      }
    </div>
  )
}

export default Mealcards
