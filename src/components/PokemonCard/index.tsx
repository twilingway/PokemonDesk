import React from 'react';
import { IPokemon } from '../../hook/getData';
import Heading, { TagEnum } from '../Heading';

import s from './pokemonCard.module.scss';

interface IPokemonCard {
  pokemon: IPokemon;
  onClick: () => void;
}

const PokemonCard: React.FC<IPokemonCard> = ({ pokemon, onClick }) => (
  <div
    role="button"
    tabIndex={0}
    className={s.root}
    onClick={onClick}
    onKeyPress={onClick}>
    <div className={s.infoWrap}>
      <Heading tag={TagEnum.h4} className={s.titleName}>
        {pokemon.name}
      </Heading>
      <div className={s.statWrap}>
        <div className={s.statItem}>
          <div className={s.statValue}>{pokemon.stats.attack}</div>
          Attack
        </div>
        <div className={s.statItem}>
          <div className={s.statValue}>{pokemon.stats.defense}</div>
          Defense
        </div>
      </div>
      <div className={s.labelWrap}>
        {pokemon.types.map((item) => (
          <span key={pokemon.id + item} className={s.label}>
            {item}
          </span>
        ))}
      </div>
    </div>
    <div className={s.pictureWrap}>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
        alt="Charmander"
      />
    </div>
  </div>
);
export default PokemonCard;
