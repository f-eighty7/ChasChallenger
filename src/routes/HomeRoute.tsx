import { Link } from "react-router-dom";
import style from "./HomeRoute.module.css"
import back from "../Images/back.png"

export const HomeRoute = () => {
  return (
    <main>
      <div className={style["container-header"]}>
        <h2 className={style["title-one"]}>
          Fantasy
        </h2>
        <h1 className={style["title-two"]}>
          Chass
        </h1>
      </div>
      <p className={style["intro-text"]}>Lorem ipsum dolor sit consectetur adipisicing elit. Neque ipsum tempora et maiores blanditiis vitae.</p>
      <Link to={"/login"}>
        <button title="Play" className={style["play-button"]}>PLAY</button>
      </Link>
      <article className={style["card"]}>
        <img src={back} alt="Bild" className={style["read-more-image"]}/>
        <p className={style["read-more-text"]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure nihil magni. Rem voluptatem repellendus.</p>
        
        <Link to="about"><button title="Read more" className={style["read-more-button"]}>Read more</button></Link>
      </article>
            <article className={style["card"]}>
        <img src={back} alt="Bild" className={style["read-more-image"]}/>
        <p className={style["read-more-text"]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure nihil magni. Rem voluptatem repellendus.</p>
        <button title="Read more" className={style["read-more-button"]}>Read more</button>
      </article>
    </main>
  );
};
