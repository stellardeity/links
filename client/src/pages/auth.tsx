import React, { useState, useEffect, useContext, ChangeEvent } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { AuthContext } from "../context/auth.context";

const useStyles = makeStyles({
  auth: {
    marginTop: "50px",
    display: "grid",
    placeItems: "center",
  },
});

export const Auth = () => {
  const auth = useContext(AuthContext);
  const classes = useStyles();
  const { loading, request, error, clearError } = useHttp();
  const message = useMessage();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    message(error);
    clearError();
  }, [clearError, error, message]);

  const registerHandler = async () => {
    try {
      await request("api/auth/register", "POST", { ...form });
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <form className={classes.auth}>
      <TextField
        // autoFocus
        required
        name="email"
        label="Login"
        placeholder="login"
        value={form.email}
        onChange={changeHandler}
      />
      <TextField
        required
        type="password"
        name="password"
        label="Password"
        placeholder="password"
        value={form.password}
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
          onClick={loginHandler}
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
