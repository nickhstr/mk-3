import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Layout extends PureComponent {
  static propTypes = {
    main: PropTypes.node,
  };

  render() {
    const { main } = this.props;

    return (
      <div>
        <main>{main}</main>
      </div>
    );
  }
}
