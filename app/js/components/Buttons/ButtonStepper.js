'use strict';

import React        from    'react';
import styled       from    'styled-components';
import {keyframes}  from    'styled-components';

import Button       from    '../Buttons/Button';

/* Styled Components */
const TestGrid = styled.div`
    display: grid;
    grid-auto-rows: 120px;
    grid-row-gap: 20px;

`;

const Step = keyframes`
    from {
        width: 10%;
    }
    to {
        width: 90%;
    }
`;

const Progress = styled.div`
    height: 100%;
    width: 70%;
    background-color: tomato;
    animation: ${Step} 1s ease forwards;
`;

const TransitionProgress = styled.div`
    height: 100%;
    width: ${props => props.from}%;
    background-color: darkmagenta;

    -webkit-transition: width 1s ease;
    -moz-transition: width 1s ease;
    transition: width 1s ease;

    &.move {
        width: ${props => props.to}%;
        -webkit-transition: width 1s ease;
        -moz-transition: width 1s ease;
        transition: width 1s ease;
    }
`;

/**
 * Every click on this button consumes a step. 
 * When runned off steps it will deactivate
 */
class ButtonStepper extends React.Component {
    distance;
    clickCount;

    constructor(props) {
        super(props);

        this.moveToggle = this.moveToggle.bind(this);

        this.clicker = this.clicker.bind(this);
        this.distance = 10;
        this.state = {
            distance : 0,
            move: '',
            from: '20',
            to: '99'
        };

        this.clickCount=0;
    }

    render(){
        return (
            <TestGrid>
                <Button>
                    <Progress  />
                </Button>
                <Button>
                    <TransitionProgress from={this.state.from} to={this.state.to} className={this.state.move} />
                </Button>
                <Button color='start' onClick={this.moveToggle} />
            </TestGrid>
        );
    }

    /* Functions */
    clicker() {
        this.distance += 10;
        this.setState({
            distance : this.distance
        });
    }  
    
    moveToggle() {
        if(this.state.move == '') {
            this.setState({move:'move'});
        } 
        else {
            this.setState({move:''});
        }
        if(this.clickCount == 2) {
            this.setState({to:'66'});
        }
        this.clickCount++;
    }
    
}

ButtonStepper.defaultProps = {
    color : 'white'
};

export default ButtonStepper;
