import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const RELOAD_POKEMONS = "RELOAD_POKEMONS";
export const GET_POKEMON = "GET_POKEMON";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const FILTER_POKEMON = "FILTER_POKEMON";
export const FILTER_ATTACK = "FILTER_ATTACK";
export const FILTER_ORDER = "FILTER_ORDER";
export const FILTER_TYPE = "FILTER_TYPE";
export const GET_TYPE = "GET_TYPE";
export const POST_POKEMON = "POST_POKEMON";

export const PostPokemon = (data) => async (dispatch) => {
  try {
    axios({
      method: "post",
      url: "http://localhost:3001/pokemons",
      data: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const GetPokemons = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/pokemons");
    dispatch({ type: GET_ALL_POKEMONS, payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const GetPokemonDetail = (id) => async (dispatch) => {
  try {
    const payload = await axios
      .get(`http://localhost:3001/pokemons/${id}`)
      .then((res) => res.data);

    dispatch({ type: GET_POKEMON_DETAIL, payload });
  } catch (error) {
    console.log(error.message);
  }
};

export const GetPokemon = (name) => async (dispatch) => {
  try {
    const payload = await axios
      .get(`http://localhost:3001/pokemons?name=${name}`)
      .then((res) => res.data);
    dispatch({ type: GET_POKEMON, payload });
  } catch (error) {
    console.log(error.message);
  }
};

export const ReloadPokemons = () => {
  return { type: RELOAD_POKEMONS };
};

export const CleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const FilterByPokemons = (payload) => {
  return {
    type: FILTER_POKEMON,
    payload,
  };
};

export const FilterByAttack = (payload) => {
  return {
    type: FILTER_ATTACK,
    payload,
  };
};

export const FilterByOrder = (payload) => {
  return {
    type: FILTER_ORDER,
    payload,
  };
};

export const GetType = () => async (dispatch) => {
  try {
    const payload = await axios
      .get("http://localhost:3001/types")
      .then((res) => res.data);
    dispatch({ type: GET_TYPE, payload });
  } catch (error) {
    console.log(error.message);
  }
};

export const FilterByType = (payload) => {
  return {
    type: FILTER_TYPE,
    payload,
  };
};
