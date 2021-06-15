import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NameForm from "./Components/NameForm";
import SkillsForm from "./Components/SkillsForm";
import BrandsForm from "./Components/BrandsForm";

function App() {
  return (
    <div id="app">
      <Router>
        <Route path="/" exact component={NameForm} />
        <Route path="/skills" exact component={SkillsForm} />
        <Route path="/brands" exact component={BrandsForm} />
      </Router>
    </div>
  );
}

export default App;
