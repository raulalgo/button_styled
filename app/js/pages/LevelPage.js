'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

import Theme          from  '../components/Theme'

import Button         from  '../components/Button'
import RipplerButton  from  '../components/RipplerButton'
import Rippler        from  '../components/Rippler'
import LevelFrame     from  '../components/LevelFrame'

import LevelOne       from  '../components/levels/LevelOne'
import LevelTwo       from  '../components/levels/LevelTwo'
import LevelThree     from  '../components/levels/LevelThree'
import LevelFour      from  '../components/levels/LevelFour'
import LevelFive      from  '../components/levels/LevelFive'
import LevelSix       from  '../components/levels/LevelSix'
import LevelSeven     from  '../components/levels/LevelSeven'

import LevelStyle     from  '../components/levels/LevelStyle'

import TestLevel      from  '../components/levels/TestLevel'

const propTypes = {
  currentUser: React.PropTypes.object
};

class LevelPage extends React.Component {
  clicked;
  t_w_classes;

  componentWillMount() {
    //  this.handleClick = this.handleClick.bind(this);
    //  this.ripplerClick = this.ripplerClick.bind(this);
      this.clicked = false

      this.t_w_classes = "transition_wrapper display_none"
      this.newLevel = this.newLevel.bind(this);
      this.pushLevel = this.pushLevel.bind(this);

      this.setState ({clicked : this.clicked,
                      x       : 0,
                      y       : 0})

  }

  constructor(props) {
    super(props);
  }

  render() {
    console.log("home render");
    //const t_w_classes = this.t_w_classes
    return (
      <DocumentTitle title="Level">
        <section className="level-page">
          <Theme />
        </section>
      </DocumentTitle>
    );
  }

  ripplerClick(e) {

  }

  handleClick(e) {
    // this.clicked = true
    // console.log("X: " + e.nativeEvent.clientX);
    // console.log("Y: " + e.nativeEvent.clientY);
    // this.setState({ clicked : this.clicked,
    //                 x       : e.nativeEvent.clientX,
    //                 y       : e.nativeEvent.clientY})
  }

  componentWillUpdate() {
  }

  pushLevel() {
    console.log("Pushing level in LevelPage");
    this.props.pushLevel();
  }

  newLevel() {
    console.log("levelPage: new Level");
  }
}

LevelPage.propTypes = propTypes;

export default LevelPage;


/*
<LevelFrame currentLevel={this.props.currentLevel} pushLevel={this.pushLevel} >
  <LevelStyle />
</LevelFrame >

<LevelOne />
<LevelTwo />
<LevelThree />
<LevelFive />
<LevelFour />
<LevelSix />
<LevelSeven />
*/
