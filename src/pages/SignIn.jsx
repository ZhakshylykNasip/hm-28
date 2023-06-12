import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { signInRequest } from "../store/auth/authThunk";
import { snackbarActions } from "../store/snackbar";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onChangeEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        password,
      };
      dispatch(signInRequest(data))
        .unwrap()
        .then(() => navigate("/"))
        .catch((error) => console.log(error));

      dispatch(snackbarActions.doSuccess("Successfully "));
    } catch (error) {
      dispatch(snackbarActions.doError("Something went wrong"));
    }
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
            id="outlined-basic"
            label="Gmail"
            variant="outlined"
            placeholder="gmail"
            value={email}
            onChange={onChangeEmailHandler}
          />
          <TextField
            sx={{ width: "100%" }}
            id="filled-basic"
            label="Password"
            variant="outlined"
            placeholder="password"
            value={password}
            onChange={onChangePasswordHandler}
          />
          <Button variant="contained" type="submit">
            Sign In
          </Button>
          <div>
            Want to open a new account ? <Link to="/signup">sign up</Link>
          </div>
        </Box>
      </Form>
    </div>
  );
};

const Form = styled("form")`
  margin: 0 auto;
  width: 500px;
  height: 300px;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
`;
