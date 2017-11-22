'use strict'

import React            from    'react';
import styled           from    'styled-components';
    
import SingleColumn     from    '../layouts/SingleColumn';
    
import Button           from    '../Buttons/Button';
import TogglerButton    from    '../Buttons/TogglerButton';

/* Styled Components */

class LevelTwo extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render(){
        return (
            <SingleColumn>
                <TogglerButton ripple onClick={this.props.newLevel} />
                <Button color='start' />
            </SingleColumn>
        );
    }

    /* Functions */
    
}
export default LevelTwo