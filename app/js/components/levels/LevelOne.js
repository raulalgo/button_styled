'use strict'

import React          from 'react';
import Button         from '../Button'
import RipplerButton  from '../RipplerButton'
import LevelFrame     from '../LevelFrame'

class LevelOne extends React.Component {
  transition;
  solved;
  exitButton;
  extra

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.resolve = this.resolve.bind(this);
    this.nextLevel = this.nextLevel.bind(this);

    this.state = {
      orangeHidden  : true,
      solved        : false,
      extra         : ""
    }
    this.solved = false;
  }
  render() {
    // if(this.state.solved){
    //   this.exitButton = <RipplerButton color="orange" transition="fall" onClick={this.nextLevel} />
    //   console.log("this.exitButton");
    // } else {
    //   this.exitButton = ""
    // }
    return (
      <div>
        <RipplerButton color="orange" transition="fall" onClick={this.nextLevel} lights={true} />
      </div>
    )
  }

  handleClick () {
    console.log("click");
    this.setState({
      orangeHidden  : false
    })

  }

  resolve() {
    this.setState({
      solved  : true,
      extra   : "deactivate"
    });
    console.log("resolve");
  }

  nextLevel() {
    console.log("Next Level");
    //onsole.log(this.props.message);
    this.props.newLevel();
  }
}

export default LevelOne;
//
