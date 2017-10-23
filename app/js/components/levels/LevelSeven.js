'use strict'

import React              from  'react';

import LevelFour           from  './LevelFour';

class LevelSeven extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return(
      <LevelFour orientation="vertical" newLevel={this.props.newLevel} />
    )
  }
}

export default LevelSeven;
