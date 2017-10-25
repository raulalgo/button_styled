'use strict';

import React    from  'react';
import styled   from  'styled-components';

import Button   from  './Button';
import Rippler  from  './Rippler';

class RipplerButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);


    this.state = {
      display : "display_none ",
      ripple  : " ",
      x       : 0,
      y       : 0
    }
  }

  render() {
    return (
      <div>
        <Rippler  x={this.state.x}
                  y={this.state.y}
                  display={this.state.display}
                  ripple={this.state.ripple} />
        <Button color="exit "
                lights={this.props.lights}
                onClick={this.handleClick} />
      </div>
    )
  }

  handleClick(e) {
    console.log(e.nativeEvent);
    this.setState({
      display : " ",
      ripple  : "ripple ",
      x       : e.nativeEvent.clientX,
      y       : e.nativeEvent.clientY
    });
    //this.props.onClick();
  }
}

export default RipplerButton;


/*



*/
