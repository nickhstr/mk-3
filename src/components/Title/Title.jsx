import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import anime from 'animejs/lib/anime.es';
import styles, { locals } from './styles.css';

const stylesString = styles.toString();
const animationStyles = '.greeting { opacity: 0; }';

export class Title extends PureComponent {
  constructor(props) {
    super(props);
    this.root = React.createRef();
  }

  componentDidMount() {
    this.animateTitle();
  }

  componentDidUpdate() {
    this.animateTitle();
  }

  static propTypes = {
    primary: PropTypes.string,
    secondary: PropTypes.string,
    animate: PropTypes.bool,
    animateReady: PropTypes.bool,
    animateDone: PropTypes.func,
  };

  animateTitle = () => {
    const { animate, animateReady, animateDone } = this.props;

    if (animate && animateReady) {
      const { childNodes } = this.root.current;

      anime({
        targets: childNodes,
        opacity: 1,
        delay: anime.stagger(500),
      }).finished.then(() => animateDone(true));
    }
  };

  render() {
    const { animate, primary, secondary } = this.props;

    return (
      <>
        <style>
          {animate ? `${stylesString}${animationStyles}` : stylesString}
        </style>
        <div className={locals.root} ref={this.root}>
          <p className={classnames('greeting', locals.subtext, locals['primary-greeting'])}>Hi, my name is</p>
          <h1 className={classnames('greeting', locals.primary)}>{primary}</h1>
          <p className={classnames('greeting', locals.subtext, locals['secondary-greeting'])}>and I'm a</p>
          <h2 className={classnames('greeting', locals.secondary)}>{secondary}</h2>
        </div>
      </>
    );
  }
}
