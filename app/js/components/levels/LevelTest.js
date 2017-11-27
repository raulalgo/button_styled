'use strict';

import React        from  'react';
import styled       from  'styled-components';

import SingleColumn from    '../layouts/SingleColumn';

import ButtonStepper    from    '../Buttons/ButtonStepper';

/* Styled Components */

class LevelTest extends React.Component {
    constructor(props) {
        super(props);

        this.resolve = this.resolve.bind(this);
        
    }

    render(){
        return (
            <SingleColumn>
                <ButtonStepper steps={3} color='start' delay={0.05} />
                <ButtonStepper steps={10} color='exit' delay={0.05} />
                <ButtonStepper steps={20} color='white' delay={0.05} />
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