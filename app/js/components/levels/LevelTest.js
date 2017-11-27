'use strict';

import React        from  'react';
import styled       from  'styled-components';

import SingleColumn from    '../layouts/SingleColumn';

import StepperButton    from    '../Buttons/StepperButton';
import Button           from    '../Buttons/Button';

/* Styled Components */

class LevelTest extends React.Component {
    constructor(props) {
        super(props);

        this.resolve = this.resolve.bind(this);
        
    }

    render(){
        return (
            <SingleColumn>
                <StepperButton distance={50} />
                <Button color='start' />
            </SingleColumn>
        );
    }

    /* Functions */
    resolve () {

    }
    
}
export default LevelTest;