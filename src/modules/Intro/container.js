import React from 'react';
import { connect } from 'react-redux';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import Intro from '../../components/Intro/Intro';
import * as selectors from './selectors';
import {
  setTitleStatus,
  setTitleLinksStatus,
  setCardStatus,
} from './actions';
import profileSvg from './nick-hester.svg';

export const connector = () => connect(
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
)(Intro);

export function container(moduleInterface, props) {
  const Module = connector();

  return (
    <StyleContext.Provider value={{ insertCss: moduleInterface.getInsertCss() }}>
      <Module
        primaryTitle='Nick Hester'
        secondaryTitle='Software Engineer'
        profilePic={profileSvg}
        profilePicAltText={'Profile picture of Nick Hester'}
        {...props}
      />
    </StyleContext.Provider>
  );
}
