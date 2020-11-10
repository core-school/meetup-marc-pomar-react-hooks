import React from "react";
import ReactDom from "react-dom";
import { App } from "./app";
import { ThemeSwitcher } from "./ThemeProvider";

ReactDom.render(
  <ThemeSwitcher>
    <App />
  </ThemeSwitcher>,
  document.getElementById("root")
);
