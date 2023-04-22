import React from "react";

const Header = () => {
  //add some inline styling
  const headerStyle = {
    color: "#FFFFFF",
    backgroundColor: "#1A1A1A",
    padding: "10px 5px 10px 5px",
    borderRadius: "8px",
    textAlign: "center",
    fontSize: "1em",
    fontWeight: "500",
    fontFamily: "inherit",
  };
  return <div style={headerStyle}>{import.meta.env.VITE_APP}</div>;
};

export default Header;
