import React from 'react'

const Mealcards = ({ detail }) => {
  console.log(detail)
  return (
    <div className="meals grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {!detail ? "" :
        detail.map((curItem) => {
          return (
            <div key={curItem.idMeal} className="meal-img bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-4 flex flex-col items-center text-center">
              <img
                src={curItem.strMealThumb}
                alt={curItem.strMeal}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-xl font-semibold mb-2">{curItem.strMeal}</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-md transition duration-200">
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
