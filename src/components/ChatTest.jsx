import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './ChatTest.css';

axios.defaults.withCredentials = true;

export function ChatTest() {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [history, setHistory] = useState([]);
    const endOfMessagesRef = useRef(null);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSend = async () => {
        if (!query.trim()) return;

        setHistory([...history, { query, response: 'Loading...' }]);
        setQuery('');
        setLoading(true);

        try {
            const result = await axios.post('https://chasfantasy.azurewebsites.net/Chat/Message/', {
                message: query,
                characterId: 0
            });

            if (result.status === 200 && result.data) {
                setHistory(currentHistory => [...currentHistory.slice(0, -1), { query, response: result.data.message }]);
            } else {
                setHistory(currentHistory => [...currentHistory.slice(0, -1), { query, response: 'Failed to get response from the server.' }]);
            }
        } catch (error) {
            setHistory(currentHistory => [...currentHistory.slice(0, -1), {
                query,
                response: 'Failed to get response due to an error.'
                
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
                            <div className="user-query">
                                {msg.query}
                            </div>
                            <div className="chat-response">
                                {msg.response}
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
                    placeholder="Type a message..."
                />
                <button onClick={handleSend} disabled={!query.trim() || loading}>
                    {loading ? 'Sending...' : 'Send'}
                </button>
            </div>
        </div>
    );
}
