import React from 'react';
import { connect } from 'react-redux';
import Card from '../../Common/Components/Card/index';
import Button from '../../Common/Components/Button';
import styled from 'styled-components';
import { Actions } from '../Actions';
import CustomCardRenderer from './CustomCardRenderer';
import { contributorIdsSelector, displayButtonSelector } from '../selector';
import Loader from '../../Common/Components/Loader';

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

const ContributorList =({ contributorIds, contributors, displayButton, showMore , loading})=>{
        let Cards = contributorIds.map(id=>(
                        <Card key={id} width={'400px'} margin={'10px'}>
                            <Card.Content contributor={contributors[id]}>
                                {(props) => <CustomCardRenderer {...props} />}  
                            </Card.Content>
                        </Card>))

        if(displayButton){
            Cards.push(<Button key={'showMoreButton'} onClick={showMore}> show More </Button>)
        }

    return <Container>{loading? <Loader/> : [...Cards] }</Container>
}


const mapStateToProps = (state) => ({
    contributorIds: contributorIdsSelector(state),
    contributors: state.contributors.contributorsData.entities,
    displayButton: displayButtonSelector(state), 
    loading: state.contributors.loading
});

const mapDispatchToProps = dispatch => ({
    showMore: () => dispatch(Actions.showMore())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContributorList);