const initialState = {
    data: null,
  };
  
  const pokemonReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'SET_POKEMON':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default pokemonReducer;