import './App.css';
import Search from "./Components/Search"
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Description from "./Components/Description"

function App() {
  return (
    <div className="App">
    <Router>
    <Route exact path="/">
    <Search/>
    </Route>
    <Route path="/desc">
      <Description />
    </Route>
    </Router>
    </div>
    
  );
}

export default App;
