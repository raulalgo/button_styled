'use strict';

import React        from  'react';
import styled       from  'styled-components';

import SingleColumn from    '../layouts/SingleColumn';

import ButtonStepper    from    '../Buttons/ButtonStepper';
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
                <ButtonStepper />
                <Button color='white' />
                <Button color='start' deactivate />
                <Button color='exit' />
            </SingleColumn>
        );
    }

    /* Functions */
    resolve () {

    }
    
}
export default LevelTest;


// <ButtonStepper delay={0.1} steps={3} />
// <ButtonStepper delay={0.15} steps={5} />
// <ButtonStepper delay={0.2} steps={6} />