'use strict';

import React        from  'react';
import styled       from  'styled-components';
import {Motion, StaggeredMotion, spring, presets} from    'react-motion';

/* Styled Components */
const Color = styled.div`
    background-color: ${props => props.color};
    height: 100px;
    width: 100px;
    opacity: ${props => props.estilo.opacity};
    transform: scale(${props => props.estilo.scale});
    margin: 12px;
`;

Color.defaultProps = {
    color: 'red',
    estilo: {
        opacity: 1,
        scale: 1
    }
};

class MotionButton extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render(){
        return (
            <div>
                <StaggeredMotion
                    defaultStyles={[{h: 0}, {h:0} , {h:0}]}
                    styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                        return i === 0
                            ? {h: spring(100, presets.wobbly)}
                            : {h: spring(prevInterpolatedStyles[i-1].h)}
                    })}
                    >
                    { interpolatingStyles =>
                        <div>
                            {interpolatingStyles.map((style, i) => 
                                <Color key={i} style={{
                                    height: style.h
                                }} /> )
                            }
                        </div>
                    }
                </StaggeredMotion>
            </div>
        );
    }

    
}
export default MotionButton;

/*

<Motion defaultStyle={{
            opacity: 0,
            scale: 1.8
        }} 
        style={{
            opacity: spring(2, presets.gentle),
            scale: spring(1, presets.stiff)
        }} >
    {interpolated => <Color color='palevioletred' estilo={interpolated}>{interpolated.scale}</Color>}
</Motion>

*/
