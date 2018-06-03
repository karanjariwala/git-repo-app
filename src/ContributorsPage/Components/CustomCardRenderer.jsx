import React from 'react';
import Button from '../../Common/Components/Button';
import styled from 'styled-components';

const CustomCardWrapper= styled.div`
display:flex;
justify-content:space-around;
align-items: center;
`

const Image= styled.img`
border-radius:50%;
`
/*
 - this is Rendered for the render prop to custom render the content in the card. 
 */

const CustomCardRenderer = (props) => {
    const { contributor }= props;
    const { avatar_url, login, contributions, html_url } = contributor;

    return <CustomCardWrapper>
                <Image height="42" width="42" src={avatar_url} />
                <Button href={html_url} target='_blank' link align={'center'}> {login} </Button>
                <div> {contributions} Contributions </div>
            </CustomCardWrapper>

}



export default CustomCardRenderer;