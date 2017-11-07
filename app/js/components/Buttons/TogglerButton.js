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
        lights={this.state.lights}
        type={this.state.color}
        deactivate={this.state.deactivate}
        delay={this.state.delay}
        onClick={this.props.onClick}
        />
    )
  }

  componentWillMount(){
    this.setState({
      lights: true,
      color: 'white',
      deactivate: this.props.deactivate,
      delay: this.props.delay
    });
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
