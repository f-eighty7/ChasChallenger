import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './ChatTest.css';
import { GameSettingsPopup } from "./GameSettingsPopup";

axios.defaults.withCredentials = true;

export function ChatTestNy() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (message) => {
    try {
      const response = await axios.post('https://chasfantasy.azurewebsites.net/api/chat/message/', {
        message: "message",
        characterId: 10,
      });
      
      const newMessage = response.data;
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            {msg.message}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form className="chat-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button title="Settings" onClick={() => setButtonPopup(true)}>Settings</button>
        <GameSettingsPopup trigger={buttonPopup} setTrigger={setButtonPopup} />
      </form>
    </div>
  );
}
