'use strict'

import React    from 'react';
import LevelOne from  './levels/LevelOne';
import Button   from  './Button'

class Game extends React.Component {
  counter;

  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.newLevel = this.newLevel.bind(this);

    this.state = {
      currentLevel  : 0
    }

    //this.currentLevel = 0;
  }

  render() {
    return (
      <div>
        <div>Hola Game
          {this.props.children[this.state.currentLevel]}
        </div>
        <Button color="grey" onClick={this.next} />
      </div>
    )
  }

  next() {
    var counter = this.state.currentLevel;
    counter ++;
    if(counter > 1){
      this.setState({currentLevel:0});
    } else {
      this.setState({currentLevel:1});
    }
    console.log("Current Level: " + this.state.currentLevel);
    this.newLevel();
  }

  newLevel() {
    console.log("LevelOne: Now with the new level");

  }
}

export default Game;
