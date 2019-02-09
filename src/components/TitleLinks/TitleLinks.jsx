import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import anime from 'animejs/lib/anime.es';
import styles, { locals } from './styles.css';

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
      <Fragment>
        <style>
          {styles.toString()}
          {animate ? '.link { opacity: 0; }' : null}
        </style>
        <ul className={locals.links} ref={this.list}>
          {links.map(
            (link, index) => <li key={index} className={classnames('link', locals.link)}>
              <a href={link.href}>{link.name}</a>
            </li>,
          )}
        </ul>
      </Fragment>
    );
  }
}
