import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Title } from '../../components/Title';
import { TitleLinks } from '../../components/TitleLinks';
import { Card } from '../../components/Card';
import profilePic from './split-nick.svg';
import styles, { locals } from './styles.css';

export class Intro extends PureComponent {
  static propTypes = {
    titleLinks: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        name: PropTypes.string,
      }),
    ),
  };

  static defaultProps = {
    titleLinks: [
      {
        href: '/projects',
        name: 'Projects',
      },
      {
        href: 'https://github.com/nickhstr',
        name: 'GitHub',
      },
      {
        href: '/resume',
        name: 'Resume',
      },
    ],
  };

  render() {
    const { titleLinks } = this.props;

    return (
      <div className={locals.root}>
        <style>{styles.toString()}</style>
        <div className={classnames(locals.container, locals.title)}>
          <header className={locals.header}>
            <Title primary='Nick Hester' secondary='Software Engineer' />
          </header>
          <TitleLinks links={titleLinks} />
        </div>
        <div className={classnames(locals.container, locals.profile)}>
          <Card width='100%' height='100%' backgroundImage={profilePic} />
        </div>
      </div >
    );
  }
}
