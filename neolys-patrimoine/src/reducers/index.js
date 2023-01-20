import { combineReducers } from 'redux';

import neolysReducer from './neolys';
import userReducer from './user';


const rootReducer = combineReducers({

    neolys: neolysReducer,
    user: userReducer,


});

export default rootReducer;
