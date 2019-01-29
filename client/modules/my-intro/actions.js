import * as constants from './constants';

export function setTitleAnimateStatus(payload) {
  return {
    type: constants.SET_TITLE_ANIMATE_STATUS,
    payload,
  };
}
