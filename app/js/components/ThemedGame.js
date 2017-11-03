'use strict'

import React          from 'react';
import styled         from 'styled-components';

import Button         from './Buttons/Button';


class ThemedGame extends React.Component {
  constructor(props) {
    super(props);
    this.dameClick = this.dameClick.bind(this);
  }

  render() {
    return(
      <div>
        <Button type="start" />
        <Button type="exit" />
        <Button type="grey" />
        <Button lights="lOff" />
      </div>
    )
  }

  dameClick() {
    console.log("dame Click");
  }
}

export default ThemedGame;


/*


        <Button color="white " lights="lightOn " />
        <TogglerButton active={true} />
        <TogglerButton active={false} />

        */