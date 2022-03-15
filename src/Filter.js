import React from 'react'
import uuid from "react-uuid";

const Filter = ({ filteredList, clearFilter, removeItem }) => {

  return (
    <div className="filter">
      <div className='filter__item-list'>
        {filteredList.map((item) => {
          return (
            <div className="filter__item" key={uuid()}>
              <div>{item}</div>
              <button onClick={() => removeItem(item)}></button>
            </div>
          );
        })}
      </div>

      <button className="filter__close" onClick={() => clearFilter()}>
        Clear
      </button>
    </div>
  );
}

export default Filter