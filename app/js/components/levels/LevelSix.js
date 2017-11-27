'use strict';

import React        from  'react';
import styled       from  'styled-components';

import SingleColumn from    '../layouts/SingleColumn';

import Button       from    '../Buttons/Button';
import ToggleButton from    '../Buttons/TogglerButton';

/* Styled Components */

class LevelSix extends React.Component {
    constructor(props) {
        super(props);

        this.resolve = this.resolve.bind(this);
        
    }

    render(){
        return (
            <SingleColumn>
                <ToggleButton />
                <ToggleButton />
                <ToggleButton />
                <Button color='start' />
                <Button color='start' />
            </SingleColumn>
            
        );
    }

    /* Functions */
    resolve () {

    }
    
}
export default LevelSix;