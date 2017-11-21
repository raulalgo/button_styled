'use strict';

import React          from  'react';
import styled         from  'styled-components';

import Button         from  './Button';
import Rippler        from  './Rippler';

/**
 * 
 * TogglerButton
 * ----------------------------------
 * 
 * This is a button that Toggles between one or two states.
 * 
 * DEFAULT: Alternates Grey - White
 * 
 * Flags --------
 * on: Switches to alternating White - Grey
 * exit: Switches to alternating Grey - White - Exit (Rippling after the orange)
 * on exit: same as exit but starting in White
 * ripple: goes straight to orange rippling after it
 */

class TogglerButton extends React.Component {
  exitFlag;

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.ripple = this.ripple.bind(this);
  }

  render() {
    return(
      <div>
        <Rippler 
          x={this.state.x}
          y={this.state.y}
          display={this.state.display}
          ripple={this.state.ripple}
        />
        <Button 
          lightOff={this.props.lightsOff}
          color={this.state.color}
          deactivate={this.props.deactivate}
          delay={this.props.delay}
          onClick={this.toggle}
          />
      </div>
    );
  }

  componentWillMount(){
    this.setState({
      color: 'grey',
      switch: false
    });

    if(this.props.on) {
      this.setState({
        color: 'white',
        switch: true
      });
    }
    
    this.setState({
      display: 'display_none ',
      ripple: ' ',
      x: 0,
      y: 0
    });

    if(this.props.ripple) {
      this.setState({
        color: 'exit',
        switch: true
      });
      this.exitFlag = true;
    }
    else {
      this.exitFlag = false;
    }
  }

  toggle(e) {
    if(!this.exitFlag){
      if(this.state.switch){
        if((!this.props.exit)||this.exitFlag){
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
    else {
      this.ripple(e);
    }
  }

  ripple(e){
    this.setState({
      display: ' ',
      ripple: 'ripple ',
      x: e.nativeEvent.clientX,
      y: e.nativeEvent.clientY
    });
    this.props.onClick();
  }
}

TogglerButton.defaultProps = {
  ligtsOff: false,
  color: 'grey',
  deactivate: false,
  transition: true,
  delay: 0,
  on: false,
  ripple: false,
  exit: false
};

export default TogglerButton;
