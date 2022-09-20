import { CLEAN_DETAIL, FILTER_ATTACK, FILTER_ORDER, FILTER_POKEMON, FILTER_TYPE, GET_ALL_POKEMONS, GET_POKEMON, GET_POKEMON_DETAIL, GET_TYPE } from "../actions/actions";



const inicialState = {
    pokemons:[],
    allPokemons: [],
    pokemon:[],
    pokemonDetail: {},
    types: []
};

function rootReducer(state = inicialState, action){   
switch(action.type){
        case GET_ALL_POKEMONS:        
            return {
                ...state,
            pokemons: action.payload,
            allPokemons: action.payload        
        }

        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: action.payload
        }

        case CLEAN_DETAIL:
            return{
                ...state,
                pokemonDetail: {}
        }

        case GET_POKEMON:
            return{
                ...state,
                pokemons: [action.payload]
            }

        case GET_TYPE:
            return{
                ...state,
                types: action.payload
            }

        case FILTER_POKEMON:
                const pokemons = state.allPokemons;
                const filter = action.payload === "API"? pokemons.filter(e => !e.createdBd): pokemons.filter(e => e.createdBd);
            return{
                ...state,
                pokemons: filter
            }

        case FILTER_ORDER:                            
                const filterOr = action.payload === "ASC"? 
                state.pokemons.sort((a,b)=>{if(a.name<b.name){return -1}if(a.name>b.name){return 1}return 0}):
                state.pokemons.sort((a,b)=>{if(a.name<b.name){return 1}if(a.name>b.name){return -1}return 0})
            return{
                ...state,
                pokemons: filterOr
            } 

        case FILTER_ATTACK:                            
                const filterAt = action.payload === "LESS_STRONG"? 
                state.pokemons.sort((a,b)=>{if(a.attack<b.attack){return -1}if(a.attack>b.attack){return 1}return 0}):
                state.pokemons.sort((a,b)=>{if(a.attack<b.attack){return 1}if(a.attack>b.attack){return -1}return 0})
            return{
                ...state,
                pokemons: filterAt
            } 

        case FILTER_TYPE:
            const pokemonsAll = state.allPokemons
            const filterType = pokemonsAll.filter(e => e.type.includes(action.payload))
            return{
                ...state,
                pokemons: filterType
            }

    default:
        return state
}
}


export default rootReducer