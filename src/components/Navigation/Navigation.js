import React, { useContext } from "react";
import "./Navigation.css";
import { ThemeContext } from "../ThemeContext";
import { Link } from "react-router-dom";

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
            <Link style={{ color: theme.color }} className="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ color: theme.color }} to="/news">
              News
            </Link>
          </li>
          <li>
            <Link style={{ color: theme.color }} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link style={{ color: theme.color }} to="/contact">
              Contact
            </Link>
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
