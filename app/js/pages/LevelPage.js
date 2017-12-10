/*THIS IS STYLED*/
'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

import styled         from 'styled-components';

import ThemedGame     from  '../components/ThemedGame';
import LevelFrame     from  '../components/LevelFrame';

import LevelOne       from  '../components/levels/LevelOne';
import LevelTwo       from  '../components/levels/LevelTwo';
import LevelThree     from  '../components/levels/LevelThree';
import LevelFour      from  '../components/levels/LevelFour';
import LevelFive      from  '../components/levels/LevelFive';
import LevelSix       from  '../components/levels/LevelSix';

import LevelTest      from  '../components/levels/LevelTest';



const propTypes = {
  currentUser: React.PropTypes.object
};

class LevelPage extends React.Component {


  constructor(props) {
    super(props);

    this.pushLevel = this.pushLevel.bind(this);
  }

  render() {
    //const t_w_classes = this.t_w_classes
    return (
      <DocumentTitle title="Level">
        <section className="level-page">
          <ThemedGame> 
            <LevelFrame currentLevel={this.props.currentLevel} pushLevel={this.pushLevel} >
              <LevelOne />
              <LevelTwo />
              <LevelThree />
              <LevelFour />
            </LevelFrame>
          </ThemedGame>
        </section>
      </DocumentTitle>
    );
  }

  ripplerClick(e) {

  }

  handleClick(e) {
  }

  componentWillUpdate() {
  }

  pushLevel() {
    this.props.pushLevel();
  }

  newLevel() {
  }
}

LevelPage.propTypes = propTypes;

export default LevelPage;
