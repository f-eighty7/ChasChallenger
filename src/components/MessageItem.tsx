import style from "./MessageItem.module.css";
import { StoryMessageItemProps } from "../types/types";

export const MessageItem = ({ storyMessages }: StoryMessageItemProps) => {
  return (
    <div className={style["container-chat"]}>
      <div
        className={`${
          storyMessages.sender === "DM"
            ? style["message-received"]
            : style["message-sent"]
        }`}
      >
        <div>
          <div
            className={`${
              storyMessages.sender === "DM"
                ? style["sender-received"]
                : style["sender-sent"]
            }`}
          >
            {storyMessages.sender}
          </div>
        </div>
        <div className={style.text}>
          <div
            className={`${
              storyMessages.sender === "DM"
                ? style["text-content-received"]
                : style["text-content-sent"]
            }`}
          >
            {" "}
            {storyMessages.text}
          </div>
        </div>
      </div>
    </div>
  );
};
