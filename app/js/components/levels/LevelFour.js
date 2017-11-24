'use strict'

import React            from    'react';
import styled           from    'styled-components';

import SingleColumn     from    '../layouts/SingleColumn';

import Button           from    '../Buttons/Button';
import TogglerButton    from    '../Buttons/TogglerButton';

/* Styled Components */

class LevelFour extends React.Component {
    pointer;
    firstFlag;
    rippleArray;

    rippleTest

    constructor(props) {
        super(props);

        this.resolve = this.resolve.bind(this);
        this.clicker = this.clicker.bind(this);
        this.winner = this.winner.bind(this);

        this.rippleArray = [];

        this.state = {
            light : {
                0   :   false,
                1   :   false,
                2   :   false,
                3   :   false
            },
            ripple : {
                0   :   false,
                1   :   false,
                2   :   false,
                3   :   false
            },
            rippleTest : false
        }

        this.pointer = 0;
        this.firstFlag = true;
        
    }

    render(){
        return (
            <SingleColumn>
                <TogglerButton on ripple={this.state.ripple[0]} lightOff={!this.state.light[0]} delay={0} 
                                 onClick={this.state.ripple[0] ? this.props.newLevel : null }/>
                <TogglerButton on ripple={this.state.ripple[1]} lightOff={!this.state.light[1]} delay={0.05} 
                                 onClick={this.state.ripple[1] ? this.props.newLevel : null }/>
                <TogglerButton on ripple={this.state.ripple[2]} lightOff={!this.state.light[2]} delay={0.1} 
                                 onClick={this.state.ripple[2] ? this.props.newLevel : null }/>
                <TogglerButton on ripple={this.state.ripple[3]} lightOff={!this.state.light[3]} delay={0.15} 
                                 onClick={this.state.ripple[3] ? this.props.newLevel : null }/>
                <Button
                    color="start"
                    delay={0.2}
                    onClick={this.clicker} />
            </SingleColumn>
        );
    }

    /* Functions */
    resolve () {

    }
    
    clicker () {
        this.setState({
            rippleTest : true
        });
        if(this.firstFlag) {
            this.setState({
                light : {
                    0 : true
                }
            });
            this.firstFlag = false;
        }
        else {
            this.setState({
                light : {
                    [this.pointer] : false,
                    [++this.pointer] : true
                }
            })
            if (this.pointer > 3) {
                this.pointer = 0;
                this.setState({
                    light : {
                        [this.pointer] : true
                    }
                })
            }
        }
    }

    winner (ops) {
        var win = Math.floor(Math.random()*ops);
        for(var i=0 ; i<ops ; i++) {
            this.rippleArray[i] = false;
        }
        this.rippleArray[win] = true;

        this.setState({
            ripple : {
                0 : this.rippleArray[0],
                1 : this.rippleArray[1],
                2 : this.rippleArray[2],
                3 : this.rippleArray[3]
            }
        });
        return win;
    }

    componentDidMount () {
        this.winner(4);
    }
}
export default LevelFour;


{/*  */}