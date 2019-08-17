import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs/lib/anime.es';
import withStyles from 'isomorphic-style-loader/withStyles';
import styles from './styles.css';

const animationStyles = `.${styles.card} { opacity: 0; }`;

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
    backgroundImageAltText: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.node),
    animate: PropTypes.bool,
    animateReady: PropTypes.bool,
    animateDone: PropTypes.func,
    animateOptions: PropTypes.object,
  };

  static defaultProps = {
    animateOptions: {
      scale: [0.5, 1],
      opacity: [0, 1],
      duration: 400,
      easing: 'easeOutElastic(1, 1)',
    },
  };

  animateCard = () => {
    const {
      animate,
      animateReady,
      animateDone,
      animateOptions,
    } = this.props;

    if (animate && animateReady) {
      anime({
        ...animateOptions,
        targets: this.card.current,
      }).finished.then(() => animateDone(true));
    }
  };

  render() {
    const {
      animate,
      backgroundImage,
      backgroundImageAltText,
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
      <>
        {animate
          ? <style>{animationStyles}</style>
          : null
        }
        {backgroundImage
          ? <img src={backgroundImage} style={{ display: 'none' }} alt={backgroundImageAltText} />
          : null}
        <div className={styles.card} style={instanceStyles} ref={this.card}>
          {children}
        </div>
      </>
    );
  }
}

export default withStyles(styles)(Card);
