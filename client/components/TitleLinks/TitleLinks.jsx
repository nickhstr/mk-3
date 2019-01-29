import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles, { locals } from './styles.css';

export class TitleLinks extends PureComponent {
  static propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        name: PropTypes.string,
      }),
    ),
    animate: PropTypes.bool,
  };

  render() {
    const { links } = this.props;

    return (
      <div>
        <style>{styles.toString()}</style>
        <ul className={locals.links}>
          {links.map(
            (link, index) => <li key={index} className={locals.link}>
              <a href={link.href}>{link.name}</a>
            </li>,
          )}
        </ul>
      </div>
    );
  }
}
