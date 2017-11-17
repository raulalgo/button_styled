'use strict'

import React          from  'react';
import styled         from  'styled-components';

import Button         from  './Button';

class TogglerButton extends React.Component {
  exitFlag;

  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
  }

  render() {
    return(
      <Button 
        lightsOff={this.props.lightsOff}
        color={this.state.color}
        deactivate={this.props.deactivate}
        delay={this.props.delay}
        onClick={this.toggle}
        />
    )
  }

  componentWillMount(){
    this.setState({
      color: 'grey'
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

TogglerButton.defaultProps = {
  lights: true,
  ligtsOff: false,
  color: 'grey',
  deactivate: false,
  transition: true,
  delay: 0,
  switch: true,
  on: true,
  switch: true
}

export default TogglerButton;
