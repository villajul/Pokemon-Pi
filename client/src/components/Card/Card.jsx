import css from "./Card.module.css";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ id, name, image, types }) => {
  return (
    <Link className={css.title2} to={`/pokemon/${id}`}>
      <div key={id} className={css.container}>
        <div className={css.title}>
          <h2>{name.toUpperCase()}</h2>
        </div>
        <img src={image} alt={name} className={css.img} />
        <div className={css.type2}>
          {types?.map((t, i) => (
            <h3 className={`${t.name}`} key={i}>
              {t.name}
            </h3>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
