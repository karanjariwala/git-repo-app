import React from 'react';
import styled from 'styled-components';



const StyledButton= styled.button`
background: ${props => props.primary ? 'palevioletred' : 'white'};
color: ${props => props.primary ? 'white' : 'palevioletred'};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
cursor:pointer;

`;

const Link= styled.a`
align-self: ${props=> props.align? props.align :'flex-end'};
text-decoration:underline;
cursor:pointer;
color:palevioletred;
margin: 1em;
padding: 0.25em 1em;
`

/*
- supports `link` button when `link` prop is passed else reders a default `button` 
*/

const Button = ({ link, children, ...rest}) => {
    if(link){
        return (
            <Link {...rest}>
                {children}
            </Link>
        )
    }
    return (
        <StyledButton {...rest}> 
            {children}
        </StyledButton>)
}



export default Button;