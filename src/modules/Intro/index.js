import { REDUCER_KEY } from './constants';
import { container } from './container';
import { reducer } from './reducer';

export async function register(moduleInterface, { props }) {
  moduleInterface.registerReducer(REDUCER_KEY, reducer);
  const Intro = container(moduleInterface, props);

  return Intro;
}
