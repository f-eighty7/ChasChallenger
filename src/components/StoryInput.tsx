import { useState } from "react";
//import { promptStoryText } from "../api/storiesApi";
import { StoryText } from "../types/types";
import style from "./StoryInput.module.css";
import { Link } from "react-router-dom";

export const StoryInput = () => {
  const [inputSummery, setInputSummery] = useState<string>("");
  const [inputName, setInputName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputSummery) {
      return;
    }
    const storyText: StoryText = { name: inputName, summary: inputSummery };
    //promptStoryText(storyText);
    console.log(storyText);
    setInputName("");
    setInputSummery("");
  };
/*   const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setInputName(name);
  }; */
  const handleChangeSummery = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const summery = e.target.value;
    setInputSummery(summery);
  };

  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="textarea">What kind of story setting would you like?</label>
{/*         <input
          placeholder="Name...?????"
          value={inputName}
          onChange={handleChangeName}
        /> */}
        <textarea
          placeholder="Type here..."
          value={inputSummery}
          onChange={handleChangeSummery}
        />
        <div className={style["button-wrapper"]}>
        <Link to="/characters" ><button
        title="Back"
          className={style["back-button"]}
        >
          Go Back
        </button></Link>
                <button
                title="Save"
          className={style["story-button"]}
          type="submit"
          disabled={!inputSummery || !inputName}
        >
          Save
        </button>
        </div>
      </form>
    </div>
  );
};