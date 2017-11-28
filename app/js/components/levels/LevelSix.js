'use strict';

import React        from  'react';
import styled       from  'styled-components';

import SingleColumn from    '../layouts/SingleColumn';

import Button       from    '../Buttons/Button';
import ToggleButton from    '../Buttons/TogglerButton';

/* Styled Components */

class LevelSix extends React.Component {
    pointer;

    constructor(props) {
        super(props);

        this.resolve = this.resolve.bind(this);
        this.move = this.move.bind(this);
        this.moveUp = this.moveUp.bind(this);
        
        this.state = {
            buttonDownDeactivate : false,
            buttonUpDeactivate : true,
            light : {
                0   : false,
                1   : false,
                2   : false,
                3   : false
            }
        };
        this.pointer = -1;
    }

    render(){
        return (
            <SingleColumn>
                <ToggleButton on lightOff={!this.state.light[0]} delay={0} />
                <ToggleButton on lightOff={!this.state.light[1]} delay={0.05} />
                <ToggleButton on lightOff={!this.state.light[2]} delay={0.1} ripple onClick={this.props.newLevel} />
                <ToggleButton on lightOff={!this.state.light[3]} delay={0.15} />
                
                <Button 
                    deactivate={this.state.buttonUpDeactivate} 
                    color='start' delay={0.25} 
                    onClick={() => this.move(-1,4)} />
                <Button 
                    deactivate={this.state.buttonDownDeactivate} 
                    color='start' delay={0.25} 
                    onClick={() => this.move(1,4)} />
            </SingleColumn>
            
        );
    }

    /* Functions */
    resolve () {

    }
    
    move(increment, max) {
        let next = this.pointer+increment;
        let prev = this.pointer-increment;

        

        if(next<max && next>=0){
            this.pointer = next;
            this.setState({
                light : {
                    [this.pointer] : true,
                    [prev] : false
                }
            });
        }

        console.log(this.pointer);
       
        this.setState({
            buttonUpDeactivate : (this.pointer <= 0 ? true : false),
            buttonDownDeactivate : (this.pointer < (max-1) ? false : true)
        });
    }
    
}
export default LevelSix;