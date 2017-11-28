'use strict';

import React    from  'react';
import styled   from  'styled-components';

import CountItem  from  './CountItem';

const Center = styled.div`
  text-align: center;
`;

const Centered = styled.div`
  display: inline-block;
`;

class CountWrapper extends React.Component {
  counter_temp;
  counter_string;

  constructor(props) {
    console.log('constructing CountWrapper')

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
      <Center>
        <Centered>
          {this.counter_string}
        </Centered>
      </Center>
    );
  }
}

export default CountWrapper;
