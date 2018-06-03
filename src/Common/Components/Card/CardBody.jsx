import React from 'react';
import styled from 'styled-components';

const StyledBody= styled.div`
width:100%;
align-self:flex-start;
`;

const Content= styled.div`
padding:5%;
display: flex;
flex-wrap: wrap;
min-height:150px;
flex-direction: row-reverse;
`

// Card Body is Compound Component. Can be accessed on `Card` as `Card.Body`
// `children` prop can be render prop if custom Body is to be rendered.

const CardBody= (props)=>{
    const {children, ...rest} = props;   
    return <StyledBody> 
                {typeof children === 'function'? children(rest): <Content {...rest}> {children}</Content>}
            </StyledBody>
}

export default CardBody;