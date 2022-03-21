import React from 'react'
import uuid from "react-uuid";

// uuid library used to generate unique keys for filter items
const Filter = ({ filter, clearFilter, removeItem }) => {

  return (
    <div className="filter">
      <div className="filter__item-list">
        {filter.map((item) => {
          return (
            <div className="filter__item" key={uuid()}>
              <div>{item}</div>
              <button onClick={() => removeItem(item)}></button>
            </div>
          );
        })}
      </div>
      <div className="filter__close-box">
        <button className="filter__close" onClick={() => clearFilter()}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default Filter