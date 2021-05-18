import React from 'react';
import Pokemons from './pokemons.json';
import Header from '../../components/Header';
import s from './pokedex.module.scss';
import PokemonCard from '../../components/PokemonCard';
import Heading, { TagEnum } from '../../components/Heading';

interface IPokedexPageProps {
  title?: string;
}

export interface IStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

export interface IPokemon {
  // name_clean: string;
  abilities: string[];
  stats: IStats;
  types: string[];
  img: string;
  name: string;
  // base_experience: number;
  height: number;
  id: number;
  // is_default: boolean;
  order: number;
  weight: number;
}

function PokedexPage({ title = '' }: IPokedexPageProps) {
  const pokemons: IPokemon[] = Pokemons;
  return (
    <>
      <Header />
      <main className={s.wrapper}>
        <div className={s.container}>
          <div className={s.title}>
            <Heading tag={TagEnum.h3}>
              800 pokemons for you to choose your favorite
            </Heading>
          </div>
          <div className={s.pokemons}>
            {pokemons.map((item) => (
              <div className={s.pokemon}>
                <PokemonCard pokemon={item} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default PokedexPage;
