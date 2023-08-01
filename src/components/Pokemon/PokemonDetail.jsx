import { useSelector } from 'react-redux';

export default function PokemonDetail() {
  const pokemon = useSelector(state => state.pokemon.currentPokemon)

  return (
    <div className="news-container">
        <div className="pokemon-container">
            <h1>Name: {pokemon.name} </h1>
            <h3>Height: {pokemon.height}</h3>
            <h3>Weight: {pokemon.weight}</h3>
        </div>
      <img src={pokemon.imgUrl} alt=""/>
    </div>
  );
}