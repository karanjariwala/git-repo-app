import React from 'react';
import styled from 'styled-components';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

const CardWrapper= styled.div`
overflow: hidden;
margin: ${props=>props.margin?props.margin:'20px'};
width: ${props=> props.width ? props.width : '300px'};
font-family: Quicksand, arial, sans-serif;
box-shadow: 0 0 20px rgba(0, 0, 0, .5), 0 0px 40px rgba(0, 0, 0, .3);
border-radius: 5px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
color: ${props=> props.color ? props.color : 'palevioletred'} ;
`
/*
    -Adding `Header`, `Content`, `Footer` as static Methods on Base class, so that they can be accessed by dot notation like <Card.Header />
    -So all Card related Components can be imported by importing `Card`
    -Made static to avoid multiple instance creation.
*/

class Card extends React.Component{
    static Header=CardHeader;
    static Content= CardBody;
    static Footer= CardFooter;
    render(){
        return (
            <CardWrapper {...this.props}>
                {this.props.children}
            </CardWrapper>   
            )
        }
}


export default Card;

