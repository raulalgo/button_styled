// New styled components approved

'use strict';

import React          from 'react';
import styled         from 'styled-components';

import SingleColumn   from  '../layouts/SingleColumn';

import ToggllerButton from  '../Buttons/TogglerButton';

class LevelOne extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
        <SingleColumn>
          <ToggllerButton />
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
