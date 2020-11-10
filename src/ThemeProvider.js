import React, { useContext, useState } from "react";
import { css } from "@emotion/core";

const lightTheme = {
  name: "light",
  styles: css`
    :root {
      --core-orange: rgb(251, 105, 66);
      --text-bg: var(--core-orange);
      --text-bg-alt: gray;
      --alt: #ffffff;
      --main-bg: #fff;
      --alt-bg: #fff;
      --borders: var(--core-orange);
    }
  `,
};

const orangeTheme = {
  name: "orange",
  styles: css`
    :root {
      --core-orange: rgb(251, 105, 66);
      --text-bg: var(--core-orange);
      --text-bg-alt: #f2aa96;
      --alt: #ffffff;
      --main-bg: var(--core-orange);
      --alt-bg: #fff;
      --borders: #fff;
    }
  `,
};

export const ThemeContext = React.createContext();

export const useTheme = () => {
  const { selectedTheme, changeTo } = useContext(ThemeContext);
  return {
    theme: selectedTheme.styles,
    name: selectedTheme.name,
    changeTheme: (themeName) => {
      if (themeName == "orange") {
        changeTo({ selectedTheme: orangeTheme });
      } else if (themeName == "light") {
        changeTo({ selectedTheme: lightTheme });
      } else {
        console.warn("Unrecognized theme");
      }
    },
  };
};

export const INITIAL_THEME = {
  selectedTheme: lightTheme,
};

export const ThemeSwitcher = ({ children }) => {
  const [theme, changeTo] = useState(INITIAL_THEME);
  return (
    <ThemeContext.Provider value={{ ...theme, changeTo }}>
      {children}
    </ThemeContext.Provider>
  );
};
