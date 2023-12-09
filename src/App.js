import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './App.css';
import Resume from "./pages/Resume";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/Resume" Component={Resume} />
        </Routes>
    </Router>
  );
}

export default App;
