import React, { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import Heading, { TagEnum } from '../../components/Heading';
import req from '../../utils/request';

import s from './pokedex.module.scss';

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
  abilities: string[];
  stats: IStats;
  types: string[];
  img: string;
  name: string;

  height: number;
  id: number;

  order: number;
  weight: number;
}

interface IPokemonsData {
  total: number;
  count: number;
  offset: number;
  limit: number;
  pokemons: IPokemon[];
}

interface IPokemonsHook {
  data: IPokemonsData;
  isLoading: boolean;
  isError: boolean;
}

const usePokemons = (): IPokemonsHook => {
  const [data, setData] = useState<IPokemonsData>({} as IPokemonsData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const result = await req('getPokemons');

        setData(result);
        setIsError(false);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return { data, isLoading, isError };
};

function PokedexPage({ title = '' }: IPokedexPageProps) {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something Wrong!</div>;
  }
  return (
    <>
      <main className={s.wrapper}>
        <div className={s.container}>
          <div className={s.title}>
            <Heading tag={TagEnum.h3}>
              {data.total} <b>Pokemons</b> for you to choose your favorite
            </Heading>
          </div>
          <div className={s.pokemons}>
            {data.pokemons.map((item) => (
              <div className={s.pokemon} key={item.id}>
                <PokemonCard key={item.id} pokemon={item} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default PokedexPage;
