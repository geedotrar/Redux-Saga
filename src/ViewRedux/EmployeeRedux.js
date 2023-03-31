import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { doGetEmp, doAddEmp } from "../Redux/Action/emp_action";

export default function EmployeeRedux() {
  const dispatch = useDispatch();
  const emp = useSelector((state) => state.employee);
  const total = useSelector((state) => state.totalSalary);
  return (
    <div>
      <table>
        <th>Employee ID</th>
        <th>Full Name</th>
        <th>Salary</th>
        {emp ||
          [].map((emps) => {
            return (
              <tr key={emps.empId}>
                <td>{emps.empId}</td>
                <td>{emps.fullName}</td>
                <td>{emps.salary}</td>
              </tr>
            );
          })}
        <h3>Total Salary: {total}</h3>
      </table>
    </div>
  );
}
