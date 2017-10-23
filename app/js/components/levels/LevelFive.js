'use strict'

import  React              from  'react';

import  Button             from   '../Button'
import  GameBoard          from   '../GameBoard'
import  TogglerButton      from   '../TogglerButton'
import  ExitButton         from   '../ExitButton'

class LevelFive extends React.Component {
  num_options;
  color_array;
  lights_array;
  winner;
  clicked_flag;
  roller;
  orientation;


  constructor(props) {
    super(props);
    this.initiate = this.initiate.bind(this);
    this.roll = this.roll.bind(this);

    this.num_options = 4
    this.color_array = [];
    this.lights_array = [];
    this.clicked_flag = false;
    this.roller = 0;

    this.initiate()

    for(var i=0; i<this.num_options ; i++) {

        this.lights_array[i] = false;
    }


    this.state = {
      extra   : "",
      colors  : {
        0 : "white",
        1 : "white",
        2 : "white",
        3 : "white"
      },
      lights  : {
        0 : this.lights_array[0],
        1 : this.lights_array[1],
        2 : this.lights_array[2],
        3 : this.lights_array[3]
      }
    }

  }

  render() {
    var elements = [];
    var delay_base = 150;
    for(var i=0; i<4 ; i++) {
      var i_delay = delay_base + (50 * i);
      if(i==this.winner) {
        elements[i] = <ExitButton orientation={this.props.orientation} newLevel={this.props.newLevel} lights={this.lights_array[i]} delay={i_delay} transition="fall" />
      } else {
        elements[i] = <TogglerButton orientation={this.props.orientation} color="white" lights={this.lights_array[i]} delay={i_delay} transition="fall"/>
      }

    }
    return(

      <div className="boardWrapper center">
        <GameBoard height="">
          {elements}
        </GameBoard>
        <Button color="blue" onClick={this.roll} extra={this.state.extra} transition="fall" delay={350} lights={true} />
      </div>
    )
  }

  initiate() {
      this.winner = Math.floor(Math.random()*this.num_options);
      console.log(this.winner);
  }

  roll() {
    for(var i=0;i<4;i++) {
      if(i==this.roller){
        this.lights_array[i] = true;
      } else {
        this.lights_array[i] = false;
      }

    }
    this.setState({
      lights : {
        0 : this.lights_array[0],
        1 : this.lights_array[1],
        2 : this.lights_array[2],
        3 : this.lights_array[3],
      }
    })
    this.roller++;
    if(this.roller==4)
      this.roller=0
  }
}

export default LevelFive;
// <TogglerButton name="Toggler1" color={this.state.colors[0]} newLevel={this.props.newLevel} transition="fall" delay={150} lights={this.state.lights[0]} />
// <TogglerButton name="Toggler2" color={this.state.colors[1]} newLevel={this.props.newLevel} transition="fall" delay={200} lights={this.state.lights[1]} />
// <TogglerButton name="Toggler3" color={this.state.colors[2]} newLevel={this.props.newLevel} transition="fall" delay={250} lights={this.state.lights[2]} />
// <TogglerButton name="Toggler4" color={this.state.colors[3]} newLevel={this.props.newLevel} transition="fall" delay={300} lights={this.state.lights[3]} />
