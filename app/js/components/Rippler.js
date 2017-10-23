'use strict';

import React from 'react';

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
        <div className={this.props.t_w_classes}>
          <div className={this.props.tr_classes} style={this.style}> </div>
        </div>
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
