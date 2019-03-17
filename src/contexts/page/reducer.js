import { SET_PAGE_CONFIG } from './constants';

const initialState = {
  regions: {},
};

/**
 * Page context reducer
 * @param {Object} state  - Redux state at time of action dispatched
 * @param {Object} action - Dispatched action
 *
 * @return {Object} Updated state
 */
export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAGE_CONFIG:
      return {
        ...state,
        config: action.payload,
      };
    default:
      return state;
  }
}
