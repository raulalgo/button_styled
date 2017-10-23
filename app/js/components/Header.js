'use strict';

import React from 'react';

import CountWrapper      from './level_counter/CountWrapper'

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <CountWrapper currentLevel={this.props.currentLevel} />
      </header>
    );
  }

}

export default Header;
