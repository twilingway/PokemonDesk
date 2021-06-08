const initialState = {
  isLoading: false,
};
// @ts-ignore
const app = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TYPES':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_TYPES_RESOLVE':
      return {
        ...state,
        isLoading: false,
      };
    case 'FETCH_TYPES_REJECT':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default app;
