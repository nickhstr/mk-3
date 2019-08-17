import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import anime from 'animejs/lib/anime.es';
import withStyles from 'isomorphic-style-loader/withStyles';
import styles from './styles.css';

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
    animateOptions: PropTypes.object,
  };

  static defaultProps = {
    animateOptions: {
      opacity: 1,
      delay: anime.stagger(400),
    },
  };

  animateTitle = () => {
    const {
      animate,
      animateReady,
      animateDone,
      animateOptions,
    } = this.props;

    if (animate && animateReady) {
      const { childNodes } = this.root.current;

      anime({
        ...animateOptions,
        targets: childNodes,
      }).finished.then(() => animateDone(true));
    }
  };

  render() {
    const { animate, primary, secondary } = this.props;

    return (
      <>
        { animate
          ? <style>{animationStyles}</style>
          : null
        }
        <div className={styles.root} ref={this.root}>
          <p className={classnames('greeting', styles.subtext, styles['primary-greeting'])}>Hi, my name is</p>
          <h1 className={classnames('greeting', styles.primary)}>{primary}</h1>
          <p className={classnames('greeting', styles.subtext, styles['secondary-greeting'])}>and I'm a</p>
          <h2 className={classnames('greeting', styles.secondary)}>{secondary}</h2>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Title);
