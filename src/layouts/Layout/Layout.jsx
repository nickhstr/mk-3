import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Layout extends PureComponent {
  static propTypes = {
    regions: PropTypes.shape({
      main: PropTypes.array,
    }),
  };

  render() {
    const { regions } = this.props;
    const main = regions.main
      // ? regions.main.map((Component, index) => <Component key={index} />)
      ? regions.main
      : null;

    return (
      <>
        <main>{main}</main>
      </>
    );
  }
}
