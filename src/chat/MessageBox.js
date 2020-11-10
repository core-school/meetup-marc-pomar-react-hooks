import React from "react";
import { Box } from "reflexbox";
import styled from "styled-components";

const MessageInner = styled.div`
  background: ${({ server }) =>
    server ? "var(--text-bg-alt)" : "var(--text-bg)"};
  border-radius: 5px;
  padding: 4px 8px;
  display: inline-block;
  color: white;
  margin: 5px 0;
`;

const MessageWrapper = styled.div`
  text-align: ${({ server }) => (server ? "left" : "right")};
`;

export const Message = ({ children, server = false }) => (
  <MessageWrapper server={server}>
    <MessageInner server={server}>{children}</MessageInner>
  </MessageWrapper>
);

export const MessagesList = ({ messages }) => {
  return (
    <Box
      p={3}
      style={{
        border: "1px solid var(--core-orange)",
        background: " var(--alt-bg)",
        overflow: "scroll",
        height: 400,
      }}
      my={2}
    >
      {messages.map(({ msg, type }, i) => (
        <Message key={i} server={type == "server"}>
          {msg}
        </Message>
      ))}
    </Box>
  );
};
