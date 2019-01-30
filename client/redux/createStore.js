import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore as createReduxStore,
} from 'redux';

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

export function makeRootReducer(reducerStore) {
  const reducers = reducerStore.get();

  return combineReducers(reducers);
}

export function registerReducer(store, { key, reducer }) {
  store.reducerStore.add(key, reducer);
  store.replaceReducer(makeRootReducer(store.reducerStore));
}

export async function createStore(initialState = {}) {
  const reducerStore = new ReducerStore();
  const middleware = [];
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = await createReduxStore(
    makeRootReducer(reducerStore),
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  store.reducerStore = reducerStore;
  store.registerReducer = (key, reducer) => registerReducer(store, { key, reducer });

  return store;
}
