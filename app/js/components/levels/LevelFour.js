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
    exitArray;

    exitTest

    constructor(props) {
        super(props);

        this.resolve = this.resolve.bind(this);
        this.clicker = this.clicker.bind(this);
        this.winner = this.winner.bind(this);

        this.exitArray = [];

        this.state = {
            light : {
                0   :   false,
                1   :   false,
                2   :   false,
                3   :   false
            },
            exit : {
                0   :   false,
                1   :   false,
                2   :   false,
                3   :   false
            },
            exitTest : false
        }

        this.pointer = 0;
        this.firstFlag = true;
        
    }

    render(){
        return (
            <SingleColumn>
                <TogglerButton on exit={this.state.exit[0]} lightOff={!this.state.light[0]} delay={0} />
                <TogglerButton on exit={this.state.exit[1]} lightOff={!this.state.light[1]} delay={0.05} />
                <TogglerButton on exit={this.state.exit[2]} lightOff={!this.state.light[2]} delay={0.1} />
                <TogglerButton on exit={this.state.exit[3]} lightOff={!this.state.light[3]} delay={0.15} />

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
            exitTest : true
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
        console.log('win: ' + win);

        for(var i=0 ; i<ops ; i++) {
            this.exitArray[i] = false;
        }
        this.exitArray[win] = true;

        this.setState({
            exit : {
                0 : this.exitArray[0],
                1 : this.exitArray[1],
                2 : this.exitArray[2],
                3 : this.exitArray[3]
            }
        });
        // this.setState({
        //     exit : {
        //         [win] : true
        //     }
        // })
        return win;
    }

    componentDidMount () {
        this.winner(4);
    }
}
export default LevelFour;
