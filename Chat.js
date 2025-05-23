import React, { useEffect, useState } from "react";
import { socket } from "./socket";

const Chat = ({ username }) => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat(prev => [...prev, data]);
    });

    socket.on("chat_history", (history) => {
      setChat(history);
    });

    return () => {
      socket.off("receive_message");
      socket.off("chat_history");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      const msgData = {
        username,
        message,
        time: new Date().toLocaleTimeString()
      };
      socket.emit("send_message", msgData);
      setMessage("");
    }
  };

  return (
    <div className="chat">
      <div className="messages">
        {chat.map((msg, index) => (
          <div key={index}>
            <strong>{msg.username}</strong>: {msg.message} <em>{msg.time}</em>
          </div>
        ))}
      </div>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyDown={e => e.key === "Enter" && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
