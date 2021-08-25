import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import React, { MouseEvent, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (e: MouseEvent) => {
    e.preventDefault();
    auth.logout();
    history.push("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
        <Typography variant="h6">Links</Typography>
        </IconButton>
        <NavLink to="/create">
          <Typography variant="h6">Create</Typography>
        </NavLink>
        <NavLink to="/Links">
          <Typography variant="h6">Links</Typography>
        </NavLink>
        <a href="#" onClick={logoutHandler}>
          <Button color="inherit">Log Out</Button>
        </a>
      </Toolbar>
    </AppBar>
  );
};
