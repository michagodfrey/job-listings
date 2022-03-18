import React, { useEffect, useState } from "react";
import Jobs from "./Jobs";
import Filter from "./Filter";
import data from "./data.json";

function App() {
  const [jobs, setJobs] = useState(data);
  const [filter, setFilter] = useState([]);

  const addFilterItem = (item) => {
    if (!filter.includes(item)) {
      setFilter([...filter, item]);
    }
    filterJobs(filter);
  };

  const filterJobs = (filter) => {
    let newJobList = [];
    data.forEach((job) => {
      let string = JSON.stringify(job);
      let count = 0;
      filter.forEach((item) => {
        if (string.includes(item)) {
          count++;
        }
      });
      if (count === filter.length) {
        newJobList.push(job);
      }
    });
    setJobs(newJobList);
  };

  const clearFilter = () => {
    setFilter([]);
    setJobs(data);
  };

  const removeItem = (removed) => {
    if (filter.length > 1) {
      setFilter(filter.filter((item) => item !== removed));
      filterJobs(filter);
    } else {
      clearFilter();
    }
  };

  return (
    <main>
      {filter.length > 0 && (
        <Filter
          filter={filter}
          clearFilter={clearFilter}
          removeItem={removeItem}
        />
      )}
      <Jobs jobs={jobs} addFilterItem={addFilterItem} />
    </main>
  );
}

export default App;
