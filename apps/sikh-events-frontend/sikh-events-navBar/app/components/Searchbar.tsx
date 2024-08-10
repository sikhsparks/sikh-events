import React from 'react'

const Searchbar = () => {
  return (
    <div className="searchBar-container relative">
      <input
        type="text"
        placeholder="Search..."
        className="searchBar input "
      />
  
      <button className="absolute  right-0 flex items-center pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  )
}

export default Searchbar
