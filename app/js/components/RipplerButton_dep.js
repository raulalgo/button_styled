'use strict';

import React    from 'react';

import Button       from  './Button';
import Rippler      from  './Rippler';
import LightButton  from  './LightButton';

class RipplerButton extends React.Component {
  hide;
  flag;
  inBl;

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    //this.state.t_w_classes = "transition_wrapper display_none"
    //this.state.tr_classes = "";

    if(this.props.orientation =="vertical") {
      this.inBl = " vertical_object"
    } else {
      this.inBl = ""
    }


    this.state = {
      t_w_classes   : "transition_wrapper display_none",
      tr_classes    : "transitioner",
      x             : 0,
      y             : 0
    }
  //  this.flag = false;


  }

  render() {

    return (
      <div className={this.inBl} >
        <Rippler x={this.state.x} y={this.state.y} t_w_classes={this.state.t_w_classes} tr_classes={this.state.tr_classes} />
        <LightButton
            lights={this.props.lights}
            color={this.props.color}
            transition={this.props.transition}
            onClick={this.handleClick}
            delay={this.props.delay}
            hidden={this.props.hidden}
            orientation={this.props.orientation} />
      </div>
    );
  }

  handleClick(e) {
    console.log(e.nativeEvent);
    this.setState({
      t_w_classes   : "transition_wrapper",
      tr_classes    : "transitioner ripple",
      x             : e.nativeEvent.clientX,
      y             : e.nativeEvent.clientY
    })
    this.props.onClick();
    //
    // LEVEL MANAGER
    //
  }

  componentWillReceiveProps() {
  }

  componentWillMount(){
  }

  componentWillUpdate() {

  }

  componentDidUpdate() {
  }

}

export default RipplerButton;

/*
<div className={this.t_w_classes}>
  <div className={'transitioner' + this.tr_classes } style={this.rippleStyle}> </div>
</div>
*/
