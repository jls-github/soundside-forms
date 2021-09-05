import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SubmissionsPage from "./components/SubmissionsPage";
import FormRouteContainer from "./routeContainers/FormRouteContainer";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/forms/:formName">
            <FormRouteContainer />
          </Route>
          <Route exact path="/submissions">
            <SubmissionsPage />
          </Route>
          <Route path="*">
            <div>404</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
