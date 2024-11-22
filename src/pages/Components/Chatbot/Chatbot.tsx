import React, { useState } from "react";
import styles from "./Chatbot.module.css"; // Create a CSS module for styling

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "user" }]);
      setMessage("");
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      <h2>Chatbot</h2>
      <div className={styles.messages}>
        <ul>
          {messages.map((msg, index) => (
            <li key={index} className={styles.message}>
              {msg.text}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className={styles.input}
        />
        <button onClick={handleSendMessage} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
