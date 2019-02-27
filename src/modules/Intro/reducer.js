import {
  SET_TITLE_STATUS,
  SET_TITLE_LINKS_STATUS,
  SET_CARD_STATUS,
} from './constants';

const initialState = {
  titleDoneAnimating: false,
  titleLinksDoneAnimating: false,
  cardDoneAnimating: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TITLE_STATUS:
      return {
        ...state,
        titleDoneAnimating: action.payload,
      };
    case SET_TITLE_LINKS_STATUS:
      return {
        ...state,
        titleLinksDoneAnimating: action.payload,
      };
    case SET_CARD_STATUS:
      return {
        ...state,
        cardDoneAnimating: action.payload,
      };
    default:
      return state;
  }
};
