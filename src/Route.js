import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Employee from "./Employee";
import RegionViewApi from "./View/RegionViewApi";
import CountriesViewApi from "./View/CountriesViewApi";
import DepartmentsViewApi from "./View/DepartmentsViewApi";
import JobsViewApi from "./View/JobsViewApi";
import LocationsViewApi from "./View/LocationsViewApi";
import EmployeeViewApi from "./View/EmployeesViewApi";
import EmployeeRedux from "./ViewRedux/EmployeeRedux";
// import ProdCategoryViewApi from "./View/ProdCategoryViewApi";
import ProdCategorySaga from "./SagaView/ProdCategorySaga";
// import CounterHook from "./CounterHook";
import Signup from "./UserView/signup";
import Signin from "./UserView/signin";

export default function Route() {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        // { path: "counter", element: <CounterHook /> },
        { path: "employee", element: <Employee /> },
        { path: "region", element: <RegionViewApi /> },
        { path: "countries", element: <CountriesViewApi /> },
        { path: "departments", element: <DepartmentsViewApi /> },
        { path: "jobs", element: <JobsViewApi /> },
        { path: "locations", element: <LocationsViewApi /> },
        { path: "employees", element: <EmployeeViewApi /> },
        { path: "EmpRedux", element: <EmployeeRedux /> },
        // { path: "prodcat", element: <ProdCategoryViewApi /> },
        { path: "Saga", element: <ProdCategorySaga /> },
        { path: "signup", element: <Signup /> },
        { path: "signin", element: <Signin /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
