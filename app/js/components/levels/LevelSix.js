'use strict'

import  React             from  'react';

import  Button            from  '../Button';
import  TogglerButton     from  '../TogglerButton';
import  GameBoard         from  '../GameBoard';
import  LevelFive         from  './LevelFive'

class LevelSix extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      extra : null
    }
  }

  render() {
    return(
      <LevelFive orientation="vertical" newLevel={this.props.newLevel}/>
    )
  }
}

export default LevelSix;
// <div className="boardWrapper center">
//   <GameBoard height="height_4"  >
//     <TogglerButton color="white" lights={true} orientation="vertical" transition="fall" delay="50"/>
//     <TogglerButton color="orange" lights={true} orientation="vertical" transition="fall" delay="100"/>
//     <TogglerButton color="white" lights={true} orientation="vertical" transition="fall" delay="150"/>
//     <TogglerButton color="white" lights={true} orientation="vertical" transition="fall" delay="200"/>
//   </GameBoard>
//   <Button color="blue" onClick="" extra={this.state.extra} transition="fall" delay={500} lights={true} />
// </div>
