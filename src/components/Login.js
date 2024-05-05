import { useState } from "react";
import { useOutletContext } from "react-router-dom";

// Define the Login component
function Login() {
  // Get the login function from the outlet context
  const login = useOutletContext();

  // Initialize the form data state with empty values for username and password
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Handle changes to the form input fields
  function handleChange(e) {
    // Update the corresponding form data field with the new value
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Handle form submission
  function handleLogin(e) {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Call the login function
    login();
  }

  // Render the login form
  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Username</label>
      <div>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <label htmlFor="password">Password</label>
      <div>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
