import React from "react";
import { Routes, Route } from "react-router-dom";
import Task from "../Components/Task";
import Home from "../Pages/Home";
import TablePage from "../Pages/TablePage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task1" element={<Task />} />
      <Route path="/task2" element={<TablePage />} />
    </Routes>
  );
};

export default AllRoutes;
