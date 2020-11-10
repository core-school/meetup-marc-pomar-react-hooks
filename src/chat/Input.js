import React, { useState } from "react";
import styled from "styled-components";
import { Box, Flex } from "reflexbox";

const InputBox = styled.input`
  width: 100%;
  padding: 5px;
  font-size: 20px;
  box-sizing: border-box;
  border: 1px solid var(--core-orange);
`;

const Button = styled.div`
  height: 100%;
  width: 100%;
  padding: 5px;
  font-size: 20px;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  background: var(--core-orange);
  color: white;
  user-select: none;
  cursor: pointer;
  border: 1px solid var(--borders);
`;

const errorOnMessage = () => {
  throw new Error("You must add onMessage prop");
};

export const Input = ({ onMessage = errorOnMessage }) => {
  const [text, setText] = useState("");

  const handleSendMessage = () => {
    if (text == "") {
      console.warn("Text is empty");
      return;
    }
    console.log("Sending:", text);
    try {
      onMessage(text);
    } catch (error) {
      console.error(error);
    }
    setText("");
  };

  const handleKeyboard = (e) => e.key === "Enter" && handleSendMessage();
  const handleInputChange = (e) => setText(e.target.value);
  return (
    <Flex>
      <Box width={4 / 5}>
        <InputBox
          value={text}
          onKeyPress={handleKeyboard}
          onChange={handleInputChange}
        />
      </Box>
      <Box pl={2} width={1 / 5}>
        <Button onClick={handleSendMessage}>Enviar</Button>
      </Box>
    </Flex>
  );
};
