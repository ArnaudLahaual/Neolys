import { TOGGLE_BURGER, CLOSE_BURGER,CHANGE_FIELD_VALUE  } from "../actions/neolys";

export const initialState = {
    isBurgerOpen: false,
    lastname: '',
    firstname: '',
    mail: '',
    tel: '',
    message:'',
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
        case CHANGE_FIELD_VALUE:
        return {
          ...state,
          // On accède à la clef de manière dynamique avec la notation []
          // => email: 'la valeur...',
          [action.field]: action.value,
        };

       
      default:
        return state;
    }
  }
  
  export default reducer;
  