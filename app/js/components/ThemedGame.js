'use strict';

import React          from 'react';
import styled         from 'styled-components';

// import Button         from './Buttons/Button';
// import Button         from './Buttons/Button';
// import TogglerButton  from './Buttons/TogglerButton';
// import RipplerButton  from './Buttons/RipplerButton';

import LevelOne       from './levels/LevelOne';


class ThemedGame extends React.Component {
  constructor(props) {
    super(props);
    this.dameClick = this.dameClick.bind(this);
  }

  render() {
    return(
      <LevelOne />
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