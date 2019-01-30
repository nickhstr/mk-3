import get from 'lodash/get';

export const regionsSelector = state => get(state, ['page', 'config', 'regions'], {});
