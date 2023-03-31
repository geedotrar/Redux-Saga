import React, { useEffect, useState } from "react";
import Testing4 from "./Testing4";

export default function Testing3() {
  const listEmployee = [
    {
      empId: 1,
      firstName: "Ahmad",
      lastName: "Naufal",
      salary: 1000,
    },
    {
      empId: 2,
      firstName: "Rahmat",
      lastName: "Efaldy",
      salary: 2000,
    },
    {
      empId: 3,
      firstName: "Dahmar",
      lastName: "Laufan",
      salary: 3000,
    },
  ];
  const tambahGaji = (id) => {
    setEmployee([
      ...employee.map((emp) => {
        if (id === emp.empId) {
          emp.salary = emp.salary + 500;
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
        if (id === emp.empId) {
          emp.salary = emp.salary - 500;
          return emp;
        } else {
          return emp;
        }
      }),
    ]);
  };

  const [total, setTotal] = useState(0);
  const [employee, setEmployee] = useState(listEmployee);
  const [display, setDisplay] = useState(false);
  const [values, setValues] = useState([
    {
      firstname: undefined,
      lastname: undefined,
      salary: undefined,
    },
  ]);

  useEffect(() => {
    const totalSalary = employee.reduce((sum, el) => sum + el.salary, 0);
    setTotal(totalSalary);
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    setEmployee([
      ...employee,
      {
        empId: employee.length + 1,
        firstName: values.firstname,
        lastName: values.lastname,
        salary: values.salary,
      },
    ]);
    setDisplay(false);
  };

  const handleChange = (datas) => (event) => {
    setValues({
      ...values,
      [datas]: event.target.value,
    });
  };

  const handleDelete = (id) => {
    let deleted = [...employee];
    let filterData = deleted.filter((emp) => emp.empId !== id);
    setEmployee(filterData);
  };
  return (
    <div>
      <button
        onClick={() => setDisplay(true)}
        type="button"
        class="mt-4 inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
      >
        Add Employee
      </button>
      {display ? (
        <Testing4 handleOnSubmit={handleSubmit} handleOnChange={handleChange} setDisplay={setDisplay} />
      ) : (
        <div>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="bg-white border-b">
                      <tr>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          ID
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          FirstName
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          LastName
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Salaray
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Action
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          +|- Salary
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {employee.map((emp) => {
                        return (
                          <tr class="bg-white border-b">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{emp.empId}</td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{emp.firstName}</td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{emp.lastName}</td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{emp.salary}</td>
                            <td>
                              <button
                                onClick={() => handleDelete(emp.empId)}
                                class="inline-block px-1 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                              >
                                Delete
                              </button>
                            </td>
                            <td>
                              <div>
                                <div class="flex flex-row mx-auto">
                                  <button onClick={() => tambahGaji(emp.empId)} type="button" class="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3">
                                    <div class="flex flex-row align-middle">
                                      <p class="ml-2">+</p>
                                    </div>
                                  </button>
                                  <button onClick={() => kurangGaji(emp.empId)} type="button" class="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3">
                                    <div class="flex flex-row align-middle">
                                      <p class="ml-2">-</p>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <h1>Total Salary: </h1>
                  <h2>{total}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
