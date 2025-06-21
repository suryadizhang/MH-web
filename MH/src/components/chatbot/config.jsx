import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "HibachiBot",
  initialMessages: [createChatBotMessage("Hey there! I'm HibachiBot 🍱 — your personal chef assistant. Ask me anything about our menu, booking, or prices!")],
  customStyles: {
    botMessageBox: { backgroundColor: "#ff5722" },
    chatButton: { backgroundColor: "#ff5722" },
  },
};

export default config;
