'use strict';

import React        from  'react';
import styled       from  'styled-components';
import {TransitionMotion, spring, presets} from 'react-motion';

/* Styled Components */

class MotTraTest extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [{key: 'a', size: 10}, {key: 'b', size:20}, {key: 'c', size: 30}],
        };
        
    }
    
    // getInitialState() {
    //     return {
    //         items: [{key: 'a', size: 10}, {key: 'b', size:20}, {key: 'c', size: 30}],
    //     };
    // }

    componentDidMount() {
        this.setState({
            items: [{key: 'a', size: 10}, {key: 'b', size: 20}]
        });
    }

    willLeave() {
        return {width: spring(0), height: spring(0)};
    }
            // return(
            //     <TransitionMotion
            //         willLeave={this.willLeave}
            //         styles={this.state.items.map(item => ({
            //             key: item.key,
            //             style: {width: spring(0), height: spring(0)}
            //         }))}
            //     >
            //     </TransitionMotion>
            // );

    render(){
        return (
            <TransitionMotion
                willLeave={this.willLeave}
                styles={this.state.items.map(item => ({
                    key: item.key,
                    style: {width: item.size, height: item.size},
                }))}
            >
                {interpolatedStyles => 
                    <div>
                        {interpolatedStyles.map(config => {
                            return <div key={config.key} style={{...config.style, border: '1px solid'}} />;
                        })}
                    </div>
                }
            </TransitionMotion>
        );
    }

    /* Functions */
    
}
export default MotTraTest;
