import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Card from '../../Common/Components/Card/index'
import Button from '../../Common/Components/Button';
import { Actions } from '../Actions';

const Container=styled.div`
height: 80vh;
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content:center;
`




const CardList = ({ orderArray, repositories, goToContributorsPage }) => (<Container>
     {orderArray ? orderArray.map((id)=>{
        const {name,full_name, html_url, language, description, stargazers_count, open_issues_count }=repositories[id]
        return (<Card key={id} >
                    <Card.Header>
                            <div> <a href={html_url} target="_blank" > {name}</a></div>
                            <div>{language}</div>  
                    </Card.Header>
                    <Card.Content>
                            <div style={{width:'100%'}}>{description}</div>
                            <Button link onClick={goToContributorsPage(full_name)}> top Contributors </Button>
                    </Card.Content>
                    <Card.Footer>
                            <Card.Footer.Item>Stars: {stargazers_count} </Card.Footer.Item>
                            <Card.Footer.Item>Issues: {open_issues_count}</Card.Footer.Item>

                    </Card.Footer>
                </Card>)
        }) : '...search the repository name above and press go'}
     </Container>)


const mapStateToProps = (state) => {
  const { result, entities }= state.repository.repositoryData;
  return {
      orderArray: result,
      repositories: entities
  }
}

const mapDispatchToProps = dispatch => ({
        goToContributorsPage : (full_name)=>()=> dispatch(Actions.navigateToContributorsPage(full_name))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardList);