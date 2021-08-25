import React from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
    history.push("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
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
