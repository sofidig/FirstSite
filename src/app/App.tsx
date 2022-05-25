import React, { useEffect, useState } from "react";
import "../theme/index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../modules/dashboard/Dashboard";
import { APP_ROUTES } from "../application/constants/AppRoutes";
import Login from "../modules/login/Login";
import SignUp from "../modules/signup/SignUp";
import authService from "../application/services/AuthService";
import userApi from "../apis/UserApi";
import Profile from "../modules/profile/Profile";

function App() {
  const [authLoading, setAuthLoading] = useState(true);

  const authInitialize = async () => {
    const authResult = await authService.RefreshAccessToken();
    console.log(authResult);
    if (authResult) {
      const res = await userApi.getUserDetailsAsync();
      setAuthLoading(false);
      console.log(res);
    }
  };
  useEffect(() => {
    authInitialize();
  }, []);

  return (
    <>
      {authLoading ? (
        <h1>Loading...</h1>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Navigate to={`/${APP_ROUTES.DASHBOARD}`} replace={true} />
              }
            />
            <Route path={`/${APP_ROUTES.DASHBOARD}`} element={<Dashboard />} />
            <Route path={`/${APP_ROUTES.LOGIN}`} element={<Login />} />
            <Route path={`/${APP_ROUTES.SIGNUP}`} element={<SignUp />} />
            <Route path={`/${APP_ROUTES.PROFILE}`} element={<Profile />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
