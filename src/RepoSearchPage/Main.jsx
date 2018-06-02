import React from 'react';
import styled from "styled-components";
import Search from './Components/Search';
import CardList from './Components/CardList'


const Container = styled.div`
height:100vh;
display:flex;
justify-content:center;
flex-flow: wrap;
`

const RepoSearchPage=()=>(
    <Container>
        <Search/>
        <CardList />
    </Container>)


export default RepoSearchPage
