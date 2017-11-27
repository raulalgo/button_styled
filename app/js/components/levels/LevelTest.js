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
            <div>
                <ButtonStepper distance={50} />
            </div>
        );
    }

    /* Functions */
    resolve () {

    }
    
}
export default LevelTest;