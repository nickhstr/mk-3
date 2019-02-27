import { put } from 'redux-saga/effects';
import { setPageConfig } from './actions';
import pageConfigs from '../../page/configs.json';

export function* pageSaga({ page }) {
  const config = pageConfigs[page];
  yield put(setPageConfig(config));
}
