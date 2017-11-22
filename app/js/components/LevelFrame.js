'use strict'

import React        from  'react';
import styled       from  'styled-components';

/* Styled Components */
const Fader = styled.section`
    &.fadeOut {
        opacity: 0;
        transition: opacity 0.6s ease-out;
    }
`;

class LevelFrame extends React.Component {
    counter;
    newFamily;

    constructor(props) {
        super(props);

        this.nextLevel = this.nextLevel.bind(this);
        this.newLevel = this.newLevel.bind(this);

        this.state = {
            currentLevel : 0,
            frameTransition : ''
        };

        this.appendProps();
    }

    render(){
        return (
            <Fader className={this.state.frameTransition} >
                {this.newFamily[this.props.currentLevel]}
            </Fader>
        );
    }

    /* Functions */
    nextLevel() {
        this.props.pushLevel();

    }

    newLevel() {
        this.setState({
            frameTransition: 'fadeOut'
        });

        setTimeout(function(){
            this.nextLevel();
            this.setState({ frameTransition: ''});
        }.bind(this),1500);
    }

    appendProps() {
        this.newFamily = React.Children.map(this.props.children, (child) => React.cloneElement(child,{
            newLevel : this.newLevel
        })
        );

        return this.newFamily;
    }
    
}
export default LevelFrame