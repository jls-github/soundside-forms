import GeneralForm from "./components/GeneralForm";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SubmissionsPage from "./components/SubmissionsPage";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/general">
            <GeneralForm />
          </Route>
          <Route exact path="/submissions">
            <SubmissionsPage />
          </Route>
          <Route path="*">
            <div>No form found at this url</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
