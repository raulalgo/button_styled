'use strict';

import React            from    'react';
import styled           from    'styled-components';

import SingleColumn     from    '../layouts/SingleColumn';

import Button           from    '../Buttons/Button';
import TogglerButton    from    '../Buttons/TogglerButton';

/* Styled Components */

class LevelFive extends React.Component {
    exitArray;

    constructor(props) {
        super(props);

        this.resolve = this.resolve.bind(this);
        this.clicker = this.clicker.bind(this);
        this.winner = this.winner.bind(this);
        
        this.state = {
            togglerLight : false,
            starterDeactivate : false,
            exit : {
                0 : false,
                1 : false,
                2 : false,
                3 : false
            }
        };

        this.exitArray = [];
    }

    render(){
        return (
            <SingleColumn>
                <TogglerButton on exit={this.state.exit[0]} lightOff={!this.state.togglerLight} delay={0} 
                               onClick={this.state.exit[0] ? this.props.newLevel : null} />
                <TogglerButton on exit={this.state.exit[1]} lightOff={!this.state.togglerLight} delay={0.05} 
                               onClick={this.state.exit[1] ? this.props.newLevel : null} />
                <TogglerButton on exit={this.state.exit[2]} lightOff={!this.state.togglerLight} delay={0.10} 
                               onClick={this.state.exit[2] ? this.props.newLevel : null} />
                <TogglerButton on exit={this.state.exit[3]} lightOff={!this.state.togglerLight} delay={0.15} 
                               onClick={this.state.exit[3] ? this.props.newLevel : null} />
                <Button
                    color='start'
                    delay={0.2}
                    onClick={this.clicker} 
                    deactivate={this.state.starterDeactivate} />
            </SingleColumn>
        );
    }

    /* Functions */
    resolve () {

    }

    clicker () {
        this.setState({
            togglerLight : true,
            starterDeactivate : true
        });

    }

    winner(ops) {
        var win = Math.floor(Math.random()*ops);
        for(var i=0 ; i<ops ; i++) {
            this.exitArray[i] = false;
        }
        this.exitArray[win] = true;

        this.setState({
            exit : {
                0 : this.exitArray[0],
                1 : this.exitArray[1],
                2 : this.exitArray[2],
                3 : this.exitArray[3],
            }
        });
    }

    componentDidMount() {
        this.winner(4);
    }
     
}
export default LevelFive;
