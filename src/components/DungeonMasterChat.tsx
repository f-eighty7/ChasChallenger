// import { useEffect, useState } from "react";
// import { fetchData } from "../Store/Slices/FetchSlice";
// import { useDispatch } from "react-redux";
// import { MessageItem } from "./MessageItem";
// import { StoryMessages } from "../types/types";
// import { getStoryMessages } from "../api/storyMessagesApi";
// import style from "./DungeonMasterChat.module.css";

// export const DungeonMasterChat = () => {
//   const [messages, setMessages] = useState<StoryMessages[]>([]);
//   const [input, setInput] = useState<string>("");

//   useEffect(() => {
//     const fetchStoryMessages = async () => {
//       const allMessages = await getStoryMessages();
//       setMessages(allMessages);
//     };
//     fetchStoryMessages();
//   }, []);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!input) {
//       return;
//     }

//     const newMessage: StoryMessages = {
//       text: input,
//       sender: "Player",
//     };
//     addStoryMessage(newMessage);

//     setMessages([...messages, newMessage]);
//     setInput("");
//   };
//   const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const text = e.target.value;
//     setInput(text);
//   };

//     const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchData("https://pokeapi.co/api/v2/pokemon/"));
//   }, []);

//   return (
//     <div>
//       <section>
//           {messages.map((storyMessages: StoryMessages) => (
//             <MessageItem
//               key={storyMessages.message}
//               storyMessages={storyMessages}
//             />
//           ))}
//       </section>
//       <form onSubmit={handleSubmit} className={style["prompt-wrapper"]}>
//         <textarea
//           className={style.prompt}
//           placeholder="Prompt..."
//           value={input}
//           onChange={handleChange}
//         />
//         <button type="submit" className={style["send-button"]}>
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };
