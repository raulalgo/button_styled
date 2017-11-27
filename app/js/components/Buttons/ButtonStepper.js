'use strict';

import React        from    'react';
import styled       from    'styled-components';
import {keyframes}  from    'styled-components';

import Button       from    '../Buttons/Button';

/* Styled Components */
// const StyledButton = styled(Button)`
//     /* background: linear-gradient(90deg, red ${props => props.distance}%, rgba(255,0,0,0) ${props => props.distance}%); */
//     background: linear-gradient(90deg, red 50%, rgba(255, 0, 0, 0) 50%);
//     background-position: 80% 50%;
//     transition: all 0.5 ease;
// `;
const growShrink = keyframes`
    from {
        width: ${props => props.from}%;
    }
    to {
        width: ${props => props.to}%;
    }
`;

const Progress = styled.div`
    height: 100%;

    background-color: red;
    animation: ${growShrink} 1s forwards;
    
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
            distance : 0,
            from : 100,
            to : 10
        };
    }

    render(){
        return (
            // <StyledButton distance={this.distance} onClick={this.clicker}> </>
            <Button>
                <Progress distance={this.props.distance} from={this.state.from} to={this.state.to} />
            </Button>
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
