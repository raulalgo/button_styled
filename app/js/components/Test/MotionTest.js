import React, { Component } from 'react';
import {StaggeredMotion, spring, presets} from 'react-motion';
import styled from 'styled-components';

const Demo1 = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`;
const Pelota = styled.div`
    background: red;
    height: 100px;
    width: 100px;
    border-radius: 100%;
`;

class MotionTest extends Component {
    constructor(props) {
        super(props);
        this.state = {x: 250, y:300};
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('touchmove', this.handleTouchMove);
    }

    handleMouseMove({pageX: x, pageY: y}) {
        this.setState({x,y});
    };

    handleTouchMove({touches}) {
        this.handleMouseMove(touches[0]);
    };

    getStyles(prevStyles) {
        const endValue = prevStyles.map((_, i) => {
            return i === 0
                ? this.state
                : {
                    x: spring(prevStyles[i-1].x, presets.gentle),
                    y: spring(prevStyles[i-1].y, presets.gentle),
                };
        });
        return endValue;
    };

    render() {
        return (
            <StaggeredMotion
                styles={this.getStyles} >
                {balls => 
                    <Demo1>
                    {balls.map(({x, y}, i) => 
                        <Pelota
                            style= {{
                                WebkitTransform: `translate3d(${x-50}px, ${y-50}px, 0)`,
                                transform: `translate3d(${x-50}px, ${y-50}px, 0`,
                                zIndex: balls.length -i,
                            }}
                        />
                    )}
                    </Demo1>
                }
            </StaggeredMotion>

        );
    }
}

export default MotionTest;
