'use strict';

import React    from  'react';
import styled   from  'styled-components';

const Counter = styled.div`
    background-color: ${props => props.theme.greyishBlue};
    width: 4px;
    height: 32px;
    margin: 8px 4px;
    border-radius: 2px;
    display: inline-block;
`;

class CountItem extends React.Component {
  render() {
    return (
      <Counter className=""> </Counter>
    );
  }
}

export default CountItem;
