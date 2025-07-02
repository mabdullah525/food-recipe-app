import React from 'react'

const Maincards = ({ detail }) => {
    return (
        <div className='meals'>
            {!detail ? "Loading..." :
                detail.map((curIteam) => {
                    return (
                        <div className='meal-card'>
                            <img src={curIteam.strMealThumb} />
                            <p></p>
                            <button></button>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Maincards