// import { useState } from "react";
// //import { promptStoryText } from "../api/storiesApi";
// import { StoryText } from "../types/types";
// import style from "./StoryInput.module.css";
// import { Link } from "react-router-dom";

// export const StoryInput = () => {
//   const [inputSummary, setInputSummary] = useState<string>("");
//   const [inputName, setInputName] = useState<string>("");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!inputSummary) {
//       return;
//     }
//     const storyText: StoryText = { name: inputName, summary: inputSummary };
//     //promptStoryText(storyText);
//     console.log(storyText);
//     setInputName("");
//     setInputSummary("");
//   };
//   const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const name = e.target.value;
//     setInputName(name);
//   };
//   const handleChangeSummary = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const summary = e.target.value;
//     setInputSummary(summary);
//   };

//   return (
//     <div>
//       <form className={style.form} onSubmit={handleSubmit}>
//         <label htmlFor="textarea" className={style["text-label"]}>
//           What kind of story setting would you like?
//         </label>
//         <input
//           className={style.name}
//           placeholder="Fix input, vänta på beslut"
//           value={inputName}
//           onChange={handleChangeName}
//         />
//         <textarea
//           name="textarea"
//           placeholder="Type here..."
//           value={inputSummary}
//           onChange={handleChangeSummary}
//           className={style.textarea}
//         />
//         <div className={style["button-wrapper"]}>
//           <Link to="/characters">
//             <button title="Back" className={style["back-button"]}>
//               Go Back
//             </button>
//           </Link>
//           <button
//             title="Save"
//             className={style["story-button"]}
//             type="submit"
//             disabled={!inputSummary || !inputName}
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };