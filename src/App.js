import React, { useEffect, useState } from "react";
import Jobs from "./Jobs";
import Filter from "./Filter";
// data is imported from this static file for this project
import data from "./data.json";

function App() {
  // 2 useState hooks are used, one to display the jobs, 
  // the other is to filter the first hook with results the user has clicked
  const [jobs, setJobs] = useState(data);
  const [filter, setFilter] = useState([]);

  // when the user clicks one of the tags (role, level,
  // languages, tools) it's added to the filter list if not already in
  const addItem = (item) => {
    if (filter.includes(item)) {
      return;
    } else {
      setFilter([...filter, item]);
    }
  };

  // each time the filter hook changes this hook filters 
  // the data and updates the jobs hook accordingly
  useEffect(() => {
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
  }, [filter]);

  // handles the clear button in filter component
  const clearFilter = () => {
    setFilter([]);
    setJobs(data);
  };

  // handles the close buttons on the filter items
  const removeItem = (removed) => {
    if (filter.length > 1) {
      setFilter(filter.filter((item) => item !== removed));
    } else {
      clearFilter();
    }
  };

  // components returned here, filter only displays if it has values
  return (
    <main>
      {filter.length > 0 && (
        <Filter
          filter={filter}
          clearFilter={clearFilter}
          removeItem={removeItem}
        />
      )}
      <Jobs jobs={jobs} addItem={addItem} />
       <div class="attribution">
         Challenge by <a href="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt" target="_blank">Frontend Mentor</a>.
         Coded by <a href="https://github.com/michagodfrey">Michael Godfrey</a>.
       </div> 
    </main>
  );
}

export default App;
