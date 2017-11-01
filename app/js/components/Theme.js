'use strict';

import React        from 'react';
////import styled       from 'styled-components';
import {ThemeProvider}  from 'styled-components';
import {keyframes} from 'styled-components';

//import ThemedGame from './ThemedGame';

const red = '#E21F3F';
const orange = '#FF8500';
const blue = '#2F80ED';
const greyishBlue = '#AABCCC';
const white = '#FFF';
const grey = '#CCC';

const fall = keyframes`
  0%    {
    opacity: 0;
    transform: scale(1.3);
  }
  50%  {
    opacity: 0.6;
    transform: scale(0.90);
  }
  100%  {
    opacity: 1;
    transform: scale(1);
  }
`;

const buttonHeight = '120px';

const theme = {
  start: blue,
  exit: orange,
  white: white,
  grey: grey,
  buttonHeight: buttonHeight,
  red: red,
  greyishBlue: greyishBlue,
  fall: fall
};

class Theme extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ThemeProvider theme={theme}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}//

export default Theme;
