import React, { useContext } from "react";
import "./Navigation.css";
import { ThemeContext } from "../ThemeContext";

function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div>
      <nav
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <ul>
          <li>
            <a style={{ color: theme.color }} className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a style={{ color: theme.color }} href="#news">
              News
            </a>
          </li>
          <li>
            <a style={{ color: theme.color }} href="#about">
              About
            </a>
          </li>
          <li>
            <a style={{ color: theme.color }} href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <div style={{ position: "relative" }}>
          <a
            className="switch-mode"
            href="#"
            onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: "none",
            }}
            data-testid="toggle-theme-btn"
          >
            Switch Nav to {!dark ? "Dark" : "Light"} mode
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
