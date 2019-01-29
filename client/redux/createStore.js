import {
  combineReducers,
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
  // Add reducers here to be available on redux store instantiation.
  const baseReducers = {};
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
  const store = await createReduxStore(
    makeRootReducer(reducerStore),
    initialState,
  );

  store.reducerStore = reducerStore;
  store.registerReducer = (key, reducer) => registerReducer(store, { key, reducer });

  return store;
}
