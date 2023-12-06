import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import SignUp from './pages/SignUp';
import Resume from "./pages/Resume";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" Component={Resume} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
          <Route path="/signup" Component={SignUp} />
          <Route path="/signin" Component={SignIn} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
