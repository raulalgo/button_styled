import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import styled from 'styled-components';

const Rojo = styled.div`
    background: red;
    width: 100px;
    height: 100px;
`;

const Demo0 = styled.div`
    border-radius: 4px;
    background-color: rgb(240, 240, 232);
    position: relative;
    margin: 5px 3px 10px;
    width: 450px;
    height: 50px;
`;

const Demo0Block = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 4px;
    background-color: rgb(130, 181, 198);
`;

class MotionTest extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleMouseDown() {
        this.setState({open: !this.state.open});
    }

    handleTouchStart(e) {
        e.preventDefault();
        this.handleMouseDown();
    }

    render() {
        return (
        <div>
            <button
                onMouseDown={this.handleMouseDown}
                onTouchStart={this.handleTouchStart} >
                Toggle
            </button>

            <Motion style={{x: spring(this.state.open ? 400 : 0)}} >
                {({x}) =>
                    <Demo0 className='demo0' >
                        <Demo0Block className='demo0-block' style={{
                            WebkitTransform: `translate3d(${x}px, 0, 0)`,
                            transform: `translate3d(${x}px, 0, 0)`,
                        }} />
                    <div>{x.value}</div>
                    </Demo0>
                }
            </Motion>
        </div>
        );
    }
}

export default MotionTest;
