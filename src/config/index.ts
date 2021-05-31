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
      createPokemon: {
        method: string;
        uri: {
          pathname: string;
        };
      };
      updatePokemonById: {
        method: string;
        uri: {
          pathname: string;
        };
      };
      deletePokemonById: {
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

      // FAKE API
      createPokemon: {
        method: 'POST',
        uri: {
          pathname: '/api/v1/pokemon/create',
        },
      },
      updatePokemonById: {
        method: 'PATCH',
        uri: {
          pathname: '/api/v1/pokemon/create',
        },
      },
      deletePokemonById: {
        method: 'DELETE',
        uri: {
          pathname: '/api/v1/pokemon/create',
        },
      },
    },
  },
};

export default config;
