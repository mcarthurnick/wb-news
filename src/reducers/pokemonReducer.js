import axios from 'axios'

const initialState = {
    loading: true, 
    pokemons: [],
    currentPokemon: {
        id: 0,
        name: '',
        height: 0,
        weight: 0, 
        imgUrl: ''    // sprites.front_default
    }
}

export const requestPokemon = async (dispatch) => {
    dispatch({
        type: 'PENDING'
    })

    let result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=30')
    .then(res => res.data);
    console.log('hitting!!!', result.results)
    dispatch({
        type: 'REQUEST_POKEMON', 
        payload: result.results
    })
}

// export const requestPokemonDetail = async (dispatch) => {
//     dispatch({
//         type: 'REQUEST_POKEMON_DETAIL', 
//         payload: currentPokemon
//     })
// }


export default function pokemonReducer(state = initialState, action) {
    console.log('state', state)
    switch(action.type) {
        case 'PENDING':
            return {...state, pending: true}

        case 'REQUEST_POKEMON':
            return { 
                    ...state,
                    loading: false,  
                    pokemons: action.payload 
                }
        
        case 'SELECT_POKEMON':
            console.log('action.payload', action.payload)
            const {id, height, weight, name, sprites } = action.payload
            
            return {
                ...state,
                currentPokemon: {
                    id: id,
                    name: name,
                    height: height,
                    weight: weight, 
                    imgUrl: sprites.front_default
                }
            }
        
        default:
            return state
    }
}