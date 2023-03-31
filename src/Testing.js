import React, { useEffect, useState } from "react";
import Testing2 from "./Testing2";
export default function Testing() {
  const listEmployee = [
    { empID: 1, Fullname: "Naufal", Salary: 5000 },
    { empID: 2, Fullname: "Dian", Salary: 6000 },
    { empID: 3, Fullname: "Imel", Salary: 5500 },
  ];

  const [employee, setEmployee] = useState(listEmployee);
  const [display, setDisplay] = useState(false);
  const [values, setValues] = useState([
    {
      fullname: undefined,
      salary: undefined,
    },
  ]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalSalary = employee.reduce((sum, el) => sum + el.Salary, 0);
    setTotal(totalSalary);
  });
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
        if (id === emp.empID) {
          emp.Salary = emp.Salary - 500;
          return emp;
        } else {
          return emp;
        }
      }),
    ]);
  };

  const HandleChange = (name) => (event) => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
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

  // const handleDelete = (id) => {
  //   let deleted = [...employee];
  //   let filterData = deleted.filter((contact) => contact.empID !== id);
  //   setEmployee(filterData);
  // };

  const handleDelete = (id) => {
    let deleted = [...employee];
    let filtered = deleted.filter((emp) => emp.empID !== id);
    setEmployee(filtered);
  };
  return (
    <div>
      <h2>Total Salary: {total}</h2>
      <button onClick={() => setDisplay(true)} class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
        Add Employee
      </button>
      {display ? (
        <Testing2 OnSubmit={onSubmit} HandleOnChange={HandleChange} setDisplay={setDisplay} />
      ) : (
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="bg-gray-200 border-b">
                    <tr>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        ID
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Fullname
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Salary
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {(employee || []).map((emp) => {
                      return (
                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{emp.empID}</td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{emp.Fullname}</td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{emp.Salary}</td>
                          <button onClick={() => tambahGaji(emp.empID)} class="group rounded-2xl h-12 w-48 bg-green-500 font-bold text text-white relative overflow-hidden">
                            Tambah Gaji
                          </button>
                          <button onClick={() => kurangGaji(emp.empID)} class="group rounded-2xl h-12 w-48 bg-green-500 font-bold text text-white relative overflow-hidden">
                            Kurang Gaji
                          </button>
                          <button onClick={() => handleDelete(emp.empID)} class="group rounded-2xl h-12 w-48 bg-green-500 font-bold text text-white relative overflow-hidden">
                            Hapus
                          </button>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
