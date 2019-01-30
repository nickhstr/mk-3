import React from 'react';
import { connect } from 'react-redux';
import { Intro } from '../../components/Intro';
import * as selectors from './selectors';
import {
  setTitleStatus,
  setTitleLinksStatus,
  setCardStatus,
} from './actions';
import profileSvg from './split-nick.svg';

export const container = () => connect(
  state => ({
    titleDone: selectors.titleDoneSelector(state),
    titleLinksDone: selectors.titleLinksDoneSelector(state),
    cardDone: selectors.cardDoneSelector(state),
  }),
  {
    setTitleStatus,
    setTitleLinksStatus,
    setCardStatus,
  },
)(props => <Intro
  primaryTitle='Nick Hester'
  secondaryTitle='Software Engineer'
  profilePic={profileSvg}
  {...props}
/>);
