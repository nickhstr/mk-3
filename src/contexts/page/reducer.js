import { SET_PAGE_CONFIG } from './constants';

const initialState = {
  regions: {},
};

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
