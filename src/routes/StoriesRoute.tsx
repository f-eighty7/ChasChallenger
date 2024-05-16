import { StoryInput } from "../components/StoryInput";

export const StoriesRoute = () => {
  return (
    <main>
      <h2 style={{ 
        padding: "1rem", 
        marginTop: "5rem",
        fontFamily: '"Cinzel Decorative", serif',
        }}>
        Before we continue...
      </h2>
      <StoryInput />
    </main>
  );
};
