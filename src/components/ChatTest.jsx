import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './ChatTest.css';
import TypingText from './TypingText';
import { GameSettingsPopup } from "./GameSettingsPopup";

axios.defaults.withCredentials = true;

export function ChatTest() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const endOfMessagesRef = useRef(null);
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSend = async () => {
    if (!query.trim()) return;

    const newHistory = [...history, { query, response: "loading" }];
    setHistory(newHistory);
    setQuery("");
    setLoading(true);

        try {
            const result = await axios.post(`https://chasfantasy.azurewebsites.net/api/chat/message/`, {
                message: "query",
                characterId: 10
            });

            if (result.status === 200 && result.data) {
                console.log("Svar:", result.data.message);
                setHistory(currentHistory => [...currentHistory.slice(0, -1), { query, response: result.data.message }]);
            } else {
                setHistory(currentHistory => [...currentHistory.slice(0, -1), { query, response: 'Failed to get response from the server.' }]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setHistory(currentHistory => [...currentHistory.slice(0, -1), {
                query,
                response: error.response?.data?.message || 'Failed to get response due to an error.'
            }]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (endOfMessagesRef.current) {
            endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    return (
        <div className="chat-container">
            <div className="chat-box">
                <div className="chat-history">
                    {history.map((msg, index) => (
                        <div key={index} className="chat-message">
                            <div className="user-query bubble">
                                {msg.query}
                            </div>
                            <div className="chat-response bubble">
                              {msg.response === 'loading' ? (
                                <span className="loader"></span>
                              ): (
                                <TypingText text={msg.response} />   
                                
                              )}   
                              
                            </div>
                        </div>
                    ))}
                    <div ref={endOfMessagesRef} />
                </div>
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="skriv nåt för fan..."
                />
                 <button onClick={handleSend} disabled={!query.trim() || loading}>
                    {loading ? 'Sending...' : 'Send'}
                </button>
                <button title="Settings" onClick={() => setButtonPopup(true)}>Settings</button>
                    <GameSettingsPopup trigger={buttonPopup} setTrigger={setButtonPopup} />
               
            </div>
        </div>
    );
}

