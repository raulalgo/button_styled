'use strict';

import React  from 'react';
import styled from 'styled-components';

const TransitionWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  &.display_none {
    visibility: hidden;
  }
`;
const Transitioner = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 100%;
  background-color: ${props => props.theme.exit};
  position: absolute;
  transform: scale();
  opacity: 1;
  z-index: 1000;

  &.ripple {
    opacity: 1;
    transition: transform 0.8s ease;
    transform: scale(100);
  }
`;

class Rippler extends React.Component {
  style;

  constructor(props) {
    super(props);
  }

  render() {
    this.style = ({ top   : this.props.y-50,
                    left  : this.props.x-50})

    return (
      <div>
        <TransitionWrapper className={this.props.display}>
          <Transitioner style={this.style} className={this.props.ripple} />
        </TransitionWrapper>
      </div>
    );
  }

  componentWillUpdate() {
  }
}

export default Rippler;


/*
<div className={this.t_w_classes}>
  <div className={'transitioner' + this.tr_classes } style={this.rippleStyle}> </div>
</div>
*/
