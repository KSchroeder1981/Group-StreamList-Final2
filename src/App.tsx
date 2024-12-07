import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Checkout from "./pages/Checkout";
import About from "./pages/About"; // Import the About page

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks login status
  const [userProfile, setUserProfile] = useState<any>(null); // Stores user info

  // Handle login success
  const handleLoginSuccess = (credentialResponse: any) => {
    console.log("Login Successful:", credentialResponse);
    setIsAuthenticated(true);
    setUserProfile(credentialResponse);
  };

  // Handle login error
  const handleLoginError = () => {
    console.error("Login Failed");
    alert("Login failed. Please try again.");
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserProfile(null);
    alert("You have been logged out.");
  };

  return (
    <GoogleOAuthProvider clientId="261566374263-01bq8ac0daffo2fo5vupc8iiuglciuke.apps.googleusercontent.com">
      <Router>
        {isAuthenticated ? (
          <>
            <Navbar onLogout={handleLogout} />
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />{" "}
              {/* Add About route */}
            </Routes>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              backgroundColor: "#f0f0f0",
              textAlign: "center",
            }}
          >
            <div>
              <h1
                style={{ fontFamily: "Poppins, sans-serif", color: "#007BFF" }}
              >
                Welcome to EZTechMovie
              </h1>
              <p style={{ fontFamily: "Open Sans, sans-serif", color: "#555" }}>
                Please log in to access the app.
              </p>
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
              />
            </div>
          </div>
        )}
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
