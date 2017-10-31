'use strict'

import React        from  'react';
import styled       from  'styled-components';

const Frame = styled.div`

  &.fadeOut {
    opacity: 0;
    transition: opacity 0.6s ease-out;
  }
`;

class LevelFrame extends React.Component {
  constructor(props) {
    super(props);

    this.nextLevel = this.nextLevel.bind(this);
    this.newLevel = this.newLevel.bind(this);

    this.state = {
      currentLevel    : 0,
      frameTransition : " "
    }

    this.appendProps();
    console.log("current level is: " + this.props.currentLevel);
  }

  render(){
    return (
      <div className={this.state.frameTransition}>
        {this.newFamily[this.props.currentLevel]}
      </div>
    )
  }

  /* Functions */

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
export default LevelFrame
