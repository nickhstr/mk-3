import { getMyIntro } from './MyIntro';
import { REDUCER_KEY } from './constants';
import { reducer } from './reducer';

export function register(store) {
  store.registerReducer(REDUCER_KEY, reducer);
  getMyIntro(store);
}
