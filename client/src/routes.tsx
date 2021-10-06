import React from "react";
import { Create, Auth } from "./pages";
import { Switch, Route, Redirect } from "react-router-dom";

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/create" exact>
          <Create />
        </Route>
        <Redirect to="/create" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/(login|register)" exact>
        <Auth />
      </Route>
      <Redirect to="/login" />
    </Switch>
  );
};
