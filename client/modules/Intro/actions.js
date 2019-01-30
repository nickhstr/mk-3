import {
  SET_TITLE_STATUS,
  SET_TITLE_LINKS_STATUS,
  SET_CARD_STATUS,
} from './constants';

export const setTitleStatus = payload => ({
  type: SET_TITLE_STATUS,
  payload,
});

export const setTitleLinksStatus = payload => ({
  type: SET_TITLE_LINKS_STATUS,
  payload,
});

export const setCardStatus = payload => ({
  type: SET_CARD_STATUS,
  payload,
});
