'use strict'

import  React              from  'react';

import  Button             from   '../Button'
import  GameBoard          from   '../GameBoard'
import  TogglerButton      from   '../TogglerButton'

class LevelFour extends React.Component {
  num_options;
  color_array;
  winner;
  clicked_flag;


  constructor(props) {
    super(props);
    this.initiate = this.initiate.bind(this);

    this.num_options = 4
    this.color_array = [];
    this.clicked_flag = false;

    for(var i=0; i<this.num_options ; i++) {
        this.color_array[i] = "grey"
    }

    this.state = {
      extra   : "",
      colors  : {
        0 : this.color_array[0],
        1 : this.color_array[1],
        2 : this.color_array[2],
        3 : this.color_array[3]
      },
      lights  : {
        0 : false,
        1 : false,
        2 : false,
        3 : false
      },
      active  : {
        0 : false,
        1 : false,
        2 : false,
        3 : false
      }
    }


  }

  render() {
    return(

      <div className="boardWrapper center">
        <GameBoard height="">
          <TogglerButton name="Toggler1" color={this.state.colors[0]} newLevel={this.props.newLevel} transition="fall" delay={150} lights={this.state.lights[0]} active={this.state.active[0]} orientation={this.props.orientation} />
          <TogglerButton name="Toggler2" color={this.state.colors[1]} newLevel={this.props.newLevel} transition="fall" delay={200} lights={this.state.lights[1]} active={this.state.active[1]} orientation={this.props.orientation} />
          <TogglerButton name="Toggler3" color={this.state.colors[2]} newLevel={this.props.newLevel} transition="fall" delay={250} lights={this.state.lights[2]} active={this.state.active[2]} orientation={this.props.orientation} />
          <TogglerButton name="Toggler4" color={this.state.colors[3]} newLevel={this.props.newLevel} transition="fall" delay={300} lights={this.state.lights[3]} active={this.state.active[3]} orientation={this.props.orientation} />
        </GameBoard>
        <Button color="blue" onClick={this.initiate} extra={this.state.extra} transition="fall" delay={350} lights={true} />
      </div>
    )
  }

  initiate() {
    if(!this.clicked_flag)
    {
      var winner = Math.floor(Math.random()*this.num_options);
      console.log(winner);
      for(var i=0 ; i < this.num_options ; i++) {
        this.color_array[i] = "white"
      }
      this.color_array[winner] = "orange"
      console.log(this.color_array);

      this.setState({
        extra   : "deactivate",
        colors  : {
          0 : this.color_array[0],
          1 : this.color_array[1],
          2 : this.color_array[2],
          3 : this.color_array[3]
        },
        lights  : {
          0 : true,
          1 : true,
          2 : true,
          3 : true
        }
      }, function(){
        //console.log("color 3: " + this.state.colors[3]);
      })
      this.clicked_flag=true;
    }
  }
}

export default LevelFour;
