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
  margin: 12px auto;

  background-color: #2F80ED;

  width: 400px;
  height: 120px;

  transition: box-shadow 0.1s ease;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);

  animation: falling 0.4s;

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
`;

class Button extends React.Component {
  transition;
  lights;
  orientation;

  constructor(props) {
    super(props);
    this.transitionIn = this.transitionIn.bind(this)

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
    }
    //this.transition = this.props.transition
  }

  render() {
    return (
      <div>
        <Boton className={"button wide"} />
         <div className={"button wide " + this.orientation + " " + this.props.color + " " + this.state.transition + " " + this.props.extra + " " + this.state.shadow} onClick={this.props.onClick} ></div>
      </div>
    )
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
      })
    } else {
      this.setState({
        shadow  : ""
      })
    }
  }

  transitionIn() {
    this.setState({
      transition    : this.props.transition,
      show          : true
    })
  }
}

export default Button;
