import { Flex, Box } from "reflexbox";
import React from "react";
import { useTheme } from "./ThemeProvider";

export const Footer = () => {
  const { name, changeTheme } = useTheme();
  return (
    <>
      <Flex alignItems="center" justifyContent="center" pt={4}>
        <button onClick={() => changeTheme("orange")}>
          Change to orange Theme
        </button>
        <button onClick={() => changeTheme("light")}>
          Change to light Theme
        </button>
      </Flex>
      <Flex alignItems="center" justifyContent="center" pt={4}>
        <Box pr={2}>
          <img
            src={`https://api.brandy.run/core/${
              name == "orange" ? "monologo-white" : "logo"
            }`}
            width="20"
          />
        </Box>
        <p>CORE, Code School</p>
      </Flex>
    </>
  );
};
