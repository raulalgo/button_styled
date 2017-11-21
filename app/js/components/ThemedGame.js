'use strict';

import React          from 'react';
import styled         from 'styled-components';

// import Button         from './Buttons/Button';
import Button         from './Buttons/Button';
import TogglerButton  from './Buttons/TogglerButton';
import RipplerButton  from './Buttons/RipplerButton';


class ThemedGame extends React.Component {
  constructor(props) {
    super(props);
    this.dameClick = this.dameClick.bind(this);
  }

  render() {
    return(
      <div>
        <Button color="start"  />
        <TogglerButton on />
        <TogglerButton type="exit" />
        <RipplerButton  />
      </div>
    );
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