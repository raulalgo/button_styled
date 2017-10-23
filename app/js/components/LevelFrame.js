'use strict'

import React    from 'react';
import LevelOne from  './levels/LevelOne';
import Button   from  './Button'

class LevelFrame extends React.Component {
  counter;
  newFamily

  constructor(props) {
    super(props);

    this.nextLevel = this.nextLevel.bind(this);
    this.newLevel = this.newLevel.bind(this);

    this.state = {
      currentLevel  : 0,
      frameTransition    : ""
    }

    this.appendProps();
    //this.currentLevel = 0;
    console.log("Bona nit, in LevelFrame the currentLevel is: " + this.props.currentLevel);
  }

  render() {
    return (
      <div className={this.state.frameTransition}>
        {this.newFamily[this.props.currentLevel]}
      </div>
    )
  }

  nextLevel() {
    // var counter = this.state.currentLevel;
    // counter ++;
    // if(counter > 1){
    //   this.setState({currentLevel:0});
    // } else {
    //   this.setState({currentLevel:1});
    // }

    this.props.pushLevel()


    console.log("Current Level: " + this.state.currentLevel);

  //  this.newLevel();
  }

  newLevel() {
    // fade current level out
    this.setState({
      frameTransition : 'fadeOut'
    });
    // load new level
    // present new level in
    setTimeout(function(){
      this.nextLevel();
      this.setState({ frameTransition : ''});
    }.bind(this),1500);


  }

  appendProps() {
    console.log("appendProps");
    this.newFamily = React.Children.map(this.props.children,(child) => React.cloneElement(child, {
        newLevel          : this.newLevel
      })
    );
    //console.log(this.newFamily);
    return this.newFamily;
  }
}

export default LevelFrame;


//         <Button color="grey" onClick={this.nextLevel} />
