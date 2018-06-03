import React from 'react';
import styled from 'styled-components';

const StyledFooter= styled.div`
width:100%;
align-self:flex-end;
box-shadow: 0 0 20px rgba(0,0,0,0.1), 0 0px 10px rgba(0,0,0,.3);
`;
const Footer= styled.div`
display:flex;
padding:5%;
`
const StyledItem= styled.div`
flex-basis:${props=>`${100/props.countOfFooterItems}%`};
`

const FooterItem= ({children, countOfFooterItems, ...rest}) => (
    <StyledItem countOfFooterItems={countOfFooterItems} {...rest}>
            {children}
    </StyledItem>)


// Card Footer is Compund Component which according to number of footer items sets the flex-basis
// Also children prop can be render prop if custom footer is to be rendered.

class CardFooter extends React.Component {
    static Item = FooterItem;
    render(){
        const {children, ...rest} = this.props;    
        debugger;
        return (<StyledFooter>
                    { typeof children === 'function' ? children(rest): (
                    <Footer {...rest} countOfFooterItems={React.Children.count(children)} >
                        {React.Children.map(children, (child)=> React.cloneElement(child, {countOfFooterItems:React.Children.count(children)}))}
                    </Footer> )
                        }
                </StyledFooter>)
    }
}


export default CardFooter;

