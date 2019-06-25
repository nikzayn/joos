import React, { Component } from 'react';

import Organic from './Organic';
import Direct from './Direct';
import Paid from './Paid';
import Social from './Social';
import Others from './Others';

class Acquisition extends Component {
  render() {

    return (
      <div className="animated fadeIn">
        <Organic />
        <Direct />
        <Paid />
        <Social />
        <Others />
      </div>
    );
  }
}

export default Acquisition;
