import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CleanDetail, GetPokemonDetail } from "../../actions/actions";
import { useNavigate, useParams } from "react-router-dom";
import css from "../PokeDetail.jsx/PokeDetail.module.css";
import Loading from "../Loading/Loading";

export const PokeDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.pokemonDetail);
  useEffect(() => {
    dispatch(GetPokemonDetail(id));
  }, [dispatch, id]);
  const histori = useNavigate();

  const handlerExit = () => {
    dispatch(CleanDetail());
    histori("/home");
  };

  return (
    <div>
      {!detail ? (
        <Loading />
      ) : (
        <div className={css.container}>
          <div className={css.box} >
          <div className={css.container2}>
            <div className={css.title}>
              <h1>{detail.name}</h1>
            </div>
            
              <img src={detail.image} alt={detail.name} className={css.image}/>
            
          </div>
          
            <div className={css.container3}>
              <div>
              <h2>Pokemon Detail</h2>
              <div className={css.detailing}>
                <h3>Id: {detail.id}</h3>
              </div>

              <div className={css.detailing}>
                <h3>Speed: {detail.speed} </h3>
              </div>

              <div className={css.detailing}>
                <h3>Attack: {detail.attack} </h3>
              </div>

              <div className={css.detailing}>
                <h3>Hp: {detail.hp}</h3>
              </div>

              <div className={css.detailing}>
                <h3>Defense: {detail.defense} </h3>
              </div>

              <div className={css.detailing}>
                <h3>Height: {detail.height}</h3>
              </div>

              <div className={css.detailing}>
                <h3>Weight: {detail.weight}</h3>
              </div>

              <div className={css.detailing}>
                <h3>Types: {detail.types?.map((t) => t.name).join(" - ")}</h3>
              </div>
              </div>
            </div>
            </div>
          <div className={css.exit}>
            <button onClick={handlerExit}>{"<< Exit >>"}</button>
          </div>
        </div>
      )}
    </div>
  );
};
