import { createStore, applyMiddleware, compose } from "redux";

import reducerNeolys from '../reducers/neolys';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(),
);

const store = createStore(reducerNeolys, enhancers);

export default store;
