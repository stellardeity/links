import { Container } from "@material-ui/core";
import { useRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/auth.context";
import { Loader } from "./components/Loader";
import { withRouter } from "react-router-dom";

const App = () => {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  
  if (!ready) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      <Container>{routes}</Container>
    </AuthContext.Provider>
  );
};

export default withRouter(App);
