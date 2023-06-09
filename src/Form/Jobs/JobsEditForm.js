import React, { useEffect, useState } from "react";
import JobsApi from "../../api/JobsApi";

export default function JobsEditForm(props) {
  const [jobs, setJobs] = useState([]);
  const [values, setValue] = useState({
    id: undefined,
    jobTitle: undefined,
    minSalary: undefined,
    maxSalary: undefined,
  });

  useEffect(() => {
    JobsApi.findOneJobs(props.id).then((data) => {
      setJobs(data);
      console.log(jobs);
    });
  }, []);

  const HandleChange = (Alljobs) => (event) => {
    setValue({ ...values, [Alljobs]: event.target.value });
  };

  const onEdit = async () => {
    const payload = {
      jobId: props.id,
      jobTitle: values.jobTitle,
      minSalary: values.minSalary,
      maxSalary: values.maxSalary,
    };
    console.log(jobs);
    await JobsApi.updateJobs(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Successfully Updated");
    });
  };

  return (
    <div>
      <h2>Edit Jobs</h2>
      <form onSubmit={onEdit}>
        <div>
          <label>Job ID :</label>
          <input type="text" defaultValue={jobs.jobId} disabled></input>
        </div>
        <div>
          <label>Job Title : </label>
          <input type="text" defaultValue={jobs.jobTitle} onChange={HandleChange("jobTitle")}></input>
        </div>
        <div>
          <label>Min Salary: </label>
          <input type="text" defaultValue={jobs.minSalary} onChange={HandleChange("minSalary")}></input>
        </div>
        <div>
          <label>Max Salary: </label>
          <input type="text" defaultValue={jobs.maxSalary} onChange={HandleChange("maxSalary")}></input>
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
