'use strict';

import React from 'react';
import styled from  'styled-components';

import CountWrapper from  './level_counter/CountWrapper';

const Cabecera = styled.header`
`;

class Header extends React.Component {

  constructor(props) {
    super(props);
    console.log('Constructing Header');
  }

  render() {
    return (
      <Cabecera>
        <CountWrapper currentLevel={this.props.currentLevel} />
      </Cabecera>
    );
  }

}

export default Header;
