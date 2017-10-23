'use strict'

import React      from 'react';
import styled     from 'styled-components';

import Button     from '../Button'

class LevelStyle {
  constructor(props) {
  }

  render() {
    return (
      <div>Hola Styled
        <Button color="blue" transition="fall" delay={350} lights={true} />
      </div>
    )
  }
}

export default LevelStyle;
