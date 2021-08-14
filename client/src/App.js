import { Container } from "@material-ui/core";
import { useRoutes } from "./routes";

const App = () => {
  const routes = useRoutes(false);
  return <Container>{routes}</Container>;
};

export default App;
