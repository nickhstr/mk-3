import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

export class Layout extends PureComponent {
  static propTypes = {
    regions: PropTypes.object,
  };

  render() {
    const { regions } = this.props;

    return (
      <Fragment>
        <main>{
          regions.main
            ? regions.main.map((Component, index) => <Component key={index} />)
            : null
        }</main>
      </Fragment>
    );
  }
}
