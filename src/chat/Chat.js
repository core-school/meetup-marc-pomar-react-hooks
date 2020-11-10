import React from "react";
import { Input } from "./Input";
import { Box } from "reflexbox";
import { MessagesList } from "./MessageBox";
import { useMessages } from "../lib/useMessages";

export const Chat = () => {
  const { messages, addMessage } = useMessages();

  return (
    <Box>
      <MessagesList messages={messages} />
      <Input onMessage={addMessage} />
    </Box>
  );
};
