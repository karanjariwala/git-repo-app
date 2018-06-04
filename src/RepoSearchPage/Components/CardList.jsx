import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Card from '../../Common/Components/Card/index'
import Button from '../../Common/Components/Button';
import { Actions } from '../Actions';
import Loader from '../../Common/Components/Loader';

const Container=styled.div`
height: 80vh;
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content:center;
`

const StyledDiv= styled.div`
width:100%;
`

/*
- CardList renders List of Cards of Repositories using `Card`
- Compound Components like Card can further be modified to encapsulate some more state inside them. 
- State like number of footer items is encapsulated in Card and is only shared From Card.Footer to it's children via props.
- Also children prop of Card.Header, Card.Footer or Card.Body can be render prop to custom render if necessary.
*/

const CardList = ({ repositoryIds, repositories, goToContributorsPage, loading }) => {

        if(loading){
                return <Loader />
        }

        return (<Container>
        { repositoryIds ? repositoryIds.map((id)=>{
                const { name, full_name, html_url, language, description, stargazers_count, open_issues_count } = repositories[id];
                return (<Card key={id} >
                                <Card.Header>
                                        <div> <a href={html_url} target="_blank" > {name}</a></div>
                                        <div>{language}</div>  
                                </Card.Header>
                                <Card.Content>
                                        <StyledDiv>{description}</StyledDiv>
                                        <Button link onClick={goToContributorsPage(full_name)}> top Contributors </Button>
                                </Card.Content>
                                <Card.Footer>
                                        <Card.Footer.Item>Stars: {stargazers_count} </Card.Footer.Item>
                                        <Card.Footer.Item>Issues: {open_issues_count}</Card.Footer.Item>

                                </Card.Footer>
                        </Card>)
                }) : '...search the repository name above and press go'}
        </Container>)
}

const mapStateToProps = (state) => ({
        repositoryIds: state.repository.repositoryData.result,
        repositories: state.repository.repositoryData.entities,
        loading: state.repository.loading,
})

const mapDispatchToProps = dispatch => ({
        goToContributorsPage : (full_name)=>()=> dispatch(Actions.navigateToContributorsPage(full_name))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardList);