import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../actions/pokemonActions";

export const Pokemon = ({ pokemon }) => {
  const state = useSelector((state) => state.pokemon.shiny);
  const dispatch = useDispatch();

  const [poke, setPoke] = useState();
  const [sprite, setSprite] = useState("");
  const [shinySprite, setShinySprite] = useState("");

  useEffect(() => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => {
        setPoke(data);
        setSprite(
          data.sprites.versions["generation-v"]["black-white"].animated
            .front_default
        );
        setShinySprite(
          data.sprites.versions["generation-v"]["black-white"].animated
            .front_shiny
        );
      });
  }, [pokemon]);


  return (
    <>
    <section className="pokemon-info">
      {poke && (
        <ul>
          <li className="pkm-sprite">
            <img src={!state ? sprite : shinySprite} alt={poke.name} />
          </li>
          <li>{poke.name}</li>
          <li>
            <ul className="type-list">
              {poke.types.map((type) => (
                <li key={type.slot}>{type.type.name}</li>
              ))}
            </ul>
          </li>
        </ul>
      )}
    </section>
    <section className="shiny-btn">
      <button onClick={() => dispatch(change())}>Change Shiny</button>
    </section>
    </>
  );
};
