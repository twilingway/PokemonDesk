import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('getPokemons Должна принимать два аргумента "getPokemons" и пустой объект, на выходе получить объект с полями method, uri, host и пустым body', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});
    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {},
      },
      body: {},
    });
  });

  test('Должна принимать два аргумента "getPokemons" и {name: "Pikachu"}, на выходе получить объект с полями method, uri, host и пустым body', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });
    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: { name: 'Pikachu' },
      },
      body: {},
    });
  });

  test('getPokemonById Должна принимать два аргумента и {id: 25}, на выходе получить объект с полями method, uri, host и пустой body', () => {
    const url = getUrlWithParamsConfig('getPokemonById', { id: 25 });
    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: {},
    });
  });
  test('createPokemon Должна принимать два аргумента и {name: Pikachu}, на выходе получить объект с полями method, uri, body {name: "Pikachu"} ', () => {
    const url = getUrlWithParamsConfig('createPokemon', { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'POST',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/create',
        query: {},
      },
      body: {
        name: 'Pikachu',
      },
    });
  });
});
