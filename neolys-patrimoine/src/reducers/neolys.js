import { TOGGLE_BURGER, CLOSE_BURGER  } from "../actions/neolys";


export const initialState = {
    isBurgerOpen: false,
  };

  function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case TOGGLE_BURGER:
        return {
          ...state,
          isBurgerOpen: !state.isBurgerOpen,
        };
      case CLOSE_BURGER:
        return {
          ...state,
          isBurgerOpen: false,
        };
       
  
      default:
        return state;
    }
  }
  
  export default reducer;
  