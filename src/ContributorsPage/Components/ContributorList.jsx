import React from 'react';
import { connect } from 'react-redux';
import Card from '../../Common/Components/Card/index';
import Button from '../../Common/Components/Button';
import styled from 'styled-components';
import { Actions } from '../Actions';
import CustomCardRenderer from './CustomCardRenderer';

/* 
    -ContributorList Renders Cards for Contributors
    -Here `Card.Content` `children` is used as a `render prop`.
    -`Show More` button is added for pagination. On Click dispatches showMore action.
*/


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const ContributorList =({ contributorIds, contributors, showLength, showMore })=>{
    let Cards = [];
    if(contributorIds && contributorIds.length){
         Cards = contributorIds.slice(0,showLength).map(id=>{
                return (<Card id={id} width={'400px'} margin={'10px'}>
                            <Card.Content contributor={contributors[id]}>
                                {(props) => <CustomCardRenderer {...props} />}  
                            </Card.Content>
                        </Card>)
            })

        if(contributorIds.length>showLength){
            Cards.push(<Button onClick={showMore}> show More </Button>)
        }

    }else{
        Cards = [<div> ...... </div>]
    }

    return <Container>{[...Cards]}</Container>
}


const mapStateToProps = (state) => {
    const { result, entities , showLength }= state.contributors.contributorsData;
    return {
        contributorIds: result,
        contributors: entities,
        showLength, 
    }
  }

  const mapDispatchToProps = dispatch => ({
    showMore: () => dispatch(Actions.showMore())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContributorList);