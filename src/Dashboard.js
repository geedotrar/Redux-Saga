import React from "react";
import { Outlet } from "react-router-dom";
const navigate = [
  { name: "Dashboard", href: "/", current: true },
  // // { name: "Employee", href: "employee", current: false },
  // { name: "Region Api", href: "region", current: false },
  // { name: "Countries Api", href: "countries", current: false },
  // { name: "Departments Api", href: "departments", current: false },
  // { name: "Jobs Api", href: "jobs", current: false },
  // { name: "Locations Api", href: "locations", current: false },
  // { name: "Employees Api", href: "employees", current: false },
  // { name: "Employeees REDUX", href: "EmpRedux", current: false },
  // { name: "Prodcat", href: "prodcat", current: false },
  { name: "Product Category Saga", href: "Saga", current: false },
  { name: "Sign Up", href: "signup", current: false },
  { name: "Sign In", href: "signin", current: false },
];
export default function Dashboard() {
  return (
    //     <div>
    //       {navigate.map((item) => {
    //         return (
    //           <a key={item.name} href={item.href} style={{ padding: "3px", color: "blue", textDecoration: "none", border: "1px solid black" }}>
    //             {item.name}
    //           </a>
    //         );
    //       })}
    //       <header>
    //         <h1>{navigate.name}</h1>
    //       </header>
    //       <main>
    //         <Outlet />
    //       </main>
    //     </div>
    //   );
    // }

    <div>
      <div class="items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="w-full block flex-grow lg:flex lg:items-centerlg:w-auto">
          <div class="text-sm lg:flex-grow">
            {navigate.map((item) => {
              return (
                <a class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" key={item.name} href={item.href}>
                  {item.name}
                </a>
              );
            })}
            <header>
              <h1>{navigate.name}</h1>
            </header>
          </div>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
