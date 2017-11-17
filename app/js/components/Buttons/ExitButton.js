'use strict';

import React          from 'react';

import RipplerButton  from  './RipplerButton'

/**
 * Turn this button into a TogglerButton + rippler.
 * This will have three states that move:
 * 
 *     Grey  ->  White -->  Orange  ->  Ripple
 * 
 * The color that gets selected determines the steps needed to the final ripple
 */

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
