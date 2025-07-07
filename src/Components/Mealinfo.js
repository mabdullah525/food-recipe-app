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
            <div>Data Not Found</div>
        ) : (
            <div className='mealinfo'>
                <img src={info.strMealThumb} alt={info.strMeal} />
                <div className='info'>
                    <h1>Recipe Detail</h1>
                    <button>{info.strMeal}</button>
                    <h3>Instruction's</h3>
                    <p>{info.strInstructions}</p>
                </div>
            </div>
        )
    )
}

export default Mealinfo