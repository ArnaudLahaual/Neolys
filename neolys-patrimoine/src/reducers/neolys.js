import { TOGGLE_BURGER, CLOSE_BURGER, ISHOVERING  } from "../actions/neolys";

export const initialState = {
    isBurgerOpen: false,
    loading: true,
    isHovering: false,
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
        case ISHOVERING:
        return {
          ...state,
          isHovering: !state.isHovering,
        };
      
      default:
        return state;
    }
  }
  
  export default reducer;
  