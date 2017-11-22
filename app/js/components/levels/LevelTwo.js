'use strict';

import React            from    'react';
import styled           from    'styled-components';
    
import SingleColumn     from    '../layouts/SingleColumn';
    
import Button           from    '../Buttons/Button';
import TogglerButton    from    '../Buttons/TogglerButton';

/* Styled Components */

class LevelTwo extends React.Component {
    solveFlag;

    constructor(props) {
        super(props);

        this.resolve = this.resolve.bind(this);

        this.state = {
            delay: 'wait'
        };
        this.solveFlag = false;
    }

    render(){
        return (
            <SingleColumn>
                <TogglerButton ripple onClick={this.props.newLevel} delay={this.state.delay} />
                <Button color='start' onClick={this.resolve} />
            </SingleColumn>
        );
    }

    resolve () {
        if(!this.solveFlag){
            this.setState({
                delay: 'go'
            });
        }
    }

    /* Functions */
    
}
export default LevelTwo;
