'use strict'

import React            from  'react';
import Button           from  '../Button'
import RipplerButton    from  '../RipplerButton'
import TogglerButton    from  '../TogglerButton'
import GameBoard        from  '../GameBoard'

class LevelThree extends React.Component {
  toggler;

  constructor(props) {
    super(props);

    this.initiate = this.initiate.bind(this)

    this.state = {
      initiated : true,
      extra     : ""
    }

  }

  render() {
    if(this.state.initiated) {
      this.toggler = <TogglerButton color="orange" newLevel={this.props.newLevel} lights={true} active={true} />
    } else {
      this.toggler = <Button color="grey" transition="fall" delay={150}/>
    }
    return(
      <div className="boardWrapper">
        <GameBoard height="height_1 m20">
          {this.toggler}
        </GameBoard>
        <Button color="start" onClick={this.initiate} extra={this.state.extra} transition="fall" delay={200} lights={true} />
      </div>
    );
  }

  initiate() {
    this.setState({
      initiated : true,
      extra     : "deactivate"
    });
  }
}

export default LevelThree;
// <TogglerButton color="white" />
// <TogglerButton color="white" />
// <TogglerButton color="white" />
