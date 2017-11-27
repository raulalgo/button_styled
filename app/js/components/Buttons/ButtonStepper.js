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


const TransitionProgress = styled.div`
    height: 100%;
    background-color: ${props => props.theme[props.color]} ;

    &.step {
        width: ${props => props.stepValue}%;
        
        -webkit-transition: width 0.1s ease;
        -moz-transition: width 0.1s ease;
        transition: width 0.1s ease;
    }

    &.noStep {
        width: ${props => props.noStepValue}%;

        -webkit-transition: width 0.1s ease;
        -moz-transition: width 0.1s ease;
        transition: width 0.1s ease;
    }
`;

/**
 * Every click on this button consumes a step. 
 * When runned off steps it will deactivate
 */
class ButtonStepper extends React.Component {
    distance;
    clickCount;
    increment
    currentStep;
    currentIndex;
    nextIndex;

    constructor(props) {
        super(props);

        this.stepper = this.stepper.bind(this);
        this.stepCalculator = this.stepCalculator.bind(this);
        this.classToggler = this.classToggler.bind(this);

        this.clicker = this.clicker.bind(this);
        this.distance = 10;
        this.state = {
            distance : 0,
            class: 'noStep',
            noStepValue: 100,
            buttonDeactivate: false
        };

       
    }

    componentWillMount() {
        this.increment = this.stepCalculator(this.props.steps);
        this.clickCount=0;
        this.currentStep = this.props.step;

       // console.log(this.props.theme[this.props.color]);
    }

    render(){
        return (
            <Button onClick={this.stepper} 
                    deactivate={this.state.buttonDeactivate} 
                    delay={this.props.delay} >
                <TransitionProgress 
                    color={this.props.color}
                    noStepValue={this.state.noStepValue} 
                    stepValue={this.state.stepValue} 
                    className={this.state.class} 
                    />
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
    
    stepper() {
        this.clickCount++;
        const newWidth = 100 - (this.increment*this.clickCount);
        if((this.clickCount%2)!=0) {
            /* step */
            this.setState({stepValue : newWidth});
        } 
        else {
            /* nostep */
            this.setState({noStepValue : newWidth});
        }
        this.classToggler();
        if(this.clickCount==this.props.steps) {
            this.setState({buttonDeactivate:true});
        }
    }

    classToggler() { 
        if(this.state.class=='noStep'){
            this.setState({class:'step'});
        }
        else{
            this.setState({class: 'noStep'});
        }
    }

    stepCalculator(steps) {
        let increment = 100/steps;
        return increment;
    }
    
}

ButtonStepper.defaultProps = {
    color : 'white',
    steps : 4
};

export default ButtonStepper;
