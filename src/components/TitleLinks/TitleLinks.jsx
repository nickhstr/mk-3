import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import anime from 'animejs/lib/anime.es';
import withStyles from 'isomorphic-style-loader/withStyles';
import styles from './styles.css';

const animationStyles = '.link { opacity: 0; }';

export class TitleLinks extends PureComponent {
  constructor(props) {
    super(props);
    this.list = React.createRef();
  }

  componentDidMount() {
    this.animateLinks();
  }

  componentDidUpdate() {
    this.animateLinks();
  }

  static propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        name: PropTypes.string,
      }),
    ),
    animate: PropTypes.bool,
    animateReady: PropTypes.bool,
    animateDone: PropTypes.func,
  };

  animateLinks = () => {
    const { animate, animateReady, animateDone } = this.props;

    if (animate && animateReady) {
      const { childNodes } = this.list.current;

      anime({
        targets: childNodes,
        translateY: [0, 30],
        opacity: 1,
        delay: anime.stagger(100),
      }).finished.then(() => animateDone(true));
    }
  };

  render() {
    const { animate, links } = this.props;

    return (
      <>
        { animate
          ? <style>{animationStyles}</style>
          : null
        }
        <ul className={styles.links} ref={this.list}>
          {links.map(
            (link, index) => <li key={index} className={classnames('link', styles.link)}>
              <a href={link.href}>{link.name}</a>
            </li>,
          )}
        </ul>
      </>
    );
  }
}

export default withStyles(styles)(TitleLinks);
