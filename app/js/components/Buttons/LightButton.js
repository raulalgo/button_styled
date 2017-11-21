'use strict';

import React            from  'react';
import Button           from  './Button';

class LightButton extends React.Component {
  constructor(props) {
    super(props);

    this.switchOn = this.switchOn.bind(this);
    this.switchOff = this.switchOff.bind(this);

    if(this.props.lights) {
      this.state = {
        color   : this.props.color,
        onClick : this.props.onClick
      };
    } else {
      this.state = {
        color   : "grey",
        onClick : null
      };
    }
  }

  render() {
    return (
      <Button
        color={this.state.color}
        transition={this.props.transition}
        extra={this.props.extra}
        onClick={this.state.onClick}
        hidden={this.props.hidden}
        delay={this.props.delay}
        lights={this.props.lights}
        orientation={this.props.orientation} />
    );
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.lights) {
      this.switchOff();
    } else {
      this.switchOn();
    }
  }

  switchOn() {
    this.setState( {
      color   : this.props.color,
      onClick : this.props.onClick
    });
  }

  switchOff() {
    this.setState({
      color   : "grey",
      onClick : null
    });
  }
}

export default LightButton;
