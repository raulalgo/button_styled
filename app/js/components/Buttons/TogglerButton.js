'use strict'

import React          from  'react';
import styled         from  'styled-components';

import Button         from  './Button';

class TogglerButton extends React.Component {
  exitFlag;

  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);

    // if(this.props.active) {
    //   this.state = {
    //     active    : true,
    //     color     : "white ",
    //     toggler   : this.toggle
    //   }
    // }
    // else {
    //   this.state = {
    //     active    : false,
    //     color     : "grey ",
    //     toggler   : this.toggle
    //   }
    // }
  }

  render() {
    return(
      <Button 
        lights={this.state.lights}
        type={this.state.color}
        deactivate={this.state.deactivate}
        delay={this.state.delay}
        onClick={this.toggle}
        />
    )
  }

  componentWillMount(){
    this.setState({
      lights: true,
      color: 'grey',
      deactivate: this.props.deactivate,
      delay: this.props.delay,
      switch: false
    });

    if(this.props.on) {
      this.setState({
        color: 'white',
        switch: true
      });
    }

    this.exitFlag = false;
  }

  toggle() {
    if(this.state.switch){
      if(this.props.type!='exit'||this.exitFlag){
        this.setState({
          color: 'grey',
          switch: false
        });
      } else {
        this.setState({
          color: 'exit',
          switch: true
        });
        this.exitFlag = true;
      }
    }
    else {
      this.setState({
        color: 'white',
        deactivate: true,
        switch: true
      });
      this.exitFlag = false;
    }
  }
}

export default TogglerButton;


// if(this.state.active) {
//   this.setState({
//     active    : false,
//     color     : "grey "
//   });
// }
// else {
//   this.setState({
//     active    : true,
//     color     : "white "
//   })
// }