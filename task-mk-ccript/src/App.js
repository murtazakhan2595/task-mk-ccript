import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Appointments from "./pages/Appointments";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Appointments /> : <Navigate to="/login" />}
            />
            <Route
              path="/appointments"
              element={user ? <Appointments /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/appointments" />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
