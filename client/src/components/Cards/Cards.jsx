import Card from "../Card/Card";
import css from "./Cards.module.css";

const Cards = ({ pokemons }) => {
  return (
    <div className={css.container}>
      {pokemons?.map((p) => (
        <Card
          key={p.id}
          id={p.id}
          name={p.name}
          image={p.image}
          types={p.types}
        />
      ))}
    </div>
  );
};

export default Cards;
