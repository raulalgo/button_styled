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
    width: 70%;
    background-color: darkmagenta;
`;

/**
 * Every click on this button consumes a step. 
 * When runned off steps it will deactivate
 */
class ButtonStepper extends React.Component {
    distance;

    constructor(props) {
        super(props);

        this.clicker = this.clicker.bind(this);
        this.distance = 10;
        this.state = {
            distance : 0
        };
    }

    render(){
        return (
            <TestGrid>
                <Button>
                    <Progress />
                </Button>
                <Button>
                    <TransitionProgress />
                </Button>
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
}

ButtonStepper.defaultProps = {
    color : 'white'
};

export default ButtonStepper;
