import React, { Component } from 'react';

import Projection from './Projection';
import Organic from './Organic';
import Direct from './Direct';
import Paid from './Paid';
import Social from './Social';
import Others from './Others';

class Demographics extends Component {
  render() {

    return (
      <div className="animated fadeIn">
        <Projection />
        <Organic />
        <Direct />
        <Paid />
        <Social />
        <Others />
      </div>
    );
  }
}

export default Demographics;
