import style from "./ChatHistoryItem.module.css"
import { StoryMessageItemProps } from "../types/types";
import "./ChatTest.css";

export const ChatHistoryItem = ({ storyMessages }: StoryMessageItemProps) => {
  return (
    <div className={style["container-chat"]}>
      <div
        className={`${
          storyMessages.characterName === null
            ? style["chat-response-bubble"]
            : style["user-query-bubble"]
        }`}
      >
        <div>
          <div
            className={`${
              storyMessages.characterName === null
                ? style["sender-received"]
                : style["sender-sent"]
            }`}
          >
            {storyMessages.characterName}
          </div>
        </div>
        <div className={style.text}>
          <div
            className={`${
              storyMessages.characterName === null
                ? style["text-content-received"]
                : style["text-content-sent"]
            }`}
          >
            {" "}
            {storyMessages.message}
          </div>
        </div>
      </div>
    </div>
  );
};
