import { REDUCER_KEY } from './constants';
import { container } from './container';
import { reducer } from './reducer';

export function register(store) {
  store.registerReducer(REDUCER_KEY, reducer);
  const Intro = container();

  return Intro;
}
