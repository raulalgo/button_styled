'use strict'

import React          from 'react';
import styled         from 'styled-components';

import Button         from './Button';
import RipplerButton  from './RipplerButton';
import TogglerButton  from './TogglerButton';


class ThemedGame extends React.Component {
  constructor(props) {
    super(props);
    this.dameClick = this.dameClick.bind(this);
  }

  render() {
    return(
      <div>
        <Button color="white " lights="lightOn " />
        <TogglerButton />
      </div>
    )
  }

  dameClick() {
    console.log("dame Click");
  }
}

export default ThemedGame;
