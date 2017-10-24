'use strict';

import React        from 'react';
import styled       from 'styled-components';
import {ThemeProvider}  from 'styled-components';

import ThemedGame from './ThemedGame'

var red = "#E21F3F";
var orange = "#FF8500";
var blue = "#2F80ED";
var greyish_blue = "#AABCCC"
var white = "#FFF";
var grey = "#CCC";

const theme = {
  start: blue,
  exit: orange,
  white: white,
  grey: grey
}

class Theme extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ThemeProvider theme={theme}>
        <ThemedGame />
      </ThemeProvider>
    );
  }
}

export default Theme;
