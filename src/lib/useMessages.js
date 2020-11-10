import { useState } from "react";

export const useMessages = () => {
  const [messages, setMessages] = useState([
    { msg: "Hola", type: "client" },
    { msg: "¿estás disponible?", type: "client" },
    { msg: "¿que tal?", type: "server" },
    { msg: "espera, dame 5 minutos", type: "server" },
    { msg: "perfecto, espero", type: "client" },
  ]);
  return {
    messages,
    addMessage: (text) => {
      setMessages([...messages, { msg: text, type: "client" }]);
    },
  };
};
