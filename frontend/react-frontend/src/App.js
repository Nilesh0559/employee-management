import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponenent from "./components/HeaderComponenent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponenent />
        <div className="container">
          <Switch>
            <Route path="/" component={ListEmployeeComponent} />
            <Route path="/employees-list" component={ListEmployeeComponent} />
            <ListEmployeeComponent />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
