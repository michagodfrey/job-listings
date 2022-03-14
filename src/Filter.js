import React from 'react'

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter__items">
        <div className="filter__item">
          <span>Filter</span>
          <button></button>
        </div>
      </div>
      <button className='filter__close'>Clear</button>
    </div>
  );
}

export default Filter