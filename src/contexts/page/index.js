import { REDUCER_KEY } from './constants';
import { reducer } from './reducer';
import { pageSaga } from './saga';

/**
 * Registers the context's reducer key and runs its saga.
 * @param  {ModuleInterface} moduleInterface
 * @param  {Object} options
 * @param  {Object} options.props
 * @return {void}
 */
export async function register(moduleInterface, { props }) {
  moduleInterface.registerReducer(REDUCER_KEY, reducer);
  await moduleInterface.runSaga(pageSaga, props);
}
