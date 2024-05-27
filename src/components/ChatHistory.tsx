import { useEffect, useState } from "react";
import { ChatHistoryItem } from "./ChatHistoryItem"
import { StoryMessages } from "../types/types";
import { getStoryMessages } from "../api/storyMessagesApi";

export const ChatHistory = () => {
  const [messages, setMessages] = useState<StoryMessages[]>([]);

  useEffect(() => {
    const fetchStoryMessages = async () => {
      const allMessages = await getStoryMessages();
      setMessages(allMessages);
    };
    fetchStoryMessages();
  }, []);

  return (
    <>
      <section>
        {messages.map((storyMessages: StoryMessages) => (
          <ChatHistoryItem
            key={storyMessages.message}
            storyMessages={storyMessages}
          />
        ))}
      </section>
    </>
  );
};
