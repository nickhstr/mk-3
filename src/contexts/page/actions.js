import { SET_PAGE_CONFIG } from './constants';

/**
 * @param {Object} payload
 *
 * @return {Object}
 */
export const setPageConfig = payload => ({
  type: SET_PAGE_CONFIG,
  payload,
});
