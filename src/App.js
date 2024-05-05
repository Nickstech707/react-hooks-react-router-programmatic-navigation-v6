import { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  // State to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Navigation function
  const navigate = useNavigate();

  // Function to set isLoggedIn to true
  const login = () => {
    setIsLoggedIn(true);
  };

  // Function to set isLoggedIn to false
  const logout = () => {
    setIsLoggedIn(false);
  };

  // Effect to handle navigation based on user login status
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    // Main app container
    <div className="app">
      {/* Conditional rendering based on user login status */}
      {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to="/login" />}
      {/* Rendering child routes */}
      <Outlet context={login} />
    </div>
  );
}

export default App;
