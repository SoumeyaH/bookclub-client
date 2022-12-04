import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import HomePage from "./pages/Home";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <UserContextProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<HomePage />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
          </Routes>
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;
