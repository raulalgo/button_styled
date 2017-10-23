'use strict';

import React    from 'react';

class Button_dep extends React.Component {
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
         <div className={"button wide " + this.orientation + " " + this.props.color + " " + this.state.transition + " " + this.props.extra + " " + this.state.shadow} onClick={this.props.onClick} ></div>
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

export default Button_dep;
