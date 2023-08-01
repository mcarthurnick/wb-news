import { useEffect } from 'react';
import PokeCard from '../shared/Card/PokeCard.jsx';
import Loading from '../shared/Loading/Loading.jsx';
import { requestPokemon } from '../../reducers/pokemonReducer.js';
import { useSelector, useDispatch } from 'react-redux';

export default function Pokemon() {
  const loading = useSelector(state => state.pokemon.loading)
  const pokemons = useSelector(state => state.pokemon.pokemons)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestPokemon)
  }, [])
  
  const pokemonCards = pokemons.map((pokemon) => <PokeCard key={pokemon.name} pokemon={pokemon} />);


  return (
    <div className="news-container">
      {/* <img src="../../assets/redditLogo.png" alt="" className='logo' /> */}
      {loading ? <Loading /> : <div>{pokemonCards}</div>}
    </div>
  );
}
