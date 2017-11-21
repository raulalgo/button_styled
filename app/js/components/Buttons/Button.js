'use strict';

import React    from 'react';
import styled   from 'styled-components';
import {keyframes} from 'styled-components';

const fall = keyframes`
  0%    {
    opacity: 0;
    transform: scale(1.3);
  }
  50%  {
    opacity: 0.6;
    transform: scale(0.90);
  }
  100%  {
    opacity: 1;
    transform: scale(1);
  }
`;

const fallInac = keyframes`
  0%    {
    opacity: 0;
    transform: scale(1.3);
  }
  50%  {
    opacity: 0.3;
    transform: scale(0.90);
  }
  100%  {
    opacity: 0.4;
    transform: scale(1);
  }
`;

const Boton = styled.section`
  opacity: 0;
  border-radius: 4px;
  margin: 12px;

  width: 400px;
  height: 120px;

  ${props => {

    var css='';

    if(props.color == 'start')
      css+='background-color:'+props.theme.start+';';
    else if (props.color == 'exit')
      css+='background-color:'+props.theme.exit+';';
    else if (props.color == 'white')
      css+='background-color:' +props.theme.white + ';';
    else {
      css+='background-color:'+props.theme.grey+';';};
    
    if(!props.active) {
      css+=
        'opacity: 0.4;' +
        'transition: opacity 0.4s ease;' +
        'cursor: default;' +
        'box-shadow: 0px 0px 2px rgba(0,0,0,0.12);';
    }

    else {
      if(props.lights) {
        css+=
          'box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);' +
    
          '&:hover { ' +
            'transition: box-shadow 0.1s ease;' +
            'box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.24), 0px 0px 8px rgba(0, 0, 0, 0.12);' +
            'cursor: pointer;' +
          '}' +
          
          '&:active {' +
            'transition: box-shadow 0.1s ease;' +
            'box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);' +
            'cursor: pointer;'+
          '}';
      }
    }
    return(css);
  }}

  &.active {
    opacity: 1;
    animation: ${fall} 0.4s;
    animation-delay: ${props => props.delay}s;

    &.activationSwitch {
      opacity: 0.4;
    }
  }

  &.inactive {
    opacity: 0.4;
    animation: ${fallInac} 0.4s;
    animation-delay: ${props => props.delay}s;

    &.activationSwitch {
      opacity: 1;
    }
  }
`;

class Button extends React.Component {
  /**
   * Button: This is the basic element of the game
   * 
   * PROPERTIES
   *  Color: color from the theme
   *  Lights: Use 'lightOff' to remove the shadow
   *  Active: Use 'deactivate' to reduce opacity while still showing the color
   *  Delay: Time in seconds to present the component
   * 
   * DEFAULTS
   *  Type: grey
   *  Lights: on
   *  Active: true
   *  Delay: 0
   * 
   */
  transition;
  lights;
  orientation;
  classes;
  activationSwitch;

  constructor(props) {
    super(props);

    this.initActivationClass = this.initActivationClass.bind(this);
    this.switchActivationClass = this.switchActivationClass.bind(this);

    this.activationSwitch = '';
  }

  render() {
    return (
        <Boton
          lights={!this.props.lightOff}
          color={this.props.color}
          active={!this.props.deactivate}
          onClick={this.props.onClick}
          delay={this.props.delay}
          className={this.state.classes + this.activationSwitch} />
    );
  }

  componentWillMount() {
    this.initActivationClass(this.props.deactivate);

  }

  componentWillUpdate(nextProps) {
    console.log('props received');
    if(nextProps.deactivate!=this.props.deactivate) {
      this.switchActivationClass(this.activationSwitch);
    }
  }

  componentWillReceiveProps(nextProps) {
    /** If tempted of using state to set up color after a change in lights it will break the togglers */
  }

  initActivationClass(deactivateFlag) {
    if(deactivateFlag) {
      this.setState({
        classes: "inactive "
      });
    } else {
      this.setState({
        classes: "active "
      });
    }
  }

  switchActivationClass(switcher) {
    console.log('switchin');
    if(switcher == '') {
      this.activationSwitch = 'activationSwitch ';
    }
    else {
      this.activationSwitch = '';
    }
  }
}

Button.defaultProps = {
  lights: true,
  lightOff: false,
  color: 'grey',
  deactivate: false,
  transition: true,
  delay: 0,
  classes: 'active '
};

export default Button;

