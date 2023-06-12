import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { UsersLayout } from "../layout/UsersLayout";
import { MealLayout } from "../layout/MealLayout";
import { AdminLayout } from "../layout/AdminLayout";
import { Meals } from "../pages/admin/Meals";
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./ProtectedRoute";
import { USERS_ROLE } from "../constants";

export const MainRoutes = () => {
  const role = useSelector((state) => state.auth.user.role);

  const isAllowed = (roles) => {
    return roles.includes(role);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute
            isAllowed={isAllowed([USERS_ROLE.GUEST, USERS_ROLE.USER])}
            fallBacPath="/admin"
            component={UsersLayout}
          />
        }
      >
        <Route
          index
          element={
            <ProtectedRoute
              isAllowed={isAllowed([USERS_ROLE.GUEST, USERS_ROLE.USER])}
              fallBacPath="/admin"
              component={MealLayout}
            />
          }
        />
        <Route
          path="signin"
          element={
            <ProtectedRoute
              isAllowed={isAllowed([USERS_ROLE.GUEST, USERS_ROLE.USER])}
              fallBacPath={role === USERS_ROLE.ADMIN ? "/admin" : "/"}
              component={SignIn}
            />
          }
        />

        <Route
          path="signup"
          element={
            <ProtectedRoute
              isAllowed={isAllowed([USERS_ROLE.GUEST, USERS_ROLE.USER])}
              fallBacPath={role === USERS_ROLE.ADMIN ? "/admin" : "/"}
              component={SignUp}
            />
          }
        />
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedRoute
            isAllowed={isAllowed([USERS_ROLE.ADMIN])}
            fallBacPath="/"
            component={AdminLayout}
          />
        }
      >
        <Route index element={<Meals />} />
      </Route>
    </Routes>
  );
};
