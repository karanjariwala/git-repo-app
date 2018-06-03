import React from 'react';
import styled from 'styled-components';



const StyledInput =styled.input`
padding: 1em;
color: palevioletred;
background: papayawhip;
border: none;
width:100%;
border-radius: 3px;
`;
const StyledDiv=styled.div`
margin: 0.5em;
width:50%;
`
/*
- Very Basic Input Component. if `label` prop is passed renders label with input or else renders only input.
*/

const Input = ({label,...rest }) => (
        <StyledDiv> 
            {label && <label>{label}</label>}
            <StyledInput id={label} {...rest} />
        </StyledDiv>)


export default Input;