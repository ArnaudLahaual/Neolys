import { CHANGE_FIELD_VALUE  } from "../actions/user";

export const initialState = {
    
    lastname: '',
    firstname: '',
    mail: '',
    tel: '',
    message:'',
  };

  function reducer(state = initialState, action = {}) {
    switch (action.type) {

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
  