'use strict';

import React    from  'react';
import styled   from  'styled-components';

import Button   from  './Button';

class RipplerButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button color="exit " lights={this.props.lights} />
      </div>
    )
  }
}

export default RipplerButton;
