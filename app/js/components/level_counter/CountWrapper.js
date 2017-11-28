'use strict';

import React    from  'react';
import CountItem  from  './CountItem';

class CountWrapper extends React.Component {
  counter_temp;
  counter_string;

  constructor(props) {


    super(props);

  //  this.counter_temp = 10;
    this.counter_string = [];
    console.log('In CountWrapper the currentLevel is: ' + this.props.currentLevel);

  }

  componentWillUpdate() {

  }

  render() {
    this.counter_string = [];
    for(var i = 0 ; i < this.props.currentLevel+1 ; i++)
    {
      this.counter_string[i] = <CountItem />;
    }

    return (
      <div className="center">
        <div className="centered">
          {this.counter_string}
        </div>
      </div>
    );
  }
}

export default CountWrapper;
