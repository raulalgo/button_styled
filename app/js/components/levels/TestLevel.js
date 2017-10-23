'use strict'

import React          from  'react';
import Button         from  '../Button';
import TogglerButton  from  '../TogglerButton';
import LightButton    from  '../LightButton';
import ExitButton     from  '../ExitButton';

class TestLevel extends React.Component {
  constructor(props) {
    super(props)

    this.clicker = this.clicker.bind(this)

    this.state = {
      lights  : true,
      active  : true
    }
  }

  render() {
    return(
      <div className="boardWrapper">
        <LightButton lights={false} color="red" />
        <Button color="red" lights={true} />
      </div>
    )
  }

  clicker() {
    this.setState({
      lights    : !(this.state.lights),
      active    : true
    })
  }
}

export default TestLevel;
