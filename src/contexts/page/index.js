import { REDUCER_KEY } from './constants';
import { reducer } from './reducer';
import { pageSaga } from './saga';

export async function register(store, props) {
  store.registerReducer(REDUCER_KEY, reducer);
  await store.runSaga(pageSaga, props).toPromise();
}
