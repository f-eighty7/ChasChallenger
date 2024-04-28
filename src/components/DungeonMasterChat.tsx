import { useEffect, useState } from "react";
//import { fetchData } from "../Store/Slices/FetchSlice";
//import { useDispatch } from "react-redux";
import { MessageItem } from "./MessageItem";
import { StoryMessages } from "../types/types";
import { addStoryMessage, getStoryMessages } from "../api/storyMessagesApi";

export const DungeonMasterChat = () => {
  const [messages, setMessages] = useState<StoryMessages[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const fetchStoryMessages = async () => {
      const allMessages = await getStoryMessages();
      setMessages(allMessages);
    };
    fetchStoryMessages();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) {
      return;
    }

    const newMessage: StoryMessages = {
      id: "2",
      text: input,
      sender: "Player",
    };
    addStoryMessage(newMessage);

    setMessages([...messages, newMessage]);
    setInput("");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInput(text);
  };

  /*   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData("https://pokeapi.co/api/v2/pokemon/"));
  }, []); */  

  return (
    <div>
      Chat
      <br />
      <div>
        {messages.map((storyMessages: StoryMessages) => (
          <MessageItem key={storyMessages.id} storyMessages={storyMessages} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Prompt..."
          value={input}
          onChange={handleChange}
        />
        <button type="submit">Send message</button>
      </form>
    </div>
  );
};
