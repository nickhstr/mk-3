import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles, { locals } from './styles.css';

export class Title extends PureComponent {
  static propTypes = {
    primary: PropTypes.string,
    secondary: PropTypes.string,
  };

  render() {
    const { primary, secondary } = this.props;

    return (
      <div className={locals.root}>
        <style>{styles.toString()}</style>
        <p className={classnames(locals.subtext, locals['primary-greeting'])}>Hi, my name is</p>
        <h1 className={locals.primary}>{primary}</h1>
        <p className={classnames(locals.subtext, locals['secondary-greeting'])}>and I'm a</p>
        <h2 className={locals.secondary}>{secondary}</h2>
      </div>
    );
  }
}
