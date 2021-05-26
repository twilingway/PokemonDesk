import React, { useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import Heading, { TagEnum } from '../../components/Heading';
import useData from '../../hook/getData';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';

import s from './pokedex.module.scss';
import useDebounce from '../../hook/useDebounce';

interface IQuery {
  name?: string;
}

function PokedexPage() {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});
  const debouncedValue = useDebounce(searchValue, 1000);

  const { data, isLoading, isError } = useData<IPokemons>(
    'getPokemons',
    query,
    [debouncedValue],
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setQuery((prevState: IQuery) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (isError) {
    return <div>Something Wrong!</div>;
  }

  return (
    <>
      <main className={s.wrapper}>
        <div className={s.container}>
          <div className={s.title}>
            <Heading tag={TagEnum.h3}>
              {!isLoading && data?.total} <b>Pokemons</b> for you to choose your
              favorite
            </Heading>
          </div>
          <div>
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
          <div className={s.pokemons}>
            {!isLoading &&
              data?.pokemons.map((item: PokemonsRequest) => (
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
