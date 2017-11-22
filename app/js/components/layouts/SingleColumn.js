'use strict';

import React        from  'react';
import styled       from  'styled-components';

/* Styled Components */
const Layout = styled.section`
    @media (min-width: 500px) {
        display: grid;
        grid-template-columns: 1fr 440px 1fr;
        grid-template-areas: "left column right";
    }
`;

const Column = styled.section`
    @media (min-width: 500px){
        grid-area: column;
    }
`;

class SingleColumn extends React.Component {
    constructor(props) {
        super(props);

        
    }

    render(){
        return (
            <Layout>
                <Column>
                    {this.props.children}
                </Column>
            </Layout>
        );
    }

    /* Functions */
    
}

export default SingleColumn;