import React from 'react'

const Mainpage = () => {
    return (
        <div className='container'>
            <div className='search-bar flex items-center justify-center gap-4 mt-6'>
                <input
                    type="text"
                    placeholder='Search for recipes...'
                    className='w-[400px] p-3 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white rounded-lg shadow-sm transition-all duration-200'
                />
                <button
                    className='w-28 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-lg rounded-lg shadow-md transition-all duration-200'
                >
                    Search
                </button>
            </div>

            <div></div>
        </div>
    )
}

export default Mainpage