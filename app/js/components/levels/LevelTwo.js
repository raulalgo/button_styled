'use strict'

import React          from  'react';
import styled         from  'styled-components';

import Button         from  '../Button'
import RipplerButton  from  '../RipplerButton'
//import GameBoard      from  '../GameBoard'

const GameBoard = styled.div`
  height: ${props => props.theme.button_height};
  margin: 20px auto;
`;

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
      this.exitButton = <RipplerButton color="exit " transition="fall" onClick={this.props.newLevel} lights="lightOn " />
      console.log("this.exitButton");
    } else {
      this.exitButton = ""
    }
    return (
      <div className="boardWrapper">
        <GameBoard>
          {this.exitButton}
        </GameBoard>
        <Button color="start " delay="0" transition="fall " hidden={false} onClick={this.resolve} extra={this.state.extra} lights="lightOn "/>
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
      extra   : "deactivate "
    });
  }

  nextLevel() {
    console.log("say it!");
  }
}

export default LevelOne;

//
