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

var button_height = "120px"

const theme = {
  start: blue,
  exit: orange,
  white: white,
  grey: grey,
  button_height: button_height
}

class Theme extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ThemeProvider theme={theme}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}

export default Theme;
