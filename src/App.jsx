import { useEffect, useState } from 'react'
import {Pokemon} from './components/Pokemon'
import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import { next, prev } from './actions/pokemonActions';

function App() {
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
    .then(response => response.json())
    .then(data => setPokedex(data.results))
  },[]);

  const state = useSelector(state => state.pokemon.number);
  
  const dispatch = useDispatch();

  return (
    <>
    <main className='pokedex-container'>
      <h1>Primera Generación</h1>
      {pokedex[state] && <Pokemon pokemon={pokedex[state]}/>}
      <section className='next-prev-btn'>
      <button onClick={() => dispatch(prev())} disabled={!state}>Prev</button>
      <button onClick={() => dispatch(next())} disabled={ state < 150? false : true}>Next</button>
      </section>
    </main>
    </>
  )
}

export default App
