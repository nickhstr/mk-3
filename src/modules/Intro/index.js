import { REDUCER_KEY } from './constants';
import { container } from './container';
import { reducer } from './reducer';

export async function register(store, props) {
  store.registerReducer(REDUCER_KEY, reducer);
  const Intro = container(props);

  return Intro;
}
