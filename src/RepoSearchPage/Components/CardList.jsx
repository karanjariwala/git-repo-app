import React from 'react';
import styled from 'styled-components';
import {connect } from 'react-redux';
import Card from '../../Common/Components/Card/index'
import {  push } from 'react-router-redux'


const Container=styled.div`
height: 80vh;
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content:center;
`
const Link= styled.div`
align-self: flex-end;
text-decoration:underline;
cursor:pointer;
`



const CardList = ({ orderArray, repositories, goToContributorsPage }) => (<Container>
     {orderArray ? orderArray.map((id)=>{
        const {name,full_name, html_url, language, description, stargazers_count, open_issues_count, contributors_url }=repositories[id]
        return (<Card key={id} >
                    <Card.Header>
                            <div> <a href={html_url} target="_blank" > {name}</a></div>
                            <div>{language}</div>  
                    </Card.Header>
                    <Card.Content>
                            <div>{description}</div>
                            <Link> <a onClick={goToContributorsPage(full_name)}> top Contributors</a> </Link>
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
        goToContributorsPage : (fullName)=>e => dispatch(push(`${fullName}/contributors`))
})

export default connect(mapStateToProps,mapDispatchToProps)(CardList);