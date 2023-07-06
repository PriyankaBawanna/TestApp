import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Login from "@app/login/Login";
import Protected from "@app/routes/Protected";
import Register from "@app/register/Register";
import { allRoutes } from "@app/constant/path";
import HomePage from "@app/home/HomePage";
function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={allRoutes.login} element={<Login />}></Route>

          <Route
            path={allRoutes.home}
            element={
              <Protected>
                <HomePage />
              </Protected>
            }
          />

          <Route path="*" element={<>Error</>} />
          <Route path={allRoutes.registration} element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Home;
