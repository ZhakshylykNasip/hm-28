import React, { useCallback, useState } from "react";
import { Header } from "../components/header/Header";

import { Outlet } from "react-router-dom";
import { Basket } from "../components/basket/Basket";

export const UsersLayout = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <>
      <Header toggleHandler={toggleHandler} />

      {toggle && <Basket toggleHandler={toggleHandler} toggle={toggle} />}
      <div style={{ marginTop: "150px" }}>
        <Outlet />
      </div>
    </>
  );
};
