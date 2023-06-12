import React from "react";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
