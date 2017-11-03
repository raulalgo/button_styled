'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

const propTypes = {
  currentUser: React.PropTypes.object
};

class HomePage extends React.Component {
  clicked;
  t_w_classes;

  componentWillMount() {
    //  this.handleClick = this.handleClick.bind(this);
    //  this.ripplerClick = this.ripplerClick.bind(this);
      this.clicked = false

      this.t_w_classes = "transition_wrapper display_none"
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
      <DocumentTitle title="Home">
        <section className="home-page">
          <LevelStyle />
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
}

HomePage.propTypes = propTypes;

export default HomePage;

/*<DocumentTitle title="Home">
  <section className="home-page">
    Home Page
    <LevelFrame >
      <LevelStyle />
    </LevelFrame >
  </section>
</DocumentTitle>*/
