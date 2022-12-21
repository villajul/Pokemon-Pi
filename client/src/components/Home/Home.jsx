import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import css from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import { GetPokemons, GetType } from "../../actions/actions";
import Pagination from "../Pagination/Pagination";
import FilterType from "../Filter/FilterType";
import FilterPokemons from "../Filter/FilterPokemons";
import FilterAttack from "../Filter/FilterAttack";
import FilterOrder from "../Filter/FilterOrder";
import NotFound from "../NotFound/NotFound";

const Home = () => {
  const dispatch = useDispatch();
  const pokemones = useSelector((state) => state.pokemons);
  //const pokerefresh = useSelector(state => state.allPokemons);
  const [loaded, setLoaded] = useState(false);
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokePerPage] = useState(8);

  useEffect(() => {
    dispatch(GetPokemons());
    dispatch(GetType());
  }, [dispatch]);

  const lastPoke = currentPage * pokePerPage;
  const firstPoke = lastPoke - pokePerPage;
  const currentPokes = pokemones?.slice(firstPoke, lastPoke);

  const pagination = (num) => {
    setCurrentPage(num);
  };

  return (
    <div>
      <NavBar />
      <div className={css.container}>
        <div className={css.containerFilters}>
          <FilterOrder setOrder={setOrder} pagination={pagination} />
          <FilterAttack setOrder={setOrder} pagination={pagination} />
          <FilterType />
          <FilterPokemons />
        </div>
        <div className={css.containerPagination}>
          <Pagination
            currentPage={currentPage}
            pokePerPage={pokePerPage}
            pokeTotal={pokemones.length}
            pagination={pagination}
          />
        </div>
        <div className={css.containerCards}>
          {!loaded && currentPokes[0] === "error" ? (
            <NotFound />
          ) : (
            <Cards pokemons={currentPokes} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
