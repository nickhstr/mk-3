/* globals NODE_ENV */
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore as createReduxStore,
} from 'redux';
import difference from 'lodash';

export class ReducerStore {
  constructor() {
    this.reducers = [];
  }

  add(key, reducer) {
    this.reducers[key] = reducer;
  }

  get() {
    return this.reducers;
  }
}

export function makeRootReducer(reducerStore, initialState = {}) {
  // Add reducers here to be available upon store instantiation.
  const baseReducers = {};

  // A check on initial state is done to see if there are any keys in state
  // which don't immediately have a reducer.
  // If no reducer is found for a given key, a noop function is assigned, to
  // prevent warnings from redux.
  const stateKeys = Object.keys(initialState);
  let nonTrackedReducerKeys = [];

  if (stateKeys.length) {
    nonTrackedReducerKeys = difference(stateKeys, Object.keys(baseReducers));
  }

  nonTrackedReducerKeys.forEach(key => reducerStore.add(key, (state = {}) => state));

  const reducers = {
    ...baseReducers,
    ...reducerStore.get(),
  };

  return combineReducers(reducers);
}

export function registerReducer(store, { key, reducer }) {
  store.reducerStore.add(key, reducer);
  store.replaceReducer(makeRootReducer(store.reducerStore));
}

export async function createStore(initialState = {}) {
  const reducerStore = new ReducerStore();
  const middleware = [];
  const composeEnhancers = NODE_ENV !== 'production'
    // eslint-disable-next-line no-underscore-dangle
    ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
    : compose;
  const store = await createReduxStore(
    // eslint-disable-next-line no-underscore-dangle
    makeRootReducer(reducerStore, window.__initial_state__),
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  store.reducerStore = reducerStore;
  store.registerReducer = (key, reducer) => registerReducer(store, { key, reducer });

  return store;
}
