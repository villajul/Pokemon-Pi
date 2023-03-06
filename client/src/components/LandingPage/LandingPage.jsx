import { Link } from "react-router-dom";
import pokeball from "./pokeball.png";
import css from "./LandingPage.module.css";
import videos from "./Pokemon.mp4";

export default function LandingPage() {
  return (
    <div>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to the Pokemon World</h1>
        <video className={css.video} src={videos} autoPlay muted loop />
        <Link to={"/home"}>
          <input
            className={css.button}
            type="image"
            src={pokeball}
            alt="pokeball"
          />
        </Link>
        <h2 className={css.welcome}>Enter</h2>
      </div>
    </div>
  );
}
