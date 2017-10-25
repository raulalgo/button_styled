'use strict'

import React          from  'react';
import styled         from  'styled-components';

import Button         from  './Button';

class TogglerButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Button color="white " lights="lightOn " />
    )
  }
}

export default TogglerButton;
