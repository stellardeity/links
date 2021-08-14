import React from "react";
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
  return (
    <form className={classes.auth}>
      <TextField required label="Login" placeholder="login" />
      <TextField required label="Password" placeholder="password" />
      <Button
        style={{ marginTop: "10px" }}
        type="button"
        variant="contained"
        color="primary"
      >
        Log in
      </Button>
    </form>
  );
};
