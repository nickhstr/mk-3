import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Title } from '../Title';
import { TitleLinks } from '../TitleLinks';
import { Card } from '../Card';
import styles, { locals } from './styles.css';

export class Intro extends PureComponent {
  static propTypes = {
    primaryTitle: PropTypes.string,
    secondaryTitle: PropTypes.string,
    titleLinks: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        name: PropTypes.string,
      }),
    ),
    profilePic: PropTypes.string,
    profilePicAltText: PropTypes.string,
    titleDone: PropTypes.bool,
    titleLinksDone: PropTypes.bool,
    cardDone: PropTypes.bool,
    setTitleStatus: PropTypes.func,
    setTitleLinksStatus: PropTypes.func,
    setCardStatus: PropTypes.func,
  };

  static defaultProps = {
    titleLinks: [
      {
        href: 'https://github.com/nickhstr',
        name: 'GitHub',
      },
    ],
  };

  render() {
    const {
      primaryTitle,
      secondaryTitle,
      titleLinks,
      profilePic,
      profilePicAltText,
      setTitleStatus,
      titleDone,
      setTitleLinksStatus,
      titleLinksDone,
      setCardStatus,
    } = this.props;

    return (
      <div className={locals.root}>
        <style>{styles.toString()}</style>
        <div className={classnames(locals.container, locals.title)}>
          <header className={locals.header}>
            <Title
              primary={primaryTitle}
              secondary={secondaryTitle}
              animate={true}
              animateReady={true}
              animateDone={setTitleStatus}
            />
          </header>
          <TitleLinks
            animate={true}
            animateReady={titleDone}
            animateDone={setTitleLinksStatus}
            links={titleLinks} />
        </div>
        <div className={classnames(locals.container, locals.profile)}>
          <Card
            width='100%'
            height='100%'
            backgroundImage={profilePic}
            backgroundImageAltText={profilePicAltText}
            animate={true}
            animateReady={titleLinksDone}
            animateDone={setCardStatus}
          />
        </div>
      </div>
    );
  }
}
