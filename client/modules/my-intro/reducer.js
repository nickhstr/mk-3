import * as constants from './constants';

const initialState = {
  titleDoneAnimating: false,
  linksDoneAnimation: false,
  profileDoneAnimation: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.SET_TITLE_ANIMATE_STATUS:
      return {
        ...state,
        titleDoneAnimating: action.payload,
      };
    default:
      return state;
  }
}
