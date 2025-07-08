import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';

const Mealinfo = () => {
    const { mealid } = useParams();
    const [info, setInfo] = useState();

    console.log(mealid);

    const getInfo = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await get.json();
        console.log(jsonData.meals[0]);
        setInfo(jsonData.meals[0]);
    };

    React.useEffect(() => {
        getInfo();
        // eslint-disable-next-line
    }, [mealid]);

    return (
  !info ? (
    <div className="not-found">Data Not Found</div>
  ) : (
    <div className="mealinfo">
      <img
        src={info.strMealThumb}
        alt={info.strMeal}
        className="info-img"
      />

      <div className="info flex-1">
        <h1 className="text-3xl font-bold text-orange-500 mb-4">Recipe Detail</h1>

        <button className="info-btn">
          {info.strMeal}
        </button>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Instructions</h3>
        <p className="text-gray-700 leading-relaxed text-justify">
          {info.strInstructions}
        </p>
      </div>
    </div>
  )
)

}

export default Mealinfo