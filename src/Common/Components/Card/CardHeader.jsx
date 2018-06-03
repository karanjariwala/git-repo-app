import React from 'react';
import styled from 'styled-components';

const StyledHeader= styled.div`
width:100%;
align-self:flex-start;
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
// Card Header is Compund Component. Can be accessed on `Card` as `Card.Header`
// `children` prop can be render prop if custom header is to be rendered.

const CardHeader= (props)=>{
    const {children, ...rest} = props;    
    return (<StyledHeader>  
                {typeof children === 'function'?  children(rest): <Header {...rest}>{children}</Header>}
            </StyledHeader>)
}



export default CardHeader;

