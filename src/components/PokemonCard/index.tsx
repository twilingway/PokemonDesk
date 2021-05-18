import React from 'react';
import Heading, { TagEnum } from '../Heading';

import s from './pokemonCard.module.scss';
import { IPokemon } from '../../pages/Pokedex';

interface IPokemonCard {
  pokemon: IPokemon;
}

function PokemonCard({ pokemon }: IPokemonCard) {
  return (
    <div className={s.root}>
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
          <span className={s.label}>Fire</span>
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
}

export default PokemonCard;
