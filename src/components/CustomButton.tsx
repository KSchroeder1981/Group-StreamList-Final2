import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const CustomButton: React.FC<ButtonProps> = ({ text, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#007BFF", // Blue
        color: "white", // White text
        border: "none",
        borderRadius: "4px",
        padding: "0.5rem 1rem",
        fontSize: "16px",
        fontFamily: "Open Sans, sans-serif",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        ...style,
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
    >
      {text}
    </button>
  );
};

export default CustomButton;
