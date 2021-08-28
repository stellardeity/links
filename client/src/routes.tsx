import React from "react";
import { Links, Create, Detail, Auth } from "./pages";
import { Switch, Route, Redirect } from "react-router-dom";

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/links" exact>
          <Links />
        </Route>
        <Route path="/create" exact>
          <Create />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Redirect to="/create" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <Auth />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
