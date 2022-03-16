import React, { useState } from "react";
import Jobs from "./Jobs";
import Filter from "./Filter";
import data from "./data.json";

function App() {
  
  const [jobs, setJobs] = useState(data);
  const [filteredList, setFilteredList] = useState([]);

  const addFilterItem = (item) => {
    if (!filteredList.includes(item)) {
      setFilteredList([...filteredList, item]);
    }
    filterJobs(item);
  }

  const filterJobs = (item) => {
    let filterList = []
    data.forEach((job) => {
      if (
        job.role.includes(item) ||
        job.level.includes(item) ||
        job.languages.includes(item) ||
        job.tools.includes(item)
      ) {
        filterList.push(job);
      }
    });
    if (filterList) {
      setJobs(filterList);
    } else {
      setJobs(data);
    }
  }

  const clearFilter = () => {
    setFilteredList([]);
    setJobs(data);
  }

  const removeItem = (removed) => { 
    if (filteredList.length > 1) {
      setFilteredList(filteredList.filter((item) => item !== removed));
      reFilterJobs(filteredList);
    } else {
      clearFilter();
    }
  }

  const reFilterJobs = (filteredList) => {
    // let newJobsList = [];
    // filteredList.forEach((item) => {
    //   data.forEach((job) => {
    //     if (
    //       job.role.includes(item) ||
    //       job.level.includes(item) ||
    //       job.languages.includes(item) ||
    //       job.tools.includes(item)
    //     ) {
    //       if (!newJobsList.includes(job)) {
    //         newJobsList.push(job);
    //       }
    //     }
    //   });
    // });
    // console.log(newJobsList);
    // setJobs(newJobsList);
    let newFilters = new Set(filteredList);
    let jobTags = new Set({data})

    
  }

  console.log(jobs)

  return (
    <main>
      {filteredList.length > 0 && <Filter filteredList={filteredList} clearFilter={clearFilter} removeItem={removeItem} />}
      <Jobs jobs={jobs} addFilterItem={addFilterItem} />
    </main>
  );
}

export default App;
