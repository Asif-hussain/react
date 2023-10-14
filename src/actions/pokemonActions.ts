export const setPokemon = (data: [] | object) => {
    return {
      type: 'SET_POKEMON',
      payload: data,
    };
  };