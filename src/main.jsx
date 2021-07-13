import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import "./styles/index.scss";

const ThemeSwitcher = () => {
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = React.useState(false);

  const classes = classNames({
    app: true,
    dark: isDarkThemeEnabled,
    light: !isDarkThemeEnabled,
  });

  const handleCheckboxInputClick = () => {
    setIsDarkThemeEnabled(!isDarkThemeEnabled);
  };

  return (
    <div className={classes}>
      <h1>Vite Test App!</h1>

      <label className="toggle">
        <input
          className="toggle-checkbox"
          type="checkbox"
          value={isDarkThemeEnabled}
          onClick={handleCheckboxInputClick}
        />
        <div className="toggle-switch"></div>
        <span className="toggle-label">
          {isDarkThemeEnabled ? "Dark" : "Light"} Theme
        </span>
      </label>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcher />
  </React.StrictMode>,
  document.getElementById("app")
);
