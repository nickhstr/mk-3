import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs/lib/anime.es';
import styles, { locals } from './styles.css';

export class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.card = React.createRef();
  }

  componentDidMount() {
    this.animateCard();
  }

  componentDidUpdate() {
    this.animateCard();
  }

  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    backgroundImage: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.node),
    animate: PropTypes.bool,
    animateReady: PropTypes.bool,
    animateDone: PropTypes.func,
  };

  animateCard = () => {
    const { animate, animateReady, animateDone } = this.props;

    if (animate && animateReady) {
      anime({
        targets: this.card.current,
        scale: [0.5, 1],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutElastic(1, 1)',
      }).finished.then(() => animateDone(true));
    }
  };

  render() {
    const {
      animate,
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
      <Fragment>
        <style>
          {styles.toString()}
          {animate ? `.${locals.card} { opacity: 0; }` : null}
        </style>
        <img src={backgroundImage} style={{ display: 'none' }} />
        <div className={locals.card} style={instanceStyles} ref={this.card}>
          {children}
        </div>
      </Fragment>
    );
  }
}
