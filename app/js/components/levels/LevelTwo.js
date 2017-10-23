'use strict'

import React          from  'react';
import Button         from  '../Button'
import RipplerButton  from  '../RipplerButton'
import GameBoard      from  '../GameBoard'

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
    if(this.state.solved){
      this.exitButton = <RipplerButton color="orange" transition="fall" onClick={this.props.newLevel} lights={true} />
      console.log("this.exitButton");
    } else {
      this.exitButton = ""
    }
    return (
      <div className="boardWrapper">
        <GameBoard height="height_1 m20">
          {this.exitButton}
        </GameBoard>
        <Button color="blue" delay="0" transition="fall" hidden={false} onClick={this.resolve} extra={this.state.extra} lights={true}/>
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
  }

  nextLevel() {
    console.log("say it!");
  }
}

export default LevelOne;

//
