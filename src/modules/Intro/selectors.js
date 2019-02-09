import get from 'lodash/get';
import { REDUCER_KEY } from './constants';

export const titleDoneSelector = state => get(state, [REDUCER_KEY, 'titleDoneAnimating'], false);
export const titleLinksDoneSelector = state => get(state, [REDUCER_KEY, 'titleLinksDoneAnimating'], false);
export const cardDoneSelector = state => get(state, [REDUCER_KEY, 'cardDoneAnimating'], false);
