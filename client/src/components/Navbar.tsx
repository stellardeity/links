import { AppBar, Button, makeStyles, Toolbar } from "@material-ui/core";
import React, { MouseEvent, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  navlink: {
    color: "white",
    textDecoration: "none",
  },
});

export const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (e: MouseEvent) => {
    e.preventDefault();
    auth.logout();
    history.push("/");
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <div>
          <NavLink className={classes.navlink} to="/create">
            <Button color="inherit">
              Create
            </Button>
          </NavLink>
          <NavLink className={classes.navlink} to="/links">
            <Button color="inherit">
              Links
            </Button>
          </NavLink>
        </div>
        <Button onClick={logoutHandler} color="inherit">
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};
