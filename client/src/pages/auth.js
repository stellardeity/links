import React, { useState, useEffect } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  auth: {
    marginTop: "50px",
    display: "grid",
    placeItems: "center",
  },
});

export const Auth = () => {
  const classes = useStyles();
  const { loading, request, error, clearError } = useHttp();
  const message = useMessage();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    message(error);
    clearError();
  }, [clearError, error, message]);

  const registerHandler = async () => {
    try {
      const data = await request("/auth/register", "POST", { ...form });
      console.log(data);
    } catch (e) {}
  };

  return (
    <form className={classes.auth}>
      <TextField
        required
        name="email"
        label="Login"
        placeholder="login"
        onChange={changeHandler}
      />
      <TextField
        required
        name="password"
        label="Password"
        placeholder="password"
        onChange={changeHandler}
      />
      <div>
        <Button
          style={{ margin: "10px" }}
          onClick={registerHandler}
          variant="contained"
          color="primary"
          disabled={loading}
        >
          Sign in
        </Button>
        <Button
          style={{ margin: "10px" }}
          variant="contained"
          color="primary"
          disabled={loading}
        >
          Log in
        </Button>
      </div>
    </form>
  );
};
