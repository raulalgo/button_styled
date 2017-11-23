'use strict'

import React            from    'react';
import styled           from    'styled-components';

import SingleColumn     from    '../layouts/SingleColumn';

import Button           from    '../Buttons/Button';
import TogglerButton    from    '../Buttons/TogglerButton';

/* Styled Components */

class LevelFour extends React.Component {
    constructor(props) {
        super(props);

        this.resolve = this.resolve.bind(this);
        
    }

    render(){
        return (
            <SingleColumn>
                <TogglerButton delay={0} />
                <TogglerButton delay={0.05} />
                <TogglerButton delay={0.1} />
                <TogglerButton delay={0.15} />
                <Button
                    color="start"
                    delay={0.2} />
            </SingleColumn>
        );
    }

    /* Functions */
    resolve () {

    }
    
}
export default LevelFour;