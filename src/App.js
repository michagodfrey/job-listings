import React, { useState } from "react";
import Jobs from "./Jobs";
import Filter from "./Filter";
import data from "./data.json";

const tags = [];

const getTags = () => {
  data.map((item) => {
    tags.push(item.role);
    tags.push(item.level);
    tags.push(item.languages);
    tags.push(item.tools);
  })
}

getTags();

const allFilters = [...new Set(tags)];

function App() {
  
  const [jobs, setJobs] = useState(data);
  const [filteredList, setFilteredList] = useState([]);

  const addFilterItem = (item) => {
    if (!filteredList.includes(item)) {
      setFilteredList([...filteredList, item]);
    }
    else {
      console.log('already there');
      // do some animation on the item
    }
  }

  const clearFilter = () => {
    setFilteredList([]);
  }

  const removeItem = (removed) => { 
    setFilteredList(filteredList.filter((item) => item !== removed));
  }

  return (
    <main>
      {filteredList.length > 0 && <Filter filteredList={filteredList} clearFilter={clearFilter} removeItem={removeItem} />}
      <Jobs jobs={jobs} addFilterItem={addFilterItem} />
    </main>
  );
}

export default App;
