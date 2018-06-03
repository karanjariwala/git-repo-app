import React from 'react';
import styled from 'styled-components';

const StyledBody= styled.div`
width:100%;
align-self:flex-end;
height:60%;
`;

const Content= styled.div`
padding:5%;
padding-top:10%;
height:70%;
display: flex;
flex-wrap: wrap;
flex-direction: row-reverse;
`

const CardBody= (props)=>{
    const {children, ...rest} = props;   
    return <StyledBody> 
                {typeof children === 'function'? children(rest): <Content {...rest}> {children}</Content>}
            </StyledBody>
}

export default CardBody;