import { Link } from "react-router-dom";
import style from "./AboutRoute.module.css";
import Footer from "../components/Footer"

export const AboutRoute = () => {
  return (
    <>
    <main>
      <section>
        <h2 className={style["about-title"]}>What is Fantasy Chass?</h2>
        <article>
          <p className={style.text}>
            In Fantasy Chass, the players form an adventuring party who explore
            fantasy worlds together as they embark on epic quests and level up
            in experience. The Master is the game's referee and storyteller.
            There's no winning or losing in D&D—at least, not in the
            conventional way.
          </p>
          <p className={style.text}>
            At its heart, Fantasy Chass is a game that focuses on storytelling.
            The dice just help you along. Everything is your decision, from what
            you look like, to how you act, to what happens next. <br />
            The collective creativity in your D&D game builds stories that
            you'll tell again and again—ranging from the stuff of legend to
            absurd incidents that'll make you laugh years later. Have fun and
            remember the golden rule—never split the party!
          </p>
        </article>
      </section>
      <Link to="/">Go back</Link>
    </main>
    <Footer />
    </>
  );
};
