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

const Boton = styled.section`
  opacity: 1.00;
  border-radius: 4px;
  margin: 12px;

  width: 400px;
  height: 120px;

  transition: box-shadow 0.1s ease;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
  
  &:hover {
    transition: box-shadow 0.1s ease;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.24), 0px 0px 8px rgba(0, 0, 0, 0.12);
    cursor: pointer;
  }
  
  &:active {
    transition: box-shadow 0.1s ease;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
    cursor: pointer;
  }

  ${props => {
    if(props.type == 'start')
      return('background-color:'+props.theme.start+';');
    else if (props.type == 'exit')
      return('background-color:'+props.theme.exit+';');
    else {
      return('background-color:'+props.theme.grey+';');}
  }}

  ${props => {
    if(props.lights=='off') {
      return(
        "box-shadow: none"
      );
    }
  }}
`;
/* 
  &.start {
    `;
    `;
    background-color: ${props => props.theme.start};
  }

  &.exit {
    background-color: ${props => props.theme.exit};
  }

  &.white {
    background-color: ${props => props.theme.white};
  }

  &.grey {
    background-color: ${props => props.theme.grey};
  }

  &.lightOff {
    background-color: ${props => props.theme.grey};
    box-shadow: none;
  }

  &.fall {
    animation: ${props => props.theme.fall} 0.4s;
  }

  &.deactivate {
    opacity: 0.4;
    transition: opacity 0.4s ease;
    cursor: default;
    box-shadow: 0px 0px 2px rgba(0,0,0,0.12);
  } */

class Button extends React.Component {
  transition;
  lights;
  orientation;

  constructor(props) {
    super(props);

    console.log(props.type)

    if(props.type == 'start')
      console.log('hola');
    else
      console.log('guapo');

    /*this.transitionIn = this.transitionIn.bind(this)

    if (this.props.orientation != "vertical" ) {
      this.orientation = "horizontal"
    } else {
      this.orientation = this.props.orientation
    }


    if(this.props.lights) {
      this.state = {
          transition  : "display_none",
          show        : false,
          shadow      : "light_on"
      }
    } else {
      this.state = {
          transition  : "display_none",
          show        : false
      }
    }*/
    //this.transition = this.props.transition
  }

  render() {
    return (
        <Boton
          type={this.props.type}
          lights={this.props.lights}
          onClick={this.props.onClick}
          className={this.props.lights + ' '} />
    );
  }

  componentWillMount() {
    if(this.props.hidden){

    } else {
      var that = this;
      setTimeout(function(){
        that.transitionIn();
      },this.props.delay);
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

/*
<div className={"button wide " + this.orientation + " " + this.props.color + " " + this.state.transition + " " + this.props.extra + " " + this.state.shadow} onClick={this.props.onClick} ></div>
*/
