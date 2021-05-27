interface Iconfig {
  client: {
    server: {
      protocol: string;
      host: string;
    };
    endpoint: {
      getPokemons: {
        method: string;
        uri: {
          pathname: string;
        };
      };
      getPokemonById: {
        method: string;
        uri: {
          pathname: string;
        };
      };
    };
  };
}

const config: Iconfig = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
      getPokemonById: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
    },
  },
};

export default config;
