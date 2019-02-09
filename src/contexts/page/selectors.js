import { createSelector } from 'reselect';
import get from 'lodash/get';

export const pageSelector = state => get(state, 'page');

export const pageConfigSelector = createSelector(
  pageSelector,
  page => get(page, 'config'),
);

export const pageConfigRegionsSelector = createSelector(
  pageConfigSelector,
  config => get(config, 'regions', {}),
);
