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

    if(props.color == 'start' && props.lights)
      css+='background-color:'+props.theme.start+';';
    else if (props.color == 'exit' && props.lights)
      css+='background-color:'+props.theme.exit+';';
    else if (props.color == 'white' && props.lights)
      css+='background-color:' +props.theme.white + ';';
    else {
      css+='background-color:'+props.theme.grey+';';};
    
    console.log('props.active: ' + props.active);
    if(!props.active) {
      css+=
        'opacity: 0.4;' +
        'transition: opacity 0.4s ease;' +
        'cursor: default;' +
        'box-shadow: 0px 0px 2px rgba(0,0,0,0.12);';
    }

    else {
      console.log('props.lights: '+props.lights)
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
    animation: ${fall} 0.4s forwards;
    animation-delay: ${props => props.delay}s;
  }

  &.inactive {
    animation: ${fallInac} 0.4s backwards;
    animation-delay: ${props => props.delay}s;
  }
`;

class Button extends React.Component {
  transition;
  lights;
  orientation;
  classes;

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Boton
          lights={this.state.lights}
          color={this.state.color}
          active={this.state.active}
          onClick={this.props.onClick}
          delay={this.state.delay}
          className={this.state.classes} />
    );
  }

  componentWillMount() {
    this.setState({
      lights: true,
      color: 'grey',
      active: true,
      transition: true,
      delay: 0,
      classes: 'active '
    });

    if(this.props.delay!=null){
      this.setState({delay: this.props.delay});
    }

    if(this.props.type)
      this.setState({
        color: this.props.type
      });

    if(this.props.lightsOff){
      this.setState({
        lights: false
      })
    }

    if(this.props.deactivate){
      
      this.setState({
        active: false,
        transition: false,
        classes: 'inactive '
      });
    }
  }

  componentWillUpdate() {

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.lights) {
      this.setState({
        shadow  : "light_on"
      });
    } else {
      this.setState({
        shadow  : ""
      });
    }
  }

  transitionIn() {
    this.setState({
      transition    : this.props.transition,
      show          : true
    });
  }
}

export default Button;

