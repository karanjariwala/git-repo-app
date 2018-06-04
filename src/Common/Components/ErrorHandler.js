import React  from 'react';
import styled from 'styled-components';

const ErrorContainer= styled.div`
color: red;
font-size: 2em;
padding: 40px;
`

// This is just a very basic error handler. 

const  ErrorHandler = ({ error = false , children }) => {
    if(error){
        return <ErrorContainer> API ERROR : <br /> <br /> {error} </ErrorContainer>
    }
    if(children.length){
        return [...children]
    }
    return children
}


export default ErrorHandler;