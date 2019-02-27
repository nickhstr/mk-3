import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

export class Layout extends PureComponent {
  static propTypes = {
    regions: PropTypes.object,
  };

  render() {
    const { regions } = this.props;
    const main = regions.main
      ? regions.main.map((Component, index) => <Component key={index} />)
      : null;

    return (
      <Fragment>
        <main>{main}</main>
      </Fragment>
    );
  }
}
