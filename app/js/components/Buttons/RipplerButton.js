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
      color: 'exit',
      display: "display_none ",
      ripple: " ",
      x: 0,
      y: 0
    };
    // this.state = {
    //   display : "display_none ",
    //   ripple  : " ",
    //   x       : 0,
    //   y       : 0
    // };
  }

  render() {
    return (
      <div>
        <Rippler 
          x={this.state.x}
          y={this.state.y}
          display={this.state.display}
          ripple={this.state.ripple}
           />
        <Button 
          lightOff={this.props.lightOff}
          color={this.props.color}
          deactivate={this.props.deactivate}
          onClick={this.handleClick}
          delay={this.props.delay}
         />
      </div>
    );
  }

  componentWillMount() {
  }

  handleClick(e) {
    console.log(e.nativeEvent);
    this.setState({
      display : " ",
      ripple  : "ripple ",
      x       : e.nativeEvent.clientX,
      y       : e.nativeEvent.clientY
    });
    this.props.onClick();
  }
}

RipplerButton.defaultProps = {
  lights: true,
  lightOff: false,
  color: 'exit',
  deactivate: false,
  transition: true,
  delay: 0
};

export default RipplerButton;


/*


        <Rippler  x={this.state.x}
                  y={this.state.y}
                  display={this.state.display}
                  ripple={this.state.ripple} />
        <Button color={this.state.color}
                transition={this.props.transition}
                lights={this.props.lights}
                onClick={this.handleClick} />

*/
