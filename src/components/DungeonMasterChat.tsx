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
      <div>
        {messages.map((storyMessages: StoryMessages) => (
          <MessageItem key={storyMessages.text} storyMessages={storyMessages} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          style={{
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            borderRadius: "20px",
            color: "black",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
          type="text"
          placeholder="Prompt..."
          value={input}
          onChange={handleChange}
        />
        <button
          type="submit"
          style={{ paddingRight: "1rem", paddingLeft: "1rem" }}
        >
          Send
        </button>
      </form>
    </div>
  );
};
