/*THIS IS STYLED*/
'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

import styled         from 'styled-components';

import Theme          from  '../components/Theme';
import ThemedGame     from  '../components/ThemedGame';
import LevelFrame     from  '../components/LevelFrame';

import LevelOne       from  '../components/levels/LevelOne';
import LevelTwo       from  '../components/levels/LevelTwo';
import LevelThree     from  '../components/levels/LevelThree';
import LevelFour      from  '../components/levels/LevelFour';


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
          <Theme>
            <ThemedGame> 
              <LevelFrame currentLevel={this.props.currentLevel} pushLevel={this.pushLevel} >
                <LevelFour />
                <LevelOne />
                <LevelTwo />
                <LevelThree />
              </LevelFrame>
            </ThemedGame>
          </Theme>
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
    console.log('even higher');
    this.props.pushLevel();
  }

  newLevel() {
  }
}

LevelPage.propTypes = propTypes;

export default LevelPage;
