import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { USERS_ROLE } from "../constants";
import { useDispatch } from "react-redux";
import { Button } from "../components/UI/button/Button";
import { signUpRequest } from "../store/auth/authThunk";
import { snackbarActions } from "../store/snackbar";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirimPassword, setConfirimPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  };
  const onChangeGmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirimHandler = (e) => {
    setConfirimPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

      const data = {
        name,
        email,
        password,
        role: USERS_ROLE.ADMIN,
      };

      if (password !== confirimPassword) {
        alert("Passwords don't match");
        return;
      }

      dispatch(signUpRequest(data))
        .unwrap()
        .then(() => navigate("/signin"))
        .catch((error) => console.log(error));
      dispatch(snackbarActions.doSuccess("Successfully"));
   
  };

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ width: "100%" }}
            id="filled-basic"
            label="Name"
            variant="outlined"
            placeholder="name"
            value={name}
            onChange={onChangeNameHandler}
            type="text"
          />
          <TextField
            sx={{ width: "100%" }}
            id="filled-basic"
            label="Gmail"
            variant="outlined"
            placeholder="gmail"
            value={email}
            type="email"
            onChange={onChangeGmailHandler}
          />
          <TextField
            sx={{ width: "100%" }}
            id="filled-basic"
            label="Password"
            variant="outlined"
            placeholder="password"
            value={password}
            onChange={onChangePasswordHandler}
            type="password"
          />
          <TextField
            sx={{ width: "100%" }}
            id="filled-basic"
            label="Confirim Password"
            variant="outlined"
            placeholder="password"
            value={confirimPassword}
            onChange={onChangeConfirimHandler}
            type="password"
          />
          <Button type="submit" variant="contained">
            Sign Up
          </Button>

          <Link to="/signin"> SignIn with current account ? </Link>
        </Box>
      </Form>
    </div>
  );
};

const Form = styled("form")`
  margin: 0 auto;
  width: 500px;
  height: 450px;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
`;
