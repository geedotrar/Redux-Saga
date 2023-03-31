import React, { useEffect, useState } from "react";
import EmployeeInput from "./EmployeeInput";

export default function Employee() {
  const listEmployee = [
    { empID: 1, Fullname: "Naufal", Salary: 5000 },
    { empID: 2, Fullname: "Dian", Salary: 6000 },
    { empID: 3, Fullname: "Imel", Salary: 5500 },
  ];
  const tambahGaji = (id) => {
    setEmployee([
      ...employee.map((emp) => {
        if (id === emp.empID) {
          emp.Salary = emp.Salary + 500;
          return emp;
        } else {
          return emp;
        }
      }),
    ]);
  };
  const kurangGaji = (id) => {
    setEmployee([
      ...employee.map((emp) => {
        if (emp.Salary === 0) {
          return emp;
        } else if (id === emp.empID) {
          emp.Salary = emp.Salary - 500;
          return emp;
        } else {
          return emp;
        }
      }),
    ]);
  };
  const [employee, setEmployee] = useState(listEmployee);
  const [values, setValues] = useState({
    fullname: undefined,
    salary: 0,
  });
  const [total, setTotal] = useState(0);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const totalSalary = employee.reduce((sum, el) => sum + el.Salary, 0);
    setTotal(totalSalary);
  }, [employee]);

  const HandleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setEmployee([
      ...employee,
      {
        empID: employee.length + 1,
        Fullname: values.fullname,
        Salary: values.salary,
      },
    ]);
    setDisplay(false);
  };
  return (
    <div>
      <h2>List Employee</h2>
      <button onClick={() => setDisplay(true)}>Add Employee</button>
      <ul>
        {display ? (
          <EmployeeInput OnSubmit={onSubmit} HandleOnChange={HandleChange} setDisplay={setDisplay}></EmployeeInput>
        ) : (
          (employee || []).map((emp) => {
            return (
              <li key={emp.empID}>
                <p>Emp Id = {emp.empID}</p>
                <p>Name = {emp.Fullname}</p>
                <p>Salary = {emp.Salary}</p>
                <button onClick={() => tambahGaji(emp.empID)}> Tambah Gaji</button>
                <button onClick={() => kurangGaji(emp.empID)}> Kurang Gaji</button>
              </li>
            );
          })
        )}
        <h3>Total Salary = {total}</h3>
      </ul>
    </div>
  );
}
