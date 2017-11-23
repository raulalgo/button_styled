'use strict'

import React        from  'react';
import styled       from  'styled-components';

import SingleColumn     from    '../layouts/SingleColumn';

import Button           from    '../Buttons/Button';
import TogglerButton    from    '../Buttons/TogglerButton';

/* Styled Components */

class LevelThree extends React.Component {
    constructor(props) {
        super(props);

        this.startLevel = this.startLevel.bind(this);
        this.resolve = this.resolve.bind(this);

        this.state = {
            togglerLightOff: true,
            starterDeactivate: false
        };

        
    }

    render(){
        return (
            <SingleColumn>
                <TogglerButton 
                    lightOff={this.state.togglerLightOff}
                    on
                    exit
                    onClick={this.props.newLevel}
                    delay={0.15} />
                <Button 
                    color='start' 
                    deactivate={this.state.starterDeactivate} 
                    onClick={this.startLevel}
                    delay={0.3} />
            </SingleColumn>
        );
    }

    /* Functions */

    startLevel () {
        this.setState({
            togglerLightOff: false,
            starterDeactivate: true
        });
    }

    resolve () {

    }
    
}
export default LevelThree;