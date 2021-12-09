import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/index";
function App() {
  return (
    <Router>
      <div className="App">
        < Home />
      </div>
    </Router>
  );
}

export default App;
