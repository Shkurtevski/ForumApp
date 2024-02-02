import { NextPage } from "next";
import React from "react";

interface NavBarProps {
  icons: React.ReactNode[];
}

const NavBar: NextPage<NavBarProps> = ({ icons }) => {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <ul>
          {icons.map((icon, index) => (
            <li key={index}>{icon}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
