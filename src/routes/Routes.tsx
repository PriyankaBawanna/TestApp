import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Login from "@app/login/Login";
import Register from "@app/register/Register";
import { allRoutes } from "@app/constant/path";
import HomePage from "@app/home/HomePage";
import FreeTest from "@app/freeTest/FreeTest";
import ProtectedRoute from "./Protected";
import Instruction from "@app/instruction/Instruction";
import TestPage from "@app/testPage/TestPage";
import Timer from "@app/timer/Timer";
import Result from "@app/result/result";
import Calculator from "@app/calculator/Calculator";

function Home() {
  return (
    <Router>
      <Routes>
        <Route path={allRoutes.login} element={<Login />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path={allRoutes.home} element={<HomePage />} />
          <Route path={allRoutes.freeTest} element={<FreeTest />} />
          <Route path={allRoutes.instruction} element={<Instruction />} />
          <Route path={allRoutes.testPage} element={<TestPage />} />
          <Route path={allRoutes.timer} element={<Timer />} />
          <Route path={allRoutes.result} element={<Result />} />
          <Route path={allRoutes.calculator} element={<Calculator />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Home;
