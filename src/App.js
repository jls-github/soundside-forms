import GeneralForm from "./components/GeneralForm";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
            <div>Submissions Page</div>
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
