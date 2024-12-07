import React from "react";
import { NavLink } from "react-router-dom";
import CustomButton from "./CustomButton";
import styles from "../styles/Navbar.module.css";

interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  return (
    <nav className={styles.navbar}>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{
            marginRight: "1rem",
            textDecoration: "none",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
          }}
        >
          Search
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{
            marginRight: "1rem",
            textDecoration: "none",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
          }}
        >
          Favorites
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{
            marginRight: "1rem",
            textDecoration: "none",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
          }}
        >
          Cart
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{
            marginRight: "1rem",
            textDecoration: "none",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
          }}
        >
          About
        </NavLink>
      </div>
      <CustomButton text="Logout" onClick={onLogout} />
    </nav>
  );
};

export default Navbar;
