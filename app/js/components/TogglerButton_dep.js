'use strict';

import React          from  'react';
import Button         from  './Button';
import RipplerButton  from  './RipplerButton';
import ExitButton     from  './ExitButton';

class TogglerButton extends React.Component {
  toggle_flag;
  exit_flag;

  lights;
  active;
  iAmWinner;
  inBl;

  element;

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.switchOn = this.switchOn.bind(this);
    this.activate = this.activate.bind(this);
    this.deactivate = this.deactivate.bind(this);
    this.iWin = this.iWin.bind(this);

    this.exit_flag = false;
    this.toggle_flag = this.props.active

    this.ligths = this.props.lights;
  //  this.active = this.props.active;

    if(this.props.color == "orange") {
      this.iAmWinner = true;
    } else {
      this.iAmWinner = false;
    }

    if(this.props.lights) {
      this.state = {
        color     : "white",
        toggler   : this.toggle,
        active    : true,
        iAmWinner : this.iAmWinner
      }
    } else {
      this.state = {
        color     : "grey",
        toggler   : null,
        active    : false,
        iAmWinner : this.iAmWinner
      }
    }

    if(this.props.orientation =="vertical") {
      this.inBl = " vertical_object"
    } else {
      this.inBl = ""
    }

    // if (this.props.lights) {
    //   if(this.props.active) {
    //     this.state = {
    //       color : "white",
    //       toggler : this.toggle
    //     }
    //   } else {
    //     //this.switchOff();
    //     this.state = {
    //       color   : "grey",
    //       toggler : this.toggle
    //     }
    //   }
    // } else {
    //   this.state = {
    //     color : "grey",
    //     toggler : null
    //   }
    // }


  }

  render() {
    if(this.props.color == "orange" && this.props.lights && this.exit_flag) {
      this.element = <ExitButton
                        newLevel={this.props.newLevel}
                        lights={this.props.lights}
                        orientation = {this.props.orientation} />
    }
    else {
      this.element = <Button
                        color={this.state.color}
                        onClick={this.state.toggler}
                        transition={this.props.transition}
                        delay={this.props.delay}
                        lights={this.props.lights}
                        orientation={this.props.orientation}
                        />
    }
    return (
      <div className={this.inBl}>
        {this.element}
      </div>
    );
  }

  // Responds when new props are taken calling toggle and switch accordingly
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.color);
    if(this.props.lights!=nextProps.lights) {
      console.log("cambia luces");
      if(nextProps.lights) {
        this.switchOn();
      } else {
        this.switchOff();
      }
    }
    if(nextProps.color == "orange") {
      this.setState({
        iAmWinner : true
      })

    }
  }

  iWin() {
    this.setState({
      color   : "orange",
      toggler : null,
      active  : true,
      iAmWinner : this.iAmWinner
    })
  }

  //
  // Function toggle()
  // -----------------------------------------
  // Works only when the lights are on (TRUE)
  // If the toggle is active, it deactivates it
  // If the toggle is inactive, it activates it
  //

  toggle() {
    if(this.state.active) {
      if(this.state.iAmWinner) {
        this.exit_flag = true;
        this.iWin()
      } else {
        this.deactivate();
      }

    } else {
      this.activate();
    }

  }

  // function switchOn(color)
  // ----------------------------------------
  // Turns on the lights
  switchOn(color){
    this.setState({
      color   : "white",
      toggler : this.toggle,
      active  : true,
      iAmWinner : this.iAmWinner
    })
    //this.toggle_flag = true;
  }

  // function switchOff()
  // ---------------------------------
  // Turns off the lights

  switchOff() {
    this.setState({
      color   : "grey",
      toggler : null,
      active  : false,
      iAmWinner : this.iAmWinner
    })
    //this.toggle_flag = false;
  }

  activate() {
    this.setState({
      color   : "white",
      toggler : this.toggle,
      active  : true,
      iAmWinner : this.iAmWinner
    })
  }

  deactivate() {
    this.setState({
      color   : "grey",
      toggler : this.toggle,
      active  : false,
      iAmWinner : this.iAmWinner
    })
  }
}

export default TogglerButton
