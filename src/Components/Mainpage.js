import React from 'react'

const Mainpage = () => {
    return (
        <div className='container'>
            <div className='search-bar'>
                <input
                    type="text"
                    placeholder='Search for recipes...'
                    className='input'
                />
                <button
                    className='search-btn'
                >
                    Search
                </button>
            </div>

            <div></div>
        </div>
    )
}

export default Mainpage