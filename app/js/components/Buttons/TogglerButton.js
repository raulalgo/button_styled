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
  stateList;
  minIndex;
  maxIndex;
  currentIndex;

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.ripple = this.ripple.bind(this);
    this.setIndexes = this.setIndexes.bind(this);

    this.stateList = {
      0 : {
        color : 'grey',
        switch: false
      } ,
      1 : {
        color : 'white',
        switch: true
      } ,
      2 : {
        color : 'exit',
        switch: true
      } 
    };
    this.minIndex = 0;
    this.maxIndex = 1;
    this.currentIndex = 0;
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
          lightOff={this.props.lightOff}
          color={this.state.color}
          deactivate={this.props.deactivate}
          delay={this.props.delay}
          onClick={this.toggle}
          />
      </div>
    );
  }

  componentWillMount(){
    this.setIndexes(this.props);
    this.setState(this.stateList[this.currentIndex]);
    
    this.setState({
      display: 'display_none ',
      ripple: ' ',
      x: 0,
      y: 0
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setIndexes(nextProps);
    this.setState(this.stateList[this.currentIndex]);
  }

  toggle(e) {
    if(this.currentIndex == 2) {
      this.ripple(e);
    }
    else {
      if(this.currentIndex < this.maxIndex) {
        this.currentIndex++;
      }
      else {
        this.currentIndex = this.minIndex;
      }
    }  
    this.setState(this.stateList[this.currentIndex]);
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
  
  setIndexes(examProps){
    if (examProps.on) {
      this.currentIndex = 1;
    }
    if (examProps.exit) {
      this.maxIndex = 2;
    }
    if (examProps.ripple) {
      this.currentIndex = 2;
      this.maxIndex = 2;
    }
  }
}

TogglerButton.defaultProps = {
  ligtOff: false,
  color: 'grey',
  deactivate: false,
  transition: true,
  delay: 0,
  on: false,
  ripple: false,
  exit: false
};

export default TogglerButton;
