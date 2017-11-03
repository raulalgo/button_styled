'use strict';

import React          from 'react';

import RipplerButton  from  './RipplerButton'

class ExitButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RipplerButton
        color="orange"
        transition={this.props.transition}
        onClick={this.props.newLevel}
        lights={this.props.lights}
        delay={this.props.delay}
        orientation={this.props.orientation} />
    )
  }
}

export default ExitButton;
