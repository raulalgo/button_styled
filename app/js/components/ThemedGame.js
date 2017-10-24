'use strict'

import React  from  'react';
import styled from  'styled-components';

import Button from './Button';
import RipplerButton from './RipplerButton';


class ThemedGame extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <RipplerButton className="rippler " lights="lightOn " />
        <Button color="start " lights="lightOn " />
        <Button color="exit " lights="lightOn " />
        <Button color="white " lights="lightOn " />
        <Button color="grey " lights="lightOn " />
      </div>
    )
  }
}

export default ThemedGame;
