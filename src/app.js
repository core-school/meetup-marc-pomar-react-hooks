import React from "react";
import { Flex, Box } from "reflexbox";
import { Chat } from "./chat/Chat";
import { Footer } from "./Footer";
import { Global, css } from "@emotion/core";
import styled from "styled-components";
import { useTheme } from "./ThemeProvider";

const Container = styled(Flex).attrs({
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
})``;

export const App = () => {
  const { theme } = useTheme();

  return (
    <Flex flexDirection="column" p={4}>
      <Global
        styles={css`
          ${theme}
          body {
            background: var(--main-bg);
          }
        `}
      />
      <Container>
        <h1>React Hooks - Chat Example </h1>
        <Box width={[1, 2 / 3, 1 / 2]}>
          <Chat />
        </Box>
      </Container>
      <Footer />
    </Flex>
  );
};
