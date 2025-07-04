import React from 'react'

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
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="meal-p">{curItem.strMeal}</p>
              <button className="meal-btn">
                Recipe
              </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Mealcards
