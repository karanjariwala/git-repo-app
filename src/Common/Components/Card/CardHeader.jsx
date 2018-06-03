import React from 'react';
import styled from 'styled-components';

const StyledHeader= styled.div`
width:100%;
align-self:flex-start;
height:20%;
`;

const Header= styled.div`
div {
    color:grey;
}
a {
    color:black;
    font-size:1.2em;
}
padding:5%;
`

const CardHeader= (props)=>{
    const {children, ...rest} = props;    
    return (<StyledHeader>  
    {typeof children === 'function'?  children(rest): <Header {...rest}>{children}</Header>}
    </StyledHeader>)
}



export default CardHeader;

