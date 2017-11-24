'use strict';

import React        from  'react';
import styled       from  'styled-components';

import Button       from    '../Buttons/Button';

/* Styled Components */
const StyledButton = styled(Button)`
    background-color: #f00;
`;

/**
 * A solid color goes away as a timer runs off
 */

class ButtonTimer extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render(){
        return (
            <div>
                <Button /> 
                <StyledButton />
            </div>
        );
    }

    /* Functions */
    
}
export default ButtonTimer;
