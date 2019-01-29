import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles, { locals } from './styles.css';

export class Card extends PureComponent {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    backgroundImage: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.node),
  };

  render() {
    const {
      backgroundImage,
      children,
      width,
      height,
    } = this.props;
    const instanceStyles = {
      width,
      height,
    };

    if (backgroundImage) {
      instanceStyles.backgroundImage = `url("${backgroundImage}")`;
    }

    return (
      <div>
        <style>
          {styles.toString()}
        </style>
        <img src={backgroundImage} style={{ display: 'none' }} />
        <div className={locals.card} style={instanceStyles}>
          {children}
        </div>
      </div>
    );
  }
}
