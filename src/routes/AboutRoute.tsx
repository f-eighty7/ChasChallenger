import { Link } from "react-router-dom";
import style from "./AboutRoute.module.css"


export const AboutRoute = () => {

  return (
    <main>
        <section >
        <h2 className={style["about-title"]}>What is Fantasy Chass?</h2>
        <article>
            <p>In Fantasy Chass, the players form an adventuring party who explore fantasy worlds together as they embark on epic quests and level up in experience. The Master is the game's referee and storyteller. There's  no winning or losing in D&D—at least, not in the conventional way.</p>
            <p>At its heart, Fantasy Chass is a game that focuses on storytelling. The  dice just help you along. Everything is your decision, from what you  look like, to how you act, to what happens next. <br/>
            The collective creativity in your D&D game builds stories that  you'll tell again and again—ranging from the stuff of legend to absurd  incidents that'll make you laugh years later.
            Have fun and remember the golden rule—never split the party!</p>
        </article>
        </section>
        <section>
        <h2 className={style["title"]}>How to play it?</h2>
        <article>
            <p>Getting Started</p>
            <p>1. Create Your Character:</p>
            <ul>
                <li>Begin by designing your unique character. Choose your character's name, race, class, and background story.</li>
                <li>Think about your character's personality, strengths, and weaknesses. These traits will shape your journey and interactions within the game.</li>
            </ul>
            <p>2. Choose Your Theme:</p>
            <ul>
                <li>Select the overarching theme of your adventure. Do you want to explore a mystical forest, delve into ancient ruins, or navigate political intrigue in a bustling city? The theme sets the stage for your journey.</li>
            </ul>
            <p>Playing the Game</p>
            <p>1. Interact with the AI Storyteller:</p>
            <ul>
                <li>Once your character and theme are set, the AI storyteller will begin narrating your adventure.</li>
                <li>You will play by chatting with the AI, responding to its descriptions, and making choices that affect the outcome of the story.</li>
            </ul>
            <p>1. Making Choices:</p>
            <ul>
                <li>The game proceeds in turns, with the AI presenting scenarios and you deciding how your character reacts.</li>
                <li>Use descriptive responses to convey your character's actions, thoughts, and dialogue. For example, if the AI describes a mysterious cave, you might respond with, “I cautiously approach the cave entrance, peering inside to see what lies within.”</li>
            </ul>
            <p>1. Progression and Development:</p>
            <ul>
                <li>As you progress, your character will gain experience, acquire new skills, and find powerful items.</li>
                <li>Your decisions shape the story, leading to multiple possible outcomes and endings.</li>
            </ul>
            <p>Tips for an Engaging Experience</p>
            <ul>
                <li>Be Creative: Let your imagination run wild! The more vivid and detailed your descriptions, the richer your experience will be.</li>
                <li>Stay in Character: Think and act like your character would. This adds depth to your adventure and makes the story more engaging.</li>
                <li>Experiment: Don't be afraid to try different actions and explore various paths. The world of Fantasy Chass is full of surprises and hidden secrets.</li>
                <li>Have Fun: Remember, this is your adventure. Enjoy the journey and the stories you create.</li>
            </ul>
            <p>Example Turn</p>
            <p>AI Storyteller: The ancient forest looms ahead, its twisted trees casting long shadows in the moonlight. You hear a faint rustling in the underbrush. What do you do?</p>
            <p>Player: I draw my sword and cautiously approach the sound, keeping my eyes peeled for any movement. “Who goes there?” I call out, ready to defend myself if necessary.</p>
            <p>Embark on your journey in Fantasy Chass, where every decision writes a new chapter in your epic tale. Are you ready to begin your adventure? Let the story unfold!</p>
        </article>
        </section>
        <Link to="/">Go back</Link>
    </main>
  );
};
