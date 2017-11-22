// New styled components approved

'use strict';

import React          from 'react';
import styled         from 'styled-components';

import SingleColumn   from  '../layouts/SingleColumn';

import TogglerButton from  '../Buttons/TogglerButton';

class LevelOne extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
        <SingleColumn>
          <TogglerButton ripple onClick={this.props.newLevel} />
        </SingleColumn>
    );
  }

  handleClick () {

  }

  resolve() {
  }

  nextLevel() {
  }
}

export default LevelOne;
