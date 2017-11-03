'use strict'

import React          from  'react';
import styled         from  'styled-components';

import Button         from  './Button';

class TogglerButton extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);

    if(this.props.active) {
      this.state = {
        active    : true,
        color     : "white ",
        toggler   : this.toggle
      }
    }
    else {
      this.state = {
        active    : false,
        color     : "grey ",
        toggler   : this.toggle
      }
    }
  }

  render() {
    return(
      <Button
        color={this.state.color}
        onClick={this.state.toggler}
        lights="lightOn " />
    )
  }

  toggle() {
    if(this.state.active) {
      this.setState({
        active    : false,
        color     : "grey "
      });
    }
    else {
      this.setState({
        active    : true,
        color     : "white "
      })
    }
  }
}

export default TogglerButton;
