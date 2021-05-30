import React from 'react';
import { PokemonsRequest } from '../../interface/pokemons';
import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';

import s from './pokemon.module.scss';

export interface IPokemonProps {
  data: PokemonsRequest;
}

function Pokemon({ data }: IPokemonProps) {
  return (
    <div className={s.wrap}>
      <div className={s.content}>
        <div className={s.image}>
          <img src={data.img} alt={data.name} />
        </div>
        <div className={s.main}>
          <div className={s.name}>{toCapitalizeFirstLetter(data.name)}</div>
          {/* <div className={s.generation}></div> */}
          <div className={s.abilities}>
            Abilities
            <div>{data.abilities[0]}</div>
            <div>{data.abilities[1]}</div>
          </div>
          <div className={s.pointGroup}>
            <div className={s.healthy}>Healthy Points</div>
            <div className={s.expirience}>Experience</div>
          </div>
          <div className={s.stats}>
            <div className={s.item}>
              <div className={s.value}> {data.stats.defense}</div>
              <div className={s.type}>Defense</div>
            </div>
            <div className={s.item}>
              <div className={s.value}> {data.stats.attack}</div>
              <div className={s.type}>Attack</div>
            </div>
            <div className={s.item}>
              <div className={s.value}> {data.stats['special-attack']}</div>
              <div className={s.type}>Sp Attack</div>
            </div>
            <div className={s.item}>
              <div className={s.value}> {data.stats['special-defense']}</div>
              <div className={s.type}>Sp Defense</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
