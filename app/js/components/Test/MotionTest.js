import React, { Component } from 'react';
import {Motion, spring, presets} from 'react-motion';
import styled from 'styled-components';


class MotionTest extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Motion defaultStyle={{skew: 0.1}} style={{skew: spring(1, presets.noWobble)}} >
                {value => <div style={{
                    backgroundColor: '#ff0000',
                    width: '100px',
                    height: '100px',
                    WebkitTransform: `scale(${value.skew})`,
                    transform: `scale(${value.skew})`,
                }}>{value.skew} </div>}
            </Motion>
        );
    }
}

export default MotionTest;
