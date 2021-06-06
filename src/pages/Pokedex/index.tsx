import React, { useEffect, useState } from 'react';
import { navigate } from 'hookrouter';
import { useDispatch, useSelector } from 'react-redux';
import PokemonCard from '../../components/PokemonCard';
import Heading, { TagEnum } from '../../components/Heading';
import useData from '../../hook/getData';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';

import s from './pokedex.module.scss';
import useDebounce from '../../hook/useDebounce';
import { LinkEnum } from '../../routes';
import {
  getTypesAction,
  selectPokemonsTypes,
  selectPokemonsTypesLoading,
} from '../../store/pokemon';

interface IQuery {
  name?: string;
}

function PokedexPage() {
  const dispatch = useDispatch();
  const types = useSelector(selectPokemonsTypes);
  const isTypesLoading = useSelector(selectPokemonsTypesLoading);
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

  useEffect(() => {
    dispatch(getTypesAction());
  }, []);

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
              {!isTypesLoading && data?.total} <b>Pokemons</b> for you to choose
              your favorite
            </Heading>
          </div>
          <div className={s.search}>
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Input name pokemon"
            />
          </div>
          <div>{!isLoading && types?.map((item) => <div>{item}</div>)}</div>
          <div className={s.pokemons}>
            {!isLoading &&
              data?.pokemons.map((item: PokemonsRequest) => (
                <div className={s.pokemon} key={item.id}>
                  <PokemonCard
                    key={item.id}
                    pokemon={item}
                    onClick={() => navigate(`${LinkEnum.POKEDEX}/${item.id}`)}
                  />
                </div>
              ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default PokedexPage;
