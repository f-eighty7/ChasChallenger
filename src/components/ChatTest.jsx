import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export function ChatTest() {
    const user = useContext(AuthContext);
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSend = async () => {
        if (!query.trim() || !user || !user.token) {
            setResponse('Invalid user credentials or empty query.');
            return;
        }
        setLoading(true);
        try {
            const result = await axios.post('http://localhost:5001/getAnswerFromChatGPT', { query }, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
            if (result.status === 200) {
                setResponse(result.data);
            } else {
                setResponse('Failed to get response from the server.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setResponse(error.response?.data?.message || 'Failed to get response due to an error.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Type your message..."
            />
            <button onClick={handleSend} disabled={!query.trim() || loading}>
                {loading ? 'Sending...' : 'Send'}
            </button>
            <div>
                <p>Response: {response}</p>
            </div>
        </div>
    );
}
