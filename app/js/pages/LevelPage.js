/*THIS IS STYLED*/
'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

import styled         from 'styled-components';

const propTypes = {
  currentUser: React.PropTypes.object
};

class LevelPage extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    //const t_w_classes = this.t_w_classes
    return (
      <DocumentTitle title="Level">
        <section className="level-page">
          
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
  }

  newLevel() {
  }
}

LevelPage.propTypes = propTypes;

export default LevelPage;
