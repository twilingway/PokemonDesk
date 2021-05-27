import React from 'react';
import useData from '../../hook/getData';
import { PokemonsRequest } from '../../interface/pokemons';
import Pokemon from './Pokemon';

export interface IPokemonContainerProps {
  id: number | string;
}

function PokemonContainer({ id }: IPokemonContainerProps) {
  const { data, isLoading } = useData<PokemonsRequest>('getPokemonById', {
    id,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return data ? <Pokemon data={data} /> : <div>Покемон не найден</div>;
}

export default PokemonContainer;
